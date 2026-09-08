import React from "react";

interface MetricCardProps {
  value: string;
  label: string;
  note: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, note }) => {
  return (
    <div className="p-8 rounded-2xl bg-charcoal-surface border border-charcoal-border flex flex-col justify-between">
      <div>
        <div className="text-4xl font-bold text-gold mb-2">
          {value}
        </div>
        <h3 className="text-base font-semibold text-white mb-2">
          {label}
        </h3>
      </div>
      <p className="text-xs text-charcoal-muted leading-relaxed mt-4 pt-4 border-t border-charcoal-border">
        {note}
      </p>
    </div>
  );
};

export default MetricCard;
