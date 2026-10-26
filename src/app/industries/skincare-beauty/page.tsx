import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "Beauty & Skincare Digital Marketing | Real Result India",
  description: "High-ROAS Meta ads, influencer partnerships, and visual storytelling for organic skincare, cosmetics, and beauty brands.",
  alternates: {
    canonical: "https://realresult.in/industries/skincare-beauty",
  },
  openGraph: {
    title: "Beauty & Skincare Digital Marketing | Real Result India",
    description: "High-ROAS Meta ads, influencer partnerships, and visual storytelling for organic skincare, cosmetics, and beauty brands.",
    url: "https://realresult.in/industries/skincare-beauty",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty & Skincare Digital Marketing | Real Result India",
    description: "High-ROAS Meta ads, influencer partnerships, and visual storytelling for organic skincare, cosmetics, and beauty brands.",
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
  "@id": "https://realresult.in/industries/skincare-beauty#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Beauty & Skincare Digital Marketing"
  ],
  "url": "https://realresult.in/industries/skincare-beauty",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "High-ROAS Meta ads, influencer partnerships, and visual storytelling for organic skincare, cosmetics, and beauty brands.",
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
      <IndustryDetailPage slug="skincare-beauty" />
    </>
  );
}
