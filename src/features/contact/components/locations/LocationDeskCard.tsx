import React from "react";

interface DeskProps {
  city: string;
  status: string;
  address: string;
  notes: string;
  isHQ: boolean;
  mapLink?: string;
}

export const LocationDeskCard: React.FC<DeskProps> = ({
  city,
  status,
  address,
  notes,
  isHQ,
}) => {
  return (
    <div
      className={`p-7 rounded-2xl border transition-all flex flex-col justify-between ${
        isHQ
          ? "bg-canvas border-gold/70 shadow-sm"
          : "bg-white border-border shadow-sm hover:shadow-md"
      }`}
    >
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-primary">
          {city}
        </h3>

        <span className="text-xs font-semibold text-[#8E6D2E] block">
          {status}
        </span>

        <p className="text-xs text-secondary leading-relaxed">
          {address}
        </p>

        <p className="text-xs text-muted border-t border-border pt-3 leading-relaxed">
          {notes}
        </p>
      </div>
    </div>
  );
};

export default LocationDeskCard;
