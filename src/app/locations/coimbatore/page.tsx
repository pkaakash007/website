import type { Metadata } from "next";
import CoimbatorePage from "@/views/locations/CoimbatorePage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Coimbatore | Real Result",
  description: "Leading digital marketing agency in Coimbatore, Tamil Nadu. Top Google SEO, B2B PPC, and custom SaaS web applications.",
  alternates: {
    canonical: "https://realresult.in/locations/coimbatore",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Coimbatore | Real Result",
    description: "Leading digital marketing agency in Coimbatore, Tamil Nadu. Top Google SEO, B2B PPC, and custom SaaS web applications.",
    url: "https://realresult.in/locations/coimbatore",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Coimbatore | Real Result",
    description: "Leading digital marketing agency in Coimbatore, Tamil Nadu. Top Google SEO, B2B PPC, and custom SaaS web applications.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore, Tamil Nadu",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
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
  "@id": "https://realresult.in/locations/coimbatore#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Best Digital Marketing Agency in Coimbatore"
  ],
  "url": "https://realresult.in/locations/coimbatore",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Leading digital marketing agency in Coimbatore, Tamil Nadu. Top Google SEO, B2B PPC, and custom SaaS web applications.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Coimbatore",
    "addressRegion": "Tamil Nadu",
    "postalCode": "637207",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.0168,
    "longitude": 76.9558
  }
}) }}
      />
      <CoimbatorePage />
    </>
  );
}
