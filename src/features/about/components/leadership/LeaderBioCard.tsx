import React from "react";
import { Terminal, LineChart, Server, Palette } from "lucide-react";

interface LeaderProps {
  role: string;
  discipline: string;
  bio: string;
  number?: string;
}

const DISCIPLINE_ICONS: Record<string, { icon: React.FC<{ className?: string }>; color: string; bg: string }> = {
  "01": { icon: Terminal, color: "text-[#0071E3]", bg: "bg-[#0071E3]/10" },
  "02": { icon: LineChart, color: "text-[#FF9500]", bg: "bg-[#FF9500]/10" },
  "03": { icon: Server, color: "text-[#34C759]", bg: "bg-[#34C759]/10" },
  "04": { icon: Palette, color: "text-[#AF52DE]", bg: "bg-[#AF52DE]/10" },
};

export const LeaderBioCard: React.FC<LeaderProps> = ({
  role,
  discipline,
  bio,
  number,
}) => {
  const iconConfig = (number && DISCIPLINE_ICONS[number]) || {
    icon: Terminal,
    color: "text-[#0071E3]",
    bg: "bg-[#0071E3]/10",
  };
  const IconComponent = iconConfig.icon;

  return (
    <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      <div className="space-y-4">
        {/* macOS Card Top Header */}
        <div className="flex items-center">
          <div className={`w-10 h-10 rounded-xl ${iconConfig.bg} ${iconConfig.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
            <IconComponent className="w-5 h-5 stroke-[2.2]" />
          </div>
        </div>

        <div>
          <span className="text-[11px] font-semibold text-neutral-400 tracking-wider uppercase block mb-1">
            {discipline}
          </span>
          <h3 className="text-lg font-semibold text-[#1D1D1F] tracking-tight leading-snug">
            {role}
          </h3>
        </div>

        <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed pt-1">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default LeaderBioCard;


