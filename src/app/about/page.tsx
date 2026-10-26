import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About Real Result | Top Digital Marketing Agency in India",
  description: "Learn about Real Result Marketing, Tamil Nadu's premier digital marketing, SEO, and custom software engineering agency.",
  alternates: {
    canonical: "https://realresult.in/about",
  },
  openGraph: {
    title: "About Real Result | Top Digital Marketing Agency in India",
    description: "Learn about Real Result Marketing, Tamil Nadu's premier digital marketing, SEO, and custom software engineering agency.",
    url: "https://realresult.in/about",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Real Result | Top Digital Marketing Agency in India",
    description: "Learn about Real Result Marketing, Tamil Nadu's premier digital marketing, SEO, and custom software engineering agency.",
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
  "@id": "https://realresult.in/about#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "About Real Result"
  ],
  "url": "https://realresult.in/about",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Learn about Real Result Marketing, Tamil Nadu's premier digital marketing, SEO, and custom software engineering agency.",
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
      <AboutPage />
    </>
  );
}
