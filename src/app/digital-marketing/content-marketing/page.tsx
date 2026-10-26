import type { Metadata } from "next";
import ContentMarketingPage from "@/views/digital-marketing/ContentMarketingPage";

export const metadata: Metadata = {
  title: "Content Marketing & Copywriting Agency | Real Result TN",
  description: "Engage buyers with commercial copywriting, technical whitepapers, and authoritative articles from Real Result Marketing TN.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/content-marketing",
  },
  openGraph: {
    title: "Content Marketing & Copywriting Agency | Real Result TN",
    description: "Engage buyers with commercial copywriting, technical whitepapers, and authoritative articles from Real Result Marketing TN.",
    url: "https://realresult.in/digital-marketing/content-marketing",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing & Copywriting Agency | Real Result TN",
    description: "Engage buyers with commercial copywriting, technical whitepapers, and authoritative articles from Real Result Marketing TN.",
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
  "@id": "https://realresult.in/digital-marketing/content-marketing#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Content Marketing & Copywriting Agency"
  ],
  "url": "https://realresult.in/digital-marketing/content-marketing",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Engage buyers with commercial copywriting, technical whitepapers, and authoritative articles from Real Result Marketing TN.",
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
      <ContentMarketingPage />
    </>
  );
}
