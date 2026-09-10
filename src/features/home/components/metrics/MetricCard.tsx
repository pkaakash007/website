import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  note: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, note }) => {
  return (
    <div className="p-8 lg:p-10 bg-[#111110] flex flex-col">
      {/* Big number — Aeren: huge, tight tracking */}
      <div
        className="text-[clamp(2.5rem,5vw,3.5rem)] font-black tracking-[-0.04em] leading-none mb-3 text-white"
      >
        {value}
      </div>

      <h3 className="text-[14px] font-semibold text-white mb-2 leading-tight">{label}</h3>

      <p className="text-[12px] text-[rgba(255,255,255,0.38)] leading-[1.65] mt-auto pt-4 border-t border-[rgba(255,255,255,0.07)]">
        {note}
      </p>
    </div>
  );
};

export default MetricCard;
