import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Globe,
  Smartphone,
  ArrowRight,
  ChevronRight,
  TrendingUp,
  Activity,
  Bell,
  Wifi,
  Battery,
  Lock,
  RotateCw,
  Search,
  SlidersHorizontal,
  Sparkles,
  Star,
  Home,
  Layers,
  Phone,
  Monitor,
} from "lucide-react";
import {
  AppleLogo,
  AppStoreLogo,
  GooglePlayLogo,
  InstagramLogo,
  YouTubeLogo,
} from "@/components/common/PlatformLogos";
import { Button } from "@/components/common/Button";

export interface AppDevHeroProps {
  activeTab?: "web" | "mobile";
  onTabChange?: (tab: "web" | "mobile") => void;
}

export const AppDevHero: React.FC<AppDevHeroProps> = ({
  activeTab: propTab,
  onTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<"web" | "mobile">("mobile");
  const activeTab = propTab ?? internalTab;

  const handleTabChange = (tab: "web" | "mobile") => {
    if (onTabChange) onTabChange(tab);
    setInternalTab(tab);
  };

  const [selectedSite, setSelectedSite] = useState<"stripe" | "apple" | "shopify" | "amazon">("stripe");

  return (
    <section
      className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-28 lg:pb-16 border-b border-black/[0.06]"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 60%, #EFEFF4 100%)",
      }}
    >
      {/* Apple Subtle Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            activeTab === "mobile"
              ? "radial-gradient(circle, rgba(0,122,255,0.22) 0%, rgba(88,86,214,0.12) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(52,199,89,0.18) 0%, rgba(0,122,255,0.12) 50%, transparent 70%)",
          transition: "background 0.5s ease",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* ── Left Column: iOS Typography & Messaging ── */}
          <div className={`${activeTab === "web" ? "lg:col-span-6" : "lg:col-span-7"} space-y-4 sm:space-y-5 flex flex-col justify-center`}>

            {/* ── Top Pill Switcher (Clean Open Tabs) ── */}
            <div className="flex items-center justify-start">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => handleTabChange("mobile")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    activeTab === "mobile"
                      ? "bg-[#0E2036] text-white"
                      : "text-neutral-600 hover:text-[#0E2036] hover:bg-neutral-200/60"
                  }`}
                >
                  <div className="flex items-center gap-1 shrink-0">
                    <AppStoreLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-xs" />
                    <GooglePlayLogo className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <span>Mobile App Development</span>
                </button>
                <button
                  onClick={() => handleTabChange("web")}
                  className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer select-none ${
                    activeTab === "web"
                      ? "bg-[#0E2036] text-white"
                      : "text-neutral-600 hover:text-[#0E2036] hover:bg-neutral-200/60"
                  }`}
                >
                  <Globe
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                      activeTab === "web" ? "text-[#38BDF8]" : "text-[#007AFF]"
                    }`}
                  />
                  <span>Web Development</span>
                </button>
              </div>
            </div>

            {/* Apple Big Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-bold tracking-tight text-black leading-[1.12]"
              style={{ letterSpacing: "-0.03em" }}
            >
              {activeTab === "mobile" ? (
                <>
                  iOS &amp; Android Apps.{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #007AFF 0%, #5856D6 100%)",
                    }}
                  >
                    Built for Your Business.
                  </span>
                </>
              ) : (
                <>
                  Fast Business Websites &amp; Online Stores.{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #007AFF 0%, #34C759 100%)",
                    }}
                  >
                    Built for Sales.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p
              className="text-sm sm:text-[15px] lg:text-base leading-relaxed max-w-xl"
              style={{ color: "rgba(60,60,67,0.75)", fontWeight: 400 }}
            >
              {activeTab === "mobile"
                ? "We build fast, reliable mobile apps for iPhone and Android, publish them directly to the Apple App Store and Google Play Store, and hand over 100% of the source code with zero hidden fees."
                : "We create fast-loading websites and online platforms that make your business look established, load instantly on mobile phones, and convert visitors into direct phone calls and WhatsApp orders."}
            </p>

            {/* App Store & Google Play Store Official Badges */}
            {activeTab === "mobile" && (
              <div className="flex flex-wrap items-center gap-4 pt-0.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
                  <AppStoreLogo className="w-4 h-4 rounded-xs" />
                  <span>Apple App Store Publishing</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
                  <GooglePlayLogo className="w-3.5 h-3.5" />
                  <span>Google Play Store Publishing</span>
                </div>
              </div>
            )}

            {/* Apple CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() =>
                  openLeadModal(
                    activeTab === "mobile"
                      ? "Hero Mobile App Requirement"
                      : "Hero Web Development Requirement"
                  )
                }
              >
                Discuss Your {activeTab === "mobile" ? "App" : "Web"} Project
              </Button>
              <Button
                variant="secondary"
                size="md"
                href="#app-dev-switcher"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* ── Right Column: 3D Device Visualization ── */}
          <div className={`${activeTab === "web" ? "lg:col-span-6" : "lg:col-span-5"} flex justify-center items-center py-6 sm:py-8 lg:py-4`}>
            <div
              className={`relative w-full ${
                activeTab === "mobile"
                  ? "max-w-[360px] sm:max-w-[390px] lg:max-w-[395px] xl:max-w-[420px]"
                  : "max-w-[490px] sm:max-w-[550px] lg:max-w-[600px]"
              } flex justify-center px-1 sm:px-3 py-2`}
              style={{
                perspective: "1200px",
              }}
            >
              {/* ────────────────── MOBILE 3D IPHONE MOCKUP ────────────────── */}
              {activeTab === "mobile" ? (
                <div
                  className="relative mx-auto transition-transform duration-500 ease-out hover:scale-[1.02]"
                  style={{
                    transform: "rotateY(-8deg) rotateX(4deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* 3D iPhone 16 Pro Titanium Chassis */}
                  <div
                    className="relative w-[252px] sm:w-[272px] lg:w-[278px] xl:w-[292px] h-[510px] sm:h-[530px] lg:h-[535px] xl:h-[555px] rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 mx-auto"
                    style={{
                      background: "linear-gradient(135deg, #2C2C2E 0%, #1C1C1E 100%)",
                      boxShadow:
                        "0 25px 60px -15px rgba(0,0,0,0.38), 0 0 0 1px rgba(255,255,255,0.15), inset 0 0 0 2px #3A3A3C, inset 0 0 0 4px #1C1C1E",
                    }}
                  >
                    {/* Titanium Edge Glare */}
                    <div className="absolute inset-0 rounded-[44px] sm:rounded-[48px] pointer-events-none border border-white/20 opacity-60" />

                    {/* Inner OLED Screen Container - Authentic iOS 18 Home Screen */}
                    <div
                      className="w-full h-full rounded-[38px] sm:rounded-[40px] overflow-hidden text-white flex flex-col relative border border-black/40 shadow-inner select-none"
                      style={{
                        background: "#080B16",
                        fontFamily:
                          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Segoe UI", Roboto, sans-serif',
                      }}
                    >
                      {/* Official iOS 18 Dynamic Silk Glass Light Ribbons Wallpaper */}
                      <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {/* Deep cosmic mesh gradient */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(ellipse 90% 80% at 50% 10%, #2A174E 0%, #0E1638 50%, #060914 100%)",
                          }}
                        />
                        {/* Glowing iOS 18 Silk Light Ribbons */}
                        <div
                          className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-60 blur-2xl"
                          style={{
                            background: "radial-gradient(circle, #D946EF 0%, #8B5CF6 50%, transparent 70%)",
                          }}
                        />
                        <div
                          className="absolute top-1/4 -left-20 w-60 h-60 rounded-full opacity-50 blur-3xl"
                          style={{
                            background: "radial-gradient(circle, #06B6D4 0%, #3B82F6 50%, transparent 70%)",
                          }}
                        />
                        <div
                          className="absolute bottom-10 right-0 w-64 h-64 rounded-full opacity-45 blur-3xl"
                          style={{
                            background: "radial-gradient(circle, #6366F1 0%, #EC4899 40%, transparent 70%)",
                          }}
                        />
                        {/* Subtle organic glass wave overlay */}
                        <svg
                          className="absolute inset-0 w-full h-full opacity-25 mix-blend-screen"
                          viewBox="0 0 300 600"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M-20,180 C80,100 220,280 320,160 C320,160 320,600 -20,600 Z"
                            fill="url(#ios-wave-1)"
                          />
                          <path
                            d="M-20,340 C100,240 200,420 320,310 C320,310 320,600 -20,600 Z"
                            fill="url(#ios-wave-2)"
                          />
                          <defs>
                            <linearGradient id="ios-wave-1" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="ios-wave-2" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.3" />
                              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      {/* ── iOS 18 Dynamic Island ── */}
                      <div className="pt-2 pb-0.5 px-4 flex justify-center z-30 shrink-0">
                        <div className="w-[84px] h-[22px] rounded-full bg-black flex items-center justify-between px-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.6)] border border-white/10 relative">
                          {/* Left Camera Lens with Anti-Reflective Glare */}
                          <div className="w-2.5 h-2.5 rounded-full bg-[#0C0D10] border border-[#222] flex items-center justify-center">
                            <div className="w-1 h-1 rounded-full bg-[#1D2B4A]/90" />
                          </div>
                          {/* Microphone / TrueDepth Sensor slit */}
                          <div className="w-1 h-1 rounded-full bg-[#111]" />
                          {/* Live Privacy Indicator (Subtle Amber/Green) */}
                          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] shadow-[0_0_6px_#34C759]" />
                        </div>
                      </div>

                      {/* ── Authentic iOS Status Bar ── */}
                      <div className="px-6 py-0.5 flex items-center justify-between text-[11px] font-semibold text-white z-30 shrink-0">
                        <span className="font-semibold tracking-tight">9:41</span>
                        <div className="flex items-center gap-1.5 text-white">
                          {/* Real 4-Bar Signal Indicator */}
                          <div className="flex items-end gap-[1.5px] h-2.5">
                            <div className="w-[2.5px] h-1 bg-white rounded-xs" />
                            <div className="w-[2.5px] h-1.5 bg-white rounded-xs" />
                            <div className="w-[2.5px] h-2 bg-white rounded-xs" />
                            <div className="w-[2.5px] h-2.5 bg-white rounded-xs" />
                          </div>
                          {/* 5G Label */}
                          <span className="text-[9.5px] font-bold tracking-tight">5G</span>
                          {/* Real iOS Battery Pill */}
                          <div className="w-[19px] h-[9.5px] rounded-[3px] border border-white/80 p-[1px] flex items-center relative">
                            <div className="w-[85%] h-full bg-white rounded-[1.5px]" />
                            <div className="absolute -right-[2.5px] top-[2.5px] w-[1.5px] h-[4px] bg-white/80 rounded-r-xs" />
                          </div>
                        </div>
                      </div>

                      {/* ── Main Home Screen Content ── */}
                      <div className="flex-1 px-3 py-1 flex flex-col justify-between z-20">
                        
                        {/* Top Dual iOS 18 Widgets */}
                        <div className="grid grid-cols-2 gap-2.5 shrink-0">
                          
                          {/* 1. Official Apple Calendar Widget */}
                          <div className="p-2.5 rounded-[19px] bg-[#1C1C1E]/75 backdrop-blur-2xl border border-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between h-[72px]">
                            <div className="flex items-center justify-between">
                              <span className="text-[9.5px] font-bold text-[#FF453A] tracking-wider uppercase">TUE</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#FF453A]" />
                            </div>
                            <div className="text-[28px] font-light text-white leading-none tracking-tight -my-0.5">15</div>
                            <div className="flex items-center gap-1">
                              <div className="w-1 h-3 rounded-full bg-[#FF453A]" />
                              <div className="text-[8px] text-white/85 font-medium truncate leading-tight">
                                Strategy Call · 10 AM
                              </div>
                            </div>
                          </div>

                          {/* 2. Official Apple Weather Widget */}
                          <div className="p-2.5 rounded-[19px] bg-gradient-to-b from-[#2B86DA]/85 via-[#1A6AB6]/85 to-[#124B86]/85 backdrop-blur-2xl border border-white/20 shadow-[0_6px_16px_rgba(0,0,0,0.3)] flex flex-col justify-between h-[72px]">
                            <div className="flex items-center justify-between text-white">
                              <span className="text-[9.5px] font-semibold tracking-tight">Chennai</span>
                              {/* Glowing Sun with Sunbeams */}
                              <svg className="w-4 h-4 text-[#FFD60A] drop-shadow-[0_0_4px_rgba(255,214,10,0.6)]" viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="12" r="5" />
                                <path d="M12 1v2.5M12 20.5V23M3.5 12H1M23 12h-2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                              </svg>
                            </div>
                            <div className="flex items-baseline gap-1 -my-0.5">
                              <span className="text-[28px] font-light text-white leading-none">31°</span>
                              <span className="text-[9px] text-white/95 font-medium">Sunny</span>
                            </div>
                            <div className="text-[8px] text-white/75 font-medium">H:34° L:25°</div>
                          </div>
                        </div>

                        {/* 4x3 Grid of Exact Official iOS 18 Icons */}
                        <div className="grid grid-cols-4 gap-x-2 gap-y-2 py-1">
                          
                          {/* 1. FaceTime */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#34C759] to-[#248A3D] flex items-center justify-center shadow-[0_3px_10px_rgba(52,199,89,0.35)] relative overflow-hidden border border-white/20">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <svg className="w-5 h-5 text-white drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16.5 10.5V7a1 1 0 00-1-1H3.5a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1v-3.5l5 4v-11l-5 4z" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">FaceTime</span>
                          </div>

                          {/* 2. Photos (Exact Official 8-Petal Rainbow Flower) */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-white flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.25)] relative p-1.5 border border-white/30">
                              <svg className="w-full h-full" viewBox="0 0 100 100">
                                <defs>
                                  <ellipse id="photo-petal" cx="50" cy="26" rx="10" ry="18" rx-radius="10" />
                                </defs>
                                <g opacity="0.95">
                                  {/* Top Red */}
                                  <ellipse cx="50" cy="27" rx="9" ry="18" fill="#FF3B30" />
                                  {/* Top-Right Orange */}
                                  <ellipse cx="66" cy="34" rx="9" ry="18" transform="rotate(45 66 34)" fill="#FF9500" />
                                  {/* Right Yellow */}
                                  <ellipse cx="73" cy="50" rx="18" ry="9" fill="#FFCC00" />
                                  {/* Bottom-Right Green */}
                                  <ellipse cx="66" cy="66" rx="9" ry="18" transform="rotate(-45 66 66)" fill="#34C759" />
                                  {/* Bottom Cyan */}
                                  <ellipse cx="50" cy="73" rx="9" ry="18" fill="#5AC8FA" />
                                  {/* Bottom-Left Blue */}
                                  <ellipse cx="34" cy="66" rx="9" ry="18" transform="rotate(45 34 66)" fill="#007AFF" />
                                  {/* Left Purple */}
                                  <ellipse cx="27" cy="50" rx="18" ry="9" fill="#5856D6" />
                                  {/* Top-Left Pink */}
                                  <ellipse cx="34" cy="34" rx="9" ry="18" transform="rotate(-45 34 34)" fill="#AF52DE" />
                                </g>
                                <circle cx="50" cy="50" r="7.5" fill="white" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Photos</span>
                          </div>

                          {/* 3. Camera (Authentic Titanium Radial Lens) */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#636366] via-[#48484A] to-[#2C2C2E] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.35)] relative border border-white/20 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-white/20 pointer-events-none" />
                              {/* 3D Camera Body & Lens */}
                              <div className="w-6 h-6 rounded-full bg-[#1C1C1E] border-[1.5px] border-[#8E8E93] flex items-center justify-center relative shadow-inner">
                                <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#007AFF] via-[#0A2540] to-[#1D1D1F] flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-white/40 blur-[0.5px]" />
                                </div>
                                <div className="absolute top-0.5 right-0.5 w-1 h-1 rounded-full bg-[#FFCC00]" />
                              </div>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Camera</span>
                          </div>

                          {/* 4. Mail (Official Folded Envelope + Badge) */}
                          <div className="flex flex-col items-center gap-1 relative group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#1C82FF] to-[#0055D4] flex items-center justify-center shadow-[0_3px_10px_rgba(0,85,212,0.35)] relative border border-white/20 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <svg className="w-5.5 h-5.5 text-white drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 3.25l-8 5-8-5V6l8 5 8-5v1.25z" />
                              </svg>
                            </div>
                            <span className="absolute -top-1 -right-0.5 min-w-[15px] h-[15px] px-1 rounded-full bg-[#FF3B30] text-white text-[8px] font-bold flex items-center justify-center shadow-md border border-white/40">
                              3
                            </span>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Mail</span>
                          </div>

                          {/* 5. App Store (Exact Official 'A' Geometry) */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#1C82FF] to-[#0055D4] flex items-center justify-center shadow-[0_3px_10px_rgba(0,85,212,0.35)] relative border border-white/20 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <AppStoreLogo className="w-6 h-6 text-white drop-shadow-xs" />
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">App Store</span>
                          </div>

                          {/* 6. WhatsApp (Official Green + Speech Bubble) */}
                          <div className="flex flex-col items-center gap-1 relative group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#2EE06E] to-[#1FA855] flex items-center justify-center shadow-[0_3px_10px_rgba(31,168,85,0.35)] relative border border-white/20 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <svg className="w-6 h-6 text-white drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm0 17.06c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.39c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.68 8.24-8.22 8.24z" />
                              </svg>
                            </div>
                            <span className="absolute -top-1 -right-0.5 min-w-[15px] h-[15px] px-1 rounded-full bg-[#FF3B30] text-white text-[8px] font-bold flex items-center justify-center shadow-md border border-white/40">
                              5
                            </span>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">WhatsApp</span>
                          </div>

                          {/* 7. Instagram (Official Sunset Radiance) */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div
                              className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center shadow-[0_3px_10px_rgba(214,36,159,0.35)] relative border border-white/20 overflow-hidden"
                              style={{
                                background:
                                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/20 pointer-events-none" />
                              <InstagramLogo className="w-6 h-6 text-white drop-shadow-xs" />
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Instagram</span>
                          </div>

                          {/* 8. YouTube (Official Pure Red Play) */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-[#FF0000] flex items-center justify-center shadow-[0_3px_10px_rgba(255,0,0,0.35)] relative border border-white/20 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <svg className="w-6 h-6 text-white drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">YouTube</span>
                          </div>

                          {/* 9. Spotify */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-[#121212] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.4)] relative border border-white/15 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 pointer-events-none" />
                              <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.624.624 0 01-.277-1.217c3.81-.871 7.077-.496 9.712 1.117a.623.623 0 01.207.857zm1.224-2.719a.78.78 0 01-1.073.257c-2.688-1.652-6.786-2.131-9.965-1.166a.78.78 0 01-.453-1.493c3.632-1.102 8.147-.568 11.234 1.329a.78.78 0 01.257 1.073zm.105-2.835c-3.223-1.914-8.541-2.09-11.625-1.154a.936.936 0 01-.548-1.792c3.543-1.077 9.418-.868 13.138 1.341a.936.936 0 01-.965 1.605z" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Spotify</span>
                          </div>

                          {/* 10. Netflix */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-black flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.4)] relative border border-white/15 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/10 pointer-events-none" />
                              <span className="text-[#E50914] font-black text-xl tracking-tighter drop-shadow-md">N</span>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Netflix</span>
                          </div>

                          {/* 11. Settings (Precision Precision Silver Gear) */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#8E8E93] via-[#636366] to-[#48484A] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.35)] relative border border-white/20 overflow-hidden">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-white/25 pointer-events-none" />
                              <svg className="w-6 h-6 text-white drop-shadow-xs" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
                              </svg>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Settings</span>
                          </div>

                          {/* 12. Apple Maps */}
                          <div className="flex flex-col items-center gap-1 group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-[#E9E5D9] flex items-center justify-center shadow-[0_3px_10px_rgba(0,0,0,0.3)] relative border border-white/30 overflow-hidden p-0.5">
                              {/* Maps Vector Layout */}
                              <div className="w-full h-full relative bg-[#DDD8C6] overflow-hidden rounded-[9px]">
                                {/* Green grass park zone */}
                                <div className="absolute top-0 right-0 w-5 h-5 bg-[#96D672] rounded-bl-full" />
                                {/* Blue water zone */}
                                <div className="absolute bottom-0 left-0 w-4 h-4 bg-[#75B8F7] rounded-tr-full" />
                                {/* Yellow main road */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-full h-2.5 bg-[#FFCC00] rotate-45 border-y border-white shadow-xs" />
                                </div>
                                {/* Orange Route line */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-2 bg-[#FF9500] -rotate-45 border-x border-white shadow-xs" />
                                </div>
                                {/* Destination Pin */}
                                <div className="absolute top-1.5 left-2 w-3 h-3 rounded-full bg-[#FF3B30] border-2 border-white shadow-sm z-10" />
                              </div>
                            </div>
                            <span className="text-[9px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] tracking-tight">Maps</span>
                          </div>

                        </div>

                        {/* ── iOS 18 Search Pill Button ── */}
                        <div className="flex items-center justify-center py-0.5">
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-black/35 backdrop-blur-xl border border-white/20 shadow-xs text-white/90">
                            <Search className="w-2.5 h-2.5 text-white/80" />
                            <span className="text-[9px] font-semibold tracking-tight">Search</span>
                          </div>
                        </div>

                        {/* ── iOS 18 Bottom Glassmorphic Dock ── */}
                        <div className="p-2 rounded-[26px] bg-white/25 backdrop-blur-3xl border border-white/30 shadow-[0_10px_28px_rgba(0,0,0,0.4)] grid grid-cols-4 gap-2 mb-0.5">
                          
                          {/* Dock 1: Phone */}
                          <div className="flex items-center justify-center group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#34C759] to-[#248A3D] flex items-center justify-center shadow-md relative overflow-hidden border border-white/20">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <Phone className="w-5 h-5 text-white fill-white drop-shadow-xs" />
                            </div>
                          </div>

                          {/* Dock 2: Messages (+ Badge) */}
                          <div className="flex items-center justify-center relative group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#34C759] to-[#248A3D] flex items-center justify-center shadow-md relative overflow-hidden border border-white/20">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <svg className="w-5.5 h-5.5 text-white fill-white drop-shadow-xs" viewBox="0 0 24 24">
                                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                              </svg>
                            </div>
                            <span className="absolute -top-1 -right-0.5 min-w-[15px] h-[15px] px-1 rounded-full bg-[#FF3B30] text-white text-[8px] font-bold flex items-center justify-center shadow-md border border-white/40">
                              2
                            </span>
                          </div>

                          {/* Dock 3: Safari (Exact Official Compass with 45° Red/White Needle) */}
                          <div className="flex items-center justify-center group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-white flex items-center justify-center shadow-md p-1 border border-white/30 relative overflow-hidden">
                              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1C82FF] via-[#007AFF] to-[#0055D4] flex items-center justify-center relative shadow-inner overflow-hidden">
                                {/* Dial 360 degree tick marks */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                  <div className="w-full h-[0.5px] bg-white" />
                                  <div className="h-full w-[0.5px] bg-white absolute" />
                                  <div className="w-full h-[0.5px] bg-white rotate-45 absolute" />
                                  <div className="w-full h-[0.5px] bg-white -rotate-45 absolute" />
                                </div>
                                {/* Compass Needle */}
                                <div className="w-1 h-5.5 relative rotate-45 flex flex-col items-center justify-between drop-shadow-sm">
                                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[10px] border-b-[#FF3B30]" />
                                  <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[10px] border-t-white" />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Dock 4: Apple Music (Official Neon Pink Gradient) */}
                          <div className="flex items-center justify-center group cursor-pointer">
                            <div className="w-[42px] h-[42px] rounded-[11px] bg-gradient-to-b from-[#FC3C44] to-[#F9405E] flex items-center justify-center shadow-md relative overflow-hidden border border-white/20">
                              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-white/25 pointer-events-none" />
                              <svg className="w-5.5 h-5.5 text-white fill-white drop-shadow-xs" viewBox="0 0 24 24">
                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                              </svg>
                            </div>
                          </div>

                        </div>

                        {/* ── iOS Home Bar ── */}
                        <div className="pb-0.5 flex justify-center z-20 shrink-0">
                          <div className="w-24 h-1 rounded-full bg-white/80 shadow-xs" />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ────────────────── ARCHITECTURAL APPLE iMAC MOCKUP ────────────────── */
                <div className="relative mx-auto transition-transform duration-500 ease-out hover:scale-[1.015] w-full flex flex-col items-center select-none">
                  
                  {/* ── 1. iMac Main Display Enclosure ── */}
                  <div
                    className="relative w-full rounded-[20px] sm:rounded-[22px] p-2 sm:p-2.5 overflow-hidden"
                    style={{
                      background: "linear-gradient(180deg, #E2E4E8 0%, #D0D4DB 70%, #C2C6CE 100%)",
                      boxShadow: "0 30px 70px -15px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.7) inset, 0 1px 3px rgba(0,0,0,0.1)",
                    }}
                  >
                    {/* Precision Aluminum Edge Chamfer Highlight */}
                    <div className="absolute inset-0 rounded-[20px] sm:rounded-[22px] border border-white/60 pointer-events-none" />

                    {/* Display Bezel Frame (Glass Face) */}
                    <div className="relative w-full bg-[#0D0E12] rounded-[13px] sm:rounded-[15px] overflow-hidden flex flex-col shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_4px_16px_rgba(0,0,0,0.3)]">
                      
                      {/* Top Bezel: Embedded FaceTime HD Camera (No Notch Intrusion) */}
                      <div className="h-4 sm:h-4.5 bg-[#0D0E12] flex items-center justify-center gap-2 px-4 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1A1C22] border border-white/20 flex items-center justify-center shadow-inner">
                          <div className="w-0.5 h-0.5 rounded-full bg-[#2563EB]/80" />
                        </div>
                        <div className="w-0.5 h-0.5 rounded-full bg-emerald-400 shadow-[0_0_4px_#34D399]" />
                      </div>

                      {/* ── Retina Display Glass Screen ── */}
                      <div className="relative w-full bg-white flex flex-col overflow-hidden text-neutral-900 shadow-inner">
                        
                        {/* macOS Menu Bar */}
                        <div className="h-5 sm:h-5.5 bg-[#1F2026]/95 backdrop-blur-md px-3 sm:px-3.5 flex items-center justify-between text-[8.5px] sm:text-[9.5px] text-white/90 shrink-0 border-b border-white/10 z-30">
                          {/* Left Menu Items */}
                          <div className="flex items-center gap-2.5 sm:gap-3">
                            <AppleLogo className="w-2.5 h-2.5 fill-current text-white/95" />
                            <span className="font-bold text-white">Safari</span>
                            <span className="hidden sm:inline text-white/70">File</span>
                            <span className="hidden sm:inline text-white/70">Edit</span>
                            <span className="hidden sm:inline text-white/70">View</span>
                            <span className="hidden sm:inline text-white/70">History</span>
                            <span className="hidden sm:inline text-white/70">Bookmarks</span>
                            <span className="hidden sm:inline text-white/70">Window</span>
                            <span className="hidden sm:inline text-white/70">Help</span>
                          </div>

                          {/* Right Status Icons */}
                          <div className="flex items-center gap-2 sm:gap-2.5 text-white/80 text-[8px] sm:text-[9px]">
                            <Search className="w-2 h-2 text-white/70 hidden sm:block" />
                            <Wifi className="w-2.5 h-2.5" />
                            <Battery className="w-3 h-3 hidden sm:block" />
                            <span className="font-medium tracking-tight">Tue 9:41 AM</span>
                          </div>
                        </div>

                        {/* Safari Browser Window */}
                        <div className="flex-1 flex flex-col overflow-hidden bg-white z-20">
                          
                          {/* Safari Toolbar */}
                          <div className="bg-[#EBECEF] border-b border-black/[0.08] px-2.5 sm:px-3 py-1 flex items-center justify-between gap-2.5 shrink-0">
                            {/* Traffic Lights */}
                            <div className="flex items-center gap-1.5 shrink-0">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-2xs" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-2xs" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-2xs" />
                            </div>

                            {/* Navigation Chevrons */}
                            <div className="hidden sm:flex items-center gap-1 text-neutral-500 shrink-0">
                              <span className="text-[10px] font-bold px-1 text-neutral-600 hover:text-black cursor-pointer">‹</span>
                              <span className="text-[10px] font-bold px-1 text-neutral-300">›</span>
                            </div>

                            {/* Safari Address Bar */}
                            <div className="flex-1 max-w-[280px] sm:max-w-[320px] flex items-center justify-between px-2.5 py-0.5 rounded-md bg-white border border-black/[0.1] text-[9px] text-neutral-700 shadow-2xs">
                              <div className="flex items-center gap-1.5 overflow-hidden">
                                <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                                <span className="font-semibold text-neutral-800 truncate">
                                  realresult.in/enterprise-store
                                </span>
                              </div>
                              <RotateCw className="w-2 h-2 text-neutral-400 shrink-0 hover:text-black cursor-pointer" />
                            </div>

                            {/* Right Action */}
                            <div className="flex items-center gap-1.5 text-neutral-500 shrink-0">
                              <SlidersHorizontal className="w-2.5 h-2.5 hover:text-black cursor-pointer" />
                            </div>
                          </div>

                          {/* Live Web Application Body */}
                          <div className="bg-[#F8FAFC] overflow-hidden flex flex-col p-2.5 sm:p-3 text-left font-sans gap-2">
                            
                            {/* Live Web Store / SaaS Header */}
                            <div className="flex items-center justify-between border-b border-black/[0.06] pb-1.5 shrink-0">
                              <div className="flex items-center gap-2">
                                <div className="w-5.5 h-5.5 rounded-md bg-[#0E2036] flex items-center justify-center text-white text-[9.5px] font-bold shadow-xs">
                                  R
                                </div>
                                <div>
                                  <div className="text-[10.5px] font-bold text-[#0E2036] leading-none">REAL RESULT</div>
                                  <div className="text-[7px] text-neutral-400 font-medium">Enterprise Growth Platform</div>
                                </div>
                              </div>

                              {/* Center Navigation Links */}
                              <div className="hidden sm:flex items-center gap-2.5 text-[8.5px] font-medium text-neutral-600">
                                <span className="text-[#0E2036] font-bold border-b-2 border-[#0E2036] pb-0.5">Overview</span>
                                <span className="hover:text-black cursor-pointer">Storefront</span>
                                <span className="hover:text-black cursor-pointer">Live Orders</span>
                                <span className="hover:text-black cursor-pointer">Analytics</span>
                              </div>

                              {/* Right Status Pill */}
                              <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[8px] font-bold text-emerald-700">99.99% Live Uptime</span>
                              </div>
                            </div>

                            {/* Main Two-Column Dashboard Content */}
                            <div className="grid grid-cols-12 gap-2">
                              
                              {/* Left Column (7 cols): Revenue Analytics & Live Growth Chart */}
                              <div className="col-span-7 bg-white rounded-lg p-2.5 border border-black/[0.06] shadow-2xs flex flex-col justify-between">
                                <div className="flex items-center justify-between mb-1">
                                  <div>
                                    <div className="text-[7.5px] text-neutral-400 uppercase tracking-wider font-semibold">Total Revenue</div>
                                    <div className="text-[16px] sm:text-[18px] font-extrabold text-[#0E2036] leading-none tracking-tight mt-0.5">
                                      ₹48,20,500
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-[8px] font-bold">
                                      ↑ 34.8%
                                    </span>
                                    <div className="text-[6.5px] text-neutral-400 mt-0.5">vs last 30 days</div>
                                  </div>
                                </div>

                                {/* Real-time Glowing SVG Revenue Curve */}
                                <div className="w-full h-[52px] sm:h-[60px] relative my-1">
                                  <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                                    <defs>
                                      <linearGradient id="imac-rev-grad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#007AFF" stopOpacity="0.32" />
                                        <stop offset="100%" stopColor="#007AFF" stopOpacity="0.0" />
                                      </linearGradient>
                                    </defs>
                                    <path
                                      d="M0,50 Q30,45 60,32 T120,20 T170,12 T200,6 L200,60 L0,60 Z"
                                      fill="url(#imac-rev-grad)"
                                    />
                                    <path
                                      d="M0,50 Q30,45 60,32 T120,20 T170,12 T200,6"
                                      fill="none"
                                      stroke="#007AFF"
                                      strokeWidth="2.2"
                                      strokeLinecap="round"
                                    />
                                    <circle cx="198" cy="6" r="3.5" fill="#007AFF" />
                                    <circle cx="198" cy="6" r="7" fill="#007AFF" opacity="0.35" className="animate-ping" />
                                  </svg>
                                </div>

                                {/* Performance Metrics Strip */}
                                <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-black/[0.04] text-[8px]">
                                  <div>
                                    <span className="text-neutral-400 block text-[7px]">ROAS</span>
                                    <span className="font-bold text-[#0E2036]">4.82x High</span>
                                  </div>
                                  <div>
                                    <span className="text-neutral-400 block text-[7px]">Page Speed</span>
                                    <span className="font-bold text-emerald-600">0.45s Instant</span>
                                  </div>
                                  <div>
                                    <span className="text-neutral-400 block text-[7px]">Conversion</span>
                                    <span className="font-bold text-blue-600">4.9% High</span>
                                  </div>
                                </div>
                              </div>

                              {/* Right Column (5 cols): Live Orders & Sales Feed */}
                              <div className="col-span-5 bg-white rounded-lg p-2.5 border border-black/[0.06] shadow-2xs flex flex-col justify-between">
                                <div className="flex items-center justify-between border-b border-black/[0.04] pb-1">
                                  <span className="text-[8.5px] font-bold text-[#0E2036]">Live Orders</span>
                                  <span className="text-[7.5px] text-emerald-600 font-semibold">● Real-time</span>
                                </div>

                                <div className="space-y-1.5 py-1">
                                  {/* Order 1 */}
                                  <div className="p-1.5 rounded-md bg-[#F8FAFC] border border-black/[0.03]">
                                    <div className="flex items-center justify-between text-[7.5px]">
                                      <span className="font-bold text-neutral-800 truncate">Luxury Serum #8492</span>
                                      <span className="font-extrabold text-emerald-600">₹8,490</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[6.5px] text-neutral-400 mt-0.5">
                                      <span>UPI Instant</span>
                                      <span className="text-emerald-700 font-medium">Delivered</span>
                                    </div>
                                  </div>

                                  {/* Order 2 */}
                                  <div className="p-1.5 rounded-md bg-[#F8FAFC] border border-black/[0.03]">
                                    <div className="flex items-center justify-between text-[7.5px]">
                                      <span className="font-bold text-neutral-800 truncate">B2B Lead Verified</span>
                                      <span className="font-extrabold text-blue-600">₹24,990</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[6.5px] text-neutral-400 mt-0.5">
                                      <span>Enterprise Booking</span>
                                      <span className="text-blue-700 font-medium">Confirmed</span>
                                    </div>
                                  </div>
                                </div>

                                {/* Direct Action */}
                                <div className="pt-1 border-t border-black/[0.04] flex items-center justify-between text-[7.5px] text-neutral-500">
                                  <span>Zero Cart Abandon</span>
                                  <span className="text-[#007AFF] font-bold hover:underline cursor-pointer">View All →</span>
                                </div>
                              </div>

                            </div>

                            {/* Footer Technology & Speed Attribution */}
                            <div className="flex items-center justify-between text-[7.5px] text-neutral-400 pt-1 border-t border-black/[0.05] shrink-0">
                              <div className="flex items-center gap-1.5">
                                <span>Built with Next.js 15</span>
                                <span>·</span>
                                <span>Edge CDN Global</span>
                                <span>·</span>
                                <span>Stripe &amp; Razorpay Ready</span>
                              </div>
                              <span className="text-neutral-600 font-semibold">Sub-second Mobile Checkout</span>
                            </div>

                          </div>
                        </div>

                      </div>

                      {/* ── Iconic iMac Aluminum Chin ── */}
                      <div className="h-7 sm:h-8 bg-gradient-to-r from-[#D5D8E0] via-[#E8EBF1] to-[#D5D8E0] border-t border-white/50 flex items-center justify-center relative shadow-inner">
                        {/* Subtle Tone-on-Tone Apple Logo */}
                        <AppleLogo className="w-3.5 h-3.5 fill-current text-[#7A808C] opacity-80" />
                      </div>

                    </div>
                  </div>

                  {/* ── 2. Realistic Apple Aluminum Stand ── */}
                  <div className="relative flex flex-col items-center w-full z-0 -mt-0.5">
                    {/* Stand Neck with Realistic Apple Hinge & Cable Pass-through Hole */}
                    <div className="w-20 sm:w-24 h-11 sm:h-13 bg-gradient-to-b from-[#B8BCC4] via-[#CED2DA] to-[#A8ACB5] relative flex items-center justify-center shadow-md border-x border-black/10">
                      {/* Cable Management Hole */}
                      <div className="w-6 h-6 sm:w-6.5 sm:h-6.5 rounded-full bg-[#18191C] shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] border border-black/30 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-black/60 shadow-inner" />
                      </div>
                    </div>

                    {/* Stand Foot / Solid Beveled Aluminum Base Plate */}
                    <div
                      className="w-44 sm:w-52 h-3.5 sm:h-4 rounded-[4px] bg-gradient-to-b from-[#E2E5EB] via-[#CFD3DC] to-[#B2B6C0] border border-black/15 shadow-[0_14px_30px_rgba(0,0,0,0.22)]"
                      style={{
                        boxShadow: "0 12px 28px -4px rgba(0,0,0,0.25), 0 1px 0 rgba(255,255,255,0.7) inset",
                      }}
                    />

                    {/* Ambient Desktop Shadow */}
                    <div
                      className="w-56 sm:w-64 h-3.5 rounded-full blur-[8px] opacity-40 -mt-1 pointer-events-none"
                      style={{
                        background: "radial-gradient(ellipse at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
                      }}
                    />
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevHero;
