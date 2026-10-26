import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Content Marketing & Digital PR Agency | Real Result TN",
  description: "Authoritative content marketing, corporate copywriting, and digital PR campaigns that elevate brand authority across India.",
  alternates: {
    canonical: "https://realresult.in/services/content-marketing-pr",
  },
  openGraph: {
    title: "Content Marketing & Digital PR Agency | Real Result TN",
    description: "Authoritative content marketing, corporate copywriting, and digital PR campaigns that elevate brand authority across India.",
    url: "https://realresult.in/services/content-marketing-pr",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing & Digital PR Agency | Real Result TN",
    description: "Authoritative content marketing, corporate copywriting, and digital PR campaigns that elevate brand authority across India.",
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
  "@id": "https://realresult.in/services/content-marketing-pr#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Content Marketing & Digital PR Agency"
  ],
  "url": "https://realresult.in/services/content-marketing-pr",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Authoritative content marketing, corporate copywriting, and digital PR campaigns that elevate brand authority across India.",
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
      <ServiceDetailPage slug="content-marketing-pr" />
    </>
  );
}
