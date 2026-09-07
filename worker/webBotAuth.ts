/**
 * Web Bot Auth (IETF WebBotAuth Working Group & Cloudflare Bot Verification)
 * Specifications:
 * - draft-meunier-http-message-signatures-directory-03 / 05
 * - draft-meunier-web-bot-auth-architecture-02
 * - RFC 9421 (HTTP Message Signatures)
 * - RFC 8037 (Ed25519 in JOSE / JWK)
 * - Cloudflare Web Bot Auth Verification Protocol
 */

export const BOT_AGENT_URI = "https://realresult.in";
export const BOT_KEY_ID = "SZOHl-v6EyGH77KAid0lqEkv_VbewDitStXFJ0jcsmc";

// Ed25519 Public Key in JWK format
export const BOT_PUBLIC_JWK = {
  kty: "OKP",
  crv: "Ed25519",
  alg: "EdDSA",
  use: "sig",
  kid: BOT_KEY_ID,
  x: "p704UwIzECsgINlv-0VvNq6sGlc5fdV9hIj_n5482zQ",
} as const;

// Secondary P-256 Public Key in JWK format for multi-algorithm compatibility
export const BOT_EC_PUBLIC_JWK = {
  kty: "EC",
  crv: "P-256",
  alg: "ES256",
  use: "sig",
  kid: "realresult-bot-es256",
  x: "bYPxQKGgsz6iEGaqLswlhhXcWoL5ODaSczdt92CEM4Y",
  y: "SyGs2fiPQ7P-PLpAlppeB0etXhWy1flcztmbAEvSvw4",
} as const;

// Private Key in JWK format for signing outbound requests & directory signatures
const BOT_PRIVATE_JWK = {
  kty: "OKP",
  crv: "Ed25519",
  d: "Bq91F11vbpk6N7_RHy1LskzjSWb9w_TiMIHG2Okp_4Q",
  x: "p704UwIzECsgINlv-0VvNq6sGlc5fdV9hIj_n5482zQ",
  ext: true,
} as const;

// Published JWKS Document
export const WEB_BOT_AUTH_JWKS = {
  keys: [BOT_PUBLIC_JWK, BOT_EC_PUBLIC_JWK],
};

let cachedCryptoKey: CryptoKey | null = null;

async function getSigningKey(): Promise<CryptoKey> {
  if (cachedCryptoKey) {
    return cachedCryptoKey;
  }
  cachedCryptoKey = await crypto.subtle.importKey(
    "jwk",
    BOT_PRIVATE_JWK,
    { name: "Ed25519" },
    false,
    ["sign"]
  );
  return cachedCryptoKey;
}

/**
 * Generates an RFC 9421 signature for the HTTP Message Signatures Directory endpoint.
 * Conforms to Cloudflare's requirement:
 * - Signature over ("@authority";req)
 * - tag="http-message-signatures-directory"
 * - keyid matches the JWK thumbprint
 */
export async function createDirectorySignature(authority: string): Promise<{
  signatureInput: string;
  signature: string;
}> {
  const privKey = await getSigningKey();
  const now = Math.floor(Date.now() / 1000);
  const expires = now + 86400; // 24-hour directory signature validity
  const nonceBytes = new Uint8Array(32);
  crypto.getRandomValues(nonceBytes);
  const nonce = btoa(String.fromCharCode(...nonceBytes));

  const sigInputParams = `("@authority";req);alg="ed25519";keyid="${BOT_KEY_ID}";nonce="${nonce}";tag="http-message-signatures-directory";created=${now};expires=${expires}`;
  const sigBase = `"@authority";req: ${authority}\n"@signature-params": ${sigInputParams}`;

  const sigBuffer = await crypto.subtle.sign(
    { name: "Ed25519" },
    privKey,
    new TextEncoder().encode(sigBase)
  );

  const sigBase64 = btoa(String.fromCharCode(...new Uint8Array(sigBuffer)));

  return {
    signatureInput: `sig1=${sigInputParams}`,
    signature: `sig1=:${sigBase64}:`,
  };
}

/**
 * Handles incoming requests to /.well-known/http-message-signatures-directory
 * Serves the JWKS with cryptographic signature headers according to IETF draft-meunier & Cloudflare.
 */
export async function handleDirectoryRequest(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Accept, Signature, Signature-Input, Signature-Agent",
        "Access-Control-Expose-Headers":
          "Signature, Signature-Input, Signature-Agent, Content-Type",
        "Access-Control-Max-Age": "86400",
      },
    });
  }

  const url = new URL(request.url);
  const host = request.headers.get("Host") || url.host || "realresult.in";
  const { signatureInput, signature } = await createDirectorySignature(host);

  const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
  // Cloudflare prefers application/http-message-signatures-directory+json, scanners like isitagentready expect JSON
  const contentType = acceptHeader.includes("application/http-message-signatures-directory+json")
    ? "application/http-message-signatures-directory+json; charset=utf-8"
    : "application/json; charset=utf-8";

  return new Response(JSON.stringify(WEB_BOT_AUTH_JWKS, null, 2), {
    status: 200,
    headers: {
      "Content-Type": contentType,
      "Signature": signature,
      "Signature-Input": signatureInput,
      "Signature-Agent": `"${BOT_AGENT_URI}"`,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers":
        "Signature, Signature-Input, Signature-Agent, Content-Type",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Vary": "Accept",
    },
  });
}

/**
 * Signs outbound bot requests sent by Real Result Agent/Bot to external receiving sites.
 * Returns headers: Signature-Agent, Signature-Input, Signature
 */
export async function signBotRequest(
  targetUrl: string,
  options: { headers?: HeadersInit } = {}
): Promise<Headers> {
  const privKey = await getSigningKey();
  const url = new URL(targetUrl);
  const authority = url.host;

  const now = Math.floor(Date.now() / 1000);
  const expires = now + 300; // 5-minute expiry per Cloudflare recommendations
  const nonceBytes = new Uint8Array(32);
  crypto.getRandomValues(nonceBytes);
  const nonce = btoa(String.fromCharCode(...nonceBytes));

  const signatureAgentHeader = `"${BOT_AGENT_URI}"`;
  const sigInputParams = `("@authority" "signature-agent");created=${now};keyid="${BOT_KEY_ID}";alg="ed25519";expires=${expires};nonce="${nonce}";tag="web-bot-auth"`;
  const signatureInputHeader = `sig2=${sigInputParams}`;

  const sigBase = `"@authority": ${authority}\n"signature-agent": ${signatureAgentHeader}\n"@signature-params": ${sigInputParams}`;

  const sigBuffer = await crypto.subtle.sign(
    { name: "Ed25519" },
    privKey,
    new TextEncoder().encode(sigBase)
  );
  const sigBase64 = btoa(String.fromCharCode(...new Uint8Array(sigBuffer)));
  const signatureHeader = `sig2=:${sigBase64}:`;

  const headers = new Headers(options.headers || {});
  headers.set("Signature-Agent", signatureAgentHeader);
  headers.set("Signature-Input", signatureInputHeader);
  headers.set("Signature", signatureHeader);

  return headers;
}

/**
 * Executes a verified bot HTTP fetch request with Web Bot Auth signatures attached
 */
export async function fetchAsVerifiedBot(
  targetUrl: string,
  init: RequestInit = {}
): Promise<Response> {
  const signedHeaders = await signBotRequest(targetUrl, {
    headers: init.headers,
  });

  return fetch(targetUrl, {
    ...init,
    headers: signedHeaders,
  });
}
