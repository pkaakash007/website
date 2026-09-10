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
} from "lucide-react";
import {
  AppleLogo,
  AndroidLogo,
  InstagramLogo,
  YouTubeLogo,
} from "@/components/common/PlatformLogos";

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
      className="relative overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-24 lg:pb-16 border-b border-black/[0.06]"
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
        {/* ── Breadcrumbs (Clean spacing below fixed navbar) ── */}
        <div className="mb-4 sm:mb-5">
          <Breadcrumbs items={[{ label: "Application Development" }]} />
        </div>

        {/* ── Top Pill Switcher ── */}
        <div className="mb-6 sm:mb-8 flex items-center justify-start">
          <div
            className="inline-flex p-1 sm:p-1.5 rounded-full items-center bg-black/[0.05] border border-black/[0.08] backdrop-blur-md shadow-inner"
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
              <Smartphone
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                style={{ color: activeTab === "mobile" ? "#007AFF" : "inherit" }}
              />
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
                className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                style={{ color: activeTab === "web" ? "#007AFF" : "inherit" }}
              />
              Web Development
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          {/* ── Left Column: iOS Typography & Messaging ── */}
          <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-4.5">

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



            {/* Apple CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  openLeadModal(
                    activeTab === "mobile"
                      ? "Hero Mobile App Requirement"
                      : "Hero Web Development Requirement"
                  )
                }
                className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white cursor-pointer transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: "#007AFF",
                  boxShadow: "0 4px 14px rgba(0, 122, 255, 0.35)",
                }}
              >
                <span>Discuss Your {activeTab === "mobile" ? "App" : "Web"} Project</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <a
                href="#app-dev-switcher"
                className="flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-black/[0.07]"
                style={{
                  background: "rgba(0, 0, 0, 0.05)",
                  color: "#000000",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                }}
              >
                <span>Explore Capabilities</span>
                <ChevronRight className="w-3.5 h-3.5 text-black/40" />
              </a>
            </div>
          </div>

          {/* ── Right Column: 3D Device Visualization ── */}
          <div className="lg:col-span-5 flex justify-center items-center py-2 lg:py-0">
            <div
              className="relative w-full max-w-[360px] sm:max-w-[390px] lg:max-w-[395px] xl:max-w-[420px] flex justify-center"
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
                    className="absolute -top-3 -left-3 sm:-left-6 z-30 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-2xl border backdrop-blur-xl shadow-xl transition-all"
                    style={{
                      background: "rgba(255, 255, 255, 0.88)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Official Apple Logo */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
                      <AppleLogo className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
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

                  {/* Floating Android Badge (Bottom Right) */}
                  <div
                    className="absolute -bottom-1 -right-2 sm:-right-4 z-30 flex items-center gap-2 px-3 py-2 rounded-xl sm:rounded-2xl border backdrop-blur-xl shadow-xl transition-all"
                    style={{
                      background: "rgba(255, 255, 255, 0.90)",
                      borderColor: "rgba(0, 0, 0, 0.08)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    {/* Official Android 3D Logo */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-neutral-100 flex items-center justify-center shrink-0 shadow-sm p-0.5 border border-neutral-200">
                      <AndroidLogo className="w-full h-full" />
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
                    className="relative w-[250px] sm:w-[270px] lg:w-[275px] xl:w-[290px] h-[500px] sm:h-[525px] lg:h-[530px] xl:h-[550px] rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 mx-auto"
                    style={{
                      background: "linear-gradient(135deg, #2C2C2E 0%, #1C1C1E 100%)",
                      boxShadow:
                        "0 25px 60px -15px rgba(0,0,0,0.38), 0 0 0 1px rgba(255,255,255,0.15), inset 0 0 0 2px #3A3A3C, inset 0 0 0 4px #1C1C1E",
                    }}
                  >
                    {/* Titanium Edge Glare */}
                    <div className="absolute inset-0 rounded-[44px] sm:rounded-[48px] pointer-events-none border border-white/20 opacity-60" />

                    {/* Left Hardware Buttons */}
                    <div className="absolute -left-[3px] top-20 w-[3px] h-6 bg-[#48484A] rounded-l-sm" />
                    <div className="absolute -left-[3px] top-30 w-[3px] h-10 bg-[#48484A] rounded-l-sm" />
                    <div className="absolute -left-[3px] top-44 w-[3px] h-10 bg-[#48484A] rounded-l-sm" />

                    {/* Right Power Button */}
                    <div className="absolute -right-[3px] top-30 w-[3px] h-14 bg-[#48484A] rounded-r-sm" />

                    {/* Inner OLED Screen Container */}
                    <div className="w-full h-full rounded-[38px] sm:rounded-[40px] overflow-hidden bg-[#0A0A0C] text-white flex flex-col relative border border-black/40">
                      {/* Dynamic Island */}
                      <div className="pt-1.5 pb-0.5 px-4 flex justify-center z-20">
                        <div className="w-20 sm:w-22 h-5 sm:h-5.5 rounded-full bg-black flex items-center justify-between px-2.5 shadow-md border border-white/10">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
                          <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/20" />
                          <div className="w-1 h-1 rounded-full bg-blue-500/60" />
                        </div>
                      </div>

                      {/* iOS Status Bar */}
                      <div className="px-5 py-0.5 flex items-center justify-between text-[10px] sm:text-[11px] font-semibold text-white/80 z-10">
                        <span>9:41</span>
                        <div className="flex items-center gap-1.5">
                          <Wifi className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          <span className="text-[9px] font-bold">5G</span>
                          <Battery className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </div>
                      </div>

                      {/* App Inside Screen UI */}
                      <div className="flex-1 px-3.5 py-1.5 space-y-2 overflow-hidden flex flex-col justify-between">
                        {/* App Header */}
                        <div className="flex items-center justify-between pt-0.5">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                              RR
                            </div>
                            <div>
                              <div className="text-[9px] text-white/60 leading-none">Enterprise App</div>
                              <div className="text-[11px] font-bold text-white leading-tight mt-0.5">Dashboard Live</div>
                            </div>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center relative">
                            <Bell className="w-3 h-3 text-white/80" />
                            <span className="absolute top-0.5 right-0.5 w-1.5 h-1.5 rounded-full bg-red-500" />
                          </div>
                        </div>

                        {/* Revenue / Metric Card */}
                        <div
                          className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl relative overflow-hidden"
                          style={{
                            background: "linear-gradient(135deg, #007AFF 0%, #5856D6 100%)",
                            boxShadow: "0 6px 16px -4px rgba(0,122,255,0.4)",
                          }}
                        >
                          <div className="flex items-center justify-between text-[9px] text-white/80 font-medium">
                            <span>Today's Total Volume</span>
                            <span className="flex items-center gap-0.5 text-emerald-200 font-bold text-[9.5px]">
                              <TrendingUp className="w-2.5 h-2.5" /> +28.4%
                            </span>
                          </div>
                          <div className="text-lg sm:text-xl font-extrabold text-white mt-0.5 tracking-tight">
                            ₹4,82,900
                          </div>
                          <div className="mt-1.5 flex items-center justify-between text-[8px] sm:text-[9px] text-white/70 pt-1.5 border-t border-white/20">
                            <span>Active Orders: 142</span>
                            <span>Sync: 0.2s ago</span>
                          </div>
                        </div>

                        {/* Quick 4 App Action Grid */}
                        <div className="grid grid-cols-4 gap-1 text-center">
                          {[
                            {
                              label: "iOS",
                              icon: <AppleLogo className="w-3 h-3 fill-white" />,
                              badgeBg: "bg-white/10 text-white",
                              boxBorder: "border-white/10",
                            },
                            {
                              label: "Android",
                              icon: <AndroidLogo className="w-3 h-3 fill-[#3DDC84]" />,
                              badgeBg: "bg-[#3DDC84]/15 text-[#3DDC84]",
                              boxBorder: "border-[#3DDC84]/20",
                            },
                            {
                              label: "Instagram",
                              icon: <InstagramLogo className="w-3.5 h-3.5" />,
                              badgeBg: "bg-pink-500/15 text-white",
                              boxBorder: "border-pink-500/20",
                            },
                            {
                              label: "YouTube",
                              icon: <YouTubeLogo className="w-3.5 h-3.5" />,
                              badgeBg: "bg-red-500/15 text-white",
                              boxBorder: "border-red-500/20",
                            },
                          ].map((item, idx) => (
                            <div
                              key={idx}
                              className={`p-1.5 rounded-lg sm:rounded-xl bg-white/[0.05] border ${item.boxBorder} flex flex-col items-center gap-0.5 transition-all hover:bg-white/[0.09]`}
                            >
                              <div className={`w-6 h-6 rounded-md sm:rounded-lg ${item.badgeBg} flex items-center justify-center`}>
                                {item.icon}
                              </div>
                              <span className="text-[8.5px] text-white/80 font-medium truncate w-full text-center">
                                {item.label}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Live Feed List */}
                        <div className="space-y-1">
                          <div className="text-[9px] font-bold text-white/60 px-1">Live Mobile Events</div>
                          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-between text-[9px]">
                            <div className="flex items-center gap-1.5">
                              <div className="w-4 h-4 rounded-md bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
                                <AppleLogo className="w-2.5 h-2.5 fill-white" />
                              </div>
                              <div>
                                <span className="font-semibold text-white/90 block leading-tight text-[9px]">iOS Build Verified</span>
                                <span className="text-[7.5px] text-emerald-400 font-medium">Apple App Store Ready</span>
                              </div>
                            </div>
                            <span className="text-white/40 text-[8px]">Just now</span>
                          </div>
                          <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-between text-[9px]">
                            <div className="flex items-center gap-1.5">
                              <div className="w-4 h-4 rounded-md bg-[#3DDC84]/20 flex items-center justify-center shrink-0 border border-[#3DDC84]/30">
                                <AndroidLogo className="w-2.5 h-2.5 fill-[#3DDC84]" />
                              </div>
                              <div>
                                <span className="font-semibold text-white/90 block leading-tight text-[9px]">Play Store APK Signed</span>
                                <span className="text-[7.5px] text-blue-400 font-medium">Android v2.4 Live</span>
                              </div>
                            </div>
                            <span className="text-white/40 text-[8px]">1m ago</span>
                          </div>
                        </div>

                        {/* iOS Home Indicator Bar */}
                        <div className="pb-0.5 pt-0.5 flex justify-center">
                          <div className="w-24 h-0.5 rounded-full bg-white/40" />
                        </div>
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
                      <AppleLogo className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-black leading-tight">iMac 24-inch</div>
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
                        {/* Centered Apple Logo on iMac Chin */}
                        <AppleLogo className="w-3.5 h-3.5 fill-black/25 text-black/25" />
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
