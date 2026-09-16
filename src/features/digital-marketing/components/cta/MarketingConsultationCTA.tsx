import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";

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
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-normal leading-snug">
            Ready to Grow Your Business Online?
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Talk to our team about your digital marketing goals. We will review your current website, Google Ads, and social media presence for free.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              type="button"
              onClick={() => openLeadModal("us-growth-cta-primary")}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_35px_rgba(255,255,255,0.3)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>Book a Free Call</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingConsultationCTA;
