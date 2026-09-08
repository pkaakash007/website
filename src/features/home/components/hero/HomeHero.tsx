import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { TrendingUp, Code2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-gradient-to-b from-canvas via-white to-canvas border-b border-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Digital Marketing & Application Development Engine</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.06]">
            We Build Applications That Scale &{" "}
            <span className="font-serif italic font-normal text-gold-700">
              Marketing That Moves
            </span>
            .
          </h1>

          <p className="text-base sm:text-xl text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Real Result unifies technical software engineering with high-velocity search and media performance. Headquartered in Erode, delivering statewide dominance across Tamil Nadu and global export growth.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("home-hero-primary")}
              className="cursor-pointer font-bold shadow-gold-subtle"
            >
              Request Strategic Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#pillars"
              className="border-border text-primary hover:bg-surface"
            >
              Explore 2 Core Divisions
            </Button>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-secondary border-t border-border/80">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-gold-600" />
              <span>4.8x Average Client ROAS</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span>99.98% Cloud Availability SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Strict Mutual NDA Safeguard</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
