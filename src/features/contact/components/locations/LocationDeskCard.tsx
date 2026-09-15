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
}) => {
  return (
    <div className="py-2 flex flex-col justify-between font-sans">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-black tracking-tight">
          {city}
        </h3>

        <span className="text-xs font-semibold text-neutral-500 block">
          {status}
        </span>

        <p className="text-xs text-neutral-800 leading-relaxed">
          {address}
        </p>

        <p className="text-xs text-neutral-600 border-t border-neutral-200 pt-2.5 leading-relaxed">
          {notes}
        </p>
      </div>
    </div>
  );
};

export default LocationDeskCard;
