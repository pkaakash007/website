import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";

interface SpecialFeatureCard {
  id: string;
  title: string;
  description: string;
}

const SPECIAL_FEATURES: SpecialFeatureCard[] = [
  {
    id: "experience",
    title: "5+ Years of Experience",
    description:
      "Proven track record managing successful performance marketing campaigns and brand launches across Tamil Nadu.",
  },
  {
    id: "strategies",
    title: "Tailored Growth Strategies",
    description:
      "Custom digital playbooks built specifically around your industry, margins, and target customer behavior.",
  },
  {
    id: "experts",
    title: "Dedicated Account Team",
    description:
      "Direct collaboration with experienced media buyers and creative specialists who actively manage your campaigns.",
  },
  {
    id: "tracking",
    title: "Transparent ROI Tracking",
    description:
      "Clear live dashboards and weekly reporting so you always know your exact cost per lead and revenue return.",
  },
  {
    id: "support",
    title: "Fast, Direct Communication",
    description:
      "Quick WhatsApp and phone access to your dedicated campaign manager for rapid adjustments and ideas.",
  },
  {
    id: "results",
    title: "Data-Backed Execution",
    description:
      "Every ad rupee is guided by audience insights, continuous creative testing, and measurable business outcomes.",
  },
  {
    id: "satisfaction",
    title: "Long-Term Client Partnerships",
    description:
      "We focus on sustainable business growth, high retention, and building lasting value for your brand.",
  },
  {
    id: "tools",
    title: "Modern Marketing Tech",
    description:
      "Industry-standard tracking, analytics pixels, CRM integrations, and professional creative production.",
  },
];

export const MarketingWhySpecialSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200 relative overflow-hidden">
      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2036] tracking-tight leading-tight">
            Why We Are Special From Other Digital Marketing &amp; Branding Agencies
          </h2>
          <p className="text-base text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            We operate as your dedicated growth partner with full transparency, battle-tested playbooks, and obsessive ROI measurement.
          </p>
        </div>

        {/* 8 Feature Cards Grid (2 rows of 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SPECIAL_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className="bg-[#FBFBFA] rounded-2xl p-6 sm:p-7 border border-neutral-200/80 hover:border-neutral-300 hover:bg-white hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-xs font-semibold text-neutral-400 tracking-wider uppercase mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#0E2036] mb-2.5 tracking-tight group-hover:text-[#C5A059] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Media Callout CTA Banner */}
        <div className="mt-14 sm:mt-18 max-w-4xl mx-auto">
          <div className="relative bg-[#0E2036] text-white rounded-3xl p-8 sm:p-12 text-center overflow-hidden shadow-xl">
            {/* Subtle luxury ambient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <p className="text-xs sm:text-sm font-semibold text-[#DCC195] tracking-widest uppercase">
                Your Customers Are Already Online
              </p>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight max-w-2xl mx-auto">
                Don’t make them wait for you. Build your category authority today.
              </h3>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openLeadModal("Why We Are Special Section")}
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-neutral-950 hover:bg-neutral-100 font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 active:scale-95 cursor-pointer"
                >
                  Speak with an Expert Today →
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingWhySpecialSection;
