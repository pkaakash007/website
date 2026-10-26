import type { Metadata } from "next";
import TermsPage from "@/views/TermsPage";

export const metadata: Metadata = {
  title: "Terms of Service & Engagement | Real Result Marketing TN",
  description: "Terms and conditions governing digital marketing retainers, software development, and advisory services with Real Result TN.",
  alternates: {
    canonical: "https://realresult.in/terms",
  },
  openGraph: {
    title: "Terms of Service & Engagement | Real Result Marketing TN",
    description: "Terms and conditions governing digital marketing retainers, software development, and advisory services with Real Result TN.",
    url: "https://realresult.in/terms",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Engagement | Real Result Marketing TN",
    description: "Terms and conditions governing digital marketing retainers, software development, and advisory services with Real Result TN.",
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
  "@id": "https://realresult.in/terms#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Terms of Service & Engagement"
  ],
  "url": "https://realresult.in/terms",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Terms and conditions governing digital marketing retainers, software development, and advisory services with Real Result TN.",
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
      <TermsPage />
    </>
  );
}
