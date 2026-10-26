import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Cloud Hosting & Website Security Services | Real Result",
  description: "Enterprise cloud hosting, daily automated offsite backups, SSL certificates, and WAF security shields for corporate sites.",
  alternates: {
    canonical: "https://realresult.in/services/cyber-security-cloud",
  },
  openGraph: {
    title: "Cloud Hosting & Website Security Services | Real Result",
    description: "Enterprise cloud hosting, daily automated offsite backups, SSL certificates, and WAF security shields for corporate sites.",
    url: "https://realresult.in/services/cyber-security-cloud",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Hosting & Website Security Services | Real Result",
    description: "Enterprise cloud hosting, daily automated offsite backups, SSL certificates, and WAF security shields for corporate sites.",
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
  "@id": "https://realresult.in/services/cyber-security-cloud#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Cloud Hosting & Website Security Services"
  ],
  "url": "https://realresult.in/services/cyber-security-cloud",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Enterprise cloud hosting, daily automated offsite backups, SSL certificates, and WAF security shields for corporate sites.",
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
      <ServiceDetailPage slug="cyber-security-cloud" />
    </>
  );
}
