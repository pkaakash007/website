import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "Ecommerce Digital Marketing Agency | Real Result Online",
  description: "Scale direct-to-consumer sales, lower CPA, and maximize return on ad spend for online retail stores and D2C brands in India.",
  alternates: {
    canonical: "https://realresult.in/industries/ecommerce",
  },
  openGraph: {
    title: "Ecommerce Digital Marketing Agency | Real Result Online",
    description: "Scale direct-to-consumer sales, lower CPA, and maximize return on ad spend for online retail stores and D2C brands in India.",
    url: "https://realresult.in/industries/ecommerce",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Digital Marketing Agency | Real Result Online",
    description: "Scale direct-to-consumer sales, lower CPA, and maximize return on ad spend for online retail stores and D2C brands in India.",
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
  "@id": "https://realresult.in/industries/ecommerce#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Ecommerce Digital Marketing Agency"
  ],
  "url": "https://realresult.in/industries/ecommerce",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Scale direct-to-consumer sales, lower CPA, and maximize return on ad spend for online retail stores and D2C brands in India.",
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
      <IndustryDetailPage slug="ecommerce" />
    </>
  );
}
