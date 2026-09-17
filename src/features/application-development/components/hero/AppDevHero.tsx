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
import { DualStorePhoneHeroMockup } from "./DualStorePhoneHeroMockup";

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
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 flex flex-col justify-center">

            {/* ── Top Pill Switcher (Apple / iOS Segmented Control Pill Track) ── */}
            <div className="flex items-center justify-start">
              <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-[#E5E5EA]/85 border border-black/[0.04] shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] gap-1">
                <button
                  type="button"
                  onClick={() => handleTabChange("mobile")}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none whitespace-nowrap"
                  style={{
                    fontWeight: activeTab === "mobile" ? 700 : 500,
                    background: activeTab === "mobile" ? "#FFFFFF" : "transparent",
                    color: activeTab === "mobile" ? "#000000" : "rgba(60,60,67,0.72)",
                    boxShadow:
                      activeTab === "mobile"
                        ? "0 2px 8px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)"
                        : "none",
                  }}
                >
                  <div className="flex items-center gap-1 shrink-0">
                    <AppStoreLogo className="w-4 h-4 rounded-xs" />
                    <GooglePlayLogo className="w-3.5 h-3.5" />
                  </div>
                  <span>Mobile App Development</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleTabChange("web")}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer select-none whitespace-nowrap"
                  style={{
                    fontWeight: activeTab === "web" ? 700 : 500,
                    background: activeTab === "web" ? "#FFFFFF" : "transparent",
                    color: activeTab === "web" ? "#000000" : "rgba(60,60,67,0.72)",
                    boxShadow:
                      activeTab === "web"
                        ? "0 2px 8px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.06)"
                        : "none",
                  }}
                >
                  <Globe className="w-4 h-4 text-[#007AFF] shrink-0" />
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
              <div className="flex flex-wrap items-center gap-3 pt-0.5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5E5EA]/70 border border-black/[0.08] text-xs sm:text-[13px] font-semibold text-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <AppStoreLogo className="w-4 h-4 rounded-xs shrink-0" />
                  <span>Apple App Store</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5E5EA]/70 border border-black/[0.08] text-xs sm:text-[13px] font-semibold text-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                  <GooglePlayLogo className="w-3.5 h-3.5 shrink-0" />
                  <span>Google Play Store</span>
                </div>
              </div>
            )}

            {/* Reference-Matched Brand CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() =>
                  openLeadModal(
                    activeTab === "mobile"
                      ? "Hero Mobile App Requirement"
                      : "Hero Web Development Requirement"
                  )
                }
                className="group relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden select-none transition-all duration-200 ease-out active:scale-[0.98] cursor-pointer text-[13.5px] sm:text-sm px-6 py-3 gap-2 tracking-tight text-white bg-gradient-to-b from-[#152B46] via-[#0E2036] to-[#071322] border border-[#C5A059]/50 shadow-[0_4px_16px_-2px_rgba(7,19,34,0.4),0_0_0_1px_rgba(197,160,89,0.3),inset_0_1px_0.5px_rgba(255,255,255,0.22)] hover:from-[#1C385C] hover:via-[#132B47] hover:to-[#0A1A2E] hover:border-[#E5B456] hover:shadow-[0_8px_26px_-2px_rgba(7,19,34,0.5),0_0_24px_rgba(229,180,86,0.35)] hover:-translate-y-0.5"
              >
                {/* Subtle Shimmer Sweep */}
                <span
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent"
                  aria-hidden="true"
                />
                {/* Brand Mark Watermark */}
                <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-2.5 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 select-none transition-all duration-300 ease-out transform group-hover:scale-110 opacity-85 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] drop-shadow-[0_0_2px_rgba(229,180,86,0.45)]"
                  />
                </span>
                <span className="relative z-10 tracking-[-0.015em] whitespace-nowrap">
                  Discuss Your {activeTab === "mobile" ? "App" : "Web"} Project
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 shrink-0 transition-all duration-200 ease-out group-hover:translate-x-1 text-[#E5B456] group-hover:text-[#F7DB91]" />
              </button>

              <a
                href="#app-dev-switcher"
                className="group relative inline-flex items-center justify-center font-bold rounded-full overflow-hidden select-none transition-all duration-200 ease-out active:scale-[0.98] cursor-pointer text-[13.5px] sm:text-sm px-6 py-3 gap-2 tracking-tight text-[#0E2036] bg-white hover:bg-[#F6F7F9] border border-neutral-300 shadow-[0_4px_16px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5"
              >
                {/* Brand Mark Watermark */}
                <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 right-2.5 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 select-none transition-all duration-300 ease-out transform group-hover:scale-110 opacity-45 group-hover:opacity-75"
                  aria-hidden="true"
                >
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt=""
                    className="w-full h-full object-contain filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.1)]"
                  />
                </span>
                <span className="relative z-10 tracking-[-0.015em] whitespace-nowrap">
                  Explore Services
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 shrink-0 transition-all duration-200 ease-out group-hover:translate-x-1 text-[#0E2036]/70 group-hover:text-[#C5A059]" />
              </a>
            </div>
          </div>

          {/* ── Right Column: 3D Device Visualization ── */}
          <div className="lg:col-span-6 flex justify-center items-center py-4 sm:py-6 lg:py-2">
            <div
              className={`relative w-full ${
                activeTab === "mobile"
                  ? "max-w-[560px] xl:max-w-[620px]"
                  : "max-w-[490px] sm:max-w-[550px] lg:max-w-[600px]"
              } flex justify-center px-1 sm:px-3 py-2`}
              style={{
                perspective: "1200px",
              }}
            >
              {/* ────────────────── MOBILE DUAL STORE PHONE MOCKUP ────────────────── */}
              {activeTab === "mobile" ? (
                <DualStorePhoneHeroMockup />
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
