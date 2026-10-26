import type { Metadata } from "next";
import ErodeHQPage from "@/views/locations/ErodeHQPage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Erode | Real Result HQ",
  description: "Looking for the best digital marketing company in Erode? Real Result provides #1 Google SEO, Google Ads & custom software.",
  alternates: {
    canonical: "https://realresult.in/locations/erode",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Erode | Real Result HQ",
    description: "Looking for the best digital marketing company in Erode? Real Result provides #1 Google SEO, Google Ads & custom software.",
    url: "https://realresult.in/locations/erode",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Erode | Real Result HQ",
    description: "Looking for the best digital marketing company in Erode? Real Result provides #1 Google SEO, Google Ads & custom software.",
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
  "@type": "LocalBusiness",
  "@id": "https://realresult.in/locations/erode#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Best Digital Marketing Company in Erode"
  ],
  "url": "https://realresult.in/locations/erode",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Looking for the best digital marketing company in Erode? Real Result provides #1 Google SEO, Google Ads & custom software.",
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
      <ErodeHQPage />
    </>
  );
}
