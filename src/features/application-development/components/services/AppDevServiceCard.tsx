import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  title: string;
  href: string;
  icon: React.ElementType;
  desc: string;
  badge: string;
  tags: string[];
}

export const AppDevServiceCard: React.FC<ServiceProps> = ({
  title,
  href,
  icon: Icon,
  desc,
  badge,
  tags,
}) => {
  return (
    <Link
      to={href}
      className="group p-7 rounded-3xl bg-white border border-border hover:border-blue-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-blue-50 border border-border flex items-center justify-center text-primary group-hover:text-blue-700 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface text-secondary font-medium">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-primary group-hover:text-blue-700 transition-colors">
          {title}
        </h3>

        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className="text-[10px] font-mono bg-canvas text-secondary px-2 py-0.5 rounded-md border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-blue-700">
        <span>View Specifications</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default AppDevServiceCard;
