import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "Education Digital Marketing Services | Real Result India",
  description: "Student enrollment marketing, Google search campaigns, and digital branding for schools, colleges, and training institutes.",
  alternates: {
    canonical: "https://realresult.in/industries/education",
  },
  openGraph: {
    title: "Education Digital Marketing Services | Real Result India",
    description: "Student enrollment marketing, Google search campaigns, and digital branding for schools, colleges, and training institutes.",
    url: "https://realresult.in/industries/education",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Digital Marketing Services | Real Result India",
    description: "Student enrollment marketing, Google search campaigns, and digital branding for schools, colleges, and training institutes.",
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
  "@id": "https://realresult.in/industries/education#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Education Digital Marketing Services"
  ],
  "url": "https://realresult.in/industries/education",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Student enrollment marketing, Google search campaigns, and digital branding for schools, colleges, and training institutes.",
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
      <IndustryDetailPage slug="education" />
    </>
  );
}
