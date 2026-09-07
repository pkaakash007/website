import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = "" }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center space-x-2 text-xs font-medium text-secondary py-3.5 ${className}`}
    >
      <Link
        to="/"
        className="inline-flex items-center gap-1 hover:text-gold-700 transition-colors"
        title="Real Result Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-muted shrink-0" />
            {item.href && !isLast ? (
              <Link
                to={item.href}
                className="hover:text-gold-700 transition-colors line-clamp-1"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-semibold line-clamp-1" aria-current="page">
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
