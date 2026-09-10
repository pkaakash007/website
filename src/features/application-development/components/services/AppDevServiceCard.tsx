import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ServiceProps {
  title: string;
  href: string;
  icon: React.ElementType;
  desc: string;
  badge?: string;
  tags: string[];
  color?: string;
}

export const AppDevServiceCard: React.FC<ServiceProps> = ({
  title,
  href,
  icon: Icon,
  desc,
  badge,
  tags,
  color = "#007AFF",
}) => {
  return (
    <Link
      to={href}
      className="group p-6 sm:p-7 rounded-[24px] bg-[#F8F8FA] hover:bg-white border border-black/[0.06] hover:border-[#007AFF]/30 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full select-none"
    >
      <div className="space-y-4">
        {/* Top: Icon + Badge */}
        <div className="flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-[16px] flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{
              background: `${color}14`,
              color: color,
            }}
          >
            <Icon className="w-6 h-6" />
          </div>

          {badge && (
            <span
              className="text-[11px] font-bold px-2.5 py-1 rounded-full border"
              style={{
                background: `${color}0D`,
                color: color,
                borderColor: `${color}25`,
              }}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-[17px] font-bold text-neutral-900 group-hover:text-[#007AFF] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-[13px] text-neutral-500 leading-relaxed mt-2 font-normal">
            {desc}
          </p>
        </div>

        {/* Tech Stack Micro-Chips */}
        <div className="pt-2">
          <p className="text-[10.5px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
            Technologies &amp; Architecture
          </p>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white border border-black/[0.06] text-[11px] font-semibold text-neutral-700 shadow-3xs group-hover:border-black/[0.12] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer subtle action */}
      <div className="mt-5 pt-3.5 border-t border-black/[0.05] flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-[#007AFF] transition-colors">
        <span>Learn More</span>
        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
};

export default AppDevServiceCard;
