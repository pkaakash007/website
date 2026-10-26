import type { Metadata } from "next";
import LocalSEOPage from "@/views/digital-marketing/LocalSEOPage";

export const metadata: Metadata = {
  title: "Local SEO & Google Maps 3-Pack Agency | Real Result TN",
  description: "Dominate Google Maps local 3-pack searches with Real Result Marketing. High-intent local SEO for businesses in Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/local-seo",
  },
  openGraph: {
    title: "Local SEO & Google Maps 3-Pack Agency | Real Result TN",
    description: "Dominate Google Maps local 3-pack searches with Real Result Marketing. High-intent local SEO for businesses in Tamil Nadu.",
    url: "https://realresult.in/digital-marketing/local-seo",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Google Maps 3-Pack Agency | Real Result TN",
    description: "Dominate Google Maps local 3-pack searches with Real Result Marketing. High-intent local SEO for businesses in Tamil Nadu.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Paramathi Velur, Namakkal, Tamil Nadu",
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
  "@id": "https://realresult.in/digital-marketing/local-seo#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Local SEO & Google Maps 3-Pack Agency"
  ],
  "url": "https://realresult.in/digital-marketing/local-seo",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Dominate Google Maps local 3-pack searches with Real Result Marketing. High-intent local SEO for businesses in Tamil Nadu.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paramathi Velur",
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
      <LocalSEOPage />
    </>
  );
}
