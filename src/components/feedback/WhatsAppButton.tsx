import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/config";

export const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  // Determine context based on current route
  let context: "marketing" | "aiCommunication" | "technology" | "humanResources" | "general" = "general";
  let contextLabel = "Discuss Campaign Strategy";

  if (pathname.startsWith("/marketing")) {
    context = "marketing";
    contextLabel = "Discuss Your Campaign";
  } else if (pathname.startsWith("/ai-communication")) {
    context = "aiCommunication";
    contextLabel = "Discuss AI Communication";
  } else if (pathname.startsWith("/technology")) {
    context = "technology";
    contextLabel = "Discuss Your Project";
  } else if (pathname.startsWith("/human-resources")) {
    context = "humanResources";
    contextLabel = "Discuss Your Requirement";
  }

  const whatsappUrl = getWhatsAppUrl(context);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="bg-white rounded-2xl p-4 shadow-floating border border-border w-72 mb-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-primary">Direct WhatsApp Desk</div>
                <div className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Media Strategist Online
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-muted hover:text-primary p-1 cursor-pointer"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-xs text-secondary mb-3 leading-relaxed">
            Connect directly with a Real Result campaign strategist for fast response and execution planning.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{contextLabel}</span>
          </a>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 p-3 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-floating hover:shadow-card-hover transition-all duration-300 border-2 border-white/20 active:scale-95 cursor-pointer"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          {contextLabel}
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
      </button>
    </div>
  );
};

export default WhatsAppButton;
