
import React from "react";
import { Image } from "@/components/common/Image";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight, TrendingUp, Compass, Target } from "lucide-react";

export default function MarketingStatement() {
  return (
    <section className="py-20 sm:py-28 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Section Eyebrow & Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-mono uppercase tracking-widest mb-4 font-bold">
            <TrendingUp className="w-3.5 h-3.5 text-gold-600" />
            MARKETING & MEDIA
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight leading-[1.1]">
            From attention to action.
          </h2>
          <p className="text-base sm:text-xl text-secondary mt-4 leading-relaxed font-normal">
            Build visibility, reach the right audience and turn campaigns into measurable business growth.
          </p>
        </div>

        {/* Large Editorial Image Composition (Magazine / Agency Aesthetic) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Large Visual Card */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden bg-charcoal min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-8 sm:p-12 text-white border border-charcoal-border group shadow-card">
            {/* Background Graphic / Atmosphere */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-40 mix-blend-luminosity"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80')",
              }}
            />
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* Content overlay */}
            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold font-bold">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Integrated Media Dominance
              </div>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
                Campaigns engineered to capture minds and ignite market demand.
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We synchronize television broadcast presence, high-impact outdoor billboards, programmatic video, and hyper-targeted search funnels into one continuous brand story.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <Button
                  variant="gold"
                  size="md"
                  withArrow
                  onClick={() => openLeadModal("editorial-campaign-plan")}
                >
                  Start Campaign Strategy
                </Button>
                <Link to="/marketing"
                  className="text-xs font-semibold text-white/90 hover:text-gold flex items-center gap-1 transition-colors"
                >
                  Explore Channel Catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Supporting Editorial Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            {/* Top Stat/Editorial Panel */}
            <div className="p-8 rounded-3xl bg-canvas border border-border flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-muted mb-3 flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-gold-600" />
                  Strategic Direction
                </div>
                <div className="text-xl sm:text-2xl font-bold text-primary tracking-tight leading-snug">
                  Precision targeting across 10+ broadcast and digital channels.
                </div>
                <p className="text-xs text-secondary mt-3 leading-relaxed">
                  Eliminate fragmented agency handoffs. Your message travels seamlessly from prime-time television and city billboards to mobile screens and inbound sales calls.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs">
                <span className="font-mono text-muted">Full-Funnel Alignment</span>
                <span className="font-bold text-gold-700">100% Unified</span>
              </div>
            </div>

            {/* Bottom Callout Panel */}
            <div className="p-8 rounded-3xl bg-charcoal text-white border border-charcoal-border flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-gold mb-2 font-bold">
                  The Real Result Standard
                </div>
                <div className="text-lg font-bold text-white tracking-tight">
                  &ldquo;Marketing that moves audiences from passive awareness into active conversion.&rdquo;
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-charcoal-border flex items-center gap-2 text-xs text-charcoal-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Strategy • Creative • Media • Attribution
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
