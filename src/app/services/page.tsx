import type { Metadata } from "next";
import ServicesPage from "@/views/ServicesPage";

export const metadata: Metadata = {
  title: "Digital Marketing & Growth Services | Real Result Agency",
  description: "Explore Real Result's complete digital marketing, SEO, Google Ads, mobile apps, and custom enterprise software services.",
  alternates: {
    canonical: "https://realresult.in/services",
  },
  openGraph: {
    title: "Digital Marketing & Growth Services | Real Result Agency",
    description: "Explore Real Result's complete digital marketing, SEO, Google Ads, mobile apps, and custom enterprise software services.",
    url: "https://realresult.in/services",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Growth Services | Real Result Agency",
    description: "Explore Real Result's complete digital marketing, SEO, Google Ads, mobile apps, and custom enterprise software services.",
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
  "@id": "https://realresult.in/services#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Digital Marketing & Growth Services"
  ],
  "url": "https://realresult.in/services",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Explore Real Result's complete digital marketing, SEO, Google Ads, mobile apps, and custom enterprise software services.",
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
      <ServicesPage />
    </>
  );
}
