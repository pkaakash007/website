import type { Metadata } from "next";
import GoogleAdsPage from "@/views/digital-marketing/GoogleAdsPage";

export const metadata: Metadata = {
  title: "Google Ads PPC Management Company | Real Result Agency TN",
  description: "High-ROI Google Ads campaigns managed by Real Result Marketing. Search, Performance Max, Display, and B2B PPC in Tamil Nadu.",
  alternates: {
    canonical: "https://realresult.in/digital-marketing/google-ads",
  },
  openGraph: {
    title: "Google Ads PPC Management Company | Real Result Agency TN",
    description: "High-ROI Google Ads campaigns managed by Real Result Marketing. Search, Performance Max, Display, and B2B PPC in Tamil Nadu.",
    url: "https://realresult.in/digital-marketing/google-ads",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads PPC Management Company | Real Result Agency TN",
    description: "High-ROI Google Ads campaigns managed by Real Result Marketing. Search, Performance Max, Display, and B2B PPC in Tamil Nadu.",
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
  "@id": "https://realresult.in/digital-marketing/google-ads#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Google Ads PPC Management Company"
  ],
  "url": "https://realresult.in/digital-marketing/google-ads",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "High-ROI Google Ads campaigns managed by Real Result Marketing. Search, Performance Max, Display, and B2B PPC in Tamil Nadu.",
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
      <GoogleAdsPage />
    </>
  );
}
