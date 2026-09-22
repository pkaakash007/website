import React from "react";
import { cn } from "@/utils/cn";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "teal" | "dark" | "outline";
  className?: string;
  icon?: boolean;
}

export const Badge: React.FC<BadgeProps> = () => null;

export default Badge;
