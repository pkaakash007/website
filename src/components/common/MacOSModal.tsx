import React, { useEffect } from "react";
import { X } from "lucide-react";

export interface MacOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const MacOSModal: React.FC<MacOSModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = "max-w-xl",
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300">
      {/* ── Soft Ambient Overlay Scrim ── */}
      <div
        className="fixed inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      {/* ── Human Modal Container ── */}
      <div
        className={`relative w-full ${maxWidth} z-10 overflow-hidden rounded-2xl border border-neutral-200/80 shadow-2xl bg-white transition-all duration-300 animate-in zoom-in-95 fade-in max-h-[92vh] flex flex-col`}
      >
        {/* Close Button Top-Right */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-900 flex items-center justify-center transition-colors cursor-pointer"
          title="Close modal"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" strokeWidth={2} />
        </button>

        {/* ── Header Area if title exists ── */}
        {title && (
          <div className="px-6 sm:px-8 pt-6 pb-2 pr-14">
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-sm text-neutral-500 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* ── Scrollable Body Content ── */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {!title && subtitle && (
            <p className="text-sm text-neutral-500 mb-4">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default MacOSModal;

