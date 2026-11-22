/**
 * Server-side SEO helpers: Next.js Metadata and schema.org JSON-LD builders.
 *
 * Every page's <title>, description, canonical, Open Graph tags and
 * structured data are produced here at build time, so they are present in
 * the static HTML that Google, Bing and AI crawlers (GPTBot, ClaudeBot,
 * PerplexityBot…) download — none of it depends on client-side JavaScript.
 *
 * Entity graph: a single Organization (#organization) and WebSite (#website)
 * are emitted site-wide from the root layout. Page-level nodes reference
 * them by @id instead of repeating (and contradicting) business details.
 */
import type { Metadata } from "next";
import { SEO_CONFIG, SITE_URL, GOOGLE_MAPS_URL, TAMIL_NADU_LOCATIONS, type LocationMeta, type FaqItem } from "@/config/seo";
import type { RouteEntry } from "@/config/routes";
import { getRoute } from "@/config/routes";

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const LOGO_ID = `${SITE_URL}/#logo`;

type JsonLdNode = Record<string, unknown>;

export type { FaqItem };

/** Absolute URL with the trailing slash the static export serves. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = `/${path}`.replace(/\/+/g, "/");
  const [pathname, hash] = clean.split("#");
  const withSlash = pathname.endsWith("/") || /\.[a-z0-9]+$/i.test(pathname) ? pathname : `${pathname}/`;
  return `${SITE_URL}${withSlash}${hash ? `#${hash}` : ""}`;
}

/* ------------------------------------------------------------------ */
/* Metadata                                                            */
/* ------------------------------------------------------------------ */

export function buildMetadata(route: RouteEntry): Metadata {
  const url = absoluteUrl(route.path);
  const image = route.image ? absoluteUrl(route.image) : SEO_CONFIG.ogImage;

  return {
    title: route.title,
    description: route.description,
    alternates: { canonical: route.noindex ? null : url },
    robots: route.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: SEO_CONFIG.locale,
      url,
      siteName: SEO_CONFIG.siteName,
      title: route.title,
      description: route.description,
      images: [{ url: image, width: 1200, height: 630, alt: route.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: route.title,
      description: route.description,
      images: [image],
    },
  };
}

/** Convenience for `export const metadata = metadataFor("/about/")`. */
export function metadataFor(path: string): Metadata {
  return buildMetadata(getRoute(path));
}

/* ------------------------------------------------------------------ */
/* Site-wide entities                                                  */
/* ------------------------------------------------------------------ */

function postalAddress(): JsonLdNode {
  const hq = SEO_CONFIG.headquarters;
  return {
    "@type": "PostalAddress",
    streetAddress: hq.streetAddress,
    addressLocality: hq.addressLocality,
    addressRegion: hq.addressRegion,
    postalCode: hq.postalCode,
    addressCountry: hq.addressCountry,
  };
}

function cityNode(loc: LocationMeta): JsonLdNode {
  return { "@type": "City", name: loc.city, sameAs: loc.wikipedia };
}

export function organizationSchema(): JsonLdNode {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: SEO_CONFIG.siteName,
    alternateName: [SEO_CONFIG.shortName, "Real Result Digital Marketing"],
    legalName: SEO_CONFIG.legalName,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      "@id": LOGO_ID,
      url: SEO_CONFIG.logo,
      contentUrl: SEO_CONFIG.logo,
      width: SEO_CONFIG.logoWidth,
      height: SEO_CONFIG.logoHeight,
      caption: "Real Result Marketing logo",
    },
    image: { "@id": LOGO_ID },
    description: SEO_CONFIG.description,
    slogan: "Get noticed. Get chosen. Keep growing.",
    telephone: SEO_CONFIG.telephone,
    email: SEO_CONFIG.email,
    priceRange: SEO_CONFIG.priceRange,
    address: postalAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.headquarters.geo.latitude,
      longitude: SEO_CONFIG.headquarters.geo.longitude,
    },
    hasMap: GOOGLE_MAPS_URL,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: SEO_CONFIG.openingDays,
        opens: SEO_CONFIG.opens,
        closes: SEO_CONFIG.closes,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: SEO_CONFIG.telephone,
        email: SEO_CONFIG.email,
        areaServed: "IN",
        availableLanguage: ["English", "Tamil"],
      },
    ],
    areaServed: [
      ...Object.values(TAMIL_NADU_LOCATIONS).map(cityNode),
      { "@type": "State", name: "Tamil Nadu", sameAs: "https://en.wikipedia.org/wiki/Tamil_Nadu" },
    ],
    knowsAbout: [
      "Digital marketing",
      "Search engine optimization",
      "Local SEO",
      "Google Business Profile optimization",
      "Google Ads",
      "Social media marketing",
      "Generative engine optimization",
      "AI Overviews optimization",
      "Website development",
      "Mobile app development",
    ],
    sameAs: SEO_CONFIG.socialProfiles,
  };
}

export function websiteSchema(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SEO_CONFIG.siteName,
    alternateName: SEO_CONFIG.shortName,
    description: SEO_CONFIG.description,
    inLanguage: SEO_CONFIG.language,
    publisher: { "@id": ORG_ID },
  };
}

/* ------------------------------------------------------------------ */
/* Page-level nodes                                                    */
/* ------------------------------------------------------------------ */

export function breadcrumbSchema(route: RouteEntry): JsonLdNode | null {
  const trail: RouteEntry[] = [];
  let current: RouteEntry | undefined = route;
  while (current) {
    trail.unshift(current);
    current = current.parent ? getRoute(current.parent) : undefined;
  }
  if (trail.length < 2) return null;
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(route.path)}#breadcrumb`,
    itemListElement: trail.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: r.breadcrumb,
      item: absoluteUrl(r.path),
    })),
  };
}

export function faqSchema(route: RouteEntry, faqs: FaqItem[]): JsonLdNode | null {
  if (!faqs.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${absoluteUrl(route.path)}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

function serviceNode(route: RouteEntry): JsonLdNode | null {
  const loc = route.location ? TAMIL_NADU_LOCATIONS[route.location] : undefined;
  if (!route.serviceType && !loc) return null;
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(route.path)}#service`,
    name: route.serviceName ?? route.breadcrumb,
    serviceType: route.serviceType ?? "Digital marketing",
    description: route.description,
    url: absoluteUrl(route.path),
    provider: { "@id": ORG_ID },
    areaServed: loc
      ? [cityNode(loc), ...loc.areas.filter((a) => a !== loc.city).map((name) => ({ "@type": "Place", name }))]
      : [{ "@type": "State", name: "Tamil Nadu" }],
    ...(loc
      ? {
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: absoluteUrl(route.path),
            servicePhone: SEO_CONFIG.telephone,
            serviceLocation: { "@id": ORG_ID },
          },
        }
      : {}),
  };
}

/**
 * Full JSON-LD graph for a page: WebPage + BreadcrumbList, plus Service and
 * FAQPage nodes when relevant. Organization/WebSite come from the layout.
 */
export function pageSchema(route: RouteEntry, faqs: FaqItem[] = []): JsonLdNode {
  const url = absoluteUrl(route.path);
  const breadcrumb = breadcrumbSchema(route);
  const service = serviceNode(route);
  const faq = faqSchema(route, faqs);

  const webPage: JsonLdNode = {
    "@type": route.pageType ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: SEO_CONFIG.language,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": service ? `${url}#service` : ORG_ID },
    publisher: { "@id": ORG_ID },
    primaryImageOfPage: { "@id": LOGO_ID },
    ...(breadcrumb ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    ...(faq ? { mainEntity: { "@id": `${url}#faq` } } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb, service, faq].filter(Boolean),
  };
}

export function siteSchema(): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema()],
  };
}
