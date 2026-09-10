import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import HomeHero from "@/features/home/components/hero/HomeHero";
import PortfolioShowcase from "@/features/home/components/PortfolioShowcase";
import HorizontalMarquee from "@/features/home/components/HorizontalMarquee";
import HomePillarsDualShowcase from "@/features/home/components/pillars/HomePillarsDualShowcase";
import CreativeShowcase from "@/features/home/components/CreativeShowcase";
import MediaVisualStrip from "@/features/home/components/MediaVisualStrip";
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

      {/* 1. Hero: Core Agency Positioning & 3D Centerpiece */}
      <HomeHero />

      {/* 2. Portfolio Showcase: Our Live Work Portfolio (Next to Hero) */}
      <PortfolioShowcase />

      {/* 3. Continuous Horizontal Scroll Animation Strip */}
      <div className="w-full shrink-0 py-6 bg-white border-y border-neutral-100 overflow-hidden">
        <HorizontalMarquee />
      </div>

      {/* 4. Flagship Dual Showcase: Digital Marketing & Application Development */}
      <HomePillarsDualShowcase />

      {/* 5. Creative Showcase with Dynamic Visual Hover */}
      <CreativeShowcase />

      {/* 6. Media Visual Strip */}
      <MediaVisualStrip />

      {/* 7. WhatsApp Conversational Interface */}
      <WhatsAppSection />

      {/* 8. Final High-Impact Consultation Banner */}
      <HomeLeadBanner />
    </div>
  );
};

export default HomePage;
