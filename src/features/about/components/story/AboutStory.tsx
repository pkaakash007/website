import React from "react";
import { Container } from "@/components/layout/Container";
import { MapPin, Globe, ShieldCheck, Check } from "lucide-react";

export const AboutStory: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* ── Left: Origin & Mission ── */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-black/[0.08] p-7 sm:p-10 flex flex-col justify-between gap-8 shadow-xs">
            <div className="space-y-5">
              <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
                Our Narrative
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#1D1D1F] tracking-tight leading-tight">
                Where Engineering Precision Meets Measurable Growth
              </h2>

              <div className="space-y-4 text-[15px] text-neutral-600 leading-relaxed font-normal">
                <p>
                  Founded in Erode, Tamil Nadu, Real Result was created with an uncompromising objective: digital marketing and web engineering must deliver measurable commercial value to growing enterprises.
                </p>
                <p>
                  We eliminate the gap between marketing agencies and software developers. Every website we design is architected to convert qualified visitors into inquiries, and every ad campaign we run is tracked directly against verified phone calls and revenue.
                </p>
              </div>
            </div>

            {/* Commitments Bar */}
            <div className="pt-6 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
                    Single Direct Contact
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-normal">
                    One dedicated project engineer who oversees both your codebase and your marketing campaigns.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-neutral-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
                    Transparent Ownership
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5 leading-normal">
                    Fixed upfront milestones, zero hidden monthly retainers, and 100% client source code ownership.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Physical Hub & Standards ── */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Hub 1: Central Engineering Office */}
            <div className="flex-1 bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.08] shadow-xs flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#1D1D1F] tracking-tight">Erode Central Hub</h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                Our central office in Erode serves as our primary engineering facility and executive briefing space for businesses across Tamil Nadu.
              </p>
            </div>

            {/* Hub 2: Regional Reach */}
            <div className="flex-1 bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.08] shadow-xs flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#1D1D1F] tracking-tight">Statewide Network</h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal mb-2.5">
                Active client partnerships across commercial and manufacturing belts:
              </p>
              <p className="text-xs font-mono font-medium text-neutral-800 leading-relaxed">
                Salem · Erode · Namakkal · Paramathi Velur · Coimbatore
              </p>
            </div>

            {/* Hub 3: Engineering Standards */}
            <div className="flex-1 bg-white rounded-2xl p-6 sm:p-7 border border-black/[0.08] shadow-xs flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-neutral-100 text-neutral-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-[#1D1D1F] tracking-tight">Engineering Integrity</h3>
              </div>
              <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
                Websites engineered for sub-second mobile load speeds, strict data encryption, and transparent Google search compliance.
              </p>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
