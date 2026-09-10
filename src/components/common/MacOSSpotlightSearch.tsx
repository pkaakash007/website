import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Monitor,
  Smartphone,
  Megaphone,
  TrendingUp,
  FileCode,
  Building,
  Phone,
  Layers,
} from "lucide-react";
import { MacOSSearchInput } from "./MacOSInput";
import { AppleLogo, AndroidLogo } from "@/components/common/PlatformLogos";

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  href: string;
  icon: React.ElementType;
}

const SEARCH_CATALOG: SearchResultItem[] = [
  // Services
  { id: "s1", title: "Website Design & Corporate Portals", category: "Services", href: "/application-development", icon: Monitor },
  { id: "s2", title: "Mobile App Development (iOS & Android)", category: "Services", href: "/application-development", icon: AppleLogo },
  { id: "s3", title: "Ecommerce Platform & Shop Systems", category: "Services", href: "/application-development", icon: Layers },
  { id: "s4", title: "UI/UX & Figma Design Architecture", category: "Services", href: "/application-development", icon: Monitor },
  { id: "s5", title: "Search Engine Optimization (SEO & GEO)", category: "Digital Marketing", href: "/digital-marketing/seo", icon: TrendingUp },
  { id: "s6", title: "Google Ads & Pay-Per-Click Marketing", category: "Digital Marketing", href: "/digital-marketing", icon: Megaphone },
  { id: "s7", title: "Social Media & Meta Ads Campaigns", category: "Digital Marketing", href: "/digital-marketing/social-media-marketing", icon: Megaphone },
  { id: "s8", title: "Content Marketing & Digital PR", category: "Digital Marketing", href: "/digital-marketing/content-marketing", icon: Megaphone },
  // Engineering
  { id: "e1", title: "Native Apple iOS (Swift & SwiftUI)", category: "Engineering", href: "/application-development", icon: AppleLogo },
  { id: "e2", title: "Native Google Android (Kotlin & Jetpack)", category: "Engineering", href: "/application-development", icon: AndroidLogo },
  { id: "e3", title: "Modern Web Stack (React, Next.js, Vite)", category: "Engineering", href: "/application-development", icon: FileCode },
  { id: "e4", title: "Cloud Backend APIs & Microservices", category: "Engineering", href: "/application-development", icon: Layers },
  // Company & Contact
  { id: "c1", title: "About Real Result — Leadership & Story", category: "Company", href: "/about", icon: Building },
  { id: "c2", title: "Core Operating Values & Engineering SLA", category: "Company", href: "/about#values", icon: Building },
  { id: "c3", title: "Contact Corporate Headquarters (Erode, TN)", category: "Contact", href: "/contact", icon: Phone },
  { id: "c4", title: "Regional Technology Desks (Coimbatore, Chennai)", category: "Contact", href: "/contact", icon: Phone },
];

export const MacOSSpotlightSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Listen for ⌘K or Ctrl+K or custom trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    const handleOpen = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-spotlight-search" as any, handleOpen);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-spotlight-search" as any, handleOpen);
    };
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const filtered = query.trim()
    ? SEARCH_CATALOG.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCH_CATALOG.slice(0, 6);

  const handleSelect = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      handleSelect(filtered[selectedIndex].href);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4">
      {/* Ambient backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-[4px] animate-in fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* macOS Spotlight Window */}
      <div className="relative w-full max-w-xl z-10 overflow-hidden rounded-[20px] border border-black/15 shadow-[0_30px_80px_rgba(0,0,0,0.35)] bg-white/95 backdrop-blur-3xl animate-in zoom-in-95 duration-200">
        {/* macOS Search Input Bar */}
        <div className="p-3.5 border-b border-black/[0.08] bg-neutral-50/60">
          <MacOSSearchInput
            ref={inputRef}
            placeholder="Search services, platforms, engineering specs..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onClear={() => setQuery("")}
            onKeyDown={handleInputKeyDown}
            shortcutBadge="ESC"
            className="!py-2.5 !text-sm !bg-white"
          />
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-10 text-center text-neutral-400 text-sm">
              No matching services or pages found.
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.href)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-[#0071E3] text-white"
                      : "text-neutral-800 hover:bg-neutral-100/80"
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div className="truncate">
                      <p
                        className={`text-[13.5px] font-semibold truncate ${
                          isSelected ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {item.title}
                      </p>
                      <p
                        className={`text-[11px] truncate ${
                          isSelected ? "text-white/70" : "text-neutral-400"
                        }`}
                      >
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected
                        ? "text-white translate-x-0.5"
                        : "text-neutral-300 opacity-0"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* macOS Spotlight Footer */}
        <div className="px-4 py-2 bg-neutral-100/70 border-t border-black/[0.06] flex items-center justify-between text-[11px] text-neutral-400 select-none">
          <span>Navigate with ↑ ↓ keys</span>
          <span>Press Enter to select</span>
        </div>
      </div>
    </div>
  );
};

export function openSpotlightSearch() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-spotlight-search"));
  }
}

export default MacOSSpotlightSearch;
