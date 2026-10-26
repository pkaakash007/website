import type { Metadata } from "next";
import IndustriesPage from "@/views/IndustriesPage";

export const metadata: Metadata = {
  title: "B2B & Retail Marketing Solutions | Real Result Agency TN",
  description: "Specialized digital marketing solutions for poultry, textiles, logistics, healthcare, steel, and foundries across Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/industries",
  },
  openGraph: {
    title: "B2B & Retail Marketing Solutions | Real Result Agency TN",
    description: "Specialized digital marketing solutions for poultry, textiles, logistics, healthcare, steel, and foundries across Tamil Nadu.",
    url: "https://realresult.in/industries",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B & Retail Marketing Solutions | Real Result Agency TN",
    description: "Specialized digital marketing solutions for poultry, textiles, logistics, healthcare, steel, and foundries across Tamil Nadu.",
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
  "@id": "https://realresult.in/industries#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "B2B & Retail Marketing Solutions"
  ],
  "url": "https://realresult.in/industries",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Specialized digital marketing solutions for poultry, textiles, logistics, healthcare, steel, and foundries across Tamil Nadu.",
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
      <IndustriesPage />
    </>
  );
}
