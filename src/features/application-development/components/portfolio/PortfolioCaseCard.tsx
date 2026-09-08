import React from "react";
import { CheckCircle2 } from "lucide-react";

interface CaseProps {
  title: string;
  category: string;
  icon: React.ElementType;
  description: string;
  metrics: string[];
  tech: string[];
}

export const PortfolioCaseCard: React.FC<CaseProps> = ({
  title,
  category,
  icon: Icon,
  description,
  metrics,
  tech,
}) => {
  return (
    <div className="p-8 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary">
            <Icon className="w-5 h-5 text-gold-700" />
          </div>
          <span className="text-xs font-medium text-secondary bg-surface px-2.5 py-1 rounded-md border border-border">
            Production Deployment
          </span>
        </div>

        <div>
          <span className="text-xs font-semibold text-[#8E6D2E] block mb-1">
            {category}
          </span>
          <h3 className="text-xl font-bold text-primary">
            {title}
          </h3>
        </div>

        <p className="text-sm text-secondary leading-relaxed">
          {description}
        </p>

        <div className="space-y-1.5 pt-2 border-t border-border">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-5 mt-5 border-t border-border flex flex-wrap gap-1.5">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-xs bg-surface text-gray-700 px-2 py-0.5 rounded border border-border"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCaseCard;
