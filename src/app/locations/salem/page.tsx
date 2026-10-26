import type { Metadata } from "next";
import SalemPage from "@/views/locations/SalemPage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Salem | Real Result TN",
  description: "Premier digital marketing agency in Salem, Tamil Nadu. #1 Google SEO rankings, Google Ads, Maps local SEO & custom software.",
  alternates: {
    canonical: "https://realresult.in/locations/salem",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Salem | Real Result TN",
    description: "Premier digital marketing agency in Salem, Tamil Nadu. #1 Google SEO rankings, Google Ads, Maps local SEO & custom software.",
    url: "https://realresult.in/locations/salem",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Salem | Real Result TN",
    description: "Premier digital marketing agency in Salem, Tamil Nadu. #1 Google SEO rankings, Google Ads, Maps local SEO & custom software.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Salem, Tamil Nadu",
    "geo.position": "11.6643;78.1460",
    "ICBM": "11.6643, 78.1460",
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
  "@id": "https://realresult.in/locations/salem#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Best Digital Marketing Company in Salem"
  ],
  "url": "https://realresult.in/locations/salem",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Premier digital marketing agency in Salem, Tamil Nadu. #1 Google SEO rankings, Google Ads, Maps local SEO & custom software.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Salem",
    "addressRegion": "Tamil Nadu",
    "postalCode": "637207",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.6643,
    "longitude": 78.146
  }
}) }}
      />
      <SalemPage />
    </>
  );
}
