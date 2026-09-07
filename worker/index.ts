/**
 * Cloudflare Worker for Real Result Website
 * Handles static asset delivery with SPA fallback and security headers
 */

export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // API Route: Health check
    if (url.pathname === "/api/health") {
      return new Response(
        JSON.stringify({
          status: "healthy",
          environment: "production",
          timestamp: new Date().toISOString(),
          region: (request as any).cf?.colo || "local",
        }),
        {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-store",
          },
        }
      );
    }

    // Forward request to Cloudflare Workers Static Assets binding
    // Configured with single-page-application fallback in wrangler
    const response = await env.ASSETS.fetch(request);

    // Clone response to add security and performance headers
    const headers = new Headers(response.headers);
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Frame-Options", "DENY");
    headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
    headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

    // Cache static immutable assets (JS/CSS with hashes in /assets/)
    if (url.pathname.startsWith("/assets/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (url.pathname.endsWith(".html") || url.pathname === "/" || !url.pathname.includes(".")) {
      // HTML documents should revalidate
      headers.set("Cache-Control", "public, max-age=0, must-revalidate");
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
