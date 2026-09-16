import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  CheckCircle2,
  ShoppingBag,
  Store,
  Calendar,
  Search,
  Bell,
  ArrowRight,
  TrendingUp,
  CreditCard,
  Clock,
  MapPin,
  Wifi,
  Battery,
  Layers,
  Sparkles,
} from "lucide-react";

interface AppMockupData {
  id: string;
  tabLabel: string;
  appTitle: string;
  appCategory: string;
  tagline: string;
  simpleDescription: string;
  phoneTheme: {
    accent: string;
    accentLight: string;
    badgeBg: string;
    badgeText: string;
  };
  features: string[];
}

const APPS_DATA: AppMockupData[] = [
  {
    id: "store-app",
    tabLabel: "Online Shop App",
    appTitle: "Fresh Groceries & Foods",
    appCategory: "Shopping & Quick Delivery",
    tagline: "Customers browse and buy in seconds",
    simpleDescription:
      "A simple online store app made for local shops. Customers can pick fresh fruits, add items to cart, and track their delivery right on the map.",
    phoneTheme: {
      accent: "#10B981",
      accentLight: "#ECFDF5",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
    },
    features: [
      "Live order tracking with delivery person on map",
      "Instant pay with Google Pay, PhonePe, and Cash",
      "Easy re-order button for daily milk and vegetables",
    ],
  },
  {
    id: "billing-app",
    tabLabel: "Shop Billing App",
    appTitle: "Fast Billing & Daily Sales",
    appCategory: "Store Billing & Stock",
    tagline: "Total control of your shop from your phone",
    simpleDescription:
      "Created for retail and wholesale business owners. Create bills in 3 seconds, check today's total money made, and send bills on WhatsApp.",
    phoneTheme: {
      accent: "#0071E3",
      accentLight: "#EFF6FF",
      badgeBg: "bg-blue-50",
      badgeText: "text-[#0071E3]",
    },
    features: [
      "Works even when shop internet is down or slow",
      "Automatic WhatsApp bill copy to customer",
      "Alerts when inventory stock is running low",
    ],
  },
  {
    id: "booking-app",
    tabLabel: "Doctor & Salon Booking",
    appTitle: "Easy Appointment Booking",
    appCategory: "Clinics, Salons & Services",
    tagline: "No waiting lines. Zero missed customers.",
    simpleDescription:
      "Designed for clinics, parlors, and consultants. Patients and clients pick an open time slot, book their visit, and get timely reminder alerts.",
    phoneTheme: {
      accent: "#8B5CF6",
      accentLight: "#F5F3FF",
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-700",
    },
    features: [
      "Customers choose date, time, and service staff",
      "Auto SMS and WhatsApp reminders before visit",
      "Digital token QR code for quick reception check-in",
    ],
  },
];

export const AnimatedIphoneMockupSection: React.FC = () => {
  // Screen selector tab
  const [activeAppIndex, setActiveAppIndex] = useState(1);
  const [activeFocusedPhone, setActiveFocusedPhone] = useState<"android" | "ios">("ios");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const currentApp = APPS_DATA[activeAppIndex];

  // Subtle 3D tilt based on mouse movement
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
    <section
      id="mobile-apps-showcase"
      className="relative py-20 sm:py-28 bg-[#FBFBFD] overflow-hidden border-b border-neutral-200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-gradient-to-tr from-emerald-100/40 via-blue-100/40 to-purple-100/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-sm mb-4"
          >
            <Smartphone className="w-4 h-4 text-[#0071E3]" />
            <span className="text-xs sm:text-sm font-semibold text-neutral-800 tracking-wide">
              Built for Both Android & iPhone
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight"
          >
            One App. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#0071E3] to-[#8B5CF6]">
              Flawless on Android and iOS.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed"
          >
            Your customers use different phones. That is why our apps work smoothly and look natural whether opened on an Android phone or an iPhone.
          </motion.p>

          {/* Interactive Screen Selector Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-3 p-1.5 bg-neutral-200/60 backdrop-blur-md rounded-2xl max-w-xl mx-auto"
          >
            {APPS_DATA.map((app, idx) => {
              const isActive = activeAppIndex === idx;
              return (
                <button
                  key={app.id}
                  onClick={() => setActiveAppIndex(idx)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-neutral-900 shadow-sm"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-white/40"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBg"
                      className="absolute inset-0 bg-white rounded-xl shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {idx === 0 && <ShoppingBag className="w-3.5 h-3.5" />}
                    {idx === 1 && <Store className="w-3.5 h-3.5" />}
                    {idx === 2 && <Calendar className="w-3.5 h-3.5" />}
                    {app.tabLabel}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ── 2-PHONE STAGE: 1 ANDROID PHONE + 1 IPHONE (Apple iOS) ── */}
        <div className="relative max-w-5xl mx-auto pt-4 pb-8">
          {/* ── EXACT V-SHAPED DUAL PHONE SHOWCASE (IOS BOTTOM OVERLAPPING ANDROID) ── */}
          <div
            className="relative flex items-end justify-center h-[560px] sm:h-[620px] w-full max-w-5xl mx-auto pt-6 overflow-visible select-none"
            style={{
              perspective: "1400px",
            }}
          >
            {/* ── Soft Ambient Ground Contact Shadow ── */}
            <div
              className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-10 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0.12) 0%, rgba(0, 0, 0, 0.03) 55%, transparent 75%)",
                filter: "blur(14px)",
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
              className="absolute bottom-6 right-1/2 cursor-pointer transition-shadow"
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
                x: -28,
                y: activeFocusedPhone === "ios" ? -8 : 0,
                zIndex: 28,
              }}
              transition={{ type: "spring", stiffness: 240, damping: 26 }}
              className="absolute bottom-6 left-1/2 cursor-pointer transition-shadow"
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

          {/* Active App Explanation Card */}
          <div className="mt-8 sm:mt-12 max-w-2xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentApp.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${currentApp.phoneTheme.badgeBg} ${currentApp.phoneTheme.badgeText}`}
                      >
                        {currentApp.appCategory}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        Native Android & iOS
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 mt-1.5">
                      {currentApp.appTitle}
                    </h3>
                  </div>

                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-3 py-1.5 rounded-lg self-start sm:self-auto">
                    Click either phone to switch focus
                  </div>
                </div>

                <p className="text-neutral-600 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  {currentApp.simpleDescription}
                </p>

                {/* Key simple points */}
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentApp.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-neutral-50 border border-neutral-100 text-xs text-neutral-700 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Call to action for discussing an app */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500">
                    Want an Android & iPhone app for your business?
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-[#0071E3] px-4 py-2 rounded-xl transition-colors duration-200"
                  >
                    <span>Talk to our team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// REALISTIC ANDROID SMARTPHONE CHASSIS (Punch-hole Camera)
// ─────────────────────────────────────────────────────────
interface DeviceShellProps {
  children: React.ReactNode;
  isActive: boolean;
}

const AndroidShell: React.FC<DeviceShellProps> = ({ children, isActive }) => {
  return (
    <div
      className={`relative w-[280px] sm:w-[310px] h-[580px] sm:h-[630px] rounded-[44px] p-[9px] bg-gradient-to-b from-[#3E4044] via-[#232427] to-[#121315] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 ${
        isActive ? "ring-2 ring-emerald-500/50" : ""
      }`}
      style={{
        boxShadow: isActive
          ? "0 25px 60px -15px rgba(0, 0, 0, 0.22), 0 10px 25px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.25) inset"
          : "0 18px 45px -12px rgba(0, 0, 0, 0.14), 0 8px 20px -8px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Outer Metal Bezel */}
      <div className="w-full h-full rounded-[36px] p-[2px] bg-[#0A0B0C] border border-neutral-700/60 flex flex-col overflow-hidden relative">
        {/* Android Display Screen Area */}
        <div className="w-full h-full rounded-[34px] overflow-hidden bg-white flex flex-col select-none relative font-sans text-neutral-900">
          {/* Android Status Bar with centered punch-hole camera */}
          <div className="w-full h-10 pt-2 px-5 flex justify-between items-center text-[11px] font-medium text-neutral-800 z-30 shrink-0 relative bg-white/95">
            {/* Left: Time */}
            <span className="font-bold">9:41</span>

            {/* Center: Punch-Hole Selfie Camera */}
            <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-black flex items-center justify-center ring-2 ring-black/40">
              <div className="w-1 h-1 rounded-full bg-[#12263f]" />
            </div>

            {/* Right: Android Wi-Fi, 5G, Battery */}
            <div className="flex items-center gap-1.5 opacity-85">
              <span className="text-[10px] font-bold">5G</span>
              <Wifi className="w-3 h-3" />
              <div className="flex items-center gap-0.5">
                <span className="text-[9px] font-bold">98%</span>
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Actual App Inner Content */}
          <div className="flex-1 overflow-hidden flex flex-col relative">
            {children}
          </div>

          {/* Android Navigation Gesture Pill Bar */}
          <div className="w-full h-5 flex items-center justify-center shrink-0 z-30 bg-transparent">
            <div className="w-20 h-1 bg-neutral-900/35 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// REALISTIC APPLE IPHONE CHASSIS (Dynamic Island)
// ─────────────────────────────────────────────────────────
const IphoneShell: React.FC<DeviceShellProps> = ({ children, isActive }) => {
  return (
    <div
      className={`relative w-[280px] sm:w-[310px] h-[580px] sm:h-[630px] rounded-[50px] p-[10px] bg-gradient-to-b from-[#4A4B4D] via-[#2A2B2D] to-[#1D1E20] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] transition-all duration-300 ${
        isActive ? "ring-2 ring-[#0071E3]/50" : ""
      }`}
      style={{
        boxShadow: isActive
          ? "0 25px 60px -15px rgba(0, 0, 0, 0.22), 0 10px 25px -8px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.25) inset"
          : "0 18px 45px -12px rgba(0, 0, 0, 0.14), 0 8px 20px -8px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Outer Titanium Bezel highlight */}
      <div className="w-full h-full rounded-[42px] p-[3px] bg-[#0E0F10] border border-neutral-700/60 flex flex-col overflow-hidden relative">
        {/* Dynamic Island Pill at top */}
        <div className="absolute top-[12px] left-1/2 -translate-x-1/2 z-40 w-[96px] h-[26px] bg-black rounded-full flex items-center justify-end px-3 shadow-inner">
          <div className="w-3 h-3 rounded-full bg-[#121316] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#091018]" />
          </div>
        </div>

        {/* Screen Bezel and Inner Display Content */}
        <div className="w-full h-full rounded-[38px] overflow-hidden bg-white flex flex-col select-none relative font-sans text-neutral-900">
          {/* iOS Status Bar */}
          <div className="w-full h-11 pt-2.5 px-6 flex justify-between items-center text-[11px] font-semibold text-neutral-900 z-30 shrink-0">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 opacity-80">
              <span className="text-[10px] font-bold">5G</span>
              <Wifi className="w-3 h-3" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Actual App Inner Content */}
          <div className="flex-1 overflow-hidden flex flex-col relative">
            {children}
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-full h-5 flex items-center justify-center shrink-0 z-30 bg-transparent">
            <div className="w-28 h-1 bg-neutral-900/25 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SCREEN 1: ONLINE GROCERY & FOOD SHOPPING APP
// ─────────────────────────────────────────────────────────
const StoreAppScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] text-neutral-900 text-left">
      {/* App Header */}
      <div className="px-4 py-2.5 bg-white border-b border-neutral-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs">
            GB
          </div>
          <div>
            <div className="text-[10px] text-neutral-400 font-medium">Deliver to</div>
            <div className="text-xs font-bold text-neutral-800 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600" />
              <span>Anna Nagar, Chennai</span>
            </div>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600">
          <Bell className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Mini Search bar */}
      <div className="p-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-neutral-200 text-neutral-400 text-xs">
          <Search className="w-3.5 h-3.5" />
          <span className="text-[11px]">Search vegetables, milk, rice...</span>
        </div>
      </div>

      {/* Highlight Promo Banner */}
      <div className="mx-3 p-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-sm relative overflow-hidden">
        <div className="text-[10px] font-bold uppercase tracking-wider bg-white/20 inline-block px-2 py-0.5 rounded-full mb-1">
          Today Only
        </div>
        <div className="text-sm font-black">Morning Fresh Veggies</div>
        <div className="text-[11px] text-emerald-100 mt-0.5">Delivered within 15 mins</div>
      </div>

      {/* Product List */}
      <div className="flex-1 p-3 space-y-2 overflow-hidden">
        <div className="text-[11px] font-bold text-neutral-700">Popular Today</div>

        <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-neutral-100 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center text-base">
              🍎
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900">Fresh Apple (1 kg)</div>
              <div className="text-[10px] text-neutral-500">₹140 · In stock</div>
            </div>
          </div>
          <button className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-[10px] font-bold shadow-xs">
            + Add
          </button>
        </div>

        <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-neutral-100 shadow-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-base">
              🥦
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900">Fresh Broccoli (500g)</div>
              <div className="text-[10px] text-neutral-500">₹45 · Farm Direct</div>
            </div>
          </div>
          <button className="px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-[10px] font-bold shadow-xs">
            + Add
          </button>
        </div>

        {/* Live Order in Progress chip */}
        <div className="p-2.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80 flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <div className="text-[11px] font-bold text-emerald-900">
              Order #2041 On The Way
            </div>
          </div>
          <span className="text-[10px] font-semibold text-emerald-700">Arriving in 6m</span>
        </div>
      </div>

      {/* Mini Bottom Nav */}
      <div className="h-11 bg-white border-t border-neutral-200/70 flex justify-around items-center text-[10px] text-neutral-500">
        <span className="text-emerald-600 font-bold flex flex-col items-center">
          <Store className="w-3.5 h-3.5" />
          <span>Shop</span>
        </span>
        <span className="flex flex-col items-center">
          <Search className="w-3.5 h-3.5" />
          <span>Search</span>
        </span>
        <span className="flex flex-col items-center relative">
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Cart</span>
          <span className="absolute -top-1 -right-2 w-3.5 h-3.5 bg-emerald-600 text-white rounded-full text-[8px] flex items-center justify-center font-bold">
            2
          </span>
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SCREEN 2: FAST SHOP BILLING & DAILY SALES APP
// ─────────────────────────────────────────────────────────
const BillingAppScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] text-neutral-900 text-left">
      {/* App Top Bar */}
      <div className="px-4 py-2.5 bg-[#0071E3] text-white flex items-center justify-between">
        <div>
          <div className="text-[10px] text-blue-100 font-medium">Rajesh Traders</div>
          <div className="text-xs font-bold">Today's Store Register</div>
        </div>
        <div className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">
          🟢 Shop Open
        </div>
      </div>

      {/* Big KPI summary card */}
      <div className="p-3">
        <div className="p-3.5 rounded-2xl bg-white border border-neutral-200/80 shadow-xs">
          <div className="flex items-center justify-between text-neutral-500 text-[11px]">
            <span>Today's Total Collection</span>
            <span className="text-emerald-600 font-bold flex items-center gap-0.5">
              <TrendingUp className="w-3 h-3" /> +18.4%
            </span>
          </div>
          <div className="text-2xl font-black text-neutral-900 tracking-tight mt-1">
            ₹48,920
          </div>
          <div className="text-[10px] text-neutral-400 mt-0.5">
            42 bills created · 0 pending
          </div>

          {/* Fast Quick Actions */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button className="py-2 px-3 bg-[#0071E3] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm">
              <span>+ New Bill</span>
            </button>
            <button className="py-2 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-neutral-600" />
              <span>Collect UPI</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Bills list */}
      <div className="flex-1 px-3 space-y-2 overflow-hidden">
        <div className="flex items-center justify-between text-[11px] font-bold text-neutral-700">
          <span>Recent Customer Bills</span>
          <span className="text-[#0071E3] text-[10px]">View All</span>
        </div>

        <div className="p-2.5 bg-white rounded-xl border border-neutral-100 flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-neutral-900">Bill #42 · Suresh K.</div>
            <div className="text-[10px] text-neutral-400">10:42 AM · 4 items</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-neutral-900">₹1,450</div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              UPI Paid
            </span>
          </div>
        </div>

        <div className="p-2.5 bg-white rounded-xl border border-neutral-100 flex items-center justify-between shadow-xs">
          <div>
            <div className="text-xs font-bold text-neutral-900">Bill #41 · Priya Home</div>
            <div className="text-[10px] text-neutral-400">10:28 AM · 2 items</div>
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-neutral-900">₹680</div>
            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
              Cash Paid
            </span>
          </div>
        </div>

        {/* Live popup notification on screen */}
        <div className="p-2 rounded-xl bg-neutral-900 text-white flex items-center justify-between shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">
              ✓
            </div>
            <div>
              <div className="text-[10px] font-bold">Payment Received: ₹820</div>
              <div className="text-[9px] text-neutral-300">Sent invoice on WhatsApp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Bottom Nav */}
      <div className="h-11 bg-white border-t border-neutral-200/70 flex justify-around items-center text-[10px] text-neutral-500">
        <span className="text-[#0071E3] font-bold flex flex-col items-center">
          <Store className="w-3.5 h-3.5" />
          <span>Register</span>
        </span>
        <span className="flex flex-col items-center">
          <Layers className="w-3.5 h-3.5" />
          <span>Stock</span>
        </span>
        <span className="flex flex-col items-center">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>Reports</span>
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SCREEN 3: DOCTOR & CLINIC APPOINTMENT BOOKING APP
// ─────────────────────────────────────────────────────────
const BookingAppScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col bg-[#FAF5FF] text-neutral-900 text-left">
      {/* App Top Bar */}
      <div className="px-4 py-2.5 bg-white border-b border-purple-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
            SC
          </div>
          <div>
            <div className="text-[10px] text-neutral-400">Dr. Arvind Clinic</div>
            <div className="text-xs font-bold text-neutral-800">Skin & Dental Care</div>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-bold">
          ⭐
        </div>
      </div>

      {/* Patient Greeting */}
      <div className="p-3">
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-sm">
          <div className="text-[10px] text-purple-200 font-medium">Hello, Ramesh</div>
          <div className="text-sm font-bold mt-0.5">Book Your Next Visit</div>
          <div className="text-[11px] text-purple-200 mt-1">
            Choose a doctor and confirm your token in 30 seconds
          </div>
        </div>
      </div>

      {/* Slot Selector */}
      <div className="flex-1 px-3 space-y-2.5 overflow-hidden">
        <div className="text-[11px] font-bold text-neutral-700">Available Doctors Today</div>

        <div className="p-2.5 bg-white rounded-xl border border-purple-100 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">
              DA
            </div>
            <div>
              <div className="text-xs font-bold text-neutral-900">Dr. Arvind, MDS</div>
              <div className="text-[10px] text-neutral-500">Dental Specialist · 12 yrs exp</div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            Available
          </span>
        </div>

        {/* Available time slots */}
        <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
          Pick Time Slot
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          <button className="py-1.5 px-2 rounded-lg bg-white border border-purple-200 text-purple-800 text-[10px] font-bold">
            4:00 PM
          </button>
          <button className="py-1.5 px-2 rounded-lg bg-purple-600 text-white text-[10px] font-bold shadow-xs">
            4:30 PM ✓
          </button>
          <button className="py-1.5 px-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 text-[10px] font-medium">
            5:00 PM
          </button>
        </div>

        {/* Confirmed Token Card */}
        <div className="p-2.5 bg-white rounded-xl border border-emerald-200 bg-emerald-50/50 flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-600" />
            <div>
              <div className="text-[11px] font-bold text-neutral-900">
                Token #14 Confirmed
              </div>
              <div className="text-[9px] text-neutral-500">
                Reminder will be sent on WhatsApp
              </div>
            </div>
          </div>
          <span className="text-[10px] font-bold text-emerald-700">Confirmed</span>
        </div>
      </div>

      {/* Mini Bottom Nav */}
      <div className="h-11 bg-white border-t border-purple-100 flex justify-around items-center text-[10px] text-neutral-500">
        <span className="text-purple-700 font-bold flex flex-col items-center">
          <Calendar className="w-3.5 h-3.5" />
          <span>Book</span>
        </span>
        <span className="flex flex-col items-center">
          <Clock className="w-3.5 h-3.5" />
          <span>My Visits</span>
        </span>
        <span className="flex flex-col items-center">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Prescriptions</span>
        </span>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────
// SCREEN: GOOGLE PLAY STORE LOGO ON WHITE BACKGROUND (CENTERED ONLY)
// ─────────────────────────────────────────────────────────
const GooglePlayStoreCenterScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white p-6 select-none relative">
      {/* Centered Play Store Logo */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center drop-shadow-md"
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
// SCREEN: APPLE APP STORE LOGO ON WHITE BACKGROUND (CENTERED ONLY)
// ─────────────────────────────────────────────────────────
const AppleAppStoreCenterScreen: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-white p-6 select-none relative">
      {/* Centered Apple App Store Logo */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-[28px] sm:rounded-[32px] overflow-hidden drop-shadow-lg flex items-center justify-center"
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

export default AnimatedIphoneMockupSection;
