import type { Metadata } from "next";
import CookiePolicyPage from "@/views/CookiePolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy & Privacy Controls | Real Result Marketing",
  description: "Learn how Real Result Marketing uses cookies and performance measurement tools to deliver a fast, seamless user experience.",
  alternates: {
    canonical: "https://realresult.in/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy & Privacy Controls | Real Result Marketing",
    description: "Learn how Real Result Marketing uses cookies and performance measurement tools to deliver a fast, seamless user experience.",
    url: "https://realresult.in/cookie-policy",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy & Privacy Controls | Real Result Marketing",
    description: "Learn how Real Result Marketing uses cookies and performance measurement tools to deliver a fast, seamless user experience.",
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
  "@id": "https://realresult.in/cookie-policy#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Cookie Policy & Privacy Controls"
  ],
  "url": "https://realresult.in/cookie-policy",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Learn how Real Result Marketing uses cookies and performance measurement tools to deliver a fast, seamless user experience.",
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
      <CookiePolicyPage />
    </>
  );
}
