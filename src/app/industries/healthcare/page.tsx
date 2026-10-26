import type { Metadata } from "next";
import HealthcareIndustryPage from "@/views/industries/HealthcareIndustryPage";

export const metadata: Metadata = {
  title: "Healthcare & Hospital Marketing Agency | Real Result TN",
  description: "Digital marketing and local SEO for hospitals, specialized clinics, and healthcare professionals in Tamil Nadu. Real Result TN.",
  alternates: {
    canonical: "https://realresult.in/industries/healthcare",
  },
  openGraph: {
    title: "Healthcare & Hospital Marketing Agency | Real Result TN",
    description: "Digital marketing and local SEO for hospitals, specialized clinics, and healthcare professionals in Tamil Nadu. Real Result TN.",
    url: "https://realresult.in/industries/healthcare",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Healthcare & Hospital Marketing Agency | Real Result TN",
    description: "Digital marketing and local SEO for hospitals, specialized clinics, and healthcare professionals in Tamil Nadu. Real Result TN.",
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
  "@id": "https://realresult.in/industries/healthcare#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Healthcare & Hospital Marketing Agency"
  ],
  "url": "https://realresult.in/industries/healthcare",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Digital marketing and local SEO for hospitals, specialized clinics, and healthcare professionals in Tamil Nadu. Real Result TN.",
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
      <HealthcareIndustryPage />
    </>
  );
}
