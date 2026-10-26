import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "Travel & Tourism Digital Marketing Agency | Real Result",
  description: "Direct booking funnels, Google travel search ads, and destination storytelling for resorts, tour operators, and luxury hotels.",
  alternates: {
    canonical: "https://realresult.in/industries/travel-tourism",
  },
  openGraph: {
    title: "Travel & Tourism Digital Marketing Agency | Real Result",
    description: "Direct booking funnels, Google travel search ads, and destination storytelling for resorts, tour operators, and luxury hotels.",
    url: "https://realresult.in/industries/travel-tourism",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel & Tourism Digital Marketing Agency | Real Result",
    description: "Direct booking funnels, Google travel search ads, and destination storytelling for resorts, tour operators, and luxury hotels.",
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
  "@id": "https://realresult.in/industries/travel-tourism#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Travel & Tourism Digital Marketing Agency"
  ],
  "url": "https://realresult.in/industries/travel-tourism",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Direct booking funnels, Google travel search ads, and destination storytelling for resorts, tour operators, and luxury hotels.",
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
      <IndustryDetailPage slug="travel-tourism" />
    </>
  );
}
