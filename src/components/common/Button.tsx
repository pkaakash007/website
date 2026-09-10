import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/utils/cn";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "teal" | "ghost" | "outline" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  withDiagonalArrow?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  withArrow = false,
  withDiagonalArrow = false,
  icon,
  className,
  children,
  ...props
}) => {
  /* Aeren editorial: all buttons are pill-shaped, minimal */
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none active:scale-[0.97] disabled:opacity-40 disabled:pointer-events-none cursor-pointer letter-spacing-tight";

  const variants = {
    /* Dark oval pill — Aeren primary */
    primary:
      "bg-[#0F0F0E] text-white hover:bg-[#1C1C1A] shadow-sm",
    /* Subtle border ghost */
    secondary:
      "bg-transparent text-[#0F0F0E] border border-[rgba(0,0,0,0.14)] hover:bg-[rgba(0,0,0,0.04)]",
    /* Gold accent (minimal, not gradient-heavy) */
    gold:
      "bg-[#c5a059] text-[#0F0F0E] font-bold hover:brightness-105 shadow-sm",
    teal:
      "bg-[#c5a059] text-[#0F0F0E] font-bold hover:brightness-105 shadow-sm",
    /* Charcoal filled */
    dark:
      "bg-[#111110] text-white hover:bg-black",
    /* Text ghost */
    ghost:
      "bg-transparent text-[rgba(15,15,14,0.60)] hover:text-[#0F0F0E]",
    /* Border outline */
    outline:
      "bg-transparent text-[#0F0F0E] border border-[rgba(0,0,0,0.14)] hover:border-[rgba(0,0,0,0.30)] hover:bg-[rgba(0,0,0,0.03)]",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-2.5 gap-2",
    lg: "text-[15px] px-8 py-3.5 gap-2.5",
  };

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withDiagonalArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
          className={cn("group", base, variants[variant], sizes[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={cn("group", base, variants[variant], sizes[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn("group", base, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
