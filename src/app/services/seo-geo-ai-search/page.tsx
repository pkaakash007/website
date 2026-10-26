import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Search Engine Optimization & GEO Agency | Real Result TN",
  description: "First-page Google search rankings, Google Maps 3-pack dominance, and ChatGPT AI search optimization by Real Result Marketing.",
  alternates: {
    canonical: "https://realresult.in/services/seo-geo-ai-search",
  },
  openGraph: {
    title: "Search Engine Optimization & GEO Agency | Real Result TN",
    description: "First-page Google search rankings, Google Maps 3-pack dominance, and ChatGPT AI search optimization by Real Result Marketing.",
    url: "https://realresult.in/services/seo-geo-ai-search",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimization & GEO Agency | Real Result TN",
    description: "First-page Google search rankings, Google Maps 3-pack dominance, and ChatGPT AI search optimization by Real Result Marketing.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tamil Nadu, India",
    "geo.position": "11.1111972;78.0058805",
    "ICBM": "11.1111972, 78.0058805",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": [
    "Organization",
    "LocalBusiness",
    "ProfessionalService"
  ],
  "@id": "https://realresult.in/services/seo-geo-ai-search#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Search Engine Optimization & GEO Agency"
  ],
  "url": "https://realresult.in/services/seo-geo-ai-search",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "First-page Google search rankings, Google Maps 3-pack dominance, and ChatGPT AI search optimization by Real Result Marketing.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tamil Nadu",
    "addressRegion": "Tamil Nadu",
    "postalCode": "637207",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.1111972,
    "longitude": 78.0058805
  }
}) }}
      />
      <ServiceDetailPage slug="seo-geo-ai-search" />
    </>
  );
}
