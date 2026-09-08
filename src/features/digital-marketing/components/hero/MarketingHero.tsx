import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white border-b border-border">
      <Container size="wide">
        <Breadcrumbs items={[{ label: "Digital Marketing" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mt-6">
          {/* Left Column: Messaging & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBF7EE] border border-[#E8D298] text-[#8E6D2E] text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-gold-600 shrink-0" />
              <span>Full-Funnel Search & Performance Marketing</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              High-Velocity Digital Marketing Engineered for Real Revenue.
            </h1>

            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl font-normal">
              Dominate traditional Google search rankings, AI answer synthesis (GEO & AIO), and precision paid media. We turn search intent into verified commercial contracts and sustainable pipeline growth.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-border text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>AI Search & GEO Optimization</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-border text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Zero Wasted Ad Spend</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-border text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Tamil Nadu to Global Scaling</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("digital-marketing-hero")}
                className="cursor-pointer"
              >
                Request Free Marketing Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#services"
                className="border-border text-primary hover:bg-surface"
              >
                Explore 8 Pillars
              </Button>
            </div>

            {/* Metrics Bar */}
            <div className="pt-6 border-t border-border flex flex-wrap gap-8 items-center">
              <div>
                <span className="block text-2xl font-bold text-primary">4.2x</span>
                <span className="text-xs text-muted">Average Client ROAS</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold text-primary">10M+</span>
                <span className="text-xs text-muted">Organic Impressions</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold text-primary">94%</span>
                <span className="text-xs text-muted">Local 3-Pack Win Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: User's Flagship Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white">
              <img
                src="/images/digital-marketing-hero.jpg"
                alt="Digital Marketing and Global Growth Engine"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="p-4 bg-surface border-t border-border flex items-center justify-between text-xs text-secondary">
                <span className="font-semibold text-primary">Full-Funnel Growth Infrastructure</span>
                <span className="text-muted">SEO · GEO · Paid Ads · Social</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingHero;
