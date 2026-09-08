import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import HomeHero from "@/features/home/components/hero/HomeHero";
import HorizontalMarquee from "@/features/home/components/HorizontalMarquee";
import HomePillarsDualShowcase from "@/features/home/components/pillars/HomePillarsDualShowcase";
import HomeGrowthEcosystem from "@/features/home/components/ecosystem/HomeGrowthEcosystem";
import CreativeShowcase from "@/features/home/components/CreativeShowcase";
import MediaVisualStrip from "@/features/home/components/MediaVisualStrip";
import HomeMetricsProof from "@/features/home/components/metrics/HomeMetricsProof";
import WhatsAppSection from "@/features/home/components/WhatsAppSection";
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

      {/* 1. Hero: Core Agency Positioning & Live Stats */}
      <HomeHero />

      {/* 2. Infinite Horizontal Text Marquee */}
      <HorizontalMarquee />

      {/* 3. Flagship Dual Showcase: Digital Marketing & Application Development */}
      <HomePillarsDualShowcase />

      {/* 4. The Synchronized Growth Machine */}
      <HomeGrowthEcosystem />

      {/* 5. Creative Showcase with Dynamic Visual Hover */}
      <CreativeShowcase />

      {/* 6. Media Visual Strip */}
      <MediaVisualStrip />

      {/* 7. Hard Numbers Telemetry */}
      <HomeMetricsProof />

      {/* 8. WhatsApp Conversational Interface */}
      <WhatsAppSection />

      {/* 9. Final High-Impact Consultation Banner */}
      <HomeLeadBanner />
    </div>
  );
};

export default HomePage;
