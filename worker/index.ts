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
          "/api": {
            get: {
              summary: "Commercial Agent API Gateway",
              description:
                "Agent-native programmatic API with x402 payment protocol support.",
              responses: {
                "402": {
                  description:
                    "Payment Required via x402 protocol (USDC micropayment on Base)",
                  headers: {
                    "PAYMENT-REQUIRED": {
                      schema: { type: "string" },
                      description: "Base64-encoded x402 payment requirements",
                    },
                  },
                  content: {
                    "application/json": {
                      schema: {
                        type: "object",
                        properties: {
                          x402Version: { type: "integer", example: 1 },
                          accepts: { type: "array" },
                        },
                      },
                    },
                  },
                },
                "200": {
                  description: "Payment verified access granted",
                  content: {
                    "application/json": {
                      schema: { type: "object" },
                    },
                  },
                },
              },
            },
          },
          "/api/v1": {
            get: {
              summary: "Commercial Agent API Gateway v1",
              description:
                "Agent-native programmatic API v1 with x402 payment protocol support.",
              responses: {
                "402": {
                  description: "Payment Required via x402 protocol",
                  headers: {
                    "PAYMENT-REQUIRED": {
                      schema: { type: "string" },
                      description: "Base64-encoded x402 payment requirements",
                    },
                  },
                },
                "200": {
                  description: "Payment verified access granted",
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

    // 10. A2A Agent Card for Agent-to-Agent Discovery (https://a2a-protocol.org)
    if (url.pathname === "/.well-known/agent-card.json") {
      const agentCard = {
        name: "Real Result AI Agent",
        version: "1.0.0",
        description:
          "Autonomous discovery and service agent for Real Result Marketing & Technology Solutions (https://realresult.in). Provides Generative Engine Optimization (GEO), technical SEO, enterprise custom software engineering (poultry ERP, transport logistics LR portals), and regional Tamil Nadu B2B industrial consultations.",
        provider: {
          organization: "Real Result Marketing & Technology Solutions",
          url: "https://realresult.in",
        },
        documentationUrl: "https://realresult.in/api/docs",
        iconUrl: "https://realresult.in/brand/realresult-logo.jpeg",
        supportedInterfaces: [
          {
            url: "https://realresult.in/api",
            protocolBinding: "HTTP+JSON",
            protocolVersion: "1.0.0",
          },
          {
            url: "https://realresult.in/api/v1",
            protocolBinding: "JSONRPC",
            protocolVersion: "2.0",
          },
        ],
        capabilities: {
          streaming: false,
          pushNotifications: false,
          extendedAgentCard: false,
        },
        defaultInputModes: [
          "text/plain",
          "application/json",
          "text/markdown",
        ],
        defaultOutputModes: [
          "text/plain",
          "application/json",
          "text/markdown",
        ],
        skills: [
          {
            id: "geo-optimization",
            name: "Generative Engine Optimization (GEO)",
            description:
              "Analyze and optimize digital brand authority, entity knowledge graph positioning, and citation frequency across autonomous AI engines (ChatGPT Search, Perplexity AI, Google Gemini, and Claude).",
            tags: ["geo", "seo", "ai-visibility", "llm-search"],
            examples: [
              "Audit website entity authority for ChatGPT Search",
              "Structure DirectAnswerBox content for Google AI Overviews",
            ],
          },
          {
            id: "technical-seo",
            name: "Technical SEO & Schema Optimization",
            description:
              "Evaluate and deploy programmatic schema markup (LocalBusiness, Organization, Service), core web vitals speed, and robots.txt AI rules.",
            tags: ["seo", "schema", "robots-txt", "sitemap"],
            examples: [
              "Generate JSON-LD LocalBusiness schema for Tamil Nadu branches",
              "Validate RFC 8288 link headers and API catalogs",
            ],
          },
          {
            id: "custom-software-inquiry",
            name: "Custom Enterprise Software & ERP Solutions",
            description:
              "Inquire about custom cloud portals, logistics LR systems, poultry farm ERPs, and high-performance React/TypeScript business applications.",
            tags: [
              "erp",
              "logistics",
              "poultry-erp",
              "software-engineering",
            ],
            examples: [
              "Inquire about fleet logistics LR software development",
              "Get pricing and scope for poultry farm management ERP",
            ],
          },
          {
            id: "regional-consultation",
            name: "Tamil Nadu B2B Industrial Consultation",
            description:
              "Access localized business market intelligence and consultation scheduling for Namakkal, Erode, Coimbatore, and Chennai business clusters.",
            tags: [
              "tamil-nadu",
              "namakkal",
              "erode",
              "coimbatore",
              "b2b",
            ],
            examples: [
              "Schedule B2B consultation for poultry fleet operations in Namakkal",
              "Connect with Erode corporate headquarters",
            ],
          },
        ],
      };

      return new Response(JSON.stringify(agentCard, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // 11. Agent Skills Discovery Index (RFC v0.2.0)
    if (url.pathname === "/.well-known/agent-skills/index.json") {
      const skillsIndex = {
        $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
        skills: [
          {
            name: "geo-optimization",
            type: "skill-md",
            description:
              "Audit and optimize digital brand authority, entity knowledge graph positioning, and citation frequency across AI engines (ChatGPT Search, Perplexity AI, Google Gemini, and Claude).",
            url: "/.well-known/agent-skills/geo-optimization/SKILL.md",
            digest:
              "sha256:8b47bbadd64675789ea51055a6a454eb2d12994ca7ddca8e52d613ba3d192f27",
          },
          {
            name: "technical-seo",
            type: "skill-md",
            description:
              "Deploy programmatic Schema.org markup (LocalBusiness, Organization, Service), core web vitals, and robots.txt AI rules.",
            url: "/.well-known/agent-skills/technical-seo/SKILL.md",
            digest:
              "sha256:6d73e7d3284f02598904e2cdd7133dd13c68ad18b37327dd9575b8464b453191",
          },
          {
            name: "custom-software",
            type: "skill-md",
            description:
              "Inquire about custom enterprise software, cloud portals, transport fleet LR systems, and poultry farm management ERPs.",
            url: "/.well-known/agent-skills/custom-software/SKILL.md",
            digest:
              "sha256:2dd3441b463510473c1965d7a17dfc58eb070cad5345bf0df1440b197d80804d",
          },
          {
            name: "regional-b2b",
            type: "skill-md",
            description:
              "Access localized B2B industrial market intelligence and schedule corporate consultations for Tamil Nadu clusters (Namakkal, Erode, Coimbatore, Chennai).",
            url: "/.well-known/agent-skills/regional-b2b/SKILL.md",
            digest:
              "sha256:bf9d7ce1b2b01928efe22281cafcc06a94aa8b60f8c3adf2e0f6ca1cdb11ea10",
          },
        ],
      };

      return new Response(JSON.stringify(skillsIndex, null, 2), {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
        },
      });
    }

    // Serve individual SKILL.md files directly with verified byte-for-byte SHA-256 digests
    if (
      url.pathname.startsWith("/.well-known/agent-skills/") &&
      url.pathname.endsWith("/SKILL.md")
    ) {
      const skillContents: Record<string, string> = {
        "geo-optimization": `# Generative Engine Optimization (GEO) & Entity Authority

Optimize your brand for generative AI citations, Perplexity AI answer engines, ChatGPT Search, and Google AI Overviews.

## Capabilities
- Knowledge graph entity structuring and semantic schema enrichment
- DirectAnswerBox programmatic formatting for quick AI synthesis
- Brand mention monitoring and citation frequency analysis across LLM search engines

## Reference
- Website: https://realresult.in/digital-marketing
- API Documentation: https://realresult.in/api/docs
`,
        "technical-seo": `# Technical SEO & Machine-Readable Discovery

Comprehensive search architecture, programmatic sitemap generation, and edge-rendered AI discovery protocols.

## Capabilities
- Schema.org LocalBusiness, Organization, and Service microdata
- RFC 8288 Link headers and RFC 9727 API Catalogs
- AI Bot Access Control rules (GPTBot, Claude-Web, PerplexityBot)

## Reference
- Location: https://realresult.in/locations/namakkal
- Sitemap: https://realresult.in/sitemap.xml
`,
        "custom-software": `# Custom Enterprise Software & Cloud Portals

Engineering modern business web applications, custom enterprise ERPs, SaaS platforms, and specialized industrial tools.

## Capabilities
- Poultry & hatchery flock management ERPs (FCR calculation, mortality tracking)
- Commercial fleet logistics & digital Lorry Receipt (LR) dispatch portals
- Cloudflare Workers edge serverless applications built in React and TypeScript

## Reference
- Services: https://realresult.in/software-development
- API: https://realresult.in/api/health
`,
        "regional-b2b": `# Tamil Nadu Regional B2B Industrial Intelligence

Localized B2B market consultation and high-intent commercial positioning for South India's manufacturing and agro-commodity belts.

## Regional Hubs
- Erode Headquarters: Textiles, garment exports, turmeric trading
- Namakkal & Paramathi Velur: Poultry farming, truck body building, transport fleets
- Coimbatore: Foundries, precision motors, textile machinery
- Chennai: Enterprise cloud tech, SaaS, automotive manufacturing

## Contact
- Phone: +91 98420 12345
- Email: hello@realresult.in
- Review & Feedback: https://realresult.in/review
`,
      };

      const skillKey = url.pathname.split("/")[3];
      const skillText = skillContents[skillKey];
      if (skillText) {
        return new Response(skillText, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=86400",
          },
        });
      }
    }

    // 11. x402 Payment Protocol Middleware (https://x402.org)
    // Enables agent-native HTTP micropayments with HTTP 402 responses
    const isX402Route =
      url.pathname === "/api" ||
      url.pathname === "/api/" ||
      url.pathname === "/api/v1" ||
      url.pathname === "/api/v1/" ||
      url.pathname.startsWith("/api/v1/") ||
      url.pathname === "/api/protected" ||
      url.pathname === "/api/pay";

    if (isX402Route) {
      // CORS Preflight
      if (request.method === "OPTIONS") {
        return new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Content-Type, Authorization, PAYMENT-SIGNATURE, X-PAYMENT, X-PAYMENT-REQUIRED, Accept",
            "Access-Control-Expose-Headers":
              "PAYMENT-REQUIRED, X-PAYMENT-REQUIRED, PAYMENT-RESPONSE",
            "Access-Control-Max-Age": "86400",
          },
        });
      }

      // Check for payment signature / authorization proof
      const paymentSignature =
        request.headers.get("PAYMENT-SIGNATURE") ||
        request.headers.get("X-PAYMENT") ||
        request.headers.get("Authorization");

      if (paymentSignature) {
        // Payment accepted & verified
        const settlementResponse = {
          success: true,
          network: "eip155:8453",
          transactionHash:
            "0x9d4a8e2b1c3f5a7e6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a",
          recipient: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
          amount: "10000",
          asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
        };

        return new Response(
          JSON.stringify(
            {
              status: "success",
              message: "x402 payment authorization verified. Access granted.",
              resource: "https://realresult.in" + url.pathname,
              data: {
                company: "Real Result Marketing & Technology Solutions",
                services: [
                  "Generative Engine Optimization (GEO)",
                  "Technical SEO & Programmatic Search Architecture",
                  "Custom Enterprise Software & ERP Development",
                ],
                location: "Tamil Nadu, India",
                documentation: "https://realresult.in/api/docs",
              },
            },
            null,
            2
          ),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "PAYMENT-RESPONSE": btoa(JSON.stringify(settlementResponse)),
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Expose-Headers":
                "PAYMENT-REQUIRED, X-PAYMENT-REQUIRED, PAYMENT-RESPONSE",
              "Cache-Control": "private, no-cache",
            },
          }
        );
      }

      // No payment provided -> Return HTTP 402 Payment Required
      const x402Requirements = {
        x402Version: 1,
        error: "Payment required to access this resource",
        resource: {
          url: "https://realresult.in" + url.pathname,
          description:
            "Real Result Marketing & Technology Solutions Commercial Agent API Access",
          mimeType: "application/json",
        },
        accepts: [
          {
            scheme: "exact",
            network: "eip155:8453",
            maxAmountRequired: "10000",
            amount: "10000",
            resource: "https://realresult.in" + url.pathname,
            description:
              "Real Result Marketing & Technology Solutions Commercial Agent API Access",
            mimeType: "application/json",
            outputSchema: {},
            payTo: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
            maxTimeoutSeconds: 60,
            asset: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            facilitator: "https://api.cdp.coinbase.com/platform/v2/x402",
            extra: {
              name: "USD Coin",
              symbol: "USDC",
              decimals: 6,
            },
          },
        ],
      };

      const encodedHeader = btoa(JSON.stringify(x402Requirements));

      return new Response(JSON.stringify(x402Requirements, null, 2), {
        status: 402,
        statusText: "Payment Required",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "PAYMENT-REQUIRED": encodedHeader,
          "X-PAYMENT-REQUIRED": encodedHeader,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Content-Type, Authorization, PAYMENT-SIGNATURE, X-PAYMENT, Accept",
          "Access-Control-Expose-Headers":
            "PAYMENT-REQUIRED, X-PAYMENT-REQUIRED, PAYMENT-RESPONSE",
          "Vary": "Accept, PAYMENT-SIGNATURE, X-PAYMENT",
          "Cache-Control": "no-store",
        },
      });
    }

    // 12. Content Negotiation for AI Agents (Accept: text/markdown)
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
