import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import AppDevHero from "@/features/application-development/components/AppDevHero";
import AppDevServicesGrid from "@/features/application-development/components/AppDevServicesGrid";
import AppDevTechStackInteractive from "@/features/application-development/components/AppDevTechStackInteractive";
import AppDevLifecycleTimeline from "@/features/application-development/components/AppDevLifecycleTimeline";
import AppDevArchitectureHighlights from "@/features/application-development/components/AppDevArchitectureHighlights";
import AppDevPortfolioShowcase from "@/features/application-development/components/AppDevPortfolioShowcase";
import AppDevQuotationCTA from "@/features/application-development/components/AppDevQuotationCTA";

export const ApplicationDevelopmentPage: React.FC = () => {
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

      {/* 1. Hero with Uploaded Artwork & Value Highlights */}
      <AppDevHero />

      {/* 2. End-to-End Capabilities Grid (Mobile, Web, SaaS, ERP, AI, DevOps) */}
      <AppDevServicesGrid />

      {/* 3. Interactive Modern Tech Stack Explorer */}
      <AppDevTechStackInteractive />

      {/* 4. 5-Phase Development Roadmap & Timeline */}
      <AppDevLifecycleTimeline />

      {/* 5. Enterprise Architecture, Security & Performance Standards */}
      <AppDevArchitectureHighlights />

      {/* 6. Real Production Case Studies & Featured Implementations */}
      <AppDevPortfolioShowcase />

      {/* 7. Actionable Quotation & Architecture Scope CTA */}
      <AppDevQuotationCTA />
    </div>
  );
};

export default ApplicationDevelopmentPage;
