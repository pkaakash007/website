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
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow-card-hover border border-transparent",
    secondary:
      "bg-white text-primary border border-border hover:border-gold/40 hover:bg-surface shadow-subtle",
    gold:
      "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black font-semibold hover:brightness-105 shadow-gold-subtle hover:shadow-gold-glow border border-gold-300/40",
    teal:
      "bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-black font-semibold hover:brightness-105 shadow-gold-subtle hover:shadow-gold-glow border border-gold-300/40",
    dark:
      "bg-charcoal text-white hover:bg-black border border-charcoal-border shadow-card",
    ghost: "bg-transparent text-secondary hover:text-primary hover:bg-surface",
    outline:
      "bg-transparent text-primary border border-border hover:border-gold hover:text-gold-700 hover:bg-white",
  };

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  };

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {withArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-current" />
      )}
      {withDiagonalArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current" />
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
          className={cn("group", baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={cn("group", baseStyles, variantStyles[variant], sizeStyles[size], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn("group", baseStyles, variantStyles[variant], sizeStyles[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;
