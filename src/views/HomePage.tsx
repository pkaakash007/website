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
