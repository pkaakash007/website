"use client";

import React, { useState } from "react";
import AppDevHero from "@/features/application-development/components/hero/AppDevHero";
import AppDevServicesGrid from "@/features/application-development/components/services/AppDevServicesGrid";
import AppDevLifecycleTimeline from "@/features/application-development/components/roadmap/AppDevLifecycleTimeline";
import AppDevArchitectureHighlights from "@/features/application-development/components/architecture/AppDevArchitectureHighlights";
import AppDevTechStackInteractive from "@/features/application-development/components/tech-stack/AppDevTechStackInteractive";
import AppDevFAQ from "@/features/application-development/components/faq/AppDevFAQ";
import AppDevQuotationCTA from "@/features/application-development/components/cta/AppDevQuotationCTA";

export const ApplicationDevelopmentPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"web" | "mobile">("mobile");

  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero with Interactive Device Visualization & Mode Switcher */}
      <AppDevHero activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 2. End-to-End Capabilities Grid */}
      <AppDevServicesGrid />

      {/* 3. 4-Phase Development Lifecycle */}
      <AppDevLifecycleTimeline />

      {/* 5. Security, Speed & 100% IP Transfer Guarantees */}
      <AppDevArchitectureHighlights />

      {/* 6. Interactive Modern Tech Stack Explorer */}
      <AppDevTechStackInteractive />

      {/* 7. Frequently Asked Questions (Simple English) */}
      <AppDevFAQ />

      {/* 8. Actionable Quotation & Architecture Scope CTA */}
      <AppDevQuotationCTA />
    </div>
  );
};

export default ApplicationDevelopmentPage;
