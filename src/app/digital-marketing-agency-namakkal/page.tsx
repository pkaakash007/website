import type { Metadata } from "next";
import NamakkalPage from "@/views/locations/NamakkalPage";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Namakkal | Real Result",
  description: "Scale your business with Namakkal's premier digital marketing agency. Specialized in high-converting Google/Meta ads, local SEO, and custom web & app development.",
  keywords: "digital marketing agency in namakkal, digital marketing company in namakkal, local seo namakkal, web development namakkal, performance marketing namakkal",
  alternates: {
    canonical: "https://realresult.in/digital-marketing-agency-namakkal",
  },
  openGraph: {
    title: "Best Digital Marketing Agency in Namakkal | Real Result",
    description: "Unifying performance marketing campaigns with custom web engineering. See how we drive growth for businesses across the Namakkal region.",
    url: "https://realresult.in/digital-marketing-agency-namakkal",
    type: "website",
    siteName: "Real Result Marketing",
    images: [{ url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Digital Marketing Agency in Namakkal | Real Result",
    description: "Unifying performance marketing campaigns with custom web engineering. See how we drive growth for businesses across the Namakkal region.",
    images: ["https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png"],
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://realresult.in/digital-marketing-agency-namakkal#organization",
            name: "Real Result - Best Digital Marketing Agency in Namakkal",
            alternateName: [
              "Real Result",
              "Real Result Marketing",
              "Real Result Namakkal",
              "Digital Marketing Agency Namakkal",
              "SEO Company in Namakkal"
            ],
            url: "https://realresult.in/digital-marketing-agency-namakkal",
            logo: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
            image: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
            telephone: "+91-8111033390",
            email: "hello@realresult.in",
            description: "Premier digital marketing agency in Namakkal city. Delivering Google SEO, Google Maps 3-Pack ranking, Google Ads, commercial reels shooting, and enterprise custom software.",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Paramathi Velur",
              addressLocality: "Namakkal District",
              addressRegion: "TN",
              postalCode: "638182",
              addressCountry: "IN"
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 11.1111972,
              longitude: 78.0058805
            },
            hasMap: "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
            areaServed: [
              {
                "@type": "AdministrativeArea",
                "name": "Namakkal",
                "postalCode": ["637001", "637002", "637003"]
              },
              {
                "@type": "AdministrativeArea",
                "name": "Paramathi Velur",
                "postalCode": "638182"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Tiruchengode",
                "postalCode": "637211"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Rasipuram",
                "postalCode": "637408"
              },
              {
                "@type": "AdministrativeArea",
                "name": "Erode",
                "postalCode": "638011"
              }
            ]
          }),
        }}
      />
      <NamakkalPage />
    </>
  );
}
