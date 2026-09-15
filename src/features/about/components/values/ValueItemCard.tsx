import React from "react";

interface ValueProps {
  title: string;
  desc: string;
  number?: string;
}

export const ValueItemCard: React.FC<ValueProps> = ({ title, desc, number }) => {
  return (
    <div className="py-2 pb-6 border-b border-neutral-200 flex flex-col justify-between font-sans">
      <div className="space-y-3">
        {number && (
          <div className="text-xs font-semibold text-neutral-400 tracking-wide">
            {number}
          </div>
        )}
        <h3 className="text-xl font-bold text-neutral-900 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ValueItemCard;

