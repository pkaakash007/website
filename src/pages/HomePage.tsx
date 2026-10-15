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
        title="Real Result | Best Digital Marketing Agency & Company in Tamil Nadu"
        description="Tamil Nadu's best digital marketing agency and custom software company serving Salem, Erode, Namakkal, Paramathi Velur, and Coimbatore. Delivering top-tier SEO, Google Ads, website design, and mobile app development."
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
