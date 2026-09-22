import React from "react";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const ContactFAQItem: React.FC<FAQProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className="p-4 sm:p-5 transition-colors duration-200">
      <button
        type="button"
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between gap-4 cursor-pointer select-none group"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-[#1D1D1F] group-hover:text-[#0071E3] transition-colors">
          {question}
        </span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
            isOpen
              ? "bg-[#0071E3]/10 text-[#0071E3] rotate-180"
              : "bg-black/[0.04] text-neutral-400 group-hover:bg-black/[0.08]"
          }`}
        >
          <ChevronDown className="w-4 h-4 stroke-[2.2]" />
        </div>
      </button>

      {isOpen && (
        <div className="pt-3 text-xs sm:text-[13px] text-[#86868B] leading-relaxed font-normal">
          {answer}
        </div>
      )}
    </div>
  );
};

export default ContactFAQItem;
