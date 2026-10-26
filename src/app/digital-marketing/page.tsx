import type { Metadata } from "next";
import DigitalMarketingHubPage from "@/views/digital-marketing/DigitalMarketingHubPage";

export const metadata: Metadata = {
  title: "Digital Marketing Services in Tamil Nadu | Real Result",
  description: "Real Result connects SEO, AI search, Google Ads, social media, and conversion optimization around your business revenue goals.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing Services in Tamil Nadu | Real Result",
    description: "Real Result connects SEO, AI search, Google Ads, social media, and conversion optimization around your business revenue goals.",
    url: "https://realresult.in/digital-marketing",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Tamil Nadu | Real Result",
    description: "Real Result connects SEO, AI search, Google Ads, social media, and conversion optimization around your business revenue goals.",
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
  "@id": "https://realresult.in/digital-marketing#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Digital Marketing Services in Tamil Nadu"
  ],
  "url": "https://realresult.in/digital-marketing",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Real Result connects SEO, AI search, Google Ads, social media, and conversion optimization around your business revenue goals.",
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
