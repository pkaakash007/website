import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface PillarProps {
  title: string;
  href: string;
  icon: React.ElementType;
  desc: string;
  badge: string;
  metric: string;
}

export const PillarServiceCard: React.FC<PillarProps> = ({
  title,
  href,
  icon: Icon,
  desc,
  badge,
  metric,
}) => {
  return (
    <Link
      to={href}
      className="group p-7 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-gold-50 border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface text-secondary font-medium">
            {badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
          {title}
        </h3>

        <p className="text-xs text-secondary leading-relaxed line-clamp-3">
          {desc}
        </p>
      </div>

      <div className="pt-6 mt-4 border-t border-border/70 flex items-center justify-between text-xs">
        <span className="font-mono text-gold-800 font-bold bg-gold-50 px-2 py-0.5 rounded-md border border-gold-200">
          {metric}
        </span>
        <span className="font-semibold text-primary group-hover:text-gold-700 flex items-center gap-1 transition-colors">
          Explore
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default PillarServiceCard;
