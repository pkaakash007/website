import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import HomeHero from "@/features/home/components/hero/HomeHero";
import HorizontalMarquee from "@/features/home/components/HorizontalMarquee";
import HomePillarsDualShowcase from "@/features/home/components/pillars/HomePillarsDualShowcase";
import HomeIndustriesGrid from "@/features/home/components/HomeIndustriesGrid";
import HomeBrandImpactCaseStudies from "@/features/home/components/HomeBrandImpactCaseStudies";
import MediaVisualStrip from "@/features/home/components/MediaVisualStrip";
import HomeLeadBanner from "@/features/home/components/cta/HomeLeadBanner";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Real Result | Digital Marketing & Application Development Company"
        description="Tamil Nadu's premier digital marketing agency and custom application development company. Headquartered in Erode, delivering top-tier SEO, GEO, Google Ads, mobile apps, and enterprise web applications."
        canonicalPath="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Real Result Marketing & Technology",
          url: "https://realresult.in",
        }}
      />

      {/* 1. Hero: Core Agency Positioning & 3D Centerpiece */}
      <HomeHero />

      {/* 2. Continuous Horizontal Scroll Animation Strip */}
      <div className="w-full shrink-0 py-6 bg-white border-y border-neutral-100 overflow-hidden">
        <HorizontalMarquee />
      </div>

      {/* 3. Flagship Dual Showcase: Digital Marketing & Application Development */}
      <HomePillarsDualShowcase />

      {/* 4. Why Marketing Matters for Your Brand (Iconic Brand Case Studies & Reach Data) */}
      <HomeBrandImpactCaseStudies />

      {/* 5. Where We Run Your Ads (Multi-Platform Mobile Ad Showcase) */}
      <MediaVisualStrip />

      {/* 6. 12 Specialized Industries Grid with Live Category Tabs */}
      <HomeIndustriesGrid />

      {/* 7. Final High-Impact Consultation Banner */}
      <HomeLeadBanner />
    </div>
  );
};

export default HomePage;
