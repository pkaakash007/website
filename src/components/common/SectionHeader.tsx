import React from "react";
import { cn } from "@/utils/cn";
import { Badge } from "./Badge";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "default" | "gold" | "teal" | "dark" | "outline";
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Aeren editorial section header — large tight title, muted subtitle */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "default",
  title,
  subtitle,
  align = "center",
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mb-14 sm:mb-20",
        align === "center"
          ? "items-center text-center mx-auto max-w-3xl"
          : "items-start text-left max-w-3xl",
        className
      )}
    >
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}

      {/* Aeren-style heading: heavy weight, very tight tracking */}
      <h2
        className={cn(
          "font-bold text-[#0F0F0E] leading-[1.07]",
          "text-[clamp(2rem,4vw,3rem)] tracking-[-0.035em]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className="text-[16px] text-[rgba(15,15,14,0.55)] leading-[1.65] max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
