import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import type { ServiceOffering } from "@/pages/ServicesPage";
import { ServiceSketchIllustration } from "@/features/digital-marketing/components/services/ServiceSketchIllustration";

interface ServicesOrbitCardsShowcaseProps {
  services: ServiceOffering[];
  onSelectService?: (service: ServiceOffering) => void;
}

export const ServicesOrbitCardsShowcase: React.FC<ServicesOrbitCardsShowcaseProps> = ({
  services,
  onSelectService,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const total = services.length;

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToCard = useCallback(
    (index: number) => {
      setActiveIndex((index + total) % total);
    },
    [total]
  );

  const scrollToService = useCallback(
    (service: ServiceOffering) => {
      if (onSelectService) {
        onSelectService(service);
        return;
      }
      const targetElement = document.getElementById(service.id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [onSelectService]
  );

  // Autoplay functionality
  useEffect(() => {
    autoPlayTimerRef.current = setInterval(() => {
      handleNext();
    }, 4200);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [handleNext]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  return (
    <div className="relative w-full pt-1 pb-2 text-neutral-900 select-none overflow-x-clip">
      {/* ── Ambient Studio Radial Light (Soft Brand Blue Tint) ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center -z-10">
        <div className="w-[420px] h-[260px] bg-gradient-to-b from-blue-50/70 via-slate-50/60 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      {/* ── Orbit 3D Cards Stage ── */}
      <div
        className="relative h-[340px] sm:h-[370px] flex items-center justify-center overflow-visible"
        style={{ perspective: 1000 }}
      >
        {/* Orbital Horizon Arc Line (Behind cards) */}
        <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 w-[85%] max-w-md h-24 border-b-2 border-neutral-200/60 rounded-[50%] pointer-events-none" />

        {/* Cards Container */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible">
          {services.map((service, idx) => {
            // Calculate shortest signed distance in the circular ring
            let diff = idx - activeIndex;
            while (diff > total / 2) diff -= total;
            while (diff < -total / 2) diff += total;

            const isVisible = Math.abs(diff) <= 2;
            const isCenter = diff === 0;

            return (
              <ServiceOrbitCardItem
                key={service.id}
                service={service}
                diff={diff}
                isVisible={isVisible}
                isCenter={isCenter}
                onClick={() => {
                  if (isCenter) {
                    scrollToService(service);
                  } else {
                    goToCard(idx);
                  }
                }}
                onNavigate={() => scrollToService(service)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// INDIVIDUAL ORBIT SERVICE CARD COMPONENT (APPLE iOS GLASS UI)
// ─────────────────────────────────────────────────────────
interface ServiceOrbitCardItemProps {
  service: ServiceOffering;
  diff: number;
  isVisible: boolean;
  isCenter: boolean;
  onClick: () => void;
  onNavigate: () => void;
}

const ServiceOrbitCardItem: React.FC<ServiceOrbitCardItemProps> = ({
  service,
  diff,
  isVisible,
  isCenter,
  onClick,
  onNavigate,
}) => {
  // Spacing and angle configuration
  const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
  const spacingX = isMobile ? 85 : 120;
  const angleStep = isMobile ? 7 : 8.5;

  // Orbital geometry
  const targetX = diff * spacingX;
  const targetY = isCenter ? -4 : Math.pow(Math.abs(diff), 1.35) * (isMobile ? 12 : 16);
  const targetRotateZ = diff * angleStep;
  const targetRotateY = -diff * 3.5;
  const targetScale = isCenter ? 1.02 : 1 - Math.abs(diff) * 0.1;
  const targetZIndex = 30 - Math.abs(diff) * 5;
  const targetOpacity = isVisible ? (Math.abs(diff) === 2 ? 0.25 : 1) : 0;

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
      className="group w-[190px] sm:w-[210px] lg:w-[225px] h-[285px] sm:h-[315px] lg:h-[335px] cursor-pointer relative"
    >
      {/* ── 3D Subtle Ambient Backside Shadow Pod (Application Brand Blue Theme) ── */}
      <div
        className={`absolute -inset-1 sm:-inset-1.5 rounded-[32px] blur-lg pointer-events-none transition-all duration-500 ${
          isCenter
            ? "bg-gradient-to-b from-[#1d4ed8]/20 to-[#2563eb]/14 opacity-100 scale-100"
            : "bg-[#1d4ed8]/6 opacity-40 scale-95"
        }`}
      />

      {/* ── Card Main Glass Body ── */}
      <div
        className={`w-full h-full rounded-[30px] overflow-hidden relative flex flex-col justify-between p-4 transition-shadow ${
          isCenter
            ? "bg-white/95 backdrop-blur-2xl backdrop-saturate-150 border border-white/90 ring-1 ring-black/[0.05] shadow-[0_22px_45px_-10px_rgba(29,78,216,0.16),0_6px_16px_-4px_rgba(14,32,54,0.06),inset_0_1.5px_1px_0_rgba(255,255,255,1)]"
            : "bg-white/80 backdrop-blur-xl backdrop-saturate-150 border border-white/70 ring-1 ring-black/[0.04] shadow-[0_14px_30px_-8px_rgba(14,32,54,0.08),inset_0_1px_1px_0_rgba(255,255,255,0.9)] hover:bg-white/90"
        }`}
      >
        {/* iOS Specular Glass Highlight */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/60 via-white/20 to-transparent pointer-events-none rounded-t-[30px]" />

        {/* Center Hand-Drawn Sketch Illustration */}
        <div className="relative z-10 flex-1 w-full flex items-center justify-center my-auto pointer-events-none">
          <ServiceSketchIllustration
            serviceId={service.id}
            className="w-full flex items-center justify-center p-0 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* iOS Glass Footer with subtle blur divider - only visible for current active center card */}
        <motion.div
          animate={{ opacity: isCenter ? 1 : 0, y: isCenter ? 0 : 4 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full pt-2.5 border-t border-black/[0.06] shadow-[0_1px_0_0_rgba(255,255,255,0.8)] flex flex-col items-center justify-center text-center pointer-events-none"
        >
          <div className="text-xs sm:text-[13px] font-bold tracking-[-0.01em] text-[#0A0D14] leading-snug line-clamp-2">
            {service.title}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServicesOrbitCardsShowcase;
