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
}) => {
  const variantStyles = {
    default: "bg-gray-100 text-gray-800 border-gray-200",
    gold: "bg-[#FBF7EE] text-[#8E6D2E] border-[#E8D298]",
    teal: "bg-[#FBF7EE] text-[#8E6D2E] border-[#E8D298]",
    dark: "bg-gray-900 text-white border-gray-800",
    outline: "bg-white text-gray-700 border-gray-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide border transition-colors",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
