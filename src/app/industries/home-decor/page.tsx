import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "Home Decor & Interior Marketing Agency | Real Result TN",
  description: "Visual digital marketing, Instagram catalog ads, and localized Google Maps ranking for furniture, decor, and interior studios.",
  alternates: {
    canonical: "https://realresult.in/industries/home-decor",
  },
  openGraph: {
    title: "Home Decor & Interior Marketing Agency | Real Result TN",
    description: "Visual digital marketing, Instagram catalog ads, and localized Google Maps ranking for furniture, decor, and interior studios.",
    url: "https://realresult.in/industries/home-decor",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Decor & Interior Marketing Agency | Real Result TN",
    description: "Visual digital marketing, Instagram catalog ads, and localized Google Maps ranking for furniture, decor, and interior studios.",
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
  "@id": "https://realresult.in/industries/home-decor#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Home Decor & Interior Marketing Agency"
  ],
  "url": "https://realresult.in/industries/home-decor",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Visual digital marketing, Instagram catalog ads, and localized Google Maps ranking for furniture, decor, and interior studios.",
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
      <IndustryDetailPage slug="home-decor" />
    </>
  );
}
