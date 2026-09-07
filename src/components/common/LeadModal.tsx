import React, { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const LeadModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [division, setDivision] = useState("Multiple Solutions");

  useEffect(() => {
    const handleOpenModal = (e: CustomEvent<{ division?: string }>) => {
      if (e.detail?.division) {
        setDivision(e.detail.division);
      }
      setIsOpen(true);
    };

    window.addEventListener("open-lead-modal" as any, handleOpenModal);
    return () => {
      window.removeEventListener("open-lead-modal" as any, handleOpenModal);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="fixed inset-0"
        onClick={() => setIsOpen(false)}
        aria-label="Close modal background"
      />
      <div className="relative w-full max-w-xl bg-white rounded-3xl border border-border shadow-floating z-10 max-h-[90vh] overflow-y-auto p-6 sm:p-8">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full text-secondary hover:text-primary hover:bg-surface transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-gold-100 text-gold-800 border border-gold/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Direct Consultation
          </div>
          <h2 className="text-2xl font-bold text-primary tracking-tight">
            Talk to a Solutions Expert
          </h2>
          <p className="text-secondary text-sm mt-1">
            Connect directly with an engineering, marketing, AI telecalling, or HR director.
          </p>
        </div>

        <ContactForm defaultDivision={division} compact />
      </div>
    </div>
  );
};

export function openLeadModal(division?: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-lead-modal", {
        detail: { division: division || "Multiple Solutions" },
      })
    );
  }
}

export default LeadModal;
