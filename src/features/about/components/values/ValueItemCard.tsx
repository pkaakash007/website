import React from "react";

interface ValueProps {
  number: string;
  category: string;
  title: string;
  desc: string;
  commitment: string;
}

export const ValueItemCard: React.FC<ValueProps> = ({
  number,
  category,
  title,
  desc,
  commitment,
}) => {
  return (
    <div className="group flex flex-col justify-between p-6 sm:p-7 bg-white transition-colors duration-200 hover:bg-[#FAFAFC]">
      <div>
        {/* Editorial Index & Category Header */}
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
          <span className="font-mono text-xs font-semibold text-neutral-400 tracking-wider">
            {number}
          </span>
          <span className="text-[11px] font-medium text-neutral-500 tracking-wider uppercase">
            {category}
          </span>
        </div>

        {/* Value Title */}
        <h3 className="text-base sm:text-lg font-semibold text-[#111111] tracking-tight leading-snug mt-5 mb-2.5 group-hover:text-[#0071E3] transition-colors">
          {title}
        </h3>

        {/* Narrative Description */}
        <p className="text-xs sm:text-[13.5px] text-neutral-600 leading-relaxed font-normal">
          {desc}
        </p>
      </div>

      {/* Grounded Commitment Line */}
      <div className="pt-5 mt-6 border-t border-black/[0.04] flex items-center gap-2 text-xs font-medium text-neutral-500">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 group-hover:bg-[#0071E3] transition-colors shrink-0" />
        <span>{commitment}</span>
      </div>
    </div>
  );
};

export default ValueItemCard;
