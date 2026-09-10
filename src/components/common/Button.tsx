import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "brand"
    | "brand-white"
    | "brand-dark"
    | "secondary"
    | "gold"
    | "brand-gold"
    | "brand-glass"
    | "teal"
    | "ghost"
    | "outline"
    | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  withDiagonalArrow?: boolean;
  withWatermark?: boolean;
  showWatermark?: boolean; // alias for withWatermark
  withBrandMark?: boolean;
  showEmblem?: boolean; // alias for withBrandMark
  icon?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Real Result Signature Brand & Common Button
 * Executive "Human Design" & Ultra-Premium Luxury aesthetic:
 * - Fluid, ergonomic pill geometry with surface tension highlights
 * - White color theme with signature brand logo colors (Deep Brand Navy #132C4B & Brand Gold #E5B456)
 * - Clean front (no front logo badge)
 * - Elegant watermark brand mark embedded on the right corner
 * - Liquid glass light refraction on hover
 * - Tactile micro-interactions (press physics, forward arrow travel)
 */
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  withArrow,
  withDiagonalArrow = false,
  withWatermark,
  showWatermark,
  withBrandMark,
  showEmblem,
  icon,
  className,
  children,
  ...props
}) => {
  const base =
    "group relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden select-none transition-all duration-200 ease-out active:scale-[0.98] active:translate-y-0 disabled:opacity-40 disabled:pointer-events-none cursor-pointer tracking-tight";

  /* Premium Responsive Sizing */
  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5 tracking-tight",
    md: "text-[13.5px] sm:text-sm px-5 sm:px-6 py-2.5 sm:py-2.5 gap-2 tracking-tight",
    lg: "text-sm sm:text-[15px] px-7 sm:px-8 py-3 sm:py-3.5 gap-2.5 tracking-tight",
  };

  /* ── 1. Flagship Dual-Tone Brand Button (Deep Brand Navy + Metallic Gold) ── */
  const brandPrimaryStyle =
    "text-white bg-gradient-to-b from-[#152B46] via-[#0E2036] to-[#071322] border border-[#C5A059]/50 shadow-[0_4px_16px_-2px_rgba(7,19,34,0.4),0_0_0_1px_rgba(197,160,89,0.3),inset_0_1px_0.5px_rgba(255,255,255,0.22)] hover:from-[#1C385C] hover:via-[#132B47] hover:to-[#0A1A2E] hover:border-[#E5B456] hover:shadow-[0_8px_26px_-2px_rgba(7,19,34,0.5),0_0_24px_rgba(229,180,86,0.35)] hover:-translate-y-0.5";

  /* ── 2. Crisp Luxury Apple White Button (Brand Navy Text + Gold Border Accent) ── */
  const brandSecondaryStyle =
    "text-[#0E2036] bg-white hover:bg-[#F9F9FB] border border-[#0E2036]/15 hover:border-[#C5A059]/70 shadow-[0_2px_6px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_6px_18px_rgba(197,160,89,0.15)] hover:-translate-y-0.5";

  /* ── 3. Pure Metallic Gold Luxury Button ── */
  const brandGoldStyle =
    "text-[#0A1628] bg-gradient-to-b from-[#F7DB91] via-[#DDBE6C] to-[#B08A42] border border-white/60 shadow-[0_4px_16px_rgba(197,160,89,0.35),inset_0_1px_1.5px_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(0,0,0,0.2)] hover:from-[#FAE3A4] hover:via-[#E5C778] hover:to-[#BD954C] hover:shadow-[0_8px_26px_rgba(197,160,89,0.5)] hover:-translate-y-0.5";

  /* ── 4. White on Dark Button (For Dark Themes/Footers) ── */
  const brandWhiteStyle =
    "text-[#0E2036] bg-white hover:bg-[#F6F7F9] border border-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:-translate-y-0.5";

  /* ── 5. Dark Dual-Tone Button (Brand Navy & Gold) ── */
  const brandDarkStyle =
    "text-white bg-gradient-to-b from-[#152B46] via-[#0E2036] to-[#081320] border border-[#C5A059]/50 shadow-[0_4px_16px_-2px_rgba(0,0,0,0.5),0_0_0_1px_rgba(197,160,89,0.3),inset_0_1px_1px_rgba(255,255,255,0.25)] hover:border-[#E5B456] hover:shadow-[0_8px_28px_-2px_rgba(0,0,0,0.7),0_0_24px_rgba(229,180,86,0.35)] hover:-translate-y-0.5";

  /* ── 6. Frosted Glass Button ── */
  const brandGlassStyle =
    "text-[#0E2036] bg-white/90 hover:bg-white backdrop-blur-md border border-[#C5A059]/20 shadow-[0_2px_10px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] hover:border-[#E5B456]/70 hover:shadow-[0_6px_20px_rgba(197,160,89,0.15)] hover:-translate-y-0.5";

  const variants = {
    primary: brandPrimaryStyle,
    brand: brandPrimaryStyle,
    secondary: brandSecondaryStyle,
    "brand-white": brandWhiteStyle,
    "brand-dark": brandDarkStyle,
    dark: brandDarkStyle,
    gold: brandGoldStyle,
    "brand-gold": brandGoldStyle,
    teal: brandGoldStyle,
    "brand-glass": brandGlassStyle,
    outline:
      "bg-transparent text-[#0E2036] border border-[#C5A059]/40 hover:border-[#E5B456] hover:bg-[#0E2036]/[0.05] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-neutral-600 hover:text-[#0E2036] hover:bg-black/[0.05]",
  };

  const isPrimary = variant === "primary" || variant === "brand";
  const isDark = variant === "brand-dark" || variant === "dark" || isPrimary;
  const isSecondary = variant === "secondary";
  const isGold = variant === "gold" || variant === "brand-gold" || variant === "teal";
  const isWhite = variant === "brand-white";

  /* Front logo emblem is removed as requested */
  const hasBrandMark = false;

  /* Watermark with better visibility: enabled by default for all brand buttons */
  const hasWatermark =
    withWatermark !== undefined
      ? withWatermark
      : showWatermark !== undefined
        ? showWatermark
        : variant !== "ghost" && variant !== "outline";

  const hasArrow =
    withArrow !== undefined
      ? withArrow
      : !withDiagonalArrow;

  const content = (
    <>
      {/* ── 1. Subtle Shimmer Sweep on Hover for Primary ── */}
      {isPrimary && (
        <span
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent"
          aria-hidden="true"
        />
      )}

      {/* ── 2. Brand Mark Watermark with BOTH Official Colors (Navy Blue & Gold) ── */}
      {hasWatermark && (
        <span
          className={cn(
            "pointer-events-none absolute top-1/2 -translate-y-1/2 select-none transition-all duration-300 ease-out transform group-hover:scale-110",
            size === "sm"
              ? "w-6 h-6 sm:w-7 sm:h-7 right-1.5"
              : size === "lg"
                ? "w-9 h-9 sm:w-11 sm:h-11 right-2.5 sm:right-3.5"
                : "w-7 h-7 sm:w-9 sm:h-9 right-2 sm:right-3",
            isDark
              ? "opacity-85 group-hover:opacity-100"
              : "opacity-45 group-hover:opacity-75"
          )}
          aria-hidden="true"
        >
          <img
            src="/brand/realresult-mark-transparent.png"
            alt="Real Result"
            className={cn(
              "w-full h-full object-contain transition-all duration-300",
              isDark
                ? "filter drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] drop-shadow-[0_0_2px_rgba(229,180,86,0.45)]"
                : "filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
            )}
            loading="lazy"
          />
        </span>
      )}

      {/* ── 3. Optional Custom Icon ── */}
      {icon && <span className="relative z-10 shrink-0">{icon}</span>}

      {/* ── 4. Button Text Content ── */}
      <span className="relative z-10 tracking-[-0.015em] whitespace-nowrap">
        {children}
      </span>

      {/* ── 5. Interactive Disclosure Arrow (Brand Gold Accent) ── */}
      {withDiagonalArrow && (
        <ArrowUpRight
          className={cn(
            "relative z-10 w-4 h-4 shrink-0 transition-all duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            isPrimary || isDark
              ? "text-[#E5B456] group-hover:text-[#F7DB91]"
              : isGold
                ? "text-[#0A1628]"
                : "text-[#0E2036]/70 group-hover:text-[#C5A059]"
          )}
        />
      )}
      {hasArrow && !withDiagonalArrow && (
        <ArrowRight
          className={cn(
            "relative z-10 w-4 h-4 shrink-0 transition-all duration-200 ease-out group-hover:translate-x-1",
            isPrimary || isDark
              ? "text-[#E5B456] group-hover:text-[#F7DB91]"
              : isGold
                ? "text-[#0A1628]"
                : "text-[#0E2036]/70 group-hover:text-[#C5A059]"
          )}
        />
      )}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(base, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={cn(base, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type || "button"}
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};

export { BrandButton } from "./BrandButton";
export default Button;
