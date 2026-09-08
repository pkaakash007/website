import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { TrendingUp, Code2, ShieldCheck } from "lucide-react";

export const HomeHero: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBF7EE] border border-[#E8D298] text-[#8E6D2E] text-xs font-semibold">
            <span>Digital Marketing & Application Development Company</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
            We Build Applications That Scale & Marketing That Delivers Real Revenue.
          </h1>

          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
            Real Result unifies technical software engineering with high-velocity search and media performance. Headquartered in Erode, delivering statewide market dominance across Tamil Nadu and international export growth.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("home-hero-primary")}
              className="cursor-pointer font-bold"
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
          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-secondary border-t border-border">
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
