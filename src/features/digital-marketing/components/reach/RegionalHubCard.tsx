import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

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
      className="p-6 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
    >
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-primary font-bold text-base group-hover:text-gold-700 transition-colors">
          <MapPin className="w-4 h-4 text-gold-600 shrink-0" />
          <span>{city}</span>
        </div>
        <span className="text-xs font-semibold text-[#8E6D2E] block">
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
