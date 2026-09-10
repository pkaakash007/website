import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { ShieldCheck, PhoneCall, Terminal, ArrowRight } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const AppDevQuotationCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-t border-black/[0.08] relative">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-xs font-semibold text-neutral-800">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
            <span>Build Your Software</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Have an Application in Mind? Let's Architect It.
          </h2>

          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Get an in-depth technical scoping document, system architecture outline, and fixed-cost milestone estimate from our lead software architects in Erode.
          </p>

          <div className="pt-3 flex flex-wrap justify-center items-center gap-4">
            <button
              type="button"
              onClick={() => openLeadModal("app-dev-cta")}
              className="px-7 py-3.5 rounded-full bg-black hover:bg-neutral-800 active:scale-95 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Request Architecture &amp; Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/contact"
              className="px-7 py-3.5 rounded-full bg-white hover:bg-neutral-50 active:scale-95 text-neutral-900 border border-black/[0.14] font-semibold text-sm shadow-2xs transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>Speak With Engineering Team</span>
            </a>
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-neutral-500 border-t border-black/[0.08]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
              <span>Full IP &amp; Source Code Ownership Handover</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#5856D6]" />
              <span>Free 30-Day Post-Launch SLA Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-[#34C759]" />
              <a href={`tel:${SEO_CONFIG.telephone}`} className="hover:text-black transition-colors">
                Direct Phone: {SEO_CONFIG.displayPhone}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevQuotationCTA;
