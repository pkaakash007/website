import type { Metadata } from "next";
import NamakkalPage from "@/views/locations/NamakkalPage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Namakkal | Real Result",
  description: "Best digital marketing company in Namakkal and Paramathi Velur. #1 Google SEO rankings, Google Ads, and poultry farm ERP.",
  alternates: {
    canonical: "https://realresult.in/locations/namakkal",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Namakkal | Real Result",
    description: "Best digital marketing company in Namakkal and Paramathi Velur. #1 Google SEO rankings, Google Ads, and poultry farm ERP.",
    url: "https://realresult.in/locations/namakkal",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Namakkal | Real Result",
    description: "Best digital marketing company in Namakkal and Paramathi Velur. #1 Google SEO rankings, Google Ads, and poultry farm ERP.",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Namakkal, Tamil Nadu, 637001",
    "geo.position": "11.2189;78.1674",
    "ICBM": "11.2189, 78.1674",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://realresult.in/locations/namakkal#organization",
  "name": "Real Result - Best Digital Marketing Agency in Namakkal",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result Namakkal",
    "Best Digital Marketing Company in Namakkal"
  ],
  "url": "https://realresult.in/locations/namakkal",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Best digital marketing company in Namakkal city and district. #1 Google SEO rankings, Google Ads, Maps 3-Pack, and enterprise software.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Salem Road",
    "addressLocality": "Namakkal",
    "addressRegion": "Tamil Nadu",
    "postalCode": "637001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 11.2189,
    "longitude": 78.1674
  },
  "areaServed": [
    "Namakkal",
    "Salem Road",
    "R.P. Pudur",
    "Tiruchengode",
    "Rasipuram",
    "Paramathi Velur",
    "Mohanur",
    "Sendamangalam"
  ]
}) }}
      />
      <NamakkalPage />
    </>
  );
}
