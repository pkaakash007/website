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
      title="Direct Consultation — Solutions Briefing"
      badge="macOS 27 • Active SLA"
      maxWidth="max-w-xl"
    >
      <div className="mb-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-[#0071E3] mb-1.5">
          Executive Partnership Desk
        </p>
        <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">
          Talk to a Solutions Expert
        </h2>
        <p className="text-neutral-500 text-sm mt-1">
          Connect directly with an engineering, performance marketing, or AI technical director.
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

