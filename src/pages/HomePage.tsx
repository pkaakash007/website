import React from "react";
import HeroMarketing from "@/features/home/components/HeroMarketing";
import HorizontalMarquee from "@/features/home/components/HorizontalMarquee";
import CreativeShowcase from "@/features/home/components/CreativeShowcase";
import MediaVisualStrip from "@/features/home/components/MediaVisualStrip";
import DigitalEditorialSection from "@/features/home/components/DigitalEditorialSection";
import FullWidthMediaMoodboard from "@/features/home/components/FullWidthMediaMoodboard";
import PerformanceMarketing from "@/features/home/components/PerformanceMarketing";
import AgencyScrollJourney from "@/features/home/components/AgencyScrollJourney";
import AICommunicationBridge from "@/features/home/components/AICommunicationBridge";
import WhatsAppSection from "@/features/home/components/WhatsAppSection";
import TechnologySupporting from "@/features/home/components/TechnologySupporting";
import HRSupporting from "@/features/home/components/HRSupporting";
import IndustriesGrid from "@/features/home/components/IndustriesGrid";
import CaseStudiesSection from "@/features/home/components/CaseStudiesSection";
import InsightsEditorial from "@/features/home/components/InsightsEditorial";
import FinalCampaignCTA from "@/features/home/components/FinalCampaignCTA";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero: One Dominant Art-Directed Advertising Image */}
      <HeroMarketing />

      {/* 2. Infinite Horizontal Text Marquee */}
      <HorizontalMarquee />

      {/* 3. Creative: Large Viewport Image with Hover Reveal */}
      <CreativeShowcase />

      {/* 4. Media: Horizontal Visual Strip */}
      <MediaVisualStrip />

      {/* 5. Digital: 4 Large Editorial Visual Blocks */}
      <DigitalEditorialSection />

      {/* 6. Full-Width Dramatic Moodboard */}
      <FullWidthMediaMoodboard />

      {/* 7. Performance: Single Large Visual Funnel */}
      <PerformanceMarketing />

      {/* 8. Agency Scroll Journey (Creative → Media → Digital → Performance) */}
      <AgencyScrollJourney />

      {/* 9. AI Communication: Large Visual & Flow */}
      <AICommunicationBridge />

      {/* 10. WhatsApp: Conversational Interface */}
      <WhatsAppSection />

      {/* 11. Technology: Single Visual & 8 Clean Pills */}
      <TechnologySupporting />

      {/* 12. Human Resources: Workplace Photography & 4 Clean Pills */}
      <HRSupporting />

      {/* 13. Industries: Horizontal Visual Selector */}
      <IndustriesGrid />

      {/* 14. Case Studies: Large Visual Placeholders */}
      <CaseStudiesSection />

      {/* 15. Insights: Magazine-Style Editorial List */}
      <InsightsEditorial />

      {/* 16. Final CTA: Dramatic Charcoal & Gold Directional Graphic */}
      <FinalCampaignCTA />
    </div>
  );
};

export default HomePage;
