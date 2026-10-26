import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Commercial Video Production & Editing | Real Result TN",
  description: "4K commercial video production, factory tours, testimonial reels, and high-retention motion design by Real Result Marketing TN.",
  alternates: {
    canonical: "https://realresult.in/services/video-editing-motion",
  },
  openGraph: {
    title: "Commercial Video Production & Editing | Real Result TN",
    description: "4K commercial video production, factory tours, testimonial reels, and high-retention motion design by Real Result Marketing TN.",
    url: "https://realresult.in/services/video-editing-motion",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Video Production & Editing | Real Result TN",
    description: "4K commercial video production, factory tours, testimonial reels, and high-retention motion design by Real Result Marketing TN.",
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
  "@id": "https://realresult.in/services/video-editing-motion#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Commercial Video Production & Editing"
  ],
  "url": "https://realresult.in/services/video-editing-motion",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "4K commercial video production, factory tours, testimonial reels, and high-retention motion design by Real Result Marketing TN.",
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
      <ServiceDetailPage slug="video-editing-motion" />
    </>
  );
}
