import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Product Packaging & Graphic Design | Real Result India",
  description: "Premium product packaging, pouch box design, brochures, and retail print collateral engineered for manufacturing brands.",
  alternates: {
    canonical: "https://realresult.in/services/graphic-design-packaging",
  },
  openGraph: {
    title: "Product Packaging & Graphic Design | Real Result India",
    description: "Premium product packaging, pouch box design, brochures, and retail print collateral engineered for manufacturing brands.",
    url: "https://realresult.in/services/graphic-design-packaging",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Packaging & Graphic Design | Real Result India",
    description: "Premium product packaging, pouch box design, brochures, and retail print collateral engineered for manufacturing brands.",
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
  "@id": "https://realresult.in/services/graphic-design-packaging#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Product Packaging & Graphic Design"
  ],
  "url": "https://realresult.in/services/graphic-design-packaging",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Premium product packaging, pouch box design, brochures, and retail print collateral engineered for manufacturing brands.",
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
      <ServiceDetailPage slug="graphic-design-packaging" />
    </>
  );
}
