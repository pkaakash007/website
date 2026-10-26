import type { Metadata } from "next";
import HomePage from "@/views/HomePage";

export const metadata: Metadata = {
  title: "Real Result | Best Digital Marketing Agency in Tamil Nadu",
  description: "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
  alternates: {
    canonical: "https://realresult.in/",
  },
  openGraph: {
    title: "Real Result | Best Digital Marketing Agency in Tamil Nadu",
    description: "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
    url: "https://realresult.in/",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Result | Best Digital Marketing Agency in Tamil Nadu",
    description: "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Paramathi Velur, Namakkal, Tamil Nadu",
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
  "@id": "https://realresult.in/#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Real Result"
  ],
  "url": "https://realresult.in/",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Paramathi Velur",
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
      <HomePage />
    </>
  );
}
