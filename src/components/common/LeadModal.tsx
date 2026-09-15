import React, { useEffect, useState } from "react";
import { MacOSModal } from "./MacOSModal";
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

  return (
    <MacOSModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      maxWidth="max-w-xl"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Talk with an Expert
        </h2>
        <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
          Tell us about your project or questions. Our team will review your details and get back to you promptly.
        </p>
      </div>

      <ContactForm defaultDivision={division} compact className="!p-0 !border-0 !shadow-none !bg-transparent" />
    </MacOSModal>
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

