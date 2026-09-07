import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "teal" | "dark" | "outline";
  className?: string;
  icon?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  icon = true,
}) => {
  const variantStyles = {
    default: "bg-surface border-border text-secondary",
    gold: "bg-gold-50 border-gold/40 text-gold-800 font-semibold shadow-gold-subtle",
    teal: "bg-gold-50 border-gold/40 text-gold-800 font-semibold shadow-gold-subtle",
    dark: "bg-charcoal border-charcoal-border text-white",
    outline: "bg-white/90 backdrop-blur-sm border-border text-secondary",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium uppercase tracking-wider border shadow-2xs transition-all duration-200",
        variantStyles[variant],
        className
      )}
    >
      {icon && (
        <span className="text-[9px] text-gold-600 select-none">✦</span>
      )}
      {children}
    </span>
  );
};

export default Badge;
