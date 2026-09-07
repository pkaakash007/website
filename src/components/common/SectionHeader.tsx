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
        "flex flex-col gap-3.5 mb-12 sm:mb-16",
        align === "center" ? "items-center text-center mx-auto max-w-3xl" : "items-start text-left max-w-3xl",
        className
      )}
    >
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
