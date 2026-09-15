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
    <div className="border-b border-neutral-200/80 bg-white py-2 font-sans">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-3 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <span className="text-base font-bold text-[#0E2036]">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="pb-4 pt-1 text-sm text-neutral-600 leading-relaxed font-normal">
          {answer}
        </div>
      )}
    </div>
  );
};

export default ContactFAQItem;
