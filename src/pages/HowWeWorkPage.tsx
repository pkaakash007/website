import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Compass,
  CheckCircle2,
  Layers,
  FileCheck,
  Search,
  Rocket,
  BarChart3,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { HOW_WE_WORK_CONTENT } from "@/data/websiteContent";

const stepIcons = [Search, Layers, Rocket, FileCheck, BarChart3];

export const HowWeWorkPage: React.FC = () => {
  const content = HOW_WE_WORK_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Our Marketing & Growth Process | Real Result"}
        description={content.seo.meta_description || "See how Real Result turns business goals into a clear scope, connected marketing work, launch plans, and useful performance reviews."}
        canonicalPath="/how-we-work/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">How We Work</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {content.eyebrow}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {content.h1}
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8 font-normal">
            {content.body}
          </p>

          <Link
            to="/contact/"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
          >
            {content.primaryButton}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Structured Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              The 5 phases from discovery to review
            </h2>
          </div>

          <div className="space-y-8">
            {content.steps.map((step, idx) => {
              const IconComp = stepIcons[idx];
              return (
                <div
                  key={idx}
                  className="p-8 md:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-3xl sm:text-4xl font-black text-neutral-300 group-hover:text-[#0071E3] transition-colors shrink-0">
                      {step.num}
                    </span>

                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-1 block">
                        {step.name}
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {step.h2}
                      </h3>
                      <p className="text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                        {step.body}
                      </p>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.05] text-[#0071E3] flex items-center justify-center shrink-0 group-hover:bg-[#0071E3] group-hover:text-white transition-colors shadow-sm self-start md:self-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What we need from you */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 md:p-12 rounded-3xl bg-[#0D0D12] text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-4">
              Partnership Alignment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-8">
              {content.expectations.h2}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {content.expectations.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#0071E3] shrink-0" />
                  <span className="text-sm font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
            {content.finalContact.h2}
          </h2>
          <div className="flex justify-center">
            <Link
              to="/contact/"
              className="px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
            >
              {content.finalContact.button}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWorkPage;
