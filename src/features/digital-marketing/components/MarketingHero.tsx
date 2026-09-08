import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  TrendingUp,
  Sparkles,
  Search,
  Globe2,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const MarketingHero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-canvas via-white to-canvas border-b border-border overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container size="wide">
        <Breadcrumbs items={[{ label: "Digital Marketing" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-6">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle">
              <TrendingUp className="w-3.5 h-3.5 text-gold-600" />
              <span>Full-Funnel Search & Performance Engine</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.08]">
              High-Velocity{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Digital Marketing
              </span>{" "}
              Engineered for Real Revenue.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed max-w-2xl font-normal">
              Dominate traditional Google search auctions, AI answer synthesis (GEO & AIO), and precision paid media. We turn online traffic into measurable contract inquiries and long-term commercial pipelines.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface border border-border/80 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>AI Search & GEO Ready</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface border border-border/80 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Zero Wasted Ad Spend</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface border border-border/80 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Tamil Nadu to Global Reach</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("digital-marketing-hero")}
                className="cursor-pointer shadow-gold-subtle"
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

            {/* Quick Metrics Bar */}
            <div className="pt-6 border-t border-border flex flex-wrap gap-8 items-center text-sm">
              <div>
                <span className="block text-2xl font-bold font-mono text-primary">4.2x</span>
                <span className="text-xs text-muted">Average Client ROAS</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold font-mono text-primary">10M+</span>
                <span className="text-xs text-muted">Organic Impressions</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold font-mono text-primary">94%</span>
                <span className="text-xs text-muted">Local 3-Pack Win Rate</span>
              </div>
            </div>
          </div>

          {/* Right Column: User's Flagship Digital Marketing Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl p-2 bg-gradient-to-tr from-gold-300 via-white to-gold-400/40 shadow-floating border border-gold-200/80">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="/images/digital-marketing-hero.jpg"
                  alt="Real Result Digital Marketing and Global Growth Engine"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Glassmorphism Floating Pill over Image */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-panel-dark text-white border border-white/10 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gold text-black flex items-center justify-center font-bold">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Full-Funnel Ecosystem</p>
                      <p className="text-[11px] text-gray-300">SEO · GEO · Paid Ads · Social</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Live Scaling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingHero;
