import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause, ArrowUpRight } from "lucide-react";
import { PortfolioProject } from "../types";

interface BlurNewsStackProps {
  projects: PortfolioProject[];
  onSelectProject: (project: PortfolioProject) => void;
}

export const BlurNewsStack: React.FC<BlurNewsStackProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScrollRef = useRef(false);

  const total = projects.length;

  // ── Scroll-driven card transitions ──
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (isProgrammaticScrollRef.current) return;

    // Map scroll progress (0.0 to 1.0) cleanly across cards
    const rawIndex = Math.floor(latest * total);
    const clampedIndex = Math.min(total - 1, Math.max(0, rawIndex));

    if (clampedIndex !== activeIndexRef.current) {
      setDirection(clampedIndex > activeIndexRef.current ? "next" : "prev");
      setActiveIndex(clampedIndex);
      activeIndexRef.current = clampedIndex;
    }
  });

  // Navigate to a specific card and sync page scroll position
  const goToCard = useCallback(
    (newIndex: number) => {
      const clamped = Math.min(total - 1, Math.max(0, newIndex));
      if (clamped === activeIndexRef.current) return;

      setDirection(clamped > activeIndexRef.current ? "next" : "prev");
      setActiveIndex(clamped);
      activeIndexRef.current = clamped;

      if (trackRef.current) {
        isProgrammaticScrollRef.current = true;
        const rect = trackRef.current.getBoundingClientRect();
        const trackTop = window.scrollY + rect.top;
        const scrollableHeight = trackRef.current.offsetHeight - window.innerHeight;
        const targetScroll = trackTop + (clamped / (total - 1)) * scrollableHeight;

        window.scrollTo({ top: targetScroll, behavior: "smooth" });

        // Release programmatic lock after scroll finishes
        setTimeout(() => {
          isProgrammaticScrollRef.current = false;
        }, 600);
      }
    },
    [total]
  );

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndexRef.current + 1) % total;
    goToCard(nextIdx);
  }, [total, goToCard]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndexRef.current - 1 + total) % total;
    goToCard(prevIdx);
  }, [total, goToCard]);

  // Keyboard navigation support (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Autoplay functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, handleNext]);

  // Compute the 3 visible cards in the stack
  const card0 = projects[activeIndex];
  const card1 = projects[(activeIndex + 1) % total];
  const card2 = projects[(activeIndex + 2) % total];

  return (
    <div
      ref={trackRef}
      className="relative w-full"
      style={{
        // 65vh scroll runway per card for natural, silky pacing
        height: `${Math.max(total * 65, 300)}vh`,
      }}
    >
      {/* ── Sticky Fullscreen Viewport for Apple-style Pinned Experience ── */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none px-4">
        {/* Apple-style subtle radial ambient illumination */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.9),transparent_70%)] pointer-events-none" />

        {/* Section Headline & Dynamic Live Scroll Pill */}
        <div className="relative z-20 text-center mb-6 sm:mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.05] border border-black/[0.08] backdrop-blur-md text-[11.5px] font-mono font-medium text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-[#0071e3] animate-pulse" />
            <span>
              Card {String(activeIndex + 1).padStart(2, "0")} of {String(total).padStart(2, "0")} · Scroll to Explore
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
            Featured Productions Stack
          </h2>
        </div>

        {/* ── Main 3D Card Stage ── */}
        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
          {/* Ambient Backdrop Glow behind the Stack (matching Jitter aura) */}
          <div
            className="absolute -top-16 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full pointer-events-none transition-all duration-700 blur-[85px] opacity-75"
            style={{
              background: card1 ? card1.glowColor : "rgba(249, 115, 22, 0.45)",
            }}
          />

          <div className="relative w-[340px] sm:w-[410px] md:w-[450px] h-[480px] sm:h-[530px] md:h-[550px] flex items-center justify-center">
            {/* ── Card 2 (Bottom / 3rd in Stack) ── */}
            {card2 && (
              <motion.div
                key={`card2-${card2.id}`}
                className="absolute inset-0 rounded-[32px] sm:rounded-[38px] p-6 sm:p-8 flex flex-col justify-center overflow-hidden shadow-xl border border-white/20 cursor-pointer pointer-events-none"
                style={{
                  background: card2.cardGradient,
                  willChange: "transform, filter, opacity",
                  transform: "translate3d(0,0,0)",
                }}
                initial={{ y: -70, scale: 0.85, opacity: 0.5, filter: "blur(16px)" }}
                animate={{ y: -68, scale: 0.85, opacity: 0.55, filter: "blur(16px)" }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                <div className="text-center py-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white/80 line-clamp-2">
                    {card2.headline}
                  </h3>
                </div>
              </motion.div>
            )}

            {/* ── Card 1 (Middle / 2nd in Stack - with Depth Blur & Warm Peek Crown) ── */}
            {card1 && (
              <motion.div
                key={`card1-${card1.id}`}
                onClick={handleNext}
                title="Click or scroll to view next case study"
                className="absolute inset-0 rounded-[32px] sm:rounded-[38px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/25 cursor-pointer z-20 group"
                style={{
                  background: card1.cardGradient,
                  willChange: "transform, filter, opacity",
                  transform: "translate3d(0,0,0)",
                }}
                initial={{ y: -36, scale: 0.92, opacity: 0.85, filter: "blur(8px)" }}
                animate={{ y: -36, scale: 0.92, opacity: 0.9, filter: "blur(8px)" }}
                whileHover={{ y: -42, scale: 0.93, opacity: 0.95 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
              >
                {/* Top crown aura glow matching Jitter video */}
                <div
                  className="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-28 rounded-full blur-[32px] opacity-80 pointer-events-none"
                  style={{ background: card1.glowColor }}
                />

                <div />

                {/* Middle preview snippet */}
                <div className="relative z-10 my-auto text-center px-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                    {card1.headline}
                  </h3>
                </div>

                <div className="relative z-10 text-center text-white/60 text-xs">
                  <span className="group-hover:text-white transition-colors">Tap or Scroll to Bring Forward →</span>
                </div>
              </motion.div>
            )}

            {/* ── Card 0 (Front / Active Card - Crisp Focus, Zero Blur) ── */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`card0-${card0.id}`}
                custom={direction}
                initial={{
                  y: direction === "next" ? -28 : 36,
                  scale: 0.93,
                  opacity: 0,
                  filter: "blur(8px)",
                }}
                animate={{
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  y: direction === "next" ? 44 : -32,
                  scale: 0.95,
                  opacity: 0,
                  filter: "blur(6px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 290,
                  damping: 26,
                  mass: 0.8,
                }}
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.y < -45) handleNext();
                  if (info.offset.y > 45) handlePrev();
                }}
                className="absolute inset-0 rounded-[32px] sm:rounded-[38px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[0_35px_80px_rgba(0,0,0,0.35)] border border-white/30 z-30 touch-none select-none"
                style={{
                  background: card0.cardGradient,
                  willChange: "transform, filter, opacity",
                  transform: "translate3d(0,0,0)",
                }}
              >
                {/* Background image preview with smooth dark blend */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
                  style={{ backgroundImage: `url('${card0.image}')` }}
                />
                {/* Subtle gradient overlay to protect text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />

                {/* Center Showcase Artwork / Image Frame */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center py-2">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                    <img
                      src={card0.image}
                      alt={card0.imageAlt}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                    {card0.headline}
                  </h2>

                  {/* Action Bar: Explore Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProject(card0);
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13.5px] font-semibold text-black bg-white hover:bg-neutral-100 active:scale-95 transition-all shadow-lg cursor-pointer"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-4 h-4 text-black" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Interactive Controls Bar (Previous, Progress Indicators, Auto-Play, Next) ── */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4 z-40">
            <button
              onClick={handlePrev}
              aria-label="Previous Project"
              title="Previous (Left Arrow or Scroll Up)"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-neutral-800 shadow-md hover:shadow-lg border border-neutral-200/80 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slide Progress Dots with Dynamic Click-to-Scroll */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-neutral-200/50 backdrop-blur-md rounded-full border border-neutral-300/40">
              {projects.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => goToCard(idx)}
                  aria-label={`Jump to project ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-7 bg-neutral-900"
                      : "w-2 bg-neutral-400/60 hover:bg-neutral-600"
                  }`}
                />
              ))}
            </div>

            {/* Autoplay Toggle Button */}
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              aria-label={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
              title={isAutoPlaying ? "Pause autoplay" : "Start autoplay"}
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shadow-md hover:shadow-lg border transition-all cursor-pointer backdrop-blur-md active:scale-95 ${
                isAutoPlaying
                  ? "bg-[#0071e3] text-white border-[#0071e3]"
                  : "bg-white/80 hover:bg-white text-neutral-800 border-neutral-200/80"
              }`}
            >
              {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 translate-x-0.5" />}
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Project"
              title="Next (Right Arrow or Scroll Down)"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-neutral-800 shadow-md hover:shadow-lg border border-neutral-200/80 active:scale-95 transition-all cursor-pointer backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlurNewsStack;
