import React, { useEffect, useState } from "react";
import { X, Minus, Plus } from "lucide-react";

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
  title = "Real Result — Direct Consultation",
  subtitle,
  badge = "macOS v2.7 • Live SLA",
  children,
  maxWidth = "max-w-xl",
}) => {
  const [trafficHovered, setTrafficHovered] = useState(false);

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
      {/* ── macOS Ambient Backdrop Scrim ── */}
      <div
        className="fixed inset-0 bg-black/45 backdrop-blur-[6px] transition-opacity duration-300 animate-in fade-in"
        onClick={onClose}
        aria-label="Close modal overlay"
      />

      {/* ── macOS 27 Window / Modal Container ── */}
      <div
        className={`relative w-full ${maxWidth} z-10 overflow-hidden rounded-[22px] border border-black/15 shadow-[0_28px_80px_rgba(0,0,0,0.35),0_10px_30px_rgba(0,0,0,0.15)] bg-white/95 backdrop-blur-3xl transition-all duration-300 animate-in zoom-in-95 fade-in max-h-[92vh] flex flex-col`}
        style={{
          fontFamily: "var(--font-system)",
        }}
      >
        {/* ── macOS Window Header (Title Bar) ── */}
        <div
          className="h-11 px-4 flex items-center justify-between border-b border-black/[0.08] bg-neutral-100/70 select-none shrink-0"
          onMouseEnter={() => setTrafficHovered(true)}
          onMouseLeave={() => setTrafficHovered(false)}
        >
          {/* Left: macOS Traffic Light Buttons */}
          <div className="flex items-center gap-2 w-24">
            {/* Close 🔴 */}
            <button
              onClick={onClose}
              type="button"
              className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center cursor-pointer transition-transform active:scale-90"
              title="Close window"
              aria-label="Close modal window"
            >
              <X
                className={`w-2 h-2 text-[#4A0002] transition-opacity ${
                  trafficHovered ? "opacity-100" : "opacity-0"
                }`}
                strokeWidth={3}
              />
            </button>

            {/* Minimize 🟡 */}
            <button
              onClick={onClose}
              type="button"
              className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] flex items-center justify-center cursor-pointer transition-transform active:scale-90"
              title="Minimize window"
              aria-label="Minimize window"
            >
              <Minus
                className={`w-2 h-2 text-[#5E3B00] transition-opacity ${
                  trafficHovered ? "opacity-100" : "opacity-0"
                }`}
                strokeWidth={3}
              />
            </button>

            {/* Maximize 🟢 */}
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] flex items-center justify-center cursor-default transition-transform active:scale-90"
              title="Zoom window"
              aria-label="Zoom window"
            >
              <Plus
                className={`w-2 h-2 text-[#0A4D12] transition-opacity ${
                  trafficHovered ? "opacity-100" : "opacity-0"
                }`}
                strokeWidth={3}
              />
            </button>
          </div>

          {/* Center: macOS Window Title */}
          <div className="flex items-center gap-1.5 truncate px-2 text-center">
            <span className="text-[13px] font-semibold text-neutral-800 tracking-tight truncate">
              {title}
            </span>
          </div>

          {/* Right: macOS Status Badge / Pill */}
          <div className="flex items-center justify-end w-24">
            {badge && (
              <span className="text-[10.5px] font-semibold text-neutral-500 bg-black/[0.05] px-2 py-0.5 rounded-full tracking-tight whitespace-nowrap">
                {badge}
              </span>
            )}
          </div>
        </div>

        {/* ── macOS Window Body (Scrollable Content) ── */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {subtitle && (
            <p className="text-xs text-neutral-500 mb-4 tracking-tight">
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
