import React, { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { PortfolioProject } from "@/features/portfolio/types";
import MotionBlurShowcase from "@/features/portfolio/components/MotionBlurShowcase";
import PortfolioDetailModal from "@/features/portfolio/components/PortfolioDetailModal";
import ServicesOrbitCardsShowcase from "@/features/services/components/ServicesOrbitCardsShowcase";
import { SERVICES_CATALOG } from "@/pages/ServicesPage";

export const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── SEO Metadata ── */}
      <SEOHead
        title="Our Portfolio | Flagship Software & Marketing Case Studies | Real Result"
        description="Explore verified client productions by Real Result Technology & Marketing across Tamil Nadu. Featuring our Jitter-inspired Orbit: Cards and Motion Blur showcases."
        canonicalPath="/portfolio"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Real Result Production Portfolio",
          url: "https://realresult.in/portfolio",
          description: "Verified client case studies in custom application engineering, ERP cloud architecture, mobile apps, and growth marketing.",
        }}
      />

      {/* ── Header Breadcrumbs & Hero Intro ── */}
      <section className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-gradient-to-b from-neutral-50 via-white to-neutral-50/50 border-b border-neutral-200/80">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Our Portfolio" }]} />

          <div className="max-w-4xl mx-auto text-center space-y-5 mt-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.08]">
              Our Work. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-[#0071e3] to-[#C5A059]">
                Real Results for Real Businesses.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Take a look at the websites, mobile apps, business software, and digital marketing campaigns we have built for our clients.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 3D Orbit: Cards Showcase Stage ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#EEF2F8] via-[#F4F7FB] to-white border-b border-neutral-200/80 relative overflow-hidden">
        {/* Luminous atmospheric studio gradient blooms */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 right-1/4 w-[650px] h-[520px] rounded-full bg-blue-200/35 blur-[100px]" />
          <div className="absolute top-1/4 -left-10 w-[500px] h-[450px] rounded-full bg-indigo-100/45 blur-[90px]" />
          <div className="absolute -bottom-10 right-10 w-[480px] h-[380px] rounded-full bg-cyan-100/40 blur-[80px]" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] font-bold uppercase tracking-wider text-[#0071e3]">
              <span>✦</span>
              <span>Interactive Discipline Deck</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0E2036] tracking-tight">
              Orbit: Cards Showcase
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Swipe or click cards to examine our end-to-end service capabilities and production standards.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
            <ServicesOrbitCardsShowcase services={SERVICES_CATALOG} />
          </div>
        </Container>
      </section>

      {/* ── Kinetic Typography Stage: Motion Blur [Jitter Motion] ── */}
      <MotionBlurShowcase />

      {/* ── Project Detail Modal Drawer ── */}
      <PortfolioDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default PortfolioPage;
