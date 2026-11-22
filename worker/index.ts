/**
 * Cloudflare Worker for https://realresult.in
 *
 * Sits in front of the static Next.js export (./out) and handles only what a
 * static host can't:
 *   1. HTTPS + www → apex canonical redirects (301)
 *   2. Trailing-slash normalisation (301) so every page has one URL
 *   3. Permanent redirects for retired / duplicate URLs (src/config/routes.ts)
 *   4. 410 Gone for legacy spam and CMS-probe URLs
 *   5. Markdown for AI agents (Accept: text/markdown, ?format=markdown, *.md)
 *   6. Security and cache headers
 */

import { REDIRECTS } from "../src/config/routes";
import { GOOGLE_REVIEW_URL } from "../src/config/seo";
import { getMarkdownForRoute } from "./markdown";

export interface Env {
  ASSETS: Fetcher;
}

const CANONICAL_HOST = "realresult.in";

const SECURITY_HEADERS: Record<string, string> = {
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  "Content-Security-Policy": "upgrade-insecure-requests; frame-ancestors 'none'",
  // Allow search indexing, AI answers and AI training (maximises visibility in AI assistants).
  "Content-Signal": "search=yes, ai-input=yes, ai-train=yes",
};

const STATIC_EXT =
  /\.(?:js|mjs|css|map|png|jpe?g|webp|avif|gif|svg|ico|woff2?|otf|ttf|mp4|webm|json|xml|txt|pdf|webmanifest)$/i;

const SPAM_PATTERN =
  /^\/(?:shop(?:\/|$)|wp-(?:admin|content|includes|json)|.*\.(?:php|asp|aspx|jsp|cgi|shtml)$|.*\.shtml)/i;

function redirect(url: URL, status = 301): Response {
  return new Response(null, { status, headers: { Location: url.toString(), "Cache-Control": "public, max-age=86400" } });
}

function withHeaders(response: Response, extra: Record<string, string>): Response {
  const headers = new Headers(response.headers);
  for (const [k, v] of Object.entries({ ...SECURITY_HEADERS, ...extra })) headers.set(k, v);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function cacheControlFor(pathname: string): string {
  if (pathname.startsWith("/_next/static/")) return "public, max-age=31536000, immutable";
  if (/\.(?:png|jpe?g|webp|avif|gif|svg|ico|woff2?|otf|ttf|mp4|webm)$/i.test(pathname))
    return "public, max-age=2592000, stale-while-revalidate=86400";
  if (/\.(?:xml|txt)$/i.test(pathname)) return "public, max-age=3600, stale-while-revalidate=86400";
  return "public, max-age=0, must-revalidate";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. HTTPS + canonical host (only on the production domains, so local dev and previews work)
    const isProdHost = url.hostname === CANONICAL_HOST || url.hostname === `www.${CANONICAL_HOST}`;
    if (isProdHost && (url.protocol === "http:" || url.hostname !== CANONICAL_HOST)) {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return redirect(url);
    }

    // 2. Legacy spam / CMS probes → 410 so search engines drop them fast
    if (SPAM_PATTERN.test(path)) {
      return new Response("410 Gone", {
        status: 410,
        headers: { "Content-Type": "text/plain; charset=utf-8", "X-Robots-Tag": "noindex", "Cache-Control": "public, max-age=604800" },
      });
    }

    // 3. Short links and retired URLs
    const bare = path.length > 1 ? path.replace(/\/+$/, "") : path;
    if (bare === "/review" || bare === "/reviews") return Response.redirect(GOOGLE_REVIEW_URL, 302);
    if (bare === "/favicon.ico") return redirect(new URL("/brand/favicon-32x32.png", url));
    const target = REDIRECTS[bare.toLowerCase()];
    if (target) return redirect(new URL(target + url.search, url));

    // 4. One URL per page: add the trailing slash the static export uses
    const isStatic = STATIC_EXT.test(path);
    const wantsMarkdown =
      path.endsWith(".md") ||
      url.searchParams.get("format") === "markdown" ||
      (request.headers.get("Accept") || "").toLowerCase().includes("text/markdown");

    if (!isStatic && !path.endsWith("/") && !path.endsWith(".md")) {
      url.pathname = `${path}/`;
      return redirect(url);
    }

    // 5. Markdown for AI agents
    if (wantsMarkdown && !isStatic) {
      const markdown = getMarkdownForRoute(path.replace(/(?:\/index)?\.md$/, "/"));
      if (markdown) {
        return withHeaders(new Response(markdown), {
          "Content-Type": "text/markdown; charset=utf-8",
          "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
          Vary: "Accept",
          "x-markdown-tokens": String(Math.ceil(markdown.length / 4)),
        });
      }
    }

    // 6. Static asset / page from the export
    const response = await env.ASSETS.fetch(request);
    const extra: Record<string, string> = { "Cache-Control": cacheControlFor(path) };
    if (!isStatic) {
      extra.Vary = "Accept";
      extra.Link = '</llms.txt>; rel="describedby"; type="text/plain", </sitemap.xml>; rel="sitemap"; type="application/xml"';
    }
    if (response.status === 404) {
      extra["X-Robots-Tag"] = "noindex";
      extra["Cache-Control"] = "public, max-age=300";
    }
    return withHeaders(response, extra);
  },
};
