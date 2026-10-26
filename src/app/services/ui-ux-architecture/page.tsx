import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "UI UX Design & App Architecture Services | Real Result",
  description: "Professional UI UX design, Figma screen wireframing, and interactive mobile app prototypes built for Tamil Nadu brands.",
  alternates: {
    canonical: "https://realresult.in/services/ui-ux-architecture",
  },
  openGraph: {
    title: "UI UX Design & App Architecture Services | Real Result",
    description: "Professional UI UX design, Figma screen wireframing, and interactive mobile app prototypes built for Tamil Nadu brands.",
    url: "https://realresult.in/services/ui-ux-architecture",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI UX Design & App Architecture Services | Real Result",
    description: "Professional UI UX design, Figma screen wireframing, and interactive mobile app prototypes built for Tamil Nadu brands.",
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
  "@id": "https://realresult.in/services/ui-ux-architecture#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "UI UX Design & App Architecture Services"
  ],
  "url": "https://realresult.in/services/ui-ux-architecture",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Professional UI UX design, Figma screen wireframing, and interactive mobile app prototypes built for Tamil Nadu brands.",
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
      <ServiceDetailPage slug="ui-ux-architecture" />
    </>
  );
}
