import type { Metadata } from "next";
import HowWeWorkPage from "@/views/HowWeWorkPage";

export const metadata: Metadata = {
  title: "Our Marketing & Development Process | Real Result Agency",
  description: "Discover Real Result Marketing's 4-step framework for predictable search ranking, high-ROI paid ads, and custom software delivery.",
  alternates: {
    canonical: "https://realresult.in/how-we-work",
  },
  openGraph: {
    title: "Our Marketing & Development Process | Real Result Agency",
    description: "Discover Real Result Marketing's 4-step framework for predictable search ranking, high-ROI paid ads, and custom software delivery.",
    url: "https://realresult.in/how-we-work",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Marketing & Development Process | Real Result Agency",
    description: "Discover Real Result Marketing's 4-step framework for predictable search ranking, high-ROI paid ads, and custom software delivery.",
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
  "@id": "https://realresult.in/how-we-work#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Our Marketing & Development Process"
  ],
  "url": "https://realresult.in/how-we-work",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Discover Real Result Marketing's 4-step framework for predictable search ranking, high-ROI paid ads, and custom software delivery.",
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
      <HowWeWorkPage />
    </>
  );
}
