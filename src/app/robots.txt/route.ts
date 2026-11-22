import { SITE_URL } from "@/config/seo";

// Static robots.txt (exported at build time).
// A single "*" group keeps rules identical for every crawler — Googlebot,
// Bingbot and AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot,
// Google-Extended, Applebot…) are all welcome. Content-Signal declares how
// the content may be used: search indexing, AI answers and AI training.
export const dynamic = "force-static";

const BODY = `# robots.txt for ${SITE_URL}
# Real Result Marketing — digital marketing agency, Paramathi Velur, Namakkal, Tamil Nadu

User-agent: *
Content-Signal: search=yes, ai-input=yes, ai-train=yes
Allow: /
Disallow: /thank-you/

Sitemap: ${SITE_URL}/sitemap.xml
`;

export function GET() {
  return new Response(BODY, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
