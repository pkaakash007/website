import React, { useEffect } from "react";
import { SEO_CONFIG } from "@/config/seo";

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article" | "profile";
  ogImage?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalPath = "",
  ogType = "website",
  ogImage = "https://realresult.in/brand/realresult-logo.jpeg",
  schema,
  publishedTime,
  modifiedTime,
  author,
}) => {
  const canonicalUrl = `${SEO_CONFIG.url}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`.replace(/\/$/, "");
  const fullTitle = title.includes("Real Result") ? title : `${title} | ${SEO_CONFIG.siteName}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or update meta tag
    const setMeta = (nameAttr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector(`meta[${nameAttr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(nameAttr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Standard Search Meta
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("name", "author", author || SEO_CONFIG.siteName);

    // 3. Canonical Tag
    let canonicalTag = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalTag) {
      canonicalTag = document.createElement("link");
      canonicalTag.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute("href", canonicalUrl || SEO_CONFIG.url);

    // 4. Open Graph Tags
    setMeta("property", "og:locale", "en_IN");
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl || SEO_CONFIG.url);
    setMeta("property", "og:site_name", SEO_CONFIG.siteName);
    setMeta("property", "og:image", ogImage);

    if (publishedTime) setMeta("property", "article:published_time", publishedTime);
    if (modifiedTime) setMeta("property", "article:modified_time", modifiedTime);

    // 5. Twitter / X Meta
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    // 6. JSON-LD Structured Data
    const defaultOrgSchema = {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://realresult.in/#organization",
      name: SEO_CONFIG.siteName,
      legalName: SEO_CONFIG.legalName,
      url: SEO_CONFIG.url,
      logo: SEO_CONFIG.logo,
      image: SEO_CONFIG.logo,
      description: SEO_CONFIG.description,
      telephone: SEO_CONFIG.telephone,
      email: SEO_CONFIG.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: SEO_CONFIG.headquarters.streetAddress,
        addressLocality: SEO_CONFIG.headquarters.addressLocality,
        addressRegion: SEO_CONFIG.headquarters.addressRegion,
        postalCode: SEO_CONFIG.headquarters.postalCode,
        addressCountry: SEO_CONFIG.headquarters.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SEO_CONFIG.headquarters.geo.latitude,
        longitude: SEO_CONFIG.headquarters.geo.longitude,
      },
      areaServed: SEO_CONFIG.serviceAreas.map((area) => ({
        "@type": "AdministrativeArea",
        name: area,
      })),
      openingHours: SEO_CONFIG.businessHours,
      sameAs: SEO_CONFIG.socialProfiles,
    };

    const schemaToInject = schema ? (Array.isArray(schema) ? [defaultOrgSchema, ...schema] : [defaultOrgSchema, schema]) : [defaultOrgSchema];

    let scriptTag = document.head.querySelector("#realresult-schema-jsonld") as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.id = "realresult-schema-jsonld";
      scriptTag.type = "application/ld+json";
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaToInject);
  }, [fullTitle, description, canonicalUrl, ogType, ogImage, schema, publishedTime, modifiedTime, author]);

  return null;
};

export default SEOHead;
