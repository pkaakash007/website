import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";
import { Phone, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const HomeLeadBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-t border-neutral-200/80 relative overflow-hidden">
      <Container size="wide">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6 text-center">
          <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider block">
            Let's Work Together
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2036] tracking-tight leading-tight">
            Ready to grow your business with real results?
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Talk directly to our team in Erode. Whether you need Google Ads, local SEO, or a custom web &amp; mobile app — we'll create a clear plan tailored to your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button
              type="button"
              onClick={() => openLeadModal("home-lead-banner")}
              className="text-sm sm:text-base font-extrabold text-[#0E2036] hover:text-[#C5A059] inline-flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Request Free Consultation</span>
            </button>
            
            <a
              href={`tel:${SEO_CONFIG.displayPhone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-700 hover:text-[#0E2036] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A059]" />
              <span>Call {SEO_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeLeadBanner;
