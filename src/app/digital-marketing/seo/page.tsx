import type { Metadata } from "next";
import SEOPage from "@/views/digital-marketing/SEOPage";

export const metadata: Metadata = {
  title: "Best SEO Company in Tamil Nadu | Real Result Marketing TN",
  description: "Looking for the best SEO company in Tamil Nadu? Real Result delivers technical SEO, Core Web Vitals, and page 1 rankings.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/seo",
  },
  openGraph: {
    title: "Best SEO Company in Tamil Nadu | Real Result Marketing TN",
    description: "Looking for the best SEO company in Tamil Nadu? Real Result delivers technical SEO, Core Web Vitals, and page 1 rankings.",
    url: "https://realresult.in/digital-marketing/seo",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SEO Company in Tamil Nadu | Real Result Marketing TN",
    description: "Looking for the best SEO company in Tamil Nadu? Real Result delivers technical SEO, Core Web Vitals, and page 1 rankings.",
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
  "@id": "https://realresult.in/digital-marketing/seo#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Best SEO Company in Tamil Nadu"
  ],
  "url": "https://realresult.in/digital-marketing/seo",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Looking for the best SEO company in Tamil Nadu? Real Result delivers technical SEO, Core Web Vitals, and page 1 rankings.",
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
      <SEOPage />
    </>
  );
}
