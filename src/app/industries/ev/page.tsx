import type { Metadata } from "next";
import IndustryDetailPage from "@/views/industries/IndustryDetailPage";

export const metadata: Metadata = {
  title: "EV & CleanTech Digital Marketing Agency | Real Result TN",
  description: "Digital acquisition, dealership network expansion, and commercial search marketing for electric vehicle manufacturers in India.",
  alternates: {
    canonical: "https://realresult.in/industries/ev",
  },
  openGraph: {
    title: "EV & CleanTech Digital Marketing Agency | Real Result TN",
    description: "Digital acquisition, dealership network expansion, and commercial search marketing for electric vehicle manufacturers in India.",
    url: "https://realresult.in/industries/ev",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EV & CleanTech Digital Marketing Agency | Real Result TN",
    description: "Digital acquisition, dealership network expansion, and commercial search marketing for electric vehicle manufacturers in India.",
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
  "@id": "https://realresult.in/industries/ev#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "EV & CleanTech Digital Marketing Agency"
  ],
  "url": "https://realresult.in/industries/ev",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Digital acquisition, dealership network expansion, and commercial search marketing for electric vehicle manufacturers in India.",
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
      <IndustryDetailPage slug="ev" />
    </>
  );
}
