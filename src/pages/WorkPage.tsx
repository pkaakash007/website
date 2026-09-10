import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { WORK_CONTENT } from "@/data/websiteContent";

export const WorkPage: React.FC = () => {
  const content = WORK_CONTENT;
  const [selectedFilter, setSelectedFilter] = useState("All Work");

  const filteredProjects = selectedFilter === "All Work"
    ? content.projects
    : content.projects.filter(p => p.category === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] text-[#1D1D1F]">
      <SEOHead
        title={content.seo.seo_title || "Selected Marketing & Development Work | Real Result"}
        description={content.seo.meta_description || "Explore selected marketing and development projects, including the business challenge, work delivered, and outcomes supported by evidence."}
        canonicalPath="/work/"
      />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-[#0D0D12] via-[#12121A] to-[#181824] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,113,227,0.22),rgba(255,255,255,0))] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Our Work</span>
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
            to="/contact/?interest=project"
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold bg-[#0071E3] hover:bg-[#0077ED] text-white shadow-lg shadow-[#0071E3]/30 transition-all hover:scale-[1.02]"
          >
            {content.primaryButton}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Filter Tabs & Projects Grid */}
      <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {content.filters.map((filter, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === filter
                    ? "bg-[#0071E3] text-white shadow-sm"
                    : "bg-[#F5F5F7] text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-8 rounded-3xl bg-[#F9F9FB] border border-black/[0.06] hover:border-[#0071E3] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    {project.isConcept && (
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        {project.label || "Concept project"}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#0071E3] transition-colors">
                    {project.title}
                  </h3>

                  {project.h2 && (
                    <p className="text-sm font-semibold text-neutral-700 mb-3">
                      {project.h2}
                    </p>
                  )}

                  <p className="text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
                    {project.body}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-black/[0.04] mb-6">
                    <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                      Outcome / Finding
                    </span>
                    <p className="text-xs text-neutral-900 font-medium leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#0071E3]">
                  <Link to={`/work/${project.slug}/`} className="hover:underline inline-flex items-center gap-1">
                    <span>{project.isConcept ? "Explore the Concept" : "See the Project"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-neutral-400 font-normal">{project.services.length} services</span>
                </div>
              </div>
            ))}
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

export default WorkPage;
