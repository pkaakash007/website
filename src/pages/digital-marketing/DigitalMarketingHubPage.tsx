import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import MarketingHero from "@/features/digital-marketing/components/hero/MarketingHero";
import MarketingServicesSimple from "@/features/digital-marketing/components/services/MarketingServicesSimple";
import MarketingConsultationCTA from "@/features/digital-marketing/components/cta/MarketingConsultationCTA";

export const DigitalMarketingHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Performance Marketing & Growth Agency | US, Global & B2B SaaS | Real Result"
        description="Real Result is a data-driven performance marketing and growth engineering firm. Scaling qualified pipeline, lowering CAC, and driving ROAS across Google Ads, LinkedIn ABM, Meta Performance, and Generative AI Search (GEO)."
        canonicalPath="/digital-marketing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Global Performance Marketing & Growth Engineering",
          provider: {
            "@type": "Organization",
            name: "Real Result Growth & Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Performance Marketing, Google Ads, LinkedIn ABM, Generative Engine Optimization, Full-Funnel CRO",
          areaServed: "United States, Global & India",
        }}
      />

      {/* 1. Hero with Real-Time Growth Performance Cockpit & Enterprise Platform Accreditations */}
      <MarketingHero />

      {/* 2. Full-Funnel Growth Disciplines & Official Cloud Partner Ecosystem */}
      <MarketingServicesSimple />





      {/* 6. Executive Consultation & 48-Hour Growth Diagnostic CTA */}
      <MarketingConsultationCTA />
    </div>
  );
};

export default DigitalMarketingHubPage;
