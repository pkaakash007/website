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
    <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-subtle">
      <button
        type="button"
        onClick={onToggle}
        className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-primary">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold-700 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-1 text-sm text-secondary leading-relaxed border-t border-border/70">
          {answer}
        </div>
      )}
    </div>
  );
};

export default ContactFAQItem;
