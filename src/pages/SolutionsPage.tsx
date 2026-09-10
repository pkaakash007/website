import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  MousePointerClick,
  Clock,
  RotateCcw,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { SOLUTIONS_CONTENT } from "@/data/websiteContent";

const obstacleIcons = [Search, MousePointerClick, Clock, RotateCcw, Rocket];

export const SolutionsPage: React.FC = () => {
  const content = SOLUTIONS_CONTENT;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Business Growth & Marketing Solutions | Real Result"}
        description={content.seo.meta_description || "Find a starting point for more relevant enquiries, stronger conversion journeys, customer retention, and better marketing follow-up with Real Result."}
        canonicalPath="/solutions/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Growth Solutions</span>
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

      {/* 5 Obstacles Section */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              Identify Your Challenge
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Start with the obstacle; we’ll connect the work
            </h2>
          </div>

          <div className="space-y-8">
            {content.obstacles.map((obs, idx) => {
              const IconComp = obstacleIcons[idx];
              return (
                <div
                  key={obs.id}
                  className="p-8 md:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 group"
                >
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-black/[0.06] text-[#0071E3] flex items-center justify-center group-hover:bg-[#0071E3] group-hover:text-white transition-colors shadow-sm">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                        Obstacle 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-[#0071E3] transition-colors">
                      {obs.quote}
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6 font-normal">
                      {obs.body}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-neutral-500 mr-1">
                        Recommended Services:
                      </span>
                      {obs.services.map((svc, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-white px-3 py-1 rounded-full border border-black/[0.06] text-neutral-800 shadow-sm"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0">
                    <Link
                      to={obs.buttonHref}
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white border border-black/[0.08] hover:bg-[#0071E3] hover:text-white hover:border-[#0071E3] text-sm font-semibold text-neutral-900 transition-all shadow-sm group-hover:shadow-md"
                    >
                      <span>{obs.buttonLabel}</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
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

export default SolutionsPage;
