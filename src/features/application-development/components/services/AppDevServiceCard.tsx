import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  title: string;
  href: string;
  desc: string;
  badge?: string;
  tags: string[];
  number?: string;
  image?: string;
}

export const AppDevServiceCard: React.FC<ServiceProps> = ({
  title,
  href,
  desc,
  badge,
  tags,
  number,
  image,
}) => {
  return (
    <Link
      to={href}
      className="group rounded-3xl bg-white border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-neutral-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full select-none font-sans"
    >
      <div>
        {/* Top: Sector Photography Preview with Badges */}
        {image && (
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

            {/* Top Left: Category Badge */}
            {badge && (
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[11px] font-semibold text-white tracking-wide uppercase">
                {badge}
              </span>
            )}

            {/* Top Right: Index Number */}
            {number && (
              <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md text-neutral-900 font-bold text-xs flex items-center justify-center font-mono shadow-xs">
                {number}
              </span>
            )}
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-[#0E2036] group-hover:text-[#C5A059] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
            {desc}
          </p>

          {/* Technology Pills */}
          <div className="pt-3 border-t border-neutral-100">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Technologies &amp; Tools
            </p>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-700">
              {tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer action link */}
      <div className="px-6 sm:px-7 pb-6 pt-0 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#0E2036] group-hover:text-[#C5A059] transition-colors">
        <span>Learn Details</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default AppDevServiceCard;

