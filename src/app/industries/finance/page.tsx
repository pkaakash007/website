import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "Finance & Fintech Digital Marketing Agency | Real Result",
  description: "Regulatory-compliant digital marketing, customer acquisition, and performance search ads for NBFCs, fintech, and wealth firms.",
  alternates: {
    canonical: "https://realresult.in/industries/finance",
  },
  openGraph: {
    title: "Finance & Fintech Digital Marketing Agency | Real Result",
    description: "Regulatory-compliant digital marketing, customer acquisition, and performance search ads for NBFCs, fintech, and wealth firms.",
    url: "https://realresult.in/industries/finance",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance & Fintech Digital Marketing Agency | Real Result",
    description: "Regulatory-compliant digital marketing, customer acquisition, and performance search ads for NBFCs, fintech, and wealth firms.",
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
  "@id": "https://realresult.in/industries/finance#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Finance & Fintech Digital Marketing Agency"
  ],
  "url": "https://realresult.in/industries/finance",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Regulatory-compliant digital marketing, customer acquisition, and performance search ads for NBFCs, fintech, and wealth firms.",
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
      <IndustryDetailPage slug="finance" />
    </>
  );
}
