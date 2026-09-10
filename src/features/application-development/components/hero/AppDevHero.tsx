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
      className="relative overflow-hidden pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-10 lg:pb-16 border-b border-black/[0.06]"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F5F5F7 60%, #EFEFF4 100%)",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
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
        {/* ── Breadcrumbs ── */}
        <div className="mb-4 sm:mb-5">
          <Breadcrumbs items={[{ label: "Application Development" }]} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* ── Left Column: iOS Typography & Messaging ── */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 flex flex-col justify-center">

            {/* ── Top Pill Switcher ── */}
            <div className="flex items-center justify-start">
              <div
                className="inline-flex p-1 sm:p-1.5 rounded-full items-center bg-black/[0.05] border border-black/[0.08] backdrop-blur-md shadow-2xs"
              >
                <button
                  onClick={() => handleTabChange("mobile")}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    background: activeTab === "mobile" ? "#FFFFFF" : "transparent",
                    color: activeTab === "mobile" ? "#000000" : "rgba(60,60,67,0.7)",
                    boxShadow:
                      activeTab === "mobile" ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  <div className="flex items-center gap-1 shrink-0">
                    <AppStoreLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-xs shadow-2xs" />
                    <GooglePlayLogo className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  Mobile App Development
                </button>
                <button
                  onClick={() => handleTabChange("web")}
                  className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer"
                  style={{
                    background: activeTab === "web" ? "#FFFFFF" : "transparent",
                    color: activeTab === "web" ? "#000000" : "rgba(60,60,67,0.7)",
                    boxShadow:
                      activeTab === "web" ? "0 2px 8px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  <Globe
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#007AFF]"
                  />
                  Web Development
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
                  Native iOS &amp; Android Apps.{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #007AFF 0%, #5856D6 100%)",
                    }}
                  >
                    Crafted to Perfection.
                  </span>
                </>
              ) : (
                <>
                  Enterprise Web Apps &amp; Cloud SaaS.{" "}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #007AFF 0%, #34C759 100%)",
                    }}
                  >
                    Engineered to Scale.
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
                ? "Publish consumer-grade mobile apps on the Apple App Store and Google Play Store. Engineered with Swift, Kotlin, React Native, and Flutter for silky 60 FPS performance, offline reliability, and biometric security."
                : "Deliver instant-loading web platforms, SaaS applications, custom business ERPs, and high-volume e-commerce stores with sub-second page speeds, bank-grade authentication, and high-availability cloud architecture."}
            </p>

            {/* App Store & Google Play Store Official Badges */}
            {activeTab === "mobile" && (
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-xs font-semibold text-neutral-800 shadow-2xs">
                  <AppStoreLogo className="w-4 h-4 rounded-xs shadow-2xs" />
                  <span>Apple App Store</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.08] text-xs font-semibold text-neutral-800 shadow-2xs">
                  <GooglePlayLogo className="w-3.5 h-3.5" />
                  <span>Google Play Store</span>
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

            {/* Apple Key Highlights Strip */}
            <div className="pt-3 border-t border-black/[0.07] grid grid-cols-3 gap-3">
              {activeTab === "mobile" ? (
                <>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-black tracking-tight">60 FPS Fluid</div>
                    <div className="text-[11px] sm:text-xs text-black/50">Swift &amp; Kotlin</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-black tracking-tight">
                      <div className="flex items-center gap-0.5 shrink-0">
                        <AppStoreLogo className="w-3.5 h-3.5 rounded-xs" />
                        <GooglePlayLogo className="w-3 h-3" />
                      </div>
                      <span>App &amp; Play Store</span>
                    </div>
                    <div className="text-[11px] sm:text-xs text-black/50">100% Guaranteed</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-black tracking-tight">Enterprise Sec</div>
                    <div className="text-[11px] sm:text-xs text-black/50">Biometric &amp; Offline</div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-black tracking-tight">&lt; 1.0s Speed</div>
                    <div className="text-[11px] sm:text-xs text-black/50">Core Web Vitals</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-black tracking-tight">99.99% SLA</div>
                    <div className="text-[11px] sm:text-xs text-black/50">Cloud Scalability</div>
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold text-black tracking-tight">SOC 2 Ready</div>
                    <div className="text-[11px] sm:text-xs text-black/50">Bank-Grade Auth</div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* ── Right Column: 3D Device Visualization ── */}
          <div className="lg:col-span-5 flex justify-center items-center py-6 sm:py-8 lg:py-4">
            <div
              className="relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[395px] xl:max-w-[420px] flex justify-center px-3 sm:px-5 py-3"
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
                  {/* Floating iOS Apple Store Badge (Top Left) */}
                  <div
                    className="absolute -top-1 -left-2 sm:-left-5 z-30 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-2xl border backdrop-blur-xl shadow-xl transition-all select-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Official Apple App Store Logo */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                      <AppStoreLogo className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-[10.5px] sm:text-[11px] font-bold text-black leading-tight">
                        Apple iOS App Store
                      </div>
                      <div className="text-[9.5px] sm:text-[10px] text-gray-500 font-medium">
                        Swift &amp; SwiftUI Native
                      </div>
                    </div>
                  </div>

                  {/* Floating Android Play Store Badge (Bottom Right) */}
                  <div
                    className="absolute -bottom-1 -right-2 sm:-right-4 z-30 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-2xl border backdrop-blur-xl shadow-xl transition-all select-none"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Official Google Play Store Logo */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/[0.08] p-1">
                      <GooglePlayLogo className="w-full h-full" />
                    </div>
                    <div>
                      <div className="text-[10.5px] sm:text-[11px] font-bold text-black leading-tight">
                        Google Play Store
                      </div>
                      <div className="text-[9.5px] sm:text-[10px] text-gray-500 font-medium">
                        Kotlin &amp; Flutter Ready
                      </div>
                    </div>
                  </div>

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

                    {/* Inner OLED Screen Container */}
                    <div
                      className="w-full h-full rounded-[38px] sm:rounded-[40px] overflow-hidden bg-[#FAF9F5] text-neutral-900 flex flex-col relative border border-black/40 shadow-inner card-karla font-karla"
                      style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif" }}
                    >
                      {/* Dynamic Island */}
                      <div className="pt-2 pb-0.5 px-4 flex justify-center z-30 bg-[#FAF9F5] shrink-0">
                        <div className="w-20 sm:w-22 h-5 rounded-full bg-black flex items-center justify-between px-2.5 shadow-md border border-white/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/20" />
                          <div className="w-1 h-1 rounded-full bg-blue-500/60" />
                        </div>
                      </div>

                      {/* iOS Status Bar */}
                      <div className="px-5 py-0.5 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-neutral-800 z-30 bg-[#FAF9F5] shrink-0">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5 text-neutral-700">
                          <Wifi className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="text-[9px] font-bold">5G</span>
                          <Battery className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                      </div>

                      {/* Real Result Application Mobile Header */}
                      <div className="px-3 py-2 bg-white border-b border-neutral-200/80 flex items-center justify-between z-20 shrink-0 shadow-2xs">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-white border border-[#132C4B]/15 p-0.5 flex items-center justify-center shadow-xs shrink-0">
                            <img
                              src="/brand/realresult-mark-transparent.png"
                              alt="Real Result"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <div className="text-[10.5px] font-bold tracking-tight text-[#132C4B] uppercase leading-none">
                              REAL RESULT
                            </div>
                            <div className="text-[7.5px] font-bold tracking-wider text-[#C5A059] uppercase leading-none mt-0.5">
                              Marketing &amp; Tech
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => openLeadModal("phone-home-preview")}
                          className="px-2.5 py-1 rounded-full bg-[#132C4B] hover:bg-[#0E1B2E] text-white text-[8.5px] font-bold shadow-2xs transition-all cursor-pointer"
                        >
                          Contact
                        </button>
                      </div>

                      {/* ── Real Result Clean & Simple Home Page Canvas ── */}
                      <div className="flex-1 overflow-y-auto overflow-x-hidden no-scrollbar px-3.5 py-3 space-y-3 text-left">
                        {/* Brand Tag Pill */}
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#132C4B]/[0.06] border border-[#132C4B]/15 text-[#132C4B] text-[8px] font-bold">
                          <Sparkles className="w-2 h-2 text-[#C5A059]" />
                          <span>Premier Digital Agency</span>
                        </div>

                        {/* Clear Hero Headline */}
                        <div>
                          <h2 className="text-[15px] sm:text-[16px] font-extrabold text-[#132C4B] leading-[1.2] tracking-tight">
                            Smart Apps.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-[#8E6D2E]">
                              Real Results.
                            </span>
                          </h2>
                          <p className="text-[9px] text-neutral-500 leading-relaxed mt-1 font-normal">
                            High-converting mobile apps and digital marketing built for growth.
                          </p>
                        </div>

                        {/* Clean Primary Brand CTA Button */}
                        <div className="pt-0.5">
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-full !py-2 !px-3.5 !text-[10.5px] shadow-xs cursor-pointer"
                            onClick={() => openLeadModal("phone-home-cta")}
                          >
                            Start Your Project
                          </Button>
                        </div>

                        {/* Core Capabilities - Just 2 Clean, Uncluttered Cards */}
                        <div className="space-y-2 pt-0.5">
                          {/* Card 1: Mobile & Web Apps */}
                          <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs space-y-1 hover:border-[#132C4B]/30 transition-all">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-[#132C4B] flex items-center gap-1.5">
                                <span className="w-5 h-5 rounded-lg bg-[#132C4B]/10 text-[#132C4B] flex items-center justify-center shrink-0">
                                  <Smartphone className="w-3 h-3" />
                                </span>
                                App Development
                              </span>
                              <span className="text-[7.5px] font-bold text-[#132C4B] bg-[#132C4B]/[0.06] px-1.5 py-0.5 rounded-md">
                                iOS &amp; Android
                              </span>
                            </div>
                            <p className="text-[8px] text-neutral-500 leading-normal pl-6.5">
                              Fast, native mobile apps and modern web platforms built for speed.
                            </p>
                          </div>

                          {/* Card 2: Growth Marketing */}
                          <div className="p-2.5 rounded-xl bg-white border border-black/[0.08] shadow-2xs space-y-1 hover:border-[#C5A059]/40 transition-all">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-[#132C4B] flex items-center gap-1.5">
                                <span className="w-5 h-5 rounded-lg bg-[#C5A059]/15 text-[#8E6D2E] flex items-center justify-center shrink-0">
                                  <TrendingUp className="w-3 h-3" />
                                </span>
                                Digital Marketing
                              </span>
                              <span className="text-[7.5px] font-bold text-[#8E6D2E] bg-[#C5A059]/15 px-1.5 py-0.5 rounded-md">
                                4.2x ROAS
                              </span>
                            </div>
                            <p className="text-[8px] text-neutral-500 leading-normal pl-6.5">
                              Search dominance, precision Google Ads and multi-channel scale.
                            </p>
                          </div>
                        </div>

                        {/* Minimal Trust Indicator */}
                        <div className="flex items-center justify-center gap-2 py-1 text-[8.5px] text-neutral-500">
                          <span className="flex items-center gap-1 font-bold text-neutral-800">
                            <Star className="w-2.5 h-2.5 fill-[#C5A059] text-[#C5A059]" /> 4.9/5 Rating
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-neutral-700">120+ Brands Scaled</span>
                        </div>
                      </div>

                      {/* ── Fixed Mobile Bottom Navigation ── */}
                      <div className="px-5 py-1.5 bg-white border-t border-neutral-200/80 flex items-center justify-around z-20 shrink-0">
                        <div className="flex flex-col items-center gap-0.5 text-[#132C4B] font-bold text-[7.5px]">
                          <Home className="w-3.5 h-3.5 text-[#C5A059]" />
                          <span>Home</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 text-neutral-400 font-medium text-[7.5px] hover:text-neutral-700">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Services</span>
                        </div>
                        <div className="flex flex-col items-center gap-0.5 text-neutral-400 font-medium text-[7.5px] hover:text-neutral-700">
                          <Phone className="w-3.5 h-3.5" />
                          <span>Contact</span>
                        </div>
                      </div>

                      {/* iOS Home Indicator Bar */}
                      <div className="pb-1 pt-0.5 bg-white flex justify-center z-20 shrink-0">
                        <div className="w-24 h-1 rounded-full bg-neutral-900/30" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ────────────────── WEB 3D iMAC MODEL WITH POPULAR WEBSITES ────────────────── */
                <div
                  className="relative mx-auto transition-transform duration-500 ease-out hover:scale-[1.02]"
                  style={{
                    transform: "rotateY(7deg) rotateX(3deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Floating Retina Display Badge (Top Right) */}
                  <div
                    className="absolute -top-3 -right-2 sm:-right-6 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl border backdrop-blur-xl shadow-xl transition-all"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="w-6 h-6 rounded-lg bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Monitor className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-black leading-tight">Desktop Web</div>
                      <div className="text-[9px] text-gray-500 font-medium">4.5K Retina Display</div>
                    </div>
                  </div>

                  {/* Floating Performance Badge (Bottom Left) */}
                  <div
                    className="absolute -bottom-1 -left-2 sm:-left-4 z-30 flex items-center gap-2 px-3 py-2 rounded-2xl border backdrop-blur-xl shadow-xl transition-all"
                    style={{
                      background: "rgba(255, 255, 255, 0.92)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#007AFF] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Globe className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-black leading-tight">Full-Stack Web</div>
                      <div className="text-[9px] text-gray-500 font-medium">Next.js & Cloud Edge</div>
                    </div>
                  </div>

                  {/* ────────────────── THE 3D iMAC ENCLOSURE ────────────────── */}
                  <div className="relative mx-auto flex flex-col items-center">
                    {/* iMac Display Screen Box */}
                    <div
                      className="relative w-[300px] sm:w-[360px] lg:w-[380px] xl:w-[400px] rounded-[18px] overflow-hidden bg-white border border-black/10"
                      style={{
                        boxShadow:
                          "0 25px 60px -15px rgba(0,0,0,0.30), 0 0 0 1px rgba(255,255,255,0.4), inset 0 0 0 1px rgba(0,0,0,0.06)",
                      }}
                    >
                      {/* Top Bezel with FaceTime Camera */}
                      <div className="h-3.5 sm:h-4 bg-[#F2F4F7] flex items-center justify-center border-b border-black/[0.04]">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/60 shadow-inner" />
                      </div>

                      {/* macOS Browser Header */}
                      <div className="px-3 py-1.5 bg-[#F6F7F9] border-b border-black/[0.08] flex items-center justify-between gap-2">
                        {/* Traffic light window controls */}
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                        </div>

                        {/* Browser Address Bar with Active URL */}
                        <div className="flex-1 max-w-[200px] flex items-center justify-between px-2 py-0.5 rounded-md bg-white border border-black/[0.08] text-[9px] text-gray-600 shadow-sm">
                          <div className="flex items-center gap-1 overflow-hidden">
                            <Lock className="w-2 h-2 text-emerald-600 shrink-0" />
                            <span className="font-mono text-gray-800 truncate">
                              {selectedSite === "stripe" && "https://stripe.com"}
                              {selectedSite === "apple" && "https://apple.com"}
                              {selectedSite === "shopify" && "https://shopify.com/store"}
                              {selectedSite === "amazon" && "https://amazon.com"}
                            </span>
                          </div>
                          <RotateCw className="w-2 h-2 text-gray-400 shrink-0" />
                        </div>

                        <div className="text-[9px] font-semibold text-emerald-600 flex items-center gap-1 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Live
                        </div>
                      </div>

                      {/* Popular Websites Quick Selector Bar inside iMac Screen */}
                      <div className="px-2.5 py-1 bg-white border-b border-black/[0.06] flex items-center justify-between text-[10px]">
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                          Popular Websites:
                        </span>
                        <div className="flex items-center gap-1">
                          {[
                            { id: "stripe", label: "Stripe", color: "#635BFF" },
                            { id: "apple", label: "Apple", color: "#000000" },
                            { id: "shopify", label: "Shopify", color: "#95BF47" },
                            { id: "amazon", label: "Amazon", color: "#FF9900" },
                          ].map((site) => (
                            <button
                              key={site.id}
                              onClick={() => setSelectedSite(site.id as any)}
                              className="px-2 py-0.5 rounded-full font-semibold transition-all cursor-pointer text-[10px]"
                              style={{
                                background: selectedSite === site.id ? site.color : "rgba(0,0,0,0.04)",
                                color: selectedSite === site.id ? "#FFFFFF" : "#555555",
                                boxShadow: selectedSite === site.id ? "0 1px 4px rgba(0,0,0,0.2)" : "none",
                              }}
                            >
                              {site.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* ────────────────── POPULAR WEBSITE VIEWPORT ────────────────── */}
                      <div className="h-[210px] sm:h-[235px] overflow-hidden relative">
                        {/* 1. STRIPE FINANCIAL INFRASTRUCTURE */}
                        {selectedSite === "stripe" && (
                          <div
                            className="w-full h-full p-3 flex flex-col justify-between text-white relative overflow-hidden"
                            style={{
                              background: "linear-gradient(135deg, #0A2540 0%, #1A365D 50%, #635BFF 100%)",
                            }}
                          >
                            <div className="flex items-center justify-between text-[10px] pb-1 border-b border-white/10">
                              <span className="font-extrabold tracking-widest text-white">stripe</span>
                              <div className="flex items-center gap-2 text-[9px] text-white/70">
                                <span>Products</span>
                                <span>Solutions</span>
                                <span>Developers</span>
                                <span className="text-white font-bold">Sign in ›</span>
                              </div>
                            </div>

                            <div className="my-auto space-y-1.5">
                              <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 text-[8px] font-semibold text-cyan-300">
                                <span>Built for Modern Internet Commerce</span>
                              </div>
                              <h3 className="text-xs sm:text-sm font-extrabold tracking-tight leading-snug">
                                Financial infrastructure for the internet.
                              </h3>
                              <p className="text-[9px] text-white/75 leading-relaxed max-w-[280px]">
                                Millions of companies from startups to Fortune 500s use Stripe’s APIs to accept payments and grow.
                              </p>

                              {/* Interactive Mini Payment Simulator */}
                              <div className="p-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between text-[9px]">
                                <div className="flex items-center gap-1.5">
                                  <div className="w-5 h-5 rounded-md bg-white text-black font-bold flex items-center justify-center text-[8px]">
                                    Pay
                                  </div>
                                  <div>
                                    <div className="font-semibold text-white">One-Click Checkout</div>
                                    <div className="text-[8px] text-white/60">Sub-second authorization</div>
                                  </div>
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-900 font-bold text-[8px]">
                                  $250.00 Verified
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[8px] text-white/60 pt-1 border-t border-white/10">
                              <span>Monthly Volume: $2.4B+</span>
                              <span>99.999% Global Uptime</span>
                            </div>
                          </div>
                        )}

                        {/* 2. APPLE OFFICIAL WEBSITE */}
                        {selectedSite === "apple" && (
                          <div className="w-full h-full bg-[#000000] text-white p-3 flex flex-col justify-between relative overflow-hidden">
                            {/* Apple Minimalist Navbar */}
                            <div className="flex items-center justify-between text-[9px] text-white/70 px-1 border-b border-white/10 pb-1">
                              <AppleLogo className="w-3 h-3 fill-current text-white" />
                              <span>Store</span>
                              <span>Mac</span>
                              <span>iPad</span>
                              <span>iPhone</span>
                              <span>Watch</span>
                              <span>AirPods</span>
                            </div>

                            <div className="text-center my-auto space-y-1">
                              <div className="text-base sm:text-lg font-bold tracking-tight text-white">
                                iPhone 16 Pro
                              </div>
                              <div className="text-[10px] sm:text-[11px] text-gray-300 font-medium">
                                Hello, Apple Intelligence.
                              </div>
                              <div className="text-[8px] sm:text-[9px] text-gray-400">
                                Grade 5 Titanium design. A18 Pro chip.
                              </div>

                              {/* Buttons */}
                              <div className="flex items-center justify-center gap-2 pt-1.5">
                                <span className="px-3 py-0.5 rounded-full bg-[#0071E3] text-white text-[9px] font-semibold">
                                  Buy Now
                                </span>
                                <span className="px-3 py-0.5 rounded-full bg-white/10 text-white text-[9px] font-semibold border border-white/20">
                                  Learn more ›
                                </span>
                              </div>
                            </div>

                            {/* Apple Product Preview */}
                            <div className="p-1.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between text-[9px]">
                              <span className="text-white/80">From ₹1,19,900 or ₹9,991/mo</span>
                              <span className="text-cyan-400 font-semibold">Free Delivery</span>
                            </div>
                          </div>
                        )}

                        {/* 3. SHOPIFY LUXURY E-COMMERCE STORE */}
                        {selectedSite === "shopify" && (
                          <div className="w-full h-full bg-[#FAF9F6] text-gray-900 p-2.5 flex flex-col justify-between relative overflow-hidden">
                            {/* Store Header */}
                            <div className="flex items-center justify-between border-b border-black/10 pb-1">
                              <span className="font-extrabold text-xs tracking-wider text-black">AURA LUXE</span>
                              <div className="flex items-center gap-2 text-[9px] text-gray-600 font-medium">
                                <span>Men</span>
                                <span>Women</span>
                                <span>Accessories</span>
                                <span className="px-2 py-0.5 rounded-full bg-black text-white font-bold">Cart (2)</span>
                              </div>
                            </div>

                            <div className="my-auto space-y-1.5">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-black">Summer Essentials 2026</span>
                                <span className="text-[9px] text-emerald-700 font-semibold">In Stock · UPI Ready</span>
                              </div>

                              {/* 3 Product Grid */}
                              <div className="grid grid-cols-3 gap-1.5">
                                {[
                                  { name: "Chronograph", price: "₹8,499", tag: "Best Seller" },
                                  { name: "Sneaker Pro", price: "₹4,999", tag: "New Drop" },
                                  { name: "Leather Tote", price: "₹3,299", tag: "Limited" },
                                ].map((prod, i) => (
                                  <div key={i} className="p-1.5 rounded-xl bg-white border border-black/10 shadow-xs flex flex-col justify-between">
                                    <div className="h-8 rounded-lg bg-gray-100 flex items-center justify-center text-[8px] text-gray-400 font-mono">
                                      PRODUCT
                                    </div>
                                    <div className="mt-1">
                                      <div className="text-[8px] font-bold text-gray-900 truncate">{prod.name}</div>
                                      <div className="text-[8px] text-emerald-600 font-bold">{prod.price}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="p-1 rounded-lg bg-black text-white flex items-center justify-between text-[8px] font-semibold">
                              <span>Instant Checkout with Razorpay & UPI</span>
                              <span>Pay Now ›</span>
                            </div>
                          </div>
                        )}

                        {/* 4. AMAZON MARKETPLACE */}
                        {selectedSite === "amazon" && (
                          <div className="w-full h-full bg-[#EAEDED] text-gray-900 p-2.5 flex flex-col justify-between relative overflow-hidden">
                            {/* Amazon Navbar */}
                            <div className="bg-[#131921] -mx-2.5 -mt-2.5 p-2 flex items-center justify-between text-white gap-2">
                              <span className="font-black text-xs text-amber-400 tracking-tight">amazon</span>
                              <div className="flex-1 bg-white rounded-md flex items-center px-2 py-0.5 text-gray-700 text-[8px]">
                                <Search className="w-2.5 h-2.5 text-gray-400 mr-1" />
                                <span className="text-gray-400">Search electronics, fashion...</span>
                              </div>
                              <span className="text-[8px] font-bold bg-[#FEB800] text-black px-1.5 py-0.5 rounded">Cart</span>
                            </div>

                            <div className="my-auto space-y-1.5">
                              <div className="p-1.5 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-800 text-white flex items-center justify-between">
                                <div>
                                  <div className="text-[10px] font-extrabold">Great Indian Festival Deals</div>
                                  <div className="text-[8px] text-blue-200">Up to 60% off top electronics</div>
                                </div>
                                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black font-bold text-[8px]">Prime</span>
                              </div>

                              <div className="grid grid-cols-2 gap-1.5 text-[9px]">
                                <div className="p-1.5 bg-white rounded-lg border border-black/10">
                                  <div className="font-bold text-gray-900">Electronics & Laptops</div>
                                  <div className="text-[8px] text-emerald-600 font-semibold mt-0.5">Starting ₹14,999</div>
                                </div>
                                <div className="p-1.5 bg-white rounded-lg border border-black/10">
                                  <div className="font-bold text-gray-900">Smartphones & 5G</div>
                                  <div className="text-[8px] text-emerald-600 font-semibold mt-0.5">Extra 10% Bank Offer</div>
                                </div>
                              </div>
                            </div>

                            <div className="text-[8px] text-gray-500 flex items-center justify-between px-1">
                              <span>Delivering to Tamil Nadu · Express 1-Day</span>
                              <span className="text-blue-600 font-semibold">See all deals ›</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* ────────────────── SIGNATURE iMAC ALUMINUM CHIN ────────────────── */}
                      <div
                        className="w-full h-7 sm:h-8 bg-gradient-to-r from-[#D7DEE6] via-[#EFF3F7] to-[#D5DCE4] border-t border-black/10 flex items-center justify-center relative shadow-inner"
                      >
                        {/* Centered Brand Logo Mark on Display Chin */}
                        <div className="w-4 h-4 opacity-35 flex items-center justify-center">
                          <img
                            src="/brand/realresult-mark-transparent.png"
                            alt="Real Result"
                            className="w-full h-full object-contain filter grayscale"
                          />
                        </div>
                      </div>
                    </div>

                    {/* ────────────────── SIGNATURE iMAC TAPERED ALUMINUM STAND ────────────────── */}
                    {/* Stand Neck */}
                    <div
                      className="w-12 sm:w-14 h-8 sm:h-9 bg-gradient-to-b from-[#CBD5E1] via-[#E2E8F0] to-[#E9EEF4] border-x border-black/5 relative shadow-inner"
                    >
                      {/* Circular Cable Pass-Through Hole */}
                      <div className="w-3 h-3 rounded-full bg-[#94A3B8]/30 mx-auto mt-2 border border-black/10 shadow-inner" />
                    </div>

                    {/* Stand Base Foot */}
                    <div
                      className="w-28 sm:w-36 h-2 bg-gradient-to-r from-[#CBD5E1] via-[#F1F5F9] to-[#CBD5E1] rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.22)] border border-black/10"
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
