import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ExternalLink, ShieldCheck, MapPin, Calendar, Award } from "lucide-react";
import { PortfolioProject } from "../types";
import { openLeadModal } from "@/components/common/LeadModal";

interface PortfolioDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  project,
  onClose,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[28px] sm:rounded-[36px] shadow-2xl overflow-y-auto border border-neutral-200 z-10"
        >
          {/* Top Hero Banner */}
          <div
            className="relative p-6 sm:p-10 text-white overflow-hidden"
            style={{ background: project.cardGradient }}
          >
            {/* Background Image Texture */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
              style={{ backgroundImage: `url('${project.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Tags */}
            <div className="relative z-10 flex flex-wrap items-center gap-3 mb-3 text-xs text-white/90 font-medium">
              <span className="font-semibold uppercase tracking-wider text-[#C5A059]">
                {project.categoryTag}
              </span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <MapPin className="w-3 h-3 text-white/60" />
                {project.location}
              </span>
              <span className="text-white/40">•</span>
              <span className="inline-flex items-center gap-1 text-white/80">
                <Calendar className="w-3 h-3 text-white/60" />
                {project.year}
              </span>
            </div>

            <h2 className="relative z-10 text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug max-w-xl">
              {project.headline}
            </h2>

            <p className="relative z-10 text-sm sm:text-base text-white/80 mt-2 max-w-xl">
              Client: <span className="font-semibold text-white">{project.client}</span>
            </p>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* ── Key Metrics Strip ── */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <p className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight">
                    {metric.value}
                  </p>
                  <p className="text-xs font-medium text-neutral-500 mt-0.5">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Overview & Architecture Solution ── */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Project Overview & Challenge
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {project.overview}
              </p>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/60 text-amber-900 text-sm leading-relaxed">
                <span className="font-bold">The Challenge: </span>
                {project.challenge}
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/60 text-emerald-900 text-sm leading-relaxed">
                <span className="font-bold">Engineered Solution: </span>
                {project.solution}
              </div>
            </div>

            {/* ── Core Deliverables ── */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Production Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-50 border border-neutral-200/70"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-neutral-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Tech Stack Chips ── */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Technology & Framework Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Client Testimonial ── */}
            <div className="p-5 sm:p-6 rounded-2xl bg-neutral-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-gold">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                  Verified Stakeholder Feedback
                </span>
              </div>
              <blockquote className="text-sm sm:text-base italic text-neutral-200 leading-relaxed">
                "{project.impactQuote}"
              </blockquote>
              <div className="pt-1 text-xs text-neutral-400">
                <span className="font-bold text-white">{project.quoteAuthor}</span> — {project.quoteRole}
              </div>
            </div>

            {/* ── Action Footer ── */}
            <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-neutral-500 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Client Code Ownership & SLA Guarantees</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    openLeadModal("portfolio-modal-cta");
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#0071e3] hover:bg-[#0077ED] active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  <span>Build Something Similar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PortfolioDetailModal;
