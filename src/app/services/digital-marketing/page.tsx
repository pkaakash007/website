import type { Metadata } from "next";
import DigitalMarketingHubPage from "@/views/digital-marketing/DigitalMarketingHubPage";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Services | Real Result Agency",
  description: "Comprehensive digital marketing services in Tamil Nadu: SEO, Google Ads, social media marketing, and conversion optimization.",
  alternates: {
    canonical: "https://realresult.in/services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Agency Services | Real Result Agency",
    description: "Comprehensive digital marketing services in Tamil Nadu: SEO, Google Ads, social media marketing, and conversion optimization.",
    url: "https://realresult.in/services/digital-marketing",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Services | Real Result Agency",
    description: "Comprehensive digital marketing services in Tamil Nadu: SEO, Google Ads, social media marketing, and conversion optimization.",
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
  "@id": "https://realresult.in/services/digital-marketing#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Digital Marketing Agency Services"
  ],
  "url": "https://realresult.in/services/digital-marketing",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Comprehensive digital marketing services in Tamil Nadu: SEO, Google Ads, social media marketing, and conversion optimization.",
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
      <DigitalMarketingHubPage />
    </>
  );
}
