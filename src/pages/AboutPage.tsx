import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { ABOUT_CONTENT } from "@/data/websiteContent";

export const AboutPage: React.FC = () => {
  const content = ABOUT_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "About Real Result | Digital Marketing & Growth"}
        description={content.seo.meta_description || "Real Result is a marketing company connecting digital campaigns, customer communication, and development around business growth goals."}
        canonicalPath="/about/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">About Real Result</span>
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

      {/* Focus & Point of View */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="p-8 md:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
                Our Focus
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {content.focus.h2}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {content.focus.body}
              </p>
            </div>

            <div className="p-8 md:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-3 block">
                Our Point of View
              </span>
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                {content.pointOfView.h2}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {content.pointOfView.body}
              </p>
            </div>
          </div>

          {/* How We Work Core Tenets */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#0D0D12] text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-4">
              Working Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-8">
              How we work with businesses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.howWeWork.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                  <span className="text-2xl font-bold text-[#0071E3] block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Block */}
      <section className="py-20 md:py-28 bg-[#F5F5F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
            The Team
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 mb-4">
            {content.teamBlock.h2}
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto font-normal leading-relaxed">
            {content.teamBlock.lead}
          </p>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            {content.finalContact.h2}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            {content.finalContact.body}
          </p>
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

export default AboutPage;
