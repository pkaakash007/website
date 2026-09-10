import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { INSIGHT_ARTICLE_CONTENT } from "@/data/websiteContent";

export const InsightDetailPage: React.FC = () => {
  const content = INSIGHT_ARTICLE_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "What Happens After an Enquiry? | Real Result"}
        description={content.seo.meta_description || "Review the journey from a new enquiry to a useful sales conversation with five practical questions about response, information, and follow-up."}
        canonicalPath="/insights/after-the-enquiry/"
        ogType="article"
      />

      {/* Hero Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/insights/" className="hover:text-white transition-colors">Insights</Link>
            <span>/</span>
            <span className="text-white font-medium">Article</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            {content.category} · 4 min read
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            {content.h1}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal">
            {content.introduction}
          </p>
        </div>
      </section>

      {/* 5 Questions Article Body */}
      <article className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {content.sections.map((sec) => (
            <div key={sec.num} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-black text-[#0071E3] bg-blue-50 px-2.5 py-1 rounded-md">
                  0{sec.num}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                  {sec.title}
                </h2>
              </div>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed pl-10 font-normal">
                {sec.body}
              </p>
            </div>
          ))}

          {/* Your Next Step Box */}
          <div className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] mt-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Practical Audit
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 mb-3">
              {content.nextStep.title}
            </h3>
            <p className="text-base text-neutral-700 leading-relaxed font-normal">
              {content.nextStep.body}
            </p>
          </div>

          {/* Related Services */}
          <div className="pt-8 border-t border-black/[0.06]">
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">
              Related Services
            </h3>
            <div className="flex flex-wrap gap-3">
              {content.relatedServices.map((rel, idx) => (
                <Link
                  key={idx}
                  to={rel.href}
                  className="px-4 py-2 rounded-xl bg-[#F5F5F7] hover:bg-[#0071E3] hover:text-white text-xs font-semibold text-neutral-800 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

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

export default InsightDetailPage;
