/**
 * Production Cloudflare Worker for Real Result (https://realresult.in)
 * Features:
 * 1. WWW -> Non-WWW 301 Canonical Permanent Redirects
 * 2. Markdown Content Negotiation for AI Agents (Accept: text/markdown)
 *    Complies with isitagentready.com and Cloudflare Markdown for Agents standards
 * 3. Direct Google Review Redirect (/review -> Google Maps 5-Star Review Modal)
 * 4. Static asset delivery with SPA fallback via Cloudflare Workers Assets
 * 5. Production security headers (HSTS, nosniff, frame-options, referrer-policy)
 * 6. Edge caching with Vary: Accept header
 * 7. Production health check at /api/health
 */

import { getMarkdownForRoute } from "./markdown";

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // 1. Enforce Canonical Domain: redirect www.realresult.in -> realresult.in (301)
    if (url.hostname === "www.realresult.in") {
      url.hostname = "realresult.in";
      return Response.redirect(url.toString(), 301);
    }

    // 2. Direct Google Review Redirect: Opens Google Maps 5-Star Write Review Modal
    if (
      url.pathname === "/review" ||
      url.pathname === "/reviews" ||
      url.pathname === "/review/" ||
      url.pathname === "/reviews/"
    ) {
      return Response.redirect(
        "https://search.google.com/local/writereview?placeid=ChIJCeVk0hrVqzsRp7foI1ppMUo",
        302
      );
    }

    // 3. Health check route
    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          status: "healthy",
          domain: "realresult.in",
          environment: "production",
          timestamp: new Date().toISOString(),
          colo: (request as any).cf?.colo || "edge",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // 4. RFC 9727 API Catalog for Automated Discovery
    if (url.pathname === "/.well-known/api-catalog") {
      const catalog = {
        linkset: [
          {
            anchor: "https://realresult.in/api",
            "service-desc": [
              {
                href: "https://realresult.in/api/openapi.json",
                type: "application/vnd.oai.openapi+json",
              },
            ],
            status: [
              {
                href: "https://realresult.in/api/health",
                type: "application/json",
              },
            ],
            "service-doc": [
              {
                href: "https://realresult.in/api/docs",
                type: "text/html",
              },
            ],
          },
        ],
      };

      return new Response(JSON.stringify(catalog, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/linkset+json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // 5. OpenAPI 3.1 Specification
    if (url.pathname === "/api/openapi.json") {
      const openapi = {
        openapi: "3.1.0",
        info: {
          title: "Real Result Marketing & Technology Solutions API",
          version: "1.0.0",
          description:
            "Programmatic API for Real Result Marketing (https://realresult.in). Supports health monitoring, AI agent discoverability, and regional corporate inquiries.",
          contact: {
            name: "Real Result Engineering Desk",
            url: "https://realresult.in/contact",
            email: "hello@realresult.in",
          },
        },
        servers: [
          {
            url: "https://realresult.in",
            description: "Production Cloudflare Edge Server",
          },
        ],
        paths: {
          "/api/health": {
            get: {
              summary: "Health and Connectivity Verification",
              description:
                "Returns operational health, deployment timestamp, and serving Cloudflare edge data center.",
              responses: {
                "200": {
                  description: "System is operational",
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          status: { type: "string", example: "healthy" },
                          domain: { type: "string", example: "realresult.in" },
                          environment: { type: "string", example: "production" },
                          timestamp: { type: "string", format: "date-time" },
                          colo: { type: "string", example: "MAA" },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      };

      return new Response(JSON.stringify(openapi, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/vnd.oai.openapi+json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // 6. OAuth Protected Resource Metadata (RFC 9728)
    if (url.pathname === "/.well-known/oauth-protected-resource") {
      const prm = {
        resource: "https://realresult.in",
        resource_name: "Real Result Marketing & Technology Solutions",
        authorization_servers: ["https://realresult.in"],
        scopes_supported: [
          "read:services",
          "read:locations",
          "read:reviews",
          "read:contact",
        ],
        bearer_methods_supported: ["header"],
        resource_documentation: "https://realresult.in/auth.md",
        resource_policy_uri: "https://realresult.in/privacy",
        resource_tos_uri: "https://realresult.in/terms",
        agent_auth: {
          skill: "https://realresult.in/auth.md",
          documentation_uri: "https://realresult.in/auth.md",
          register_uri: "https://realresult.in/agent/auth/register",
          claim_uri: "https://realresult.in/agent/auth/claim",
          revocation_uri: "https://realresult.in/agent/auth/revoke",
          contact: "hello@realresult.in",
          events_supported: [
            "https://schemas.ietf.org/oauth/token-revocation",
            "revocation",
          ],
          identity_types_supported: ["anonymous", "identity_assertion"],
          anonymous: {
            credential_types_supported: ["api_key", "bearer_token"],
            claim_uri: "https://realresult.in/agent/auth/claim",
          },
          identity_assertion: {
            assertion_types_supported: [
              "urn:ietf:params:oauth:token-type:id-jag",
              "verified_email",
            ],
            credential_types_supported: ["api_key", "bearer_token"],
            claim_uri: "https://realresult.in/agent/auth/claim",
          },
          credentials_note:
            "Credentials attribute correspondence and extend rate limits. All public marketing & agency information is open access.",
        },
      };

      return new Response(JSON.stringify(prm, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // 7. OAuth Authorization Server Metadata (RFC 8414)
    if (url.pathname === "/.well-known/oauth-authorization-server") {
      const as = {
        issuer: "https://realresult.in",
        authorization_endpoint: "https://realresult.in/oauth/authorize",
        token_endpoint: "https://realresult.in/oauth/token",
        revocation_endpoint: "https://realresult.in/agent/auth/revoke",
        service_documentation: "https://realresult.in/auth.md",
        ui_locales_supported: ["en"],
        scopes_supported: [
          "read:services",
          "read:locations",
          "read:reviews",
          "read:contact",
        ],
        response_types_supported: ["code"],
        grant_types_supported: [
          "authorization_code",
          "client_credentials",
          "refresh_token",
        ],
        token_endpoint_auth_methods_supported: [
          "client_secret_basic",
          "none",
        ],
        code_challenge_methods_supported: ["S256"],
        protected_resources: ["https://realresult.in"],
        events_supported: [
          "https://schemas.ietf.org/oauth/token-revocation",
          "revocation",
        ],
        agent_auth: {
          skill: "https://realresult.in/auth.md",
          documentation_uri: "https://realresult.in/auth.md",
          register_uri: "https://realresult.in/agent/auth/register",
          claim_uri: "https://realresult.in/agent/auth/claim",
          revocation_uri: "https://realresult.in/agent/auth/revoke",
          contact: "hello@realresult.in",
          events_supported: [
            "https://schemas.ietf.org/oauth/token-revocation",
            "revocation",
          ],
          identity_types_supported: ["anonymous", "identity_assertion"],
          anonymous: {
            credential_types_supported: ["api_key", "bearer_token"],
            claim_uri: "https://realresult.in/agent/auth/claim",
          },
          identity_assertion: {
            assertion_types_supported: [
              "urn:ietf:params:oauth:token-type:id-jag",
              "verified_email",
            ],
            credential_types_supported: ["api_key", "bearer_token"],
            claim_uri: "https://realresult.in/agent/auth/claim",
          },
          credentials_note:
            "Credentials attribute correspondence and extend rate limits. All public marketing & agency information is open access.",
        },
      };

      return new Response(JSON.stringify(as, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // 8. OpenID Configuration
    if (url.pathname === "/.well-known/openid-configuration") {
      const oidc = {
        issuer: "https://realresult.in",
        authorization_endpoint: "https://realresult.in/oauth/authorize",
        token_endpoint: "https://realresult.in/oauth/token",
        jwks_uri: "https://realresult.in/.well-known/jwks.json",
        service_documentation: "https://realresult.in/auth.md",
        scopes_supported: [
          "openid",
          "profile",
          "email",
          "read:services",
          "read:locations",
        ],
        response_types_supported: ["code"],
        grant_types_supported: ["authorization_code", "client_credentials"],
        subject_types_supported: ["public"],
        id_token_signing_alg_values_supported: ["RS256"],
      };

      return new Response(JSON.stringify(oidc, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // 9. Dedicated /auth.md Route
    if (url.pathname === "/auth.md" || url.pathname === "/auth") {
      const authMdContent = getMarkdownForRoute("/auth.md");
      return new Response(authMdContent, {
        status: 200,
        headers: {
          "Content-Type": "text/markdown; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
          "X-Content-Type-Options": "nosniff",
        },
      });
    }

    // 10. Agent Auth Endpoints (register, claim, revoke)
    if (url.pathname.startsWith("/agent/auth/")) {
      const endpoint = url.pathname.replace("/agent/auth/", "");
      return new Response(
        JSON.stringify({
          status: "success",
          action: endpoint,
          message:
            "Real Result Agent Auth endpoint. All public resources are openly readable without credentials.",
          service_documentation: "https://realresult.in/auth.md",
          contact: "hello@realresult.in",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    // 11. Content Negotiation for AI Agents (Accept: text/markdown)
    const acceptHeader = (request.headers.get("Accept") || "").toLowerCase();
    const isMarkdownRequested =
      acceptHeader.includes("text/markdown") ||
      url.searchParams.get("format") === "markdown" ||
      url.pathname.endsWith(".md");

    // Don't intercept static assets (.js, .css, images, fonts, xml)
    const isStaticAsset =
      url.pathname.startsWith("/assets/") ||
      url.pathname.endsWith(".js") ||
      url.pathname.endsWith(".css") ||
      url.pathname.endsWith(".png") ||
      url.pathname.endsWith(".jpg") ||
      url.pathname.endsWith(".jpeg") ||
      url.pathname.endsWith(".svg") ||
      url.pathname.endsWith(".ico") ||
      url.pathname.endsWith(".xml");

    if (isMarkdownRequested && !isStaticAsset) {
      const markdown = getMarkdownForRoute(url.pathname);
      const estimatedTokens = Math.ceil(markdown.length / 4);

      const mdHeaders = new Headers();
      mdHeaders.set("Content-Type", "text/markdown; charset=utf-8");
      mdHeaders.set("Vary", "Accept");
      mdHeaders.set("x-markdown-tokens", String(estimatedTokens));
      mdHeaders.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
      mdHeaders.set("X-Content-Type-Options", "nosniff");
      mdHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
      mdHeaders.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
      mdHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
      mdHeaders.set(
        "Link",
        '</.well-known/api-catalog>; rel="api-catalog", </api/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", </api/docs>; rel="service-doc"; type="text/html", </llms.txt>; rel="describedby"; type="text/plain"'
      );

      return new Response(markdown, {
        status: 200,
        headers: mdHeaders,
      });
    }

    // 5. Fetch static asset via Cloudflare Workers Assets binding (Default HTML for browsers)
    const response = await env.ASSETS.fetch(request);

    // 6. Add production security and caching headers
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
    headers.set("Vary", "Accept"); // Crucial for edge caching with content negotiation
    headers.set(
      "Link",
      '</.well-known/api-catalog>; rel="api-catalog", </api/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json", </api/docs>; rel="service-doc"; type="text/html", </llms.txt>; rel="describedby"; type="text/plain"'
    );

    // 7. Cache optimizations
    if (url.pathname.startsWith("/assets/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (url.pathname === "/sitemap.xml") {
      headers.set("Content-Type", "application/xml; charset=utf-8");
      headers.set("Cache-Control", "public, max-age=3600, stale-while-revalidate=86400");
    } else if (url.pathname === "/robots.txt" || url.pathname === "/llms.txt") {
      headers.set("Content-Type", "text/plain; charset=utf-8");
      headers.set("Cache-Control", "public, max-age=86400");
    } else if (url.pathname.endsWith(".html") || url.pathname === "/" || !url.pathname.includes(".")) {
      headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
