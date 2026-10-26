import type { Metadata } from "next";
import ThankYouPage from "@/views/ThankYouPage";

export const metadata: Metadata = {
  title: "Thank You for Inquiring | Real Result Marketing Agency",
  description: "Thank you for reaching out to Real Result Marketing. Our technical advisory desk will review your details and connect shortly.",
  alternates: {
    canonical: "https://realresult.in/thank-you",
  },
  openGraph: {
    title: "Thank You for Inquiring | Real Result Marketing Agency",
    description: "Thank you for reaching out to Real Result Marketing. Our technical advisory desk will review your details and connect shortly.",
    url: "https://realresult.in/thank-you",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You for Inquiring | Real Result Marketing Agency",
    description: "Thank you for reaching out to Real Result Marketing. Our technical advisory desk will review your details and connect shortly.",
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
  "@id": "https://realresult.in/thank-you#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Thank You for Inquiring"
  ],
  "url": "https://realresult.in/thank-you",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Thank you for reaching out to Real Result Marketing. Our technical advisory desk will review your details and connect shortly.",
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
      <ThankYouPage />
    </>
  );
}
