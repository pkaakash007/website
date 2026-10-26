import type { Metadata } from "next";
import SocialMediaPage from "@/views/digital-marketing/SocialMediaPage";

export const metadata: Metadata = {
  title: "Social Media Marketing & Meta Ads Agency | Real Result TN",
  description: "Scale your brand with high-impact Meta ads, Instagram reels, and LinkedIn B2B funnels managed by Real Result Marketing TN.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/social-media-marketing",
  },
  openGraph: {
    title: "Social Media Marketing & Meta Ads Agency | Real Result TN",
    description: "Scale your brand with high-impact Meta ads, Instagram reels, and LinkedIn B2B funnels managed by Real Result Marketing TN.",
    url: "https://realresult.in/digital-marketing/social-media-marketing",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Marketing & Meta Ads Agency | Real Result TN",
    description: "Scale your brand with high-impact Meta ads, Instagram reels, and LinkedIn B2B funnels managed by Real Result Marketing TN.",
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
  "@id": "https://realresult.in/digital-marketing/social-media-marketing#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Social Media Marketing & Meta Ads Agency"
  ],
  "url": "https://realresult.in/digital-marketing/social-media-marketing",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Scale your brand with high-impact Meta ads, Instagram reels, and LinkedIn B2B funnels managed by Real Result Marketing TN.",
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
      <SocialMediaPage />
    </>
  );
}
