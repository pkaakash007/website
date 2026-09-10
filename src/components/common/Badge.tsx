import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "teal" | "dark" | "outline";
  className?: string;
  icon?: boolean;
}

/** Aeren editorial badge — minimal pill chip, no heavy color */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const variantStyles: Record<string, string> = {
    default: "bg-[rgba(0,0,0,0.055)] text-[rgba(15,15,14,0.60)] border-transparent",
    gold:    "bg-[rgba(197,160,89,0.12)] text-[#8e6d2e] border-[rgba(197,160,89,0.20)]",
    teal:    "bg-[rgba(197,160,89,0.12)] text-[#8e6d2e] border-[rgba(197,160,89,0.20)]",
    dark:    "bg-[#0F0F0E] text-white border-transparent",
    outline: "bg-transparent text-[rgba(15,15,14,0.55)] border-[rgba(0,0,0,0.12)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-[0.10em] border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
