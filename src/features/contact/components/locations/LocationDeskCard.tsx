import React from "react";
import { Navigation, ExternalLink, Building2 } from "lucide-react";

interface DeskProps {
  city: string;
  status: string;
  address: string;
  notes: string;
  isHQ: boolean;
  mapLink: string;
}

export const LocationDeskCard: React.FC<DeskProps> = ({
  city,
  status,
  address,
  notes,
  isHQ,
  mapLink,
}) => {
  return (
    <div
      className={`p-7 rounded-3xl border transition-all flex flex-col justify-between ${
        isHQ
          ? "bg-canvas border-gold/70 shadow-card"
          : "bg-white border-border shadow-subtle hover:shadow-card"
      }`}
    >
      <div className="space-y-3.5">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-gold-700">
            <Building2 className="w-5 h-5" />
          </div>
          {isHQ && (
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-gold text-black font-bold">
              Corporate HQ
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-primary">
          {city}
        </h3>

        <span className="text-[11px] font-mono text-gold-800 font-semibold block">
          {status}
        </span>

        <p className="text-xs text-secondary leading-relaxed">
          {address}
        </p>

        <p className="text-xs text-muted border-t border-border pt-3 leading-relaxed">
          {notes}
        </p>
      </div>

      <div className="pt-5 mt-4 border-t border-border">
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-gold-700 transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};

export default LocationDeskCard;
