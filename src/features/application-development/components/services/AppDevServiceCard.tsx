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
      className="group p-7 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-surface group-hover:bg-[#FBF7EE] border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-surface text-secondary border border-border">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-secondary leading-relaxed line-clamp-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-2">
          {tags.map((t, i) => (
            <span
              key={i}
              className="text-xs text-gray-600 bg-surface px-2 py-0.5 rounded border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-primary group-hover:text-gold-700">
        <span>View Details</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
};

export default AppDevServiceCard;
