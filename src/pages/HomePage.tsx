import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import HomeHero from "@/features/home/components/hero/HomeHero";
import PortfolioShowcase from "@/features/home/components/PortfolioShowcase";
import HorizontalMarquee from "@/features/home/components/HorizontalMarquee";
import HomePillarsDualShowcase from "@/features/home/components/pillars/HomePillarsDualShowcase";
import HomeGrowthDiscoveryStats from "@/features/home/components/HomeGrowthDiscoveryStats";
import HomeBrandImpactCaseStudies from "@/features/home/components/HomeBrandImpactCaseStudies";
import MediaVisualStrip from "@/features/home/components/MediaVisualStrip";
import HomeIndustriesGrid from "@/features/home/components/HomeIndustriesGrid";
import HomeBrandsTrustUs from "@/features/home/components/HomeBrandsTrustUs";
import HomeLeadBanner from "@/features/home/components/cta/HomeLeadBanner";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Real Result | Best Digital Marketing Agency in Namakkal & Tamil Nadu"
        description="Real Result – Best digital marketing and leading marketing agency in Namakkal. Trusted by 200+ businesses across Salem, Erode, Namakkal, Coimbatore for SEO, Google Ads, social media marketing, website design and mobile app development."
        canonicalPath="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://realresult.in/#organization",
          name: "Real Result Marketing & Technology",
          alternateName: "Real Result",
          description:
            "Real Result is the best digital marketing agency in Namakkal, Tamil Nadu. We are a leading marketing agency founded to help small and medium businesses grow online. We offer SEO, Google Ads, Social Media Marketing, Website Design, Mobile App Development, and Branding services across Namakkal, Salem, Erode, and Coimbatore.",
          url: "https://realresult.in",
          logo: "https://realresult.in/logo.png",
          image: "https://realresult.in/og-image.jpg",
          telephone: "+91-8111033390",
          email: "realresult.in@gmail.com",
          foundingDate: "2020",
          numberOfEmployees: { "@type": "QuantitativeValue", value: "15" },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Namakkal",
            addressLocality: "Namakkal",
            addressRegion: "Tamil Nadu",
            postalCode: "637001",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "11.2189",
            longitude: "78.1676",
          },
          areaServed: [
            { "@type": "City", name: "Namakkal" },
            { "@type": "City", name: "Salem" },
            { "@type": "City", name: "Erode" },
            { "@type": "City", name: "Coimbatore" },
            { "@type": "City", name: "Paramathi Velur" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Digital Marketing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "SEO – Search Engine Optimization",
                  description:
                    "Best SEO services in Namakkal. We rank your website on Google first page with proven on-page and off-page SEO strategies.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Google Ads & PPC",
                  description:
                    "High-converting Google Ads campaigns for businesses in Namakkal and Tamil Nadu.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Social Media Marketing",
                  description:
                    "Facebook, Instagram, and YouTube marketing to grow your brand presence in Namakkal.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Website Design & Development",
                  description:
                    "Professional business websites and e-commerce stores designed for Namakkal businesses.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mobile App Development",
                  description:
                    "Custom Android and iOS mobile application development for businesses across Tamil Nadu.",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Branding & Poster Design",
                  description:
                    "Creative branding, logo design, and poster design for businesses in Namakkal.",
                },
              },
            ],
          },
          sameAs: [
            "https://realresult.in",
            "https://www.instagram.com/real_result/",
            "https://www.facebook.com/profile.php?id=61585261640135",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "8",
            bestRating: "5",
          },
        }}
      />

      {/* 1. Hero: Core Agency Positioning & 3D Centerpiece */}
      <HomeHero />

      {/* 2. Our Live Work Portfolio Showcase */}
      <PortfolioShowcase />

      {/* 3. Continuous Horizontal Scroll Animation Strip */}
      <div className="w-full shrink-0 py-6 bg-white border-y border-neutral-100 overflow-hidden">
        <HorizontalMarquee />
      </div>

      {/* 4. Flagship Dual Showcase: Digital Marketing & Application Development */}
      <HomePillarsDualShowcase />

      {/* 5. Verified Growth Stats & SEO, AEO, GEO Performance Data */}
      <HomeGrowthDiscoveryStats />

      {/* 6. Why Marketing Matters for Your Brand (Iconic Brand Case Studies & Reach Data) */}
      <HomeBrandImpactCaseStudies />

      {/* 7. Brands That Trust Us: Regional Client Logos & Moving Forward Carousel */}
      <HomeBrandsTrustUs />

      {/* 8. Where We Run Your Ads (Multi-Platform Mobile Ad Showcase) */}
      <MediaVisualStrip />

      {/* 9. 12 Specialized Industries Grid with Live Category Tabs */}
      <HomeIndustriesGrid />

      {/* 10. Final High-Impact Consultation Banner */}
      <HomeLeadBanner />
    </div>
  );
};

export default HomePage;
