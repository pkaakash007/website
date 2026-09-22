import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { PortfolioProject } from "../types";

interface PortfolioGridShowcaseProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

const CATEGORIES = [
  "All Projects",
  "Mobile Applications",
  "Enterprise Cloud",
  "Growth & Digital Marketing",
  "E-Commerce Engineering",
  "Brand & Spatial Web",
];

export const PortfolioGridShowcase: React.FC<PortfolioGridShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 5)) ||
            p.categoryTag.toLowerCase().includes(activeCategory.toLowerCase().slice(0, 5))
        );

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Explore All Portfolio Deployments
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every production platform built by Real Result comes with 100% client source code ownership, sub-second latency targets, and quantifiable business revenue attribution.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-neutral-900 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-between rounded-[28px] overflow-hidden bg-neutral-50 hover:bg-white border border-neutral-200/80 hover:border-neutral-300 transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
            >
              {/* Card Image Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide text-white bg-black/60 backdrop-blur-md border border-white/15">
                    {project.categoryTag}
                  </span>
                  <span className="text-[11px] font-mono text-white/80 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Bottom of Image: Client & Location */}
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-xs font-medium text-white/80">
                    {project.client} · {project.location}
                  </p>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight group-hover:text-[#0071e3] transition-colors leading-snug">
                    {project.headline}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                {/* Metric Strip */}
                <div className="grid grid-cols-2 gap-2 pt-3 border-t border-neutral-200/60">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <p className="text-lg font-black text-neutral-900 leading-tight">
                        {m.value}
                      </p>
                      <p className="text-[11px] font-medium text-neutral-500">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Deliverables checklist snippet */}
                <div className="space-y-1.5 pt-1">
                  {project.deliverables.slice(0, 2).map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & CTA Link */}
                <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded-md text-[10.5px] font-medium bg-neutral-200/60 text-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0071e3] group-hover:translate-x-0.5 transition-transform">
                    <span>View Case</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGridShowcase;
