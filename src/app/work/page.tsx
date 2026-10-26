import type { Metadata } from "next";
import WorkPage from "@/views/WorkPage";

export const metadata: Metadata = {
  title: "Client Portfolio & Case Studies | Real Result Marketing",
  description: "Explore our commercial portfolio of digital marketing campaigns, Google Ads, and custom web software in Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/work",
  },
  openGraph: {
    title: "Client Portfolio & Case Studies | Real Result Marketing",
    description: "Explore our commercial portfolio of digital marketing campaigns, Google Ads, and custom web software in Tamil Nadu.",
    url: "https://realresult.in/work",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Portfolio & Case Studies | Real Result Marketing",
    description: "Explore our commercial portfolio of digital marketing campaigns, Google Ads, and custom web software in Tamil Nadu.",
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
  "@id": "https://realresult.in/work#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Client Portfolio & Case Studies"
  ],
  "url": "https://realresult.in/work",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Explore our commercial portfolio of digital marketing campaigns, Google Ads, and custom web software in Tamil Nadu.",
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
      <WorkPage />
    </>
  );
}
