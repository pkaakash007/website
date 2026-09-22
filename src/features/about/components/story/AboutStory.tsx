import React from "react";
import { Container } from "@/components/layout/Container";
import { UserCheck, FileCheck2, MapPin, Globe, ShieldCheck } from "lucide-react";

export const AboutStory: React.FC = () => {
  const cities = ["Coimbatore", "Chennai", "Tiruppur", "Salem", "Madurai", "Trichy"];

  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── Left: macOS Main Application Window Card ── */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-xl rounded-[24px] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
            {/* macOS Window Header Bar */}
            <div className="px-5 py-3.5 bg-black/[0.02] border-b border-black/[0.06] flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
              </div>
              <span className="text-[11.5px] font-medium text-neutral-400 font-mono tracking-wide">
                Real Result · Operating Philosophy
              </span>
              <div className="w-12" />
            </div>

            {/* Window Content */}
            <div className="p-7 sm:p-9 space-y-6">
              <div className="space-y-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0071E3]/10 text-[#0071E3]">
                  Commercial Engineering
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1D1D1F] tracking-[-0.025em] leading-tight">
                  Where Quality Meets Commercial Performance
                </h2>
              </div>

              <div className="space-y-4 text-[15px] text-[#86868B] leading-relaxed">
                <p>
                  Founded in Erode, Tamil Nadu, Real Result was created with a clear focus: digital growth must deliver measurable commercial value to local and growing businesses.
                </p>
                <p>
                  We eliminate the gap between marketing and technical execution. Every website we design is optimized to convert visitors into inquiries, and every ad campaign we manage is built to bring verified phone calls and orders directly to your business.
                </p>
              </div>

              {/* macOS Inset Grouped Settings Rows */}
              <div className="bg-[#F5F5F7] rounded-2xl p-2 border border-black/[0.04] space-y-1.5">
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-black/[0.04] shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#0071E3] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <UserCheck className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">Single Direct Contact</h4>
                    <p className="text-xs text-[#86868B] mt-0.5 leading-normal">
                      One dedicated project manager who handles all your website, software, and marketing needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white border border-black/[0.04] shadow-xs">
                  <div className="w-9 h-9 rounded-xl bg-[#34C759] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FileCheck2 className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">Transparent Milestone Scoping</h4>
                    <p className="text-xs text-[#86868B] mt-0.5 leading-normal">
                      Clear upfront pricing with no hidden monthly fees and 100% source code ownership.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: macOS Widget Stack ── */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Widget 1: Central Hub */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[22px] p-6 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FF9500]/10 text-[#FF9500] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1D1D1F] tracking-tight">Erode Central Hub</h3>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/[0.05] text-[#86868B]">
                  Headquarters
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
                Our central office in Erode serves as our primary engineering hub and briefing space for businesses across Tamil Nadu.
              </p>
            </div>

            {/* Widget 2: Statewide Presence */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[22px] p-6 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1D1D1F] tracking-tight">Statewide Presence</h3>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                  Active
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed mb-3">
                Active client relationships across regional commercial and manufacturing centers:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-[#F5F5F7] text-neutral-700 border border-black/[0.04]"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Widget 3: Quality Standards */}
            <div className="bg-white/90 backdrop-blur-xl rounded-[22px] p-6 border border-black/[0.08] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#34C759]/10 text-[#34C759] flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-semibold text-[#1D1D1F] tracking-tight">Quality Standards</h3>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-black/[0.05] text-[#86868B]">
                  Verified
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
                Websites built for sub-second mobile speed, full data security compliance, and clean Google search guidelines.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutStory;


