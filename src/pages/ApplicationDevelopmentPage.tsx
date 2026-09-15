import React, { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
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
      <SEOHead
        title="Application Development Company in Tamil Nadu | Web, Mobile & Cloud | Real Result"
        description="Real Result Technology is Tamil Nadu's premier custom software and application development company. Headquartered in Erode, delivering enterprise web apps, iOS & Android mobile apps, SaaS platforms, and AI systems."
        canonicalPath="/application-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Application & Software Development Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Technology & Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Application Engineering, Mobile App Development, Web Apps, SaaS Architecture",
          areaServed: "Tamil Nadu, India & International",
        }}
      />

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
