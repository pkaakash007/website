import React, { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import AppDevHero from "@/features/application-development/components/hero/AppDevHero";
import AppDevServicesGrid from "@/features/application-development/components/services/AppDevServicesGrid";
import AppDevSectionSwitcher from "@/features/application-development/components/switcher/AppDevSectionSwitcher";
import AppDevTechStackInteractive from "@/features/application-development/components/tech-stack/AppDevTechStackInteractive";
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

      {/* 1. Hero with Interactive 3D Device Visualization & Mode Switcher */}
      <AppDevHero activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 2. Content Section tailored to selection */}
      <AppDevSectionSwitcher activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 3. End-to-End Capabilities Grid */}
      <AppDevServicesGrid />

      {/* 3. Interactive Modern Tech Stack Explorer */}
      <AppDevTechStackInteractive />

      {/* 4. Actionable Quotation & Architecture Scope CTA */}
      <AppDevQuotationCTA />
    </div>
  );
};

export default ApplicationDevelopmentPage;
