import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  PhoneCall,
  Code2,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { ALL_SERVICES_HUB_CONTENT } from "@/data/websiteContent";

export const ServicesPage: React.FC = () => {
  const content = ALL_SERVICES_HUB_CONTENT;
  const pillarIcons = [TrendingUp, PhoneCall, Code2];

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Digital Marketing & Business Growth Services | Real Result"}
        description={content.seo.meta_description || "Explore Real Result’s digital marketing, calling and messaging, websites, apps, and software services. Choose the support for your next growth goal."}
        canonicalPath="/services/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">All Services</span>
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

      {/* 3 Core Pillars */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              3 Integrated Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Connected capability around your growth goal
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {content.pillars.map((pillar, idx) => {
              const IconComp = pillarIcons[idx];
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.05] text-[#0071E3] flex items-center justify-center mb-6 group-hover:bg-[#0071E3] group-hover:text-white transition-colors shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#0071E3] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                      {pillar.body}
                    </p>

                    <div className="p-4 rounded-xl bg-white border border-black/[0.04] mb-8">
                      <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                        Covered Specialities
                      </span>
                      <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                        {pillar.services}
                      </p>
                    </div>
                  </div>

                  <Link
                    to={pillar.href}
                    className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white border border-black/[0.08] hover:bg-[#0071E3] hover:text-white hover:border-[#0071E3] text-sm font-semibold text-neutral-900 transition-all shadow-sm"
                  >
                    <span>{pillar.linkLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Not sure where to start? */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-white border border-black/[0.06] shadow-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
              Diagnostic Starting Point
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
              {content.notSure.h2}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
              {content.notSure.body}
            </p>
            <Link
              to={content.notSure.link.href}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/25 transition-all hover:scale-[1.02]"
            >
              {content.notSure.link.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center">
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

export default ServicesPage;
