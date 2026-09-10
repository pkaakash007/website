import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { WORK_CONTENT } from "@/data/websiteContent";

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = WORK_CONTENT.projects.find(p => p.slug === slug) || WORK_CONTENT.projects[0];

  if (!project) {
    return <Navigate to="/work/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={`${project.title} | Case Study | Real Result`}
        description={project.body}
        canonicalPath={`/work/${project.slug}/`}
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/work/" className="hover:text-white transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-white font-medium">{project.title}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-wide text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            Real Result Case Study · {project.category}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            {project.title}
          </h1>

          {project.h2 && (
            <p className="text-xl sm:text-2xl font-semibold text-blue-200/90 mb-6">
              {project.h2}
            </p>
          )}

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl mb-8 font-normal">
            {project.body}
          </p>

          <Link
            to="/contact/?interest=similar-project"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
          >
            Talk About a Similar Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Case Details */}
      <section className="py-20 md:py-28 bg-white border-b border-black/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Challenge */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              The Challenge
            </span>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              What was holding things back?
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              Before the engagement, potential customers encountered fragmented journeys: disconnects between advertising messaging and landing clarity, and latency between enquiry submission and direct follow-up.
            </p>
          </div>

          {/* Delivered Work */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#F9F9FB] border border-black/[0.06]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] mb-2 block">
              What We Did
            </span>
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">
              The work behind the result
            </h2>
            <ul className="space-y-3">
              {project.services.map((svc, idx) => (
                <li key={idx} className="flex items-center gap-3 text-base text-neutral-800 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-[#0071E3] shrink-0" />
                  <span>{svc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable Outcome */}
          <div className="p-8 md:p-10 rounded-3xl bg-[#0D0D12] text-white">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0071E3] bg-[#0071E3]/15 px-3 py-1 rounded-full border border-[#0071E3]/20 inline-block mb-3">
              Outcome
            </span>
            <h2 className="text-2xl font-bold text-white mb-4">
              Measurable progress
            </h2>
            <p className="text-lg text-neutral-200 leading-relaxed font-normal">
              {project.outcome}
            </p>
          </div>
        </div>
      </section>

      {/* Final Contact */}
      <section className="py-20 md:py-28 bg-[#0D0D12] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Have a similar priority in your business?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto mb-8 font-normal">
            Tell us about your current challenge and what you need to improve next.
          </p>
          <div className="flex justify-center">
            <Link
              to="/contact/?interest=similar-project"
              className="px-8 py-4 rounded-full text-base font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-xl shadow-[#0071E3]/30 transition-all hover:scale-[1.02] inline-flex items-center gap-2"
            >
              Let’s Talk Growth
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
