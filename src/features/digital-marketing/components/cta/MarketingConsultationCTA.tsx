import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";

export const MarketingConsultationCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(0,122,255,0.4) 0%, rgba(88,86,214,0.3) 50%, transparent 70%)",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Ready to Build Your Predictable Revenue Engine?
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Schedule a confidential 30-minute growth briefing with our senior performance engineers. We'll audit your current ad spend, competitor keyword reach, and attribution tracking with zero obligation.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openLeadModal("us-growth-cta-primary")}
            >
              Book Executive Growth Briefing
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => openLeadModal("us-growth-cta-audit")}
              className="!text-white !border-white/20 hover:!bg-white/10"
              withArrow={false}
            >
              Request 48-Hour Pipeline Audit
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingConsultationCTA;
