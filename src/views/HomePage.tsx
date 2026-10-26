"use client";

import React, { lazy, Suspense } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import HomeHero from "@/features/home/components/hero/HomeHero";
import HomeBrandsTrustUs from "@/features/home/components/HomeBrandsTrustUs";

// Code-split below-the-fold modules to minimize initial main-thread work and eliminate unused JS
const PortfolioShowcase = lazy(() => import("@/features/home/components/PortfolioShowcase"));
const HorizontalMarquee = lazy(() => import("@/features/home/components/HorizontalMarquee"));
const HomePillarsDualShowcase = lazy(() => import("@/features/home/components/pillars/HomePillarsDualShowcase"));
const HomeGrowthDiscoveryStats = lazy(() => import("@/features/home/components/HomeGrowthDiscoveryStats"));
const HomeBrandImpactCaseStudies = lazy(() => import("@/features/home/components/HomeBrandImpactCaseStudies"));
const MediaVisualStrip = lazy(() => import("@/features/home/components/MediaVisualStrip"));
const HomeIndustriesGrid = lazy(() => import("@/features/home/components/HomeIndustriesGrid"));
const HomeLeadBanner = lazy(() => import("@/features/home/components/cta/HomeLeadBanner"));

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Real Result | Best Digital Marketing Agency in Tamil Nadu"
        description="Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency."
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
          logo: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
          image: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
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
            "https://search.google.com/local/writereview?placeid=ChIJCeVk0hrVqzsRp7foI1ppMUo",
            "https://www.youtube.com/channel/UCicDHwdRdTSOdJSwpFXkuSg",
            "https://x.com/RealResult_in",
            "https://twitter.com/RealResult_in",
            "https://www.linkedin.com/in/real-result-50445a442/",
            "https://www.instagram.com/real_result_/",
            "https://www.facebook.com/people/Real-Result-Marketing-Digital-Ads-Expert/61585261640135/",
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

      {/* 2. Brands That Trust Us: Above-the-fold Social Proof Marquee */}
      <HomeBrandsTrustUs />

      {/* Below-the-fold sections streamed asynchronously */}
      <Suspense fallback={<div className="min-h-[120px]" />}>
        {/* 3. Our Live Work Portfolio Showcase */}
        <PortfolioShowcase />

        {/* 4. Continuous Horizontal Scroll Animation Strip */}
        <div className="w-full shrink-0 py-6 bg-white border-y border-neutral-100 overflow-hidden">
          <HorizontalMarquee />
        </div>

        {/* 5. Flagship Dual Showcase: Digital Marketing & Application Development */}
        <div id="pillars" className="scroll-mt-20">
          <HomePillarsDualShowcase />
        </div>

        {/* 6. Verified Growth Stats & SEO, AEO, GEO Performance Data */}
        <HomeGrowthDiscoveryStats />

        {/* 7. Why Marketing Matters for Your Brand (Iconic Brand Case Studies & Reach Data) */}
        <HomeBrandImpactCaseStudies />

        {/* 8. Where We Run Your Ads (Multi-Platform Mobile Ad Showcase) */}
        <MediaVisualStrip />

        {/* 9. 12 Specialized Industries Grid with Live Category Tabs */}
        <HomeIndustriesGrid />

        {/* 10. Final High-Impact Consultation Banner */}
        <HomeLeadBanner />
      </Suspense>
    </div>
  );
};

export default HomePage;
