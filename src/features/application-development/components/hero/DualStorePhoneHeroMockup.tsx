import React, { useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Battery } from "lucide-react";

interface DeviceShellProps {
  children: React.ReactNode;
  isActive: boolean;
}

// ─────────────────────────────────────────────────────────
// REALISTIC ANDROID SMARTPHONE CHASSIS (Centered Punch-hole)
// ─────────────────────────────────────────────────────────
const AndroidShell: React.FC<DeviceShellProps> = ({ children, isActive }) => {
  return (
    <div
      className={`relative w-[235px] sm:w-[265px] lg:w-[275px] xl:w-[290px] h-[480px] sm:h-[540px] lg:h-[560px] xl:h-[590px] rounded-[42px] p-[8px] sm:p-[9px] bg-gradient-to-b from-[#3E4044] via-[#232427] to-[#121315] transition-all duration-300 ${
        isActive ? "ring-2 ring-emerald-500/40" : ""
      }`}
      style={{
        boxShadow: isActive
          ? "0 25px 60px -15px rgba(0, 0, 0, 0.22), 0 10px 25px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.25) inset"
          : "0 18px 45px -12px rgba(0, 0, 0, 0.14), 0 8px 20px -8px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Outer Metal Bezel */}
      <div className="w-full h-full rounded-[34px] sm:rounded-[36px] p-[2px] bg-[#0A0B0C] border border-neutral-700/60 flex flex-col overflow-hidden relative">
        {/* Android Display Screen Area */}
        <div className="w-full h-full rounded-[32px] sm:rounded-[34px] overflow-hidden bg-white flex flex-col select-none relative font-sans text-neutral-900">
          {/* Android Status Bar with centered punch-hole camera */}
          <div className="w-full h-9 sm:h-10 pt-1.5 sm:pt-2 px-4 sm:px-5 flex justify-between items-center text-[10px] sm:text-[11px] font-medium text-neutral-800 z-30 shrink-0 relative bg-white/95">
            {/* Left: Time */}
            <span className="font-bold">9:41</span>

            {/* Center: Punch-Hole Selfie Camera */}
            <div className="absolute top-[7px] sm:top-[8px] left-1/2 -translate-x-1/2 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full bg-black flex items-center justify-center ring-2 ring-black/40">
              <div className="w-1 h-1 rounded-full bg-[#12263f]" />
            </div>

            {/* Right: Android Wi-Fi, 5G, Battery */}
            <div className="flex items-center gap-1 sm:gap-1.5 opacity-85">
              <span className="text-[9px] sm:text-[10px] font-bold">5G</span>
              <Wifi className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <div className="flex items-center gap-0.5">
                <span className="text-[8px] sm:text-[9px] font-bold">98%</span>
                <Battery className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              </div>
            </div>
          </div>

          {/* Inner Content */}
          <div className="flex-1 overflow-hidden flex flex-col relative">
            {children}
          </div>

          {/* Android Navigation Gesture Pill Bar */}
          <div className="w-full h-4 sm:h-5 flex items-center justify-center shrink-0 z-30 bg-transparent">
            <div className="w-16 sm:w-20 h-1 bg-neutral-900/35 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// REALISTIC APPLE IPHONE CHASSIS (Dynamic Island - No Green Dot)
// ─────────────────────────────────────────────────────────
const IphoneShell: React.FC<DeviceShellProps> = ({ children, isActive }) => {
  return (
    <div
      className={`relative w-[235px] sm:w-[265px] lg:w-[275px] xl:w-[290px] h-[480px] sm:h-[540px] lg:h-[560px] xl:h-[590px] rounded-[48px] sm:rounded-[50px] p-[9px] sm:p-[10px] bg-gradient-to-b from-[#4A4B4D] via-[#2A2B2D] to-[#1D1E20] transition-all duration-300 ${
        isActive ? "ring-2 ring-[#0071E3]/40" : ""
      }`}
      style={{
        boxShadow: isActive
          ? "0 25px 60px -15px rgba(0, 0, 0, 0.22), 0 10px 25px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.25) inset"
          : "0 18px 45px -12px rgba(0, 0, 0, 0.14), 0 8px 20px -8px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Outer Titanium Bezel highlight */}
      <div className="w-full h-full rounded-[40px] sm:rounded-[42px] p-[2.5px] sm:p-[3px] bg-[#0E0F10] border border-neutral-700/60 flex flex-col overflow-hidden relative">
        {/* Dynamic Island Pill at top (No Green Dot) */}
        <div className="absolute top-[10px] sm:top-[12px] left-1/2 -translate-x-1/2 z-40 w-[84px] sm:w-[96px] h-[22px] sm:h-[26px] bg-black rounded-full flex items-center justify-end px-2.5 sm:px-3 shadow-inner">
          <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#121316] flex items-center justify-center">
            <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#091018]" />
          </div>
        </div>

        {/* Screen Bezel and Inner Display Content */}
        <div className="w-full h-full rounded-[36px] sm:rounded-[38px] overflow-hidden bg-white flex flex-col select-none relative font-sans text-neutral-900">
          {/* iOS Status Bar */}
          <div className="w-full h-10 sm:h-11 pt-2 sm:pt-2.5 px-5 sm:px-6 flex justify-between items-center text-[10px] sm:text-[11px] font-semibold text-neutral-900 z-30 shrink-0">
            <span>9:41</span>
            <div className="flex items-center gap-1 sm:gap-1.5 opacity-80">
              <span className="text-[9px] sm:text-[10px] font-bold">5G</span>
              <Wifi className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
              <Battery className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </div>
          </div>

          {/* Inner Content */}
          <div className="flex-1 overflow-hidden flex flex-col relative">
            {children}
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-full h-4 sm:h-5 flex items-center justify-center shrink-0 z-30 bg-transparent">
            <div className="w-24 sm:w-28 h-1 bg-neutral-900/25 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// GOOGLE PLAY STORE SCREEN (CENTERED LOGO ON WHITE)
// ─────────────────────────────────────────────────────────
const GooglePlayStoreCenterScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white p-6 select-none relative">
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 flex items-center justify-center drop-shadow-md"
      >
        <svg
          viewBox="0 0 28.99 31.99"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.54 15.28.12 29.34a3.66 3.66 0 0 0 5.33 2.16l15.1-8.6Z"
            style={{ fill: "#ea4335" }}
          />
          <path
            d="m27.11 12.89-6.53-3.74-7.35 6.45 7.38 7.28 6.48-3.7a3.54 3.54 0 0 0 1.5-4.79 3.62 3.62 0 0 0-1.5-1.5z"
            style={{ fill: "#fbbc04" }}
          />
          <path
            d="M.12 2.66a3.57 3.57 0 0 0-.12.92v24.84a3.57 3.57 0 0 0 .12.92L14 15.64Z"
            style={{ fill: "#4285f4" }}
          />
          <path
            d="m13.64 16 6.94-6.85L5.5.51A3.73 3.73 0 0 0 3.63 0 3.64 3.64 0 0 0 .12 2.65Z"
            style={{ fill: "#34a853" }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// APPLE APP STORE SCREEN (CENTERED LOGO ON WHITE)
// ─────────────────────────────────────────────────────────
const AppleAppStoreCenterScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white p-6 select-none relative">
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] overflow-hidden drop-shadow-lg flex items-center justify-center"
      >
        <img
          src="/images/apple-app-store-logo.png"
          alt="Official Apple App Store Logo"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// DUAL STORE PHONE HERO MOCKUP (V-SHAPE DUAL MODEL)
// ─────────────────────────────────────────────────────────
export const DualStorePhoneHeroMockup: React.FC = () => {
  const [activeFocusedPhone, setActiveFocusedPhone] = useState<"android" | "ios">("ios");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative flex items-end justify-center h-[470px] sm:h-[520px] lg:h-[540px] xl:h-[570px] w-full max-w-[500px] sm:max-w-[540px] lg:max-w-[580px] mx-auto overflow-visible select-none pb-2 sm:pb-3"
      style={{
        perspective: "1400px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Soft Ambient Ground Contact Shadow ── */}
      <div
        className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 w-[82%] h-8 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.03) 55%, transparent 75%)",
          filter: "blur(12px)",
        }}
      />

      {/* ── 1. ANDROID PHONE (Left Arm: Resting Underneath at Bottom) ── */}
      <motion.div
        onClick={() => setActiveFocusedPhone("android")}
        onMouseEnter={() => setActiveFocusedPhone("android")}
        animate={{
          rotateZ: activeFocusedPhone === "android" ? -7 : -8,
          rotateY: 8 + mousePos.x * 3,
          rotateX: 3 - mousePos.y * 3,
          scale: activeFocusedPhone === "android" ? 0.92 : 0.88,
          x: 11,
          y: activeFocusedPhone === "android" ? -6 : 0,
          zIndex: activeFocusedPhone === "android" ? 22 : 15,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        className="absolute bottom-4 sm:bottom-6 right-1/2 cursor-pointer transition-shadow"
        style={{
          transformOrigin: "bottom right",
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 14px 22px rgba(0, 0, 0, 0.08)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.04))",
        }}
      >
        <AndroidShell isActive={activeFocusedPhone === "android"}>
          <GooglePlayStoreCenterScreen />
        </AndroidShell>
      </motion.div>

      {/* ── 2. APPLE IPHONE (Right Arm: Bottom Area Overlapping OVER Android) ── */}
      <motion.div
        onClick={() => setActiveFocusedPhone("ios")}
        onMouseEnter={() => setActiveFocusedPhone("ios")}
        animate={{
          rotateZ: activeFocusedPhone === "ios" ? 7 : 8,
          rotateY: -8 + mousePos.x * 3,
          rotateX: 3 - mousePos.y * 3,
          scale: activeFocusedPhone === "ios" ? 0.93 : 0.90,
          x: -27,
          y: activeFocusedPhone === "ios" ? -8 : 0,
          zIndex: 28,
        }}
        transition={{ type: "spring", stiffness: 240, damping: 26 }}
        className="absolute bottom-4 sm:bottom-6 left-1/2 cursor-pointer transition-shadow"
        style={{
          transformOrigin: "bottom left",
          transformStyle: "preserve-3d",
          filter: "drop-shadow(0 16px 26px rgba(0, 0, 0, 0.11)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.05))",
        }}
      >
        <IphoneShell isActive={activeFocusedPhone === "ios"}>
          <AppleAppStoreCenterScreen />
        </IphoneShell>
      </motion.div>
    </div>
  );
};

export default DualStorePhoneHeroMockup;
