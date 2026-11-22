import { INDEXABLE_ROUTES, type RouteEntry } from "@/config/routes";
import { GOOGLE_MAPS_URL, SEO_CONFIG, SITE_URL, TAMIL_NADU_LOCATIONS } from "@/config/seo";
import { absoluteUrl } from "@/lib/seo";

// llms.txt (https://llmstxt.org) — a concise, link-rich site summary for AI
// assistants and answer engines. Generated at build time from the route
// registry and business config, so it always matches the live site.
export const dynamic = "force-static";

const SECTION_ORDER: RouteEntry["section"][] = ["Locations", "Digital Marketing", "Services", "Industries", "Company", "Legal"];

function build(): string {
  const lines: string[] = [];
  lines.push(`# ${SEO_CONFIG.siteName}`, "");
  lines.push(`> ${SEO_CONFIG.description}`, "");
  lines.push("## Key facts", "");
  lines.push(`- Business: ${SEO_CONFIG.siteName} (${SEO_CONFIG.legalName})`);
  lines.push("- Type: Digital marketing agency and web/software development company");
  lines.push(`- Office: ${SEO_CONFIG.displayAddress}`);
  lines.push(`- Phone and WhatsApp: ${SEO_CONFIG.displayPhone}`);
  lines.push(`- Email: ${SEO_CONFIG.email}`);
  lines.push("- Hours: Monday to Saturday, 9:00 am to 6:30 pm IST");
  lines.push(
    `- Core markets: ${Object.values(TAMIL_NADU_LOCATIONS)
      .filter((l) => l.priority === "primary")
      .map((l) => l.city)
      .join(", ")}`
  );
  lines.push(
    `- Also serves: ${Object.values(TAMIL_NADU_LOCATIONS)
      .filter((l) => l.priority === "secondary")
      .map((l) => l.city)
      .join(", ")} and the rest of Tamil Nadu`
  );
  lines.push("- Languages: English and Tamil");
  lines.push(`- Google Business Profile: ${GOOGLE_MAPS_URL}`);
  lines.push(`- Website: ${SITE_URL}/`, "");

  for (const section of SECTION_ORDER) {
    const routes = INDEXABLE_ROUTES.filter((r) => r.section === section);
    if (!routes.length) continue;
    lines.push(`## ${section}`, "");
    for (const r of routes) lines.push(`- [${r.breadcrumb}](${absoluteUrl(r.path)}): ${r.description}`);
    lines.push("");
  }

  lines.push("## Optional", "");
  lines.push(`- [Home](${SITE_URL}/): ${INDEXABLE_ROUTES[0].description}`);
  lines.push(`- [XML sitemap](${SITE_URL}/sitemap.xml)`);
  lines.push(
    "- Markdown versions of every page are available by requesting the page URL with the header `Accept: text/markdown`."
  );
  lines.push("");
  return lines.join("\n");
}

export function GET() {
  return new Response(build(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
