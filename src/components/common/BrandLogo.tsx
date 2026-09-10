import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/common/Image";

export interface BrandLogoProps {
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark";
  showTagline?: boolean;
  href?: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = "md",
  theme = "light",
  showTagline = true,
  href = "/",
  className = "",
}) => {
  const dimensions = {
    sm: { width: 34, height: 29, text: "text-sm", sub: "text-[8px]" },
    md: { width: 42, height: 36, text: "text-base", sub: "text-[9px]" },
    lg: { width: 56, height: 48, text: "text-xl", sub: "text-[10px]" },
  }[size];

  const content = (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Official Supplied Logo Mark - Unboxed Human Design */}
      <div className="shrink-0 flex items-center">
        <Image
          src="/brand/realresult-logo.jpeg"
          alt="Real Result Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className={`object-contain ${theme === "light" ? "mix-blend-multiply" : "rounded-md bg-white p-0.5 shadow-sm"}`}
        />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-tight uppercase leading-none transition-colors ${
            theme === "dark"
              ? "text-white"
              : "text-primary group-hover:text-gold-700"
          } ${dimensions.text}`}
        >
          REAL RESULT
        </span>
        {showTagline && (
          <span
            className={`font-semibold tracking-[0.14em] uppercase leading-none mt-1 transition-colors ${
              theme === "dark" ? "text-white/80" : "text-secondary"
            } ${dimensions.sub}`}
          >
            Marketing & Development
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="inline-flex items-center">
        {content}
      </Link>
    );
  }

  return content;
};

export default BrandLogo;
