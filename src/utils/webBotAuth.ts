/**
 * Client utilities for Web Bot Auth (IETF WebBotAuth WG & Cloudflare Bot Verification)
 */

export const WEB_BOT_AUTH_DIRECTORY_URL =
  "https://realresult.in/.well-known/http-message-signatures-directory";

export const BOT_AGENT_URI = "https://realresult.in";
export const BOT_KEY_ID = "SZOHl-v6EyGH77KAid0lqEkv_VbewDitStXFJ0jcsmc";

export const BOT_PUBLIC_JWK = {
  kty: "OKP",
  crv: "Ed25519",
  alg: "EdDSA",
  use: "sig",
  kid: BOT_KEY_ID,
  x: "p704UwIzECsgINlv-0VvNq6sGlc5fdV9hIj_n5482zQ",
} as const;

/**
 * Requests signed bot headers from the edge worker API for a given target URL
 */
export async function getSignedBotHeaders(targetUrl: string): Promise<{
  "Signature-Agent": string;
  "Signature-Input": string;
  "Signature": string;
}> {
  const res = await fetch(
    `/api/bot/sign?target=${encodeURIComponent(targetUrl)}`
  );
  if (!res.ok) {
    throw new Error(`Failed to get bot signature: ${res.statusText}`);
  }
  const data = await res.json();
  return data.signedHeaders;
}
