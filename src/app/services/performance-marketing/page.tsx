import type { Metadata } from "next";
import ServiceDetailPage from "@/views/services/ServiceDetailPage";

export const metadata: Metadata = {
  title: "Performance Marketing & Paid Ads Agency | Real Result TN",
  description: "Targeted ROI-focused Google Ads and Meta paid acquisition campaigns engineered to lower customer acquisition costs in Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/services/performance-marketing",
  },
  openGraph: {
    title: "Performance Marketing & Paid Ads Agency | Real Result TN",
    description: "Targeted ROI-focused Google Ads and Meta paid acquisition campaigns engineered to lower customer acquisition costs in Tamil Nadu.",
    url: "https://realresult.in/services/performance-marketing",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Marketing & Paid Ads Agency | Real Result TN",
    description: "Targeted ROI-focused Google Ads and Meta paid acquisition campaigns engineered to lower customer acquisition costs in Tamil Nadu.",
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
  "@id": "https://realresult.in/services/performance-marketing#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Performance Marketing & Paid Ads Agency"
  ],
  "url": "https://realresult.in/services/performance-marketing",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Targeted ROI-focused Google Ads and Meta paid acquisition campaigns engineered to lower customer acquisition costs in Tamil Nadu.",
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
      <ServiceDetailPage slug="performance-marketing" />
    </>
  );
}
