import type { Metadata } from "next";
import TamilNaduHubPage from "@/views/locations/TamilNaduHubPage";

export const metadata: Metadata = {
  title: "Digital Marketing Across Tamil Nadu | Real Result Agency",
  description: "Explore Real Result Marketing's regional hubs across Tamil Nadu: Erode HQ, Namakkal, Salem, Coimbatore, and Chennai.",
  alternates: {
    canonical: "https://realresult.in/locations/tamil-nadu",
  },
  openGraph: {
    title: "Digital Marketing Across Tamil Nadu | Real Result Agency",
    description: "Explore Real Result Marketing's regional hubs across Tamil Nadu: Erode HQ, Namakkal, Salem, Coimbatore, and Chennai.",
    url: "https://realresult.in/locations/tamil-nadu",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Across Tamil Nadu | Real Result Agency",
    description: "Explore Real Result Marketing's regional hubs across Tamil Nadu: Erode HQ, Namakkal, Salem, Coimbatore, and Chennai.",
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
  "@id": "https://realresult.in/locations/tamil-nadu#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Digital Marketing Across Tamil Nadu"
  ],
  "url": "https://realresult.in/locations/tamil-nadu",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Explore Real Result Marketing's regional hubs across Tamil Nadu: Erode HQ, Namakkal, Salem, Coimbatore, and Chennai.",
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
      <TamilNaduHubPage />
    </>
  );
}
