import React from "react";
import { UserCheck, Code2, Lock, HeartHandshake } from "lucide-react";

interface ValueProps {
  title: string;
  desc: string;
  number?: string;
}

const VALUE_ICONS: Record<string, { icon: React.FC<{ className?: string }>; bg: string; text: string }> = {
  "01": { icon: UserCheck, bg: "bg-[#0071E3]/10", text: "text-[#0071E3]" },
  "02": { icon: Code2, bg: "bg-[#34C759]/10", text: "text-[#34C759]" },
  "03": { icon: Lock, bg: "bg-[#FF9500]/10", text: "text-[#FF9500]" },
  "04": { icon: HeartHandshake, bg: "bg-[#AF52DE]/10", text: "text-[#AF52DE]" },
};

export const ValueItemCard: React.FC<ValueProps> = ({ title, desc, number }) => {
  const iconConfig = (number && VALUE_ICONS[number]) || {
    icon: Code2,
    bg: "bg-black/[0.05]",
    text: "text-neutral-800",
  };
  const IconComponent = iconConfig.icon;

  return (
    <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* macOS Top Bar with Icon and Numeric Index */}
        <div className="flex items-center justify-between">
          <div className={`w-10 h-10 rounded-xl ${iconConfig.bg} ${iconConfig.text} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
            <IconComponent className="w-5 h-5 stroke-[2.2]" />
          </div>
          {number && (
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-black/[0.04] text-neutral-400">
              {number}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold text-[#1D1D1F] tracking-tight leading-snug">
          {title}
        </h3>

        <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ValueItemCard;


