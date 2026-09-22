import React from "react";
import { Building2, Cpu, Globe, ShoppingBag, ArrowUpRight } from "lucide-react";

interface DeskProps {
  city: string;
  status: string;
  address: string;
  notes: string;
  isHQ: boolean;
  mapLink?: string;
}

const DESK_CONFIG: Record<string, { icon: React.FC<{ className?: string }>; color: string; bg: string; code: string }> = {
  "Erode Headquarters": {
    icon: Building2,
    color: "text-[#0071E3]",
    bg: "bg-[#0071E3]/10",
    code: "ERD-HQ",
  },
  "Coimbatore Regional Desk": {
    icon: Cpu,
    color: "text-[#FF9500]",
    bg: "bg-[#FF9500]/10",
    code: "CJB-NODE",
  },
  "Chennai Metro Desk": {
    icon: Globe,
    color: "text-[#AF52DE]",
    bg: "bg-[#AF52DE]/10",
    code: "MAA-NODE",
  },
  "Tiruppur Export Desk": {
    icon: ShoppingBag,
    color: "text-[#34C759]",
    bg: "bg-[#34C759]/10",
    code: "TUP-NODE",
  },
};

export const LocationDeskCard: React.FC<DeskProps> = ({
  city,
  status,
  address,
  notes,
  isHQ,
  mapLink,
}) => {
  const config = DESK_CONFIG[city] || {
    icon: Building2,
    color: "text-[#0071E3]",
    bg: "bg-[#0071E3]/10",
    code: "NODE",
  };
  const IconComponent = config.icon;

  return (
    <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
      <div className="space-y-4">
        {/* macOS Window Title Bar */}
        <div className="flex items-center pb-3 border-b border-black/[0.05]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 inline-block" />
          </div>
        </div>

        {/* Icon & Details */}
        <div className="flex items-center gap-3 pt-1">
          <div className={`w-10 h-10 rounded-xl ${config.bg} ${config.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0`}>
            <IconComponent className="w-5 h-5 stroke-[2.2]" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] tracking-tight leading-snug">
              {city}
            </h3>
            <span className="text-[11px] font-medium text-neutral-400 block mt-0.5">
              {status}
            </span>
          </div>
        </div>

        {/* Inset macOS Address Box */}
        <div className="bg-[#F5F5F7] rounded-xl p-3 border border-black/[0.04]">
          <p className="text-xs text-[#1D1D1F] leading-relaxed">
            {address}
          </p>
        </div>

        {/* Notes */}
        <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
          {notes}
        </p>
      </div>

      {/* Action Footer */}
      {mapLink && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between text-xs font-semibold text-[#0071E3] hover:text-[#0077ED] pt-3 mt-4 border-t border-black/[0.04] transition-colors"
        >
          <span>Open in Maps</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
};

export default LocationDeskCard;
