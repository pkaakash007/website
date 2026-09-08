import React from "react";
import { FileText, CheckCircle2 } from "lucide-react";

export interface DirectAnswerBoxProps {
  question: string;
  summary: string;
  takeaways?: string[];
  entityAttribution?: string;
  className?: string;
}

export const DirectAnswerBox: React.FC<DirectAnswerBoxProps> = ({
  question,
  summary,
  takeaways = [],
  entityAttribution = "Real Result Enterprise Discovery Standards (Erode, Tamil Nadu)",
  className = "",
}) => {
  return (
    <section
      aria-label="Direct Answer Summary"
      className={`my-8 p-6 sm:p-8 rounded-2xl bg-surface border border-border ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-md bg-gold text-black flex items-center justify-center font-bold">
          <FileText className="w-3.5 h-3.5" />
        </div>
        <span className="text-xs font-semibold text-primary">
          Executive Summary
        </span>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-primary tracking-tight mb-3">
        {question}
      </h2>

      <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal mb-5">
        {summary}
      </p>

      {takeaways.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-gold-200/60">
          {takeaways.map((point, index) => (
            <div key={index} className="flex items-start gap-2 text-xs text-primary font-medium">
              <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 pt-3 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted">
        <span>Entity: Real Result Marketing</span>
        <span>{entityAttribution}</span>
      </div>
    </section>
  );
};

export default DirectAnswerBox;
