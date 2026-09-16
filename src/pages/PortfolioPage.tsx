import React, { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { PortfolioProject } from "@/features/portfolio/types";
import MotionBlurShowcase from "@/features/portfolio/components/MotionBlurShowcase";
import PortfolioDetailModal from "@/features/portfolio/components/PortfolioDetailModal";

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
