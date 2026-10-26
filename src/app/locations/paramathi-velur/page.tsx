import type { Metadata } from "next";
import ParamathiVelurPage from "@/views/locations/ParamathiVelurPage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Company in Paramathi Velur | RR",
  description: "Best digital marketing company in Paramathi Velur, Namakkal. Local SEO, Google Ads, Google Maps 3-pack, and web development.",
  alternates: {
    canonical: "https://realresult.in/locations/paramathi-velur",
  },
  openGraph: {
    title: "Best Digital Marketing Company in Paramathi Velur | RR",
    description: "Best digital marketing company in Paramathi Velur, Namakkal. Local SEO, Google Ads, Google Maps 3-pack, and web development.",
    url: "https://realresult.in/locations/paramathi-velur",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Company in Paramathi Velur | RR",
    description: "Best digital marketing company in Paramathi Velur, Namakkal. Local SEO, Google Ads, Google Maps 3-pack, and web development.",
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
  "@type": "LocalBusiness",
  "@id": "https://realresult.in/locations/paramathi-velur#organization",
  "name": "Real Result Marketing & Technology Solutions",
  "alternateName": [
    "Real Result",
    "Real Result Marketing",
    "Real Result in Tamil Nadu",
    "Best Digital Marketing Company in Paramathi Velur"
  ],
  "url": "https://realresult.in/locations/paramathi-velur",
  "logo": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "image": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
  "telephone": "+91-8111033390",
  "email": "hello@realresult.in",
  "description": "Best digital marketing company in Paramathi Velur, Namakkal. Local SEO, Google Ads, Google Maps 3-pack, and web development.",
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
      <ParamathiVelurPage />
    </>
  );
}
