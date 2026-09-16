import React, { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { PORTFOLIO_PROJECTS } from "@/features/portfolio/data/portfolioProjects";
import { PortfolioProject } from "@/features/portfolio/types";
import BlurNewsStack from "@/features/portfolio/components/BlurNewsStack";
import PortfolioDetailModal from "@/features/portfolio/components/PortfolioDetailModal";

export const PortfolioPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ── SEO Metadata ── */}
      <SEOHead
        title="Our Portfolio | Flagship Software & Marketing Case Studies | Real Result"
        description="Explore verified client productions by Real Result Technology & Marketing across Tamil Nadu. Featuring our iOS-inspired Blur: News Stack interactive showcase."
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
              Crafted with Rigor. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-[#0071e3] to-[#C5A059]">
                Delivered with Speed.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Explore flagship mobile applications, cloud ERPs, spatial web flagships, and autonomous ad engines deployed for enterprise and D2C leaders.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Interactive Hero Stage: Blur: News Stack [iOS] with Scroll-Driven Motion ── */}
      <section className="relative bg-[#F5F5F7] border-b border-neutral-200/80">
        <BlurNewsStack
          projects={PORTFOLIO_PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </section>

      {/* ── Companion Full Grid Showcase ── */}
      <PortfolioGridShowcase
        projects={PORTFOLIO_PROJECTS}
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* ── Project Detail Modal Drawer ── */}
      <PortfolioDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default PortfolioPage;
