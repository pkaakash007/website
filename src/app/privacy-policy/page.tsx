import type { Metadata } from "next";
import PrivacyPolicyPage from "@/views/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security | Real Result Marketing TN",
  description: "Read the official privacy policy and data governance practices of Real Result Marketing & Technology Solutions in Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy & Data Security | Real Result Marketing TN",
    description: "Read the official privacy policy and data governance practices of Real Result Marketing & Technology Solutions in Tamil Nadu.",
    url: "https://realresult.in/privacy-policy",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy & Data Security | Real Result Marketing TN",
    description: "Read the official privacy policy and data governance practices of Real Result Marketing & Technology Solutions in Tamil Nadu.",
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
  "@id": "https://realresult.in/privacy-policy#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Privacy Policy & Data Security"
  ],
  "url": "https://realresult.in/privacy-policy",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Read the official privacy policy and data governance practices of Real Result Marketing & Technology Solutions in Tamil Nadu.",
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
      <PrivacyPolicyPage />
    </>
  );
}
