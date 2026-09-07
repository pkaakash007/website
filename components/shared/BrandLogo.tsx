"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  showTagline?: boolean;
  href?: string;
  className?: string;
}

export default function BrandLogo({
  size = "md",
  theme = "light",
  showTagline = true,
  href = "/",
  className = "",
}: BrandLogoProps) {
  // Dimensions based on size (maintains exact 1038:884 proportion)
  const dimensions = {
    sm: { width: 34, height: 29, text: "text-sm", sub: "text-[8px]" },
    md: { width: 42, height: 36, text: "text-base", sub: "text-[9px]" },
    lg: { width: 56, height: 48, text: "text-xl", sub: "text-[10px]" },
  }[size];

  const content = (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Official Supplied Logo Mark */}
      <div className="relative flex items-center justify-center p-0.5 rounded-lg bg-white shadow-2xs border border-border/80 group-hover:border-gold/40 transition-colors shrink-0 overflow-hidden">
        <Image
          src="/brand/realresult-logo.jpeg"
          alt="Real Result Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight uppercase leading-tight transition-colors ${
              theme === "dark"
                ? "text-white group-hover:text-gold"
                : "text-primary group-hover:text-gold-600"
            } ${dimensions.text}`}
          >
            REAL RESULT
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
        </div>
        {showTagline && (
          <span
            className={`font-semibold tracking-[0.18em] uppercase leading-none -mt-0.5 ${
              theme === "dark" ? "text-gold-300/80" : "text-secondary font-mono"
            } ${dimensions.sub}`}
          >
            MARKETING • MEDIA • GROWTH
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
}
