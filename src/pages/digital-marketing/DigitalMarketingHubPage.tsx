import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import MarketingHero from "@/features/digital-marketing/components/hero/MarketingHero";
import MarketingPillarsGrid from "@/features/digital-marketing/components/pillars/MarketingPillarsGrid";
import MarketingFunnelInteractive from "@/features/digital-marketing/components/funnel/MarketingFunnelInteractive";
import MarketingGrowthMetrics from "@/features/digital-marketing/components/metrics/MarketingGrowthMetrics";
import MarketingRegionalGlobalReach from "@/features/digital-marketing/components/reach/MarketingRegionalGlobalReach";
import MarketingFAQAccordion from "@/features/digital-marketing/components/faq/MarketingFAQAccordion";
import MarketingConsultationCTA from "@/features/digital-marketing/components/cta/MarketingConsultationCTA";

export const DigitalMarketingHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Best Digital Marketing Agency in Tamil Nadu | SEO & Growth | Real Result"
        description="Real Result Marketing is the leading digital marketing agency in Tamil Nadu. Headquartered in Erode, delivering data-backed SEO, GEO, Local SEO, Google Ads, and full-funnel revenue growth across Coimbatore, Chennai, and global markets."
        canonicalPath="/digital-marketing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digital Marketing & SEO Services Tamil Nadu",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Digital Marketing, SEO & Generative Engine Optimization",
          areaServed: "Tamil Nadu, India & International",
        }}
      />

      {/* 1. Hero with Uploaded Artwork & Key Value Propositions */}
      <MarketingHero />

      {/* 2. Eight Core Service Disciplines Grid */}
      <MarketingPillarsGrid />

      {/* 3. Interactive 4-Stage Full-Funnel Visualizer */}
      <MarketingFunnelInteractive />

      {/* 4. Verified Impact Metrics & Performance Proof */}
      <MarketingGrowthMetrics />

      {/* 5. Regional Tamil Nadu Footprint to Global Export Scaling */}
      <MarketingRegionalGlobalReach />

      {/* 6. Comprehensive FAQ Accordion */}
      <MarketingFAQAccordion />

      {/* 7. High-Intent Consultation CTA */}
      <MarketingConsultationCTA />
    </div>
  );
};

export default DigitalMarketingHubPage;
