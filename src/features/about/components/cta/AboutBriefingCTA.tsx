import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { SEO_CONFIG } from "@/config/seo";
import { ArrowRight, MapPin, Phone, MessageSquare } from "lucide-react";

export const AboutBriefingCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="bg-white/95 backdrop-blur-xl rounded-[28px] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
          
          {/* macOS Titlebar */}
          <div className="px-5 py-3.5 bg-black/[0.02] border-b border-black/[0.06] flex items-center justify-between select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
            </div>
            <span className="text-[11.5px] font-medium text-neutral-400 font-mono tracking-wide">
              Consultation &amp; Briefing Desk
            </span>
            <div className="w-12" />
          </div>

          <div className="p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3]">
                  Direct Executive Access
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
                  Ready to Discuss Your Next Project?
                </h2>
              </div>

              <p className="text-base text-[#86868B] leading-relaxed max-w-2xl font-normal">
                Schedule a consultation with our team at our Erode office or connect with us directly to review your website, software, or digital marketing requirements.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openLeadModal("about-briefing-cta")}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  Get Started
                </button>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold text-[#1D1D1F] bg-black/[0.05] hover:bg-black/[0.08] active:scale-95 rounded-xl border border-black/[0.06] transition-all cursor-pointer"
                >
                  <span>View Our Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 text-sm font-semibold text-neutral-700 bg-white hover:bg-neutral-50 active:scale-95 rounded-xl border border-neutral-200 shadow-xs transition-all"
                >
                  Contact Erode Office
                </Link>
              </div>
            </div>

            {/* Right macOS Inset Inspector Panel */}
            <div className="lg:col-span-4 bg-[#F5F5F7] rounded-2xl p-6 border border-black/[0.04] space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#FF9500]/10 text-[#FF9500] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1D1D1F] text-sm">Central Operations</h4>
                  <span className="text-[11px] text-neutral-400">Headquarters Lab</span>
                </div>
              </div>

              <p className="text-xs text-[#86868B] leading-relaxed">
                {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, India
              </p>

              <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F]">
                  <Phone className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>{SEO_CONFIG.displayPhone}</span>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Open Mon - Sat
                </span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutBriefingCTA;


