import React from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

interface HubProps {
  city: string;
  type: string;
  specialization: string;
  link: string;
}

export const RegionalHubCard: React.FC<HubProps> = ({
  city,
  type,
  specialization,
  link,
}) => {
  return (
    <Link
      to={link}
      className="p-6 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-subtle hover:shadow-card transition-all group flex flex-col justify-between"
    >
      <div className="space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary font-bold text-base group-hover:text-gold-700 transition-colors">
            <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
            <span>{city}</span>
          </div>
          <ArrowRight className="w-4 h-4 text-muted group-hover:text-gold-700 transition-transform group-hover:translate-x-1" />
        </div>
        <span className="inline-block text-[11px] font-mono text-gold-800 bg-gold-50 px-2 py-0.5 rounded-md font-semibold">
          {type}
        </span>
        <p className="text-xs text-secondary leading-relaxed">
          {specialization}
        </p>
      </div>
    </Link>
  );
};

export default RegionalHubCard;
