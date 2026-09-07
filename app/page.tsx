import React from "react";
import HeroMarketing from "@/components/home/HeroMarketing";
import HorizontalMarquee from "@/components/home/HorizontalMarquee";
import CreativeShowcase from "@/components/home/CreativeShowcase";
import MediaVisualStrip from "@/components/home/MediaVisualStrip";
import DigitalEditorialSection from "@/components/home/DigitalEditorialSection";
import FullWidthMediaMoodboard from "@/components/home/FullWidthMediaMoodboard";
import PerformanceMarketing from "@/components/home/PerformanceMarketing";
import AgencyScrollJourney from "@/components/home/AgencyScrollJourney";
import AICommunicationBridge from "@/components/home/AICommunicationBridge";
import WhatsAppSection from "@/components/home/WhatsAppSection";
import TechnologySupporting from "@/components/home/TechnologySupporting";
import HRSupporting from "@/components/home/HRSupporting";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import InsightsEditorial from "@/components/home/InsightsEditorial";
import FinalCampaignCTA from "@/components/home/FinalCampaignCTA";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero: One Dominant Art-Directed Advertising Image (No 3D) */}
      <HeroMarketing />

      {/* 2. Infinite Horizontal Text Marquee */}
      <HorizontalMarquee />

      {/* 3. Creative: Large Viewport Image with Hover Reveal (IDEAS PEOPLE REMEMBER.) */}
      <CreativeShowcase />

      {/* 4. Media: Horizontal Visual Strip (BE EVERYWHERE YOUR AUDIENCE LOOKS.) */}
      <MediaVisualStrip />

      {/* 5. Digital: 4 Large Editorial Visual Blocks (TURN ATTENTION INTO ACTION.) */}
      <DigitalEditorialSection />

      {/* 6. Full-Width Dramatic Moodboard (ONE CAMPAIGN. MANY PLACES TO BE SEEN.) */}
      <FullWidthMediaMoodboard />

      {/* 7. Performance: Single Large Visual Funnel (CREATIVITY GETS ATTENTION. PERFORMANCE MOVES IT.) */}
      <PerformanceMarketing />

      {/* 8. Agency Scroll Journey (Creative → Media → Digital → Performance) */}
      <AgencyScrollJourney />

      {/* 9. AI Communication: Large Visual & Flow (15% Weight) */}
      <AICommunicationBridge />

      {/* 10. WhatsApp: Conversational Interface (TURN REACH INTO CONVERSATION.) */}
      <WhatsAppSection />

      {/* 11. Technology: Single Visual & 8 Clean Pills (10% Weight) */}
      <TechnologySupporting />

      {/* 12. Human Resources: Workplace Photography & 4 Clean Pills (5% Weight) */}
      <HRSupporting />

      {/* 13. Industries: Horizontal Visual Selector (Zero 11-card grid) */}
      <IndustriesGrid />

      {/* 14. Case Studies: Large Visual Placeholders (WORK THAT MOVES PEOPLE.) */}
      <CaseStudiesSection />

      {/* 15. Insights: Magazine-Style Editorial List (01 to 04) */}
      <InsightsEditorial />

      {/* 16. Final CTA: Dramatic Charcoal & Gold Directional Graphic */}
      <FinalCampaignCTA />
    </div>
  );
}
