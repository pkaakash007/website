/**
 * Markdown-for-agents: a clean, text-only version of each page for AI
 * crawlers and assistants (ChatGPT, Claude, Perplexity…) that request
 * `Accept: text/markdown`. Generated from the same config as the HTML site,
 * so business facts can never drift between the two.
 */
import { ROUTES, normalizePath, type RouteEntry } from "../src/config/routes";
import { SEO_CONFIG, SITE_URL, TAMIL_NADU_LOCATIONS, GOOGLE_MAPS_URL } from "../src/config/seo";
import { LOCATION_FAQS } from "../src/content/locationFaqs";

const BY_PATH = new Map(ROUTES.filter((r) => !r.noindex).map((r) => [r.path, r]));

const url = (path: string) => `${SITE_URL}${path}`;

function contactBlock(): string {
  return [
    "## Contact Real Result Marketing",
    "",
    `- **Office:** ${SEO_CONFIG.displayAddress}`,
    `- **Phone / WhatsApp:** ${SEO_CONFIG.displayPhone}`,
    `- **Email:** ${SEO_CONFIG.email}`,
    "- **Hours:** Monday–Saturday, 9:00 am – 6:30 pm IST",
    `- **Google Maps:** ${GOOGLE_MAPS_URL}`,
    `- **Website:** ${SITE_URL}/`,
  ].join("\n");
}

function relatedLinks(route: RouteEntry): string {
  const children = ROUTES.filter((r) => r.parent === route.path && !r.noindex);
  if (!children.length) return "";
  return ["## Pages in this section", "", ...children.map((c) => `- [${c.breadcrumb}](${url(c.path)}): ${c.description}`)].join("\n");
}

function locationBody(key: string): string {
  const loc = TAMIL_NADU_LOCATIONS[key];
  if (!loc) return "";
  const faqs = LOCATION_FAQS[key] ?? [];
  return [
    loc.localContext,
    "",
    `## Industries we work with in ${loc.city}`,
    "",
    ...loc.industries.map((i) => `- ${i}`),
    "",
    `## Areas covered`,
    "",
    loc.areas.join(", ") + ".",
    "",
    `Distance from our Paramathi Velur office: ${loc.distanceFromOffice}.`,
    ...(faqs.length
      ? ["", "## Frequently asked questions", "", ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""])]
      : []),
  ].join("\n");
}

function homeBody(): string {
  return [
    SEO_CONFIG.description,
    "",
    "## Core markets",
    "",
    ...Object.values(TAMIL_NADU_LOCATIONS).map(
      (l) => `- [Digital marketing in ${l.city}](${url(`/locations/${l.slug}/`)})${l.priority === "primary" ? " (core market)" : ""}`
    ),
    "",
    "## Services",
    "",
    ...ROUTES.filter((r) => r.section === "Digital Marketing" || r.section === "Services")
      .filter((r) => !r.noindex)
      .map((r) => `- [${r.breadcrumb}](${url(r.path)}): ${r.description}`),
  ].join("\n");
}

export function getMarkdownForRoute(pathname: string): string | null {
  const route = BY_PATH.get(normalizePath(pathname));
  if (!route) return null;

  const body =
    route.path === "/" ? homeBody() : route.location ? locationBody(route.location) : relatedLinks(route);

  return [
    `# ${route.title}`,
    "",
    `> ${route.description}`,
    "",
    `Canonical URL: ${url(route.path)}`,
    "",
    body,
    "",
    contactBlock(),
    "",
  ].join("\n");
}
