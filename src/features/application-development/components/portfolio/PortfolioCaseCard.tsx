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
    <div className="p-8 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-primary">
            <Icon className="w-5 h-5 text-gold-700" />
          </div>
          <span className="text-[10px] font-mono uppercase text-muted bg-surface px-2.5 py-0.5 rounded-full border border-border">
            Production
          </span>
        </div>

        <div>
          <span className="text-xs font-mono text-gold-700 font-bold block mb-1">
            {category}
          </span>
          <h3 className="text-xl font-bold text-primary">
            {title}
          </h3>
        </div>

        <p className="text-xs sm:text-sm text-secondary leading-relaxed">
          {description}
        </p>

        <div className="space-y-1.5 pt-2 border-t border-border/80">
          {metrics.map((m, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-semibold text-primary">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-border flex flex-wrap gap-1.5">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] font-mono bg-canvas text-secondary px-2 py-0.5 rounded-md border border-border"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCaseCard;
