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
  mapLink,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-7 border ${
        isHQ
          ? "border-black/20 shadow-xs"
          : "border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
      } hover:shadow-md transition-all flex flex-col justify-between h-full`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {isHQ ? "Registered Office" : "Regional Desk"}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-[#111827] tracking-tight">
            {city}
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            {status}
          </p>
        </div>

        <p className="text-sm text-[#374151] leading-relaxed pt-1">
          {address}
        </p>

        <p className="text-xs text-[#6B7280] leading-relaxed">
          {notes}
        </p>
      </div>

      {mapLink && (
        <div className="pt-4 mt-2 border-t border-neutral-100">
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1"
          >
            <span>Open in Google Maps</span>
            <span>&rarr;</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default LocationDeskCard;
