import type { Metadata } from "next";
import GEOPage from "@/views/digital-marketing/GEOPage";

export const metadata: Metadata = {
  title: "Generative Engine Optimization (GEO) | Real Result Agency",
  description: "Optimize your brand for citations in ChatGPT Search, Perplexity AI, Claude, and Google Gemini with Real Result Marketing.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/geo",
  },
  openGraph: {
    title: "Generative Engine Optimization (GEO) | Real Result Agency",
    description: "Optimize your brand for citations in ChatGPT Search, Perplexity AI, Claude, and Google Gemini with Real Result Marketing.",
    url: "https://realresult.in/digital-marketing/geo",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generative Engine Optimization (GEO) | Real Result Agency",
    description: "Optimize your brand for citations in ChatGPT Search, Perplexity AI, Claude, and Google Gemini with Real Result Marketing.",
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
  "@id": "https://realresult.in/digital-marketing/geo#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Generative Engine Optimization (GEO)"
  ],
  "url": "https://realresult.in/digital-marketing/geo",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Optimize your brand for citations in ChatGPT Search, Perplexity AI, Claude, and Google Gemini with Real Result Marketing.",
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
      <GEOPage />
    </>
  );
}
