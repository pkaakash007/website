import React from "react";
import { Link } from "react-router-dom";

interface PillarProps {
  title: string;
  href: string;
  icon: React.ElementType;
  desc: string;
  badge?: string;
  metric: string;
}

export const PillarServiceCard: React.FC<PillarProps> = ({
  title,
  href,
  icon: Icon,
  desc,
  metric,
}) => {
  return (
    <Link
      to={href}
      className="group p-7 rounded-2xl bg-white border border-border hover:border-gold-600 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
    >
      <div className="space-y-4">
        <div className="w-11 h-11 rounded-xl bg-surface group-hover:bg-[#FBF7EE] border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
          <Icon className="w-5 h-5" />
        </div>

        <div>
          <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-secondary leading-relaxed mt-2">
            {desc}
          </p>
        </div>

        <div className="pt-2 text-xs font-medium text-secondary">
          <span className="font-semibold text-gold-800">Impact Metric: </span>
          <span>{metric}</span>
        </div>
      </div>
    </Link>
  );
};

export default PillarServiceCard;
