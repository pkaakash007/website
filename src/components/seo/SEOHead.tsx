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
  ogImage = "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
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

    // 2. Standard Search Meta & Local SEO
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    setMeta("name", "keywords", "Real Result Marketing, best digital marketing company in Erode, best digital marketing agency in Erode, best digital marketing company in Namakkal, best digital marketing agency in Namakkal, best digital marketing company in Paramathi Velur, best digital marketing agency in Paramathi Velur, best digital marketing company in Salem, best digital marketing agency in Salem, best digital marketing agency in Coimbatore, best digital marketing company in Coimbatore, best SEO company in Erode, best SEO agency in Namakkal, best SEO company in Salem, best SEO company in Coimbatore, top marketing company in Tamil Nadu, best marketing agency, best web design company in Erode, best Google Ads agency, Real Result logo, Real Result in Tamil Nadu");
    setMeta("name", "geo.region", "IN-TN");
    setMeta("name", "geo.placename", "Paramathi Velur, Namakkal, Tamil Nadu");
    setMeta("name", "geo.position", "11.1111972;78.0058805");
    setMeta("name", "ICBM", "11.1111972, 78.0058805");

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
    setMeta("property", "og:image:secure_url", ogImage);
    setMeta("property", "og:image:type", "image/png");
    setMeta("property", "og:image:width", "724");
    setMeta("property", "og:image:height", "615");
    setMeta("property", "og:image:alt", "Real Result in Tamil Nadu - Real Result Marketing Official Logo");

    if (publishedTime) setMeta("property", "article:published_time", publishedTime);
    if (modifiedTime) setMeta("property", "article:modified_time", modifiedTime);

    // 5. Twitter / X Meta
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
    setMeta("name", "twitter:image:alt", "Real Result in Tamil Nadu - Real Result Marketing Official Logo");

    // 6. JSON-LD Structured Data
    const defaultOrgSchema = {
      "@context": "https://schema.org",
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": "https://realresult.in/#organization",
      name: SEO_CONFIG.siteName,
      alternateName: [
        "Real Result",
        "Real Result Marketing",
        "Real Result Marketing Namakkal",
        "Real Result Marketing Paramathi Velur",
        "Real Result Marketing Erode",
        "Real Result Marketing Tamil Nadu",
        "Real Result in Tamil Nadu",
      ],
      legalName: SEO_CONFIG.legalName,
      url: SEO_CONFIG.url,
      hasMap:
        "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
      logo: {
        "@type": "ImageObject",
        "@id": "https://realresult.in/#logo",
        url: SEO_CONFIG.logo,
        contentUrl: SEO_CONFIG.logo,
        caption: "Real Result in Tamil Nadu - Real Result Marketing Official Logo",
        name: "Real Result in Tamil Nadu Logo",
        width: 724,
        height: 615,
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://realresult.in/#logo",
        url: SEO_CONFIG.logo,
        contentUrl: SEO_CONFIG.logo,
        caption: "Real Result in Tamil Nadu - Real Result Marketing Official Logo",
        name: "Real Result in Tamil Nadu Logo",
        width: 724,
        height: 615,
      },
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

    // Dedicated ImageObject Schema for Google Images ranking for "Real Result in Tamil Nadu"
    const logoImageSchema = {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "@id": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
      url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
      contentUrl: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
      name: "Real Result in Tamil Nadu Official Logo",
      alternateName: [
        "Real Result Logo",
        "Real Result Marketing Tamil Nadu Logo",
        "Real Result Tamil Nadu",
        "Real Result in Tamil Nadu",
      ],
      caption: "Real Result in Tamil Nadu - Official Company Logo for Real Result Marketing",
      description:
        "Official company logo mark of Real Result Marketing, premier digital marketing, local SEO, and custom software development agency headquartered in Tamil Nadu, India.",
      creditText: "Real Result Marketing",
      creator: {
        "@type": "Organization",
        name: "Real Result Marketing",
        url: "https://realresult.in",
      },
      copyrightNotice: "Real Result Marketing",
      license: "https://realresult.in/privacy",
      acquireLicensePage: "https://realresult.in/contact",
      representativeOfPage: true,
      width: 724,
      height: 615,
    };

    const baseSchemas = [defaultOrgSchema, logoImageSchema];
    const schemaToInject = schema
      ? (Array.isArray(schema) ? [...baseSchemas, ...schema] : [...baseSchemas, schema])
      : baseSchemas;

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
