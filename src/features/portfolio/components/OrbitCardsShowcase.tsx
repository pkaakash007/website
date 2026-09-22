import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight, Sparkles, Eye } from "lucide-react";
import { PortfolioProject } from "../types";

interface OrbitCardsShowcaseProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

export const OrbitCardsShowcase: React.FC<OrbitCardsShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const total = projects.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToCard = useCallback((index: number) => {
    setActiveIndex((index + total) % total);
  }, [total]);

  // Autoplay functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4500);
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, handleNext]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  const activeProject = projects[activeIndex];

  return (
    <section className="relative py-16 sm:py-24 bg-[#F5F5F7] text-neutral-900 overflow-hidden select-none">
      {/* ── Background Subtle Studio Glow & Arc ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[1100px] h-[500px] bg-gradient-to-b from-neutral-200/50 via-white/80 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Header Callout ── */}
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Interactive Showreel</span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-700">Orbit: Cards</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 tracking-tight">
            Curated Productions in Orbit
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto">
            Click any card to bring it to center, or open the detailed architectural case study.
          </p>
        </div>

        {/* ── Orbit Cards Stage ── */}
        <div
          className="relative h-[480px] sm:h-[540px] flex items-center justify-center"
          style={{ perspective: 1200 }}
        >
          {/* Orbital Horizon Arc Line (Behind cards) */}
          <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl h-36 border-b-2 border-neutral-300/70 rounded-[50%] pointer-events-none" />

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, idx) => {
              // Calculate shortest signed distance in the circular ring
              let diff = idx - activeIndex;
              while (diff > total / 2) diff -= total;
              while (diff < -total / 2) diff += total;

              const isVisible = Math.abs(diff) <= 2;
              const isCenter = diff === 0;

              return (
                <OrbitCardItem
                  key={project.id}
                  project={project}
                  diff={diff}
                  isVisible={isVisible}
                  isCenter={isCenter}
                  onClick={() => {
                    if (isCenter) {
                      onSelectProject(project);
                    } else {
                      goToCard(idx);
                    }
                  }}
                  onViewDetails={() => onSelectProject(project)}
                />
              );
            })}
          </div>
        </div>

        {/* ── Active Project Info Ribbon ── */}
        <div className="mt-4 max-w-xl mx-auto text-center space-y-2.5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-1.5"
            >
              <div className="flex items-center justify-center gap-2 text-xs font-medium text-neutral-500">
                <span className="font-semibold text-neutral-900">{activeProject.client}</span>
                <span>•</span>
                <span>{activeProject.categoryTag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                {activeProject.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 line-clamp-1">
                {activeProject.headline}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Interactive Controls & Navigation ── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full bg-white border border-neutral-200 shadow-xs hover:bg-neutral-50 active:scale-95 transition flex items-center justify-center text-neutral-800 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white border border-neutral-200 shadow-xs">
            {projects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goToCard(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? "w-7 bg-neutral-900"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next project"
            className="w-11 h-11 rounded-full bg-white border border-neutral-200 shadow-xs hover:bg-neutral-50 active:scale-95 transition flex items-center justify-center text-neutral-800 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-3.5 py-2 rounded-full bg-white border border-neutral-200 shadow-xs text-xs font-medium text-neutral-700 hover:bg-neutral-50 active:scale-95 transition flex items-center gap-1.5 cursor-pointer"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Auto Play</span>
              </>
            )}
          </button>
        </div>

        {/* ── Studio Footer Bar (Replicating Jitter's 4-Corner Studio Spec) ── */}
        <div className="mt-12 pt-6 border-t border-neutral-200/70 flex flex-wrap items-center justify-between text-xs text-neutral-400 font-mono gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-neutral-700 tracking-wider">REAL RESULT®</span>
          </div>
          <div className="hidden sm:block text-neutral-500">
            Orbit: Cards Animation
          </div>
          <div className="text-neutral-500">
            {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} (LITE)
          </div>
          <div className="text-neutral-500">
            ENGINEERING &amp; DESIGN
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// INDIVIDUAL ORBIT CARD COMPONENT
// ─────────────────────────────────────────────────────────
interface OrbitCardItemProps {
  project: PortfolioProject;
  diff: number;
  isVisible: boolean;
  isCenter: boolean;
  onClick: () => void;
  onViewDetails: () => void;
}

const OrbitCardItem: React.FC<OrbitCardItemProps> = ({
  project,
  diff,
  isVisible,
  isCenter,
  onClick,
  onViewDetails,
}) => {
  // Spacing and angle configuration based on screen width
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const spacingX = isMobile ? 140 : 210;
  const angleStep = isMobile ? 11 : 13;

  // Exact orbital geometry
  const targetX = diff * spacingX;
  const targetY = isCenter ? -10 : Math.pow(Math.abs(diff), 1.5) * (isMobile ? 22 : 30);
  const targetRotateZ = diff * angleStep;
  const targetRotateY = -diff * 5;
  const targetScale = isCenter ? 1.04 : 1 - Math.abs(diff) * 0.08;
  const targetZIndex = 30 - Math.abs(diff) * 5;
  const targetOpacity = isVisible ? (Math.abs(diff) === 2 ? 0.75 : 1) : 0;

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        x: targetX,
        y: targetY,
        rotateZ: targetRotateZ,
        rotateY: targetRotateY,
        scale: targetScale,
        opacity: targetOpacity,
        zIndex: targetZIndex,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
        mass: 0.9,
      }}
      onClick={onClick}
      style={{
        position: "absolute",
        pointerEvents: isVisible ? "auto" : "none",
        transformOrigin: "center 85%",
      }}
      className={`group w-[230px] sm:w-[270px] lg:w-[290px] h-[340px] sm:h-[390px] lg:h-[410px] rounded-[28px] overflow-hidden bg-white border border-neutral-200/90 shadow-[0_22px_45px_-12px_rgba(0,0,0,0.18)] cursor-pointer transition-shadow hover:shadow-[0_28px_55px_-10px_rgba(0,0,0,0.25)] flex flex-col`}
    >
      {/* ── Card Image Container ── */}
      <div className="relative w-full h-[60%] sm:h-[62%] overflow-hidden bg-neutral-900">
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Client Name over image */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className="text-[11px] font-medium text-white/80 uppercase tracking-wider">
            {project.client}
          </div>
        </div>
      </div>

      {/* ── Card Content Body ── */}
      <div className="flex-1 p-4 sm:p-4.5 flex flex-col justify-between bg-white">
        <div>
          <h4 className="text-sm sm:text-base font-bold text-neutral-900 leading-snug line-clamp-1 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h4>
          <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
            {project.headline}
          </p>
        </div>

        {/* Card Footer with CTA */}
        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
          <div className="text-[11px] font-semibold text-neutral-700">
            {project.metrics?.[0] ? (
              <span className="font-bold text-emerald-600">
                {project.metrics[0].value}{" "}
                <span className="font-normal text-neutral-500">{project.metrics[0].label}</span>
              </span>
            ) : (
              <span>Verified Deployment</span>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="w-7 h-7 rounded-full bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition flex items-center justify-center text-neutral-700 shrink-0"
            title="View case study"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrbitCardsShowcase;
