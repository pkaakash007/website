import type { Metadata } from "next";
import CROPage from "@/views/digital-marketing/CROPage";

export const metadata: Metadata = {
  title: "Conversion Rate Optimization (CRO) | Real Result Agency TN",
  description: "Turn more website visitors into paying customers. Data-driven CRO, UX audits, and A/B testing with Real Result Marketing.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/conversion-rate-optimization",
  },
  openGraph: {
    title: "Conversion Rate Optimization (CRO) | Real Result Agency TN",
    description: "Turn more website visitors into paying customers. Data-driven CRO, UX audits, and A/B testing with Real Result Marketing.",
    url: "https://realresult.in/digital-marketing/conversion-rate-optimization",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conversion Rate Optimization (CRO) | Real Result Agency TN",
    description: "Turn more website visitors into paying customers. Data-driven CRO, UX audits, and A/B testing with Real Result Marketing.",
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
  "@id": "https://realresult.in/digital-marketing/conversion-rate-optimization#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Conversion Rate Optimization (CRO)"
  ],
  "url": "https://realresult.in/digital-marketing/conversion-rate-optimization",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Turn more website visitors into paying customers. Data-driven CRO, UX audits, and A/B testing with Real Result Marketing.",
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
      <CROPage />
    </>
  );
}
