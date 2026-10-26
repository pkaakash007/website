import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Contact Real Result | Best Digital Marketing Team in TN",
  description: "Get in touch with Real Result Marketing for SEO, Google Ads, social media marketing, and custom software development in TN.",
  alternates: {
    canonical: "https://realresult.in/contact",
  },
  openGraph: {
    title: "Contact Real Result | Best Digital Marketing Team in TN",
    description: "Get in touch with Real Result Marketing for SEO, Google Ads, social media marketing, and custom software development in TN.",
    url: "https://realresult.in/contact",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Real Result | Best Digital Marketing Team in TN",
    description: "Get in touch with Real Result Marketing for SEO, Google Ads, social media marketing, and custom software development in TN.",
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
  "@id": "https://realresult.in/contact#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Contact Real Result"
  ],
  "url": "https://realresult.in/contact",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Get in touch with Real Result Marketing for SEO, Google Ads, social media marketing, and custom software development in TN.",
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
      <ContactPage />
    </>
  );
}
