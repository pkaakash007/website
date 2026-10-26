import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "B2B Digital Marketing & Enterprise Growth | Real Result",
  description: "Account-based marketing, LinkedIn campaigns, and commercial B2B SEO engineered for manufacturing, tech, and export leaders.",
  alternates: {
    canonical: "https://realresult.in/industries/b2b",
  },
  openGraph: {
    title: "B2B Digital Marketing & Enterprise Growth | Real Result",
    description: "Account-based marketing, LinkedIn campaigns, and commercial B2B SEO engineered for manufacturing, tech, and export leaders.",
    url: "https://realresult.in/industries/b2b",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Digital Marketing & Enterprise Growth | Real Result",
    description: "Account-based marketing, LinkedIn campaigns, and commercial B2B SEO engineered for manufacturing, tech, and export leaders.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Erode, Tamil Nadu",
    "geo.position": "11.3410;77.7172",
    "ICBM": "11.3410, 77.7172",
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
  "@id": "https://realresult.in/industries/b2b#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "B2B Digital Marketing & Enterprise Growth"
  ],
  "url": "https://realresult.in/industries/b2b",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Account-based marketing, LinkedIn campaigns, and commercial B2B SEO engineered for manufacturing, tech, and export leaders.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Erode",
    "addressRegion": "Tamil Nadu",
    "postalCode": "637207",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.341,
    "longitude": 77.7172
  }
}) }}
      />
      <IndustryDetailPage slug="b2b" />
    </>
  );
}
