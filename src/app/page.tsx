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

const homeSchemaGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://realresult.in/#website",
      "url": "https://realresult.in/",
      "name": "Real Result Marketing",
      "description": "Tamil Nadu's premier digital marketing, SEO, GEO, Google Ads, and custom software development agency.",
      "publisher": {
        "@id": "https://realresult.in/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "ImageObject",
      "@id": "https://realresult.in/#logo",
      "url": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
      "contentUrl": "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
      "caption": "Real Result Marketing Official Logo",
      "inLanguage": "en-IN"
    },
    {
      "@type": [
        "LocalBusiness",
        "ProfessionalService",
        "Organization"
      ],
      "@id": "https://realresult.in/#organization",
      "name": "Real Result Marketing",
      "legalName": "Real Result Marketing & Technology Solutions Private Limited",
      "alternateName": [
        "Real Result",
        "Real Result Digital Marketing",
        "Real Result in Tamil Nadu"
      ],
      "url": "https://realresult.in/",
      "logo": {
        "@id": "https://realresult.in/#logo"
      },
      "image": {
        "@id": "https://realresult.in/#logo"
      },
      "description": "Real Result Marketing is a performance-driven digital marketing agency and custom software development company headquartered in Paramathi Velur, Namakkal, serving Salem, Erode, Coimbatore, and all of Tamil Nadu. Delivering ROI-focused SEO, GEO, Google Ads, social media marketing, and AI marketing solutions.",
      "telephone": "+91-8111033390",
      "email": "realresult.dev@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "High School Building, 12/32, Paramathi Velur, Padamudipalayam",
        "addressLocality": "Paramathi Velur, Namakkal",
        "addressRegion": "Tamil Nadu",
        "postalCode": "638182",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 11.1111972,
        "longitude": 78.0058805
      },
      "hasMap": "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "18:30"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Namakkal",
          "sameAs": "https://en.wikipedia.org/wiki/Namakkal"
        },
        {
          "@type": "City",
          "name": "Salem",
          "sameAs": "https://en.wikipedia.org/wiki/Salem,_Tamil_Nadu"
        },
        {
          "@type": "City",
          "name": "Erode",
          "sameAs": "https://en.wikipedia.org/wiki/Erode"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Paramathi Velur",
          "sameAs": "https://en.wikipedia.org/wiki/Paramathi_Velur"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Tamil Nadu",
          "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu"
        }
      ],
      "sameAs": [
        "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
        "https://www.facebook.com/people/Real-Result-Marketing-Digital-Ads-Expert/61585261640135/",
        "https://x.com/RealResult_in",
        "https://www.linkedin.com/in/real-result-50445a442/",
        "https://www.youtube.com/channel/UCicDHwdRdTSOdJSwpFXkuSg",
        "https://www.instagram.com/real_result_/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Marketing & Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/digital-marketing/seo/#service",
              "name": "Search Engine Optimization (SEO)",
              "serviceType": "Search Engine Optimization",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "Data-driven SEO strategies, keyword ranking, technical SEO audits, and backlink authority building for businesses in Namakkal, Salem, Erode, and Tamil Nadu.",
              "url": "https://realresult.in/digital-marketing/seo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/digital-marketing/geo/#service",
              "name": "Generative Engine Optimization (GEO)",
              "serviceType": "Generative Engine Optimization",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "Optimizing brand entity presence for generative AI engines including ChatGPT Search, Perplexity AI, Google AI Overviews, and Claude.",
              "url": "https://realresult.in/digital-marketing/geo"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/digital-marketing/google-ads/#service",
              "name": "Google Ads & PPC Management",
              "serviceType": "Pay Per Click Advertising",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "High-intent Google Search, Display, and Performance Max ad campaigns engineered for immediate lead generation and positive ROAS.",
              "url": "https://realresult.in/digital-marketing/google-ads"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/digital-marketing/social-media-marketing/#service",
              "name": "Social Media Marketing",
              "serviceType": "Social Media Advertising",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "Meta ads (Instagram & Facebook), video creatives, community engagement, and brand scaling for local and regional businesses.",
              "url": "https://realresult.in/digital-marketing/social-media-marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/services/website-design/#service",
              "name": "Website Design and Development",
              "serviceType": "Web Development",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "Fast, responsive, mobile-first websites and web applications built with modern frameworks, high Core Web Vitals, and conversion architecture.",
              "url": "https://realresult.in/services/website-design"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/digital-marketing/#service",
              "name": "Digital Marketing Solutions",
              "serviceType": "Digital Marketing Strategy",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "Comprehensive 360-degree digital marketing funnels, CRO, email marketing, and regional growth consulting across Tamil Nadu.",
              "url": "https://realresult.in/digital-marketing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "@id": "https://realresult.in/digital-marketing/aio/#service",
              "name": "AI Marketing Solutions",
              "serviceType": "Artificial Intelligence Marketing",
              "provider": {
                "@id": "https://realresult.in/#organization"
              },
              "description": "AI-powered automated marketing, intelligent lead follow-up, programmatic SEO, and smart business process automation.",
              "url": "https://realresult.in/digital-marketing/aio"
            }
          }
        ]
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://realresult.in/#webpage",
      "url": "https://realresult.in/",
      "name": "Real Result | Best Digital Marketing Agency in Tamil Nadu",
      "isPartOf": {
        "@id": "https://realresult.in/#website"
      },
      "about": {
        "@id": "https://realresult.in/#organization"
      },
      "description": "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
      "inLanguage": "en-IN"
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemaGraph) }}
      />
      <HomePage />
    </>
  );
}
