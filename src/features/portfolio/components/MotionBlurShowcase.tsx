import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";

interface MotionBlurSlide {
  id: string;
  headline: string;
  badgeLabel: string;
  badgeIcon: string;
  badgeColor: string;
  textColor: string;
  category: string;
}

const MOTION_BLUR_SLIDES: MotionBlurSlide[] = [
  {
    id: "cash-app-moments",
    headline: "Designed for\nyour moments.",
    badgeLabel: "Cash App",
    badgeIcon: "$",
    badgeColor: "bg-[#00D632] text-white",
    textColor: "text-[#063B1C]",
    category: "Fintech & Mobile Experience",
  },
  {
    id: "spatial-luxury",
    headline: "Crafted for\nspatial luxury.",
    badgeLabel: "Aura Living",
    badgeIcon: "✦",
    badgeColor: "bg-[#2563EB] text-white",
    textColor: "text-[#0F172A]",
    category: "Spatial Architecture",
  },
  {
    id: "enterprise-scale",
    headline: "Engineered for\nyour scale.",
    badgeLabel: "TexFlow Industrial",
    badgeIcon: "⚡",
    badgeColor: "bg-[#EA580C] text-white",
    textColor: "text-[#1C1917]",
    category: "Cloud ERP & Automation",
  },
  {
    id: "speed-delivery",
    headline: "Built for\nspeed & precision.",
    badgeLabel: "Velox Q-Commerce",
    badgeIcon: "🚀",
    badgeColor: "bg-[#059669] text-white",
    textColor: "text-[#064E3B]",
    category: "High-Throughput Mobile",
  },
  {
    id: "real-results",
    headline: "Delivered for\nreal businesses.",
    badgeLabel: "Real Result",
    badgeIcon: "★",
    badgeColor: "bg-neutral-900 text-white",
    textColor: "text-neutral-900",
    category: "Production Portfolio",
  },
];

export const MotionBlurShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const total = MOTION_BLUR_SLIDES.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, handleNext]);

  const currentSlide = MOTION_BLUR_SLIDES[currentIndex];

  return (
    <section className="relative py-24 sm:py-32 lg:py-36 bg-white text-neutral-900 overflow-hidden border-b border-neutral-200/80">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-b from-neutral-100/80 via-white to-transparent rounded-full blur-3xl opacity-70" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 text-center select-none">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-semibold text-neutral-700 mb-8 sm:mb-12">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Motion Blur Spec</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-500 font-mono">{currentSlide.category}</span>
        </div>

        {/* ── Main Kinetic Motion Blur Text Stage ── */}
        <div className="min-h-[220px] sm:min-h-[280px] lg:min-h-[340px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.94,
                filter: "blur(20px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -30,
                scale: 1.04,
                filter: "blur(20px)",
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="space-y-6 sm:space-y-8"
            >
              <h2
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] ${currentSlide.textColor} whitespace-pre-line`}
              >
                {currentSlide.headline}
              </h2>

              {/* Pill Badge with Spring Ingress */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.4, delay: 0.15, ease: "backOut" }}
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-sm cursor-pointer transition hover:scale-105"
              >
                <div
                  className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-xs font-bold text-sm sm:text-base ${currentSlide.badgeColor}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center text-xs font-black">
                    {currentSlide.badgeIcon}
                  </span>
                  <span>{currentSlide.badgeLabel}</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Interactive Controls ── */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200/80 active:scale-95 transition flex items-center justify-center text-neutral-800 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/60">
            {MOTION_BLUR_SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === currentIndex
                    ? "w-6 bg-neutral-900"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200/80 active:scale-95 transition flex items-center justify-center text-neutral-800 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200/80 text-xs font-medium text-neutral-700 flex items-center gap-1.5 transition cursor-pointer"
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-3 h-3" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MotionBlurShowcase;
