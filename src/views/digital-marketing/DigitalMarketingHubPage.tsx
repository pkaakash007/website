"use client";

import React from "react";
import MarketingHero from "@/features/digital-marketing/components/hero/MarketingHero";
import MarketingServicesSimple from "@/features/digital-marketing/components/services/MarketingServicesSimple";
import MarketingGoalsSection from "@/features/digital-marketing/components/goals/MarketingGoalsSection";
import MarketingWhySpecialSection from "@/features/digital-marketing/components/special/MarketingWhySpecialSection";
import MarketingIndustriesSection from "@/features/digital-marketing/components/sections/MarketingIndustriesSection";
import MarketingProcessSimple from "@/features/digital-marketing/components/process/MarketingProcessSimple";
import MarketingFAQAccordion from "@/features/digital-marketing/components/faq/MarketingFAQAccordion";
import MarketingConsultationCTA from "@/features/digital-marketing/components/cta/MarketingConsultationCTA";

export const DigitalMarketingHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">

      {/* 1. Hero */}
      <MarketingHero />

      {/* 2. Digital Marketing Services & Interactive Tabs */}
      <MarketingServicesSimple />

      {/* 3. How Online Marketing Can Help You Meet Your Goal */}
      <MarketingGoalsSection />

      {/* 4. Why We Are Special From Other Digital Marketing Agencies */}
      <MarketingWhySpecialSection />

      {/* 5. 12 Industry Verticals & Sector Playbooks */}
      <div id="reach" className="scroll-mt-20">
        <MarketingIndustriesSection />
      </div>

      {/* 6. 4-Stage Growth Methodology & Target Client Profiles */}
      <MarketingProcessSimple />

      {/* 7. Frequently Asked Questions */}
      <div id="faq" className="scroll-mt-20">
        <MarketingFAQAccordion />
      </div>

      {/* 8. Executive Consultation CTA */}
      <MarketingConsultationCTA />
    </div>
  );
};

export default DigitalMarketingHubPage;


