import type { Metadata } from "next";
import PortfolioPage from "@/views/PortfolioPage";

export const metadata: Metadata = {
  title: "Client Results & Case Studies | Real Result Marketing TN",
  description: "See proven digital marketing case studies and verified organic search results engineered by Real Result Marketing in Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/portfolio",
  },
  openGraph: {
    title: "Client Results & Case Studies | Real Result Marketing TN",
    description: "See proven digital marketing case studies and verified organic search results engineered by Real Result Marketing in Tamil Nadu.",
    url: "https://realresult.in/portfolio",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Results & Case Studies | Real Result Marketing TN",
    description: "See proven digital marketing case studies and verified organic search results engineered by Real Result Marketing in Tamil Nadu.",
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
  "@id": "https://realresult.in/portfolio#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Client Results & Case Studies"
  ],
  "url": "https://realresult.in/portfolio",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "See proven digital marketing case studies and verified organic search results engineered by Real Result Marketing in Tamil Nadu.",
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
      <PortfolioPage />
    </>
  );
}
