import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Film,
  Play,
  Pause,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Smartphone,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
  Search,
  ShoppingBag,
  Store,
  CreditCard,
  MessageCircle,
  Star,
  User,
} from "lucide-react";

interface ShowreelScreen {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  theme: "dark" | "coral" | "blue" | "light" | "purple";
  renderContent: () => React.ReactNode;
}

const COLUMN_1_SCREENS: ShowreelScreen[] = [
  {
    id: "col1-screen1",
    category: "Store Login",
    title: "Simple Sign In",
    subtitle: "One tap login with mobile number or OTP",
    theme: "light",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-white text-neutral-900">
        <div>
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-700 mb-6">
            ←
          </div>
          <div className="text-xl font-black tracking-tight leading-tight uppercase">
            SIGN IN TO <br />
            MANAGE YOUR <br />
            DAILY SHOP.
          </div>
          <p className="text-xs text-neutral-500 mt-2">
            Enter your mobile number to get started.
          </p>

          <div className="mt-6">
            <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
              Mobile Number
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-xl border border-neutral-300 bg-neutral-50 text-xs">
              <span className="font-bold text-neutral-800">+91 98765 43210</span>
              <div className="w-6 h-6 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-xs">
                →
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-100">
          <div className="text-[10px] text-center text-neutral-400 mb-2.5">
            Or continue with
          </div>
          <div className="flex gap-2">
            <button className="flex-1 py-2 bg-neutral-100 rounded-xl text-[11px] font-bold text-neutral-800 text-center">
              Google
            </button>
            <button className="flex-1 py-2 bg-neutral-900 rounded-xl text-[11px] font-bold text-white text-center">
              Apple
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "col1-screen2",
    category: "Morning Routine",
    title: "Daily Store Start",
    subtitle: "Quick status check before opening shutter",
    theme: "coral",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-[#FF6B4A] text-white">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 text-[10px] font-bold tracking-wide uppercase">
            <CheckCircle2 className="w-3 h-3" />
            <span>Store Checklist</span>
          </div>

          <div className="mt-8">
            <div className="w-24 h-24 mx-auto rounded-full border-2 border-white/40 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border-2 border-white border-dashed animate-spin-slow" />
              <div className="text-center">
                <span className="text-2xl font-black">100%</span>
                <span className="block text-[9px] uppercase tracking-wider font-semibold opacity-80">
                  Ready
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="text-xl font-black uppercase tracking-tight">
              OPEN STORE
            </div>
            <p className="text-xs text-white/80 mt-1">
              All 4 billing counters and UPI QR codes are connected.
            </p>
          </div>
        </div>

        <button className="w-full py-3 bg-white text-[#FF6B4A] rounded-xl text-xs font-black tracking-wide uppercase shadow-md">
          Start Today's Sales
        </button>
      </div>
    ),
  },
  {
    id: "col1-screen3",
    category: "Customer Ratings",
    title: "Client Feedback",
    subtitle: "Real star reviews sent straight from WhatsApp",
    theme: "dark",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-[#121316] text-white">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>Customer Reviews</span>
            <span className="text-amber-400 font-bold flex items-center gap-1">
              ★ 4.9 / 5.0
            </span>
          </div>

          <div className="mt-5 p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                M
              </div>
              <div>
                <div className="text-xs font-bold text-white">Manoj Kumar</div>
                <div className="text-[10px] text-neutral-400">Verified Buyer · Chennai</div>
              </div>
            </div>
            <p className="text-[11px] text-neutral-300 leading-relaxed italic">
              "The app is so easy to use. My items arrived in 15 minutes and the WhatsApp receipt came immediately."
            </p>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center justify-between">
          <span>Total Reviews</span>
          <span className="font-bold text-white">1,420+ Happy Clients</span>
        </div>
      </div>
    ),
  },
];

const COLUMN_2_SCREENS: ShowreelScreen[] = [
  {
    id: "col2-screen1",
    category: "Daily Dashboard",
    title: "Good Morning Screen",
    subtitle: "Clear view of orders, weather, and tasks",
    theme: "blue",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-gradient-to-b from-[#60A5FA] to-[#2563EB] text-white">
        <div>
          <div className="flex justify-between items-center text-xs opacity-80">
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider">
                TODAY · CHENNAI
              </span>
              <div className="text-xs font-bold">Shop Summary</div>
            </div>
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="mt-8">
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-tight uppercase">
              GOOD MORNING! <br />
              READY FOR <br />
              ORDERS?
            </div>
          </div>

          {/* Mini cards */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20">
              <div className="text-[10px] text-blue-100">Pending Orders</div>
              <div className="text-lg font-black mt-0.5">18</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/15 backdrop-blur-xs border border-white/20">
              <div className="text-[10px] text-blue-100">Delivery Guys</div>
              <div className="text-lg font-black mt-0.5">6 Active</div>
            </div>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-white text-neutral-900 shadow-sm flex items-center justify-between">
          <div>
            <div className="text-xs font-bold">First Morning Batch</div>
            <div className="text-[10px] text-neutral-500">14 packages packed</div>
          </div>
          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
            →
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "col2-screen2",
    category: "Live Deliveries",
    title: "Map & Rider Tracking",
    subtitle: "Track every order moving on the street",
    theme: "light",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-[#F9FAFB] text-neutral-900">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold text-neutral-800">Live Rider Route</span>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              Moving
            </span>
          </div>

          <div className="mt-4 p-3 rounded-2xl bg-white border border-neutral-200/80 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-neutral-900">Rider: Rajesh M.</div>
              <span className="text-[10px] text-neutral-500">Bike #TN-07-2481</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <span className="text-neutral-700 font-medium">Pickup: Store Depot</span>
              </div>
              <div className="w-0.5 h-3 bg-neutral-300 ml-1" />
              <div className="flex items-center gap-2 text-xs">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                <span className="text-neutral-900 font-bold">Delivery: 14 Main Road</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-blue-900">Reaching in 8 mins</span>
            </div>
          </div>
        </div>

        <button className="w-full py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-bold">
          Call Delivery Rider
        </button>
      </div>
    ),
  },
  {
    id: "col2-screen3",
    category: "Instant Receipt",
    title: "Digital WhatsApp Bill",
    subtitle: "Zero paper wastage. Sent directly to phone",
    theme: "dark",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-[#18191E] text-white">
        <div>
          <div className="text-center pb-4 border-b border-neutral-800">
            <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg font-bold mb-2">
              ✓
            </div>
            <div className="text-base font-bold">Payment Confirmed</div>
            <div className="text-[10px] text-neutral-400">Bill #40921 · Paid via UPI</div>
          </div>

          <div className="mt-4 space-y-2 text-xs">
            <div className="flex justify-between text-neutral-400">
              <span>Customer:</span>
              <span className="text-white font-medium">Kavitha S.</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Payment Mode:</span>
              <span className="text-emerald-400 font-medium">Google Pay</span>
            </div>
            <div className="flex justify-between text-neutral-400">
              <span>Total Amount:</span>
              <span className="text-lg font-black text-white">₹2,350.00</span>
            </div>
          </div>
        </div>

        <button className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Send Bill on WhatsApp</span>
        </button>
      </div>
    ),
  },
];

const COLUMN_3_SCREENS: ShowreelScreen[] = [
  {
    id: "col3-screen1",
    category: "Appointment Booking",
    title: "Doctor Booking Screen",
    subtitle: "Select doctor, time, and get confirmed pass",
    theme: "purple",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] text-white">
        <div>
          <div className="text-[10px] font-bold tracking-wider uppercase opacity-80">
            ARVIND DENTAL CLINIC
          </div>
          <div className="text-2xl font-black mt-1 uppercase tracking-tight">
            CONFIRMED <br />
            APPOINTMENT.
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20">
            <div className="text-xs text-purple-200">Date & Time</div>
            <div className="text-base font-bold text-white mt-0.5">
              Today at 4:30 PM
            </div>
            <div className="text-xs text-purple-200 mt-2">Doctor in charge</div>
            <div className="text-sm font-bold text-white">Dr. Priya, BDS</div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs p-2.5 rounded-xl bg-white/10">
            <span>Your Token Number:</span>
            <span className="font-black text-base text-amber-300">#14</span>
          </div>
        </div>

        <div className="text-center text-[10px] text-purple-200">
          Showing this token at reception skips all waiting lines.
        </div>
      </div>
    ),
  },
  {
    id: "col3-screen2",
    category: "Stock Alert",
    title: "Low Inventory Warning",
    subtitle: "Never run out of fast-selling goods",
    theme: "light",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-white text-neutral-900">
        <div>
          <div className="flex items-center gap-2 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-bold self-start inline-flex">
            <span>⚠️ Low Stock Warning</span>
          </div>

          <div className="mt-4">
            <div className="text-base font-bold text-neutral-900">
              Only 3 Bags Left
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              Ponni Raw Rice (25kg Bag) is selling out fast today.
            </p>
          </div>

          <div className="mt-5 p-3 rounded-xl bg-neutral-50 border border-neutral-200 space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-neutral-500">Regular Supplier:</span>
              <span className="font-bold text-neutral-800">Shree Mills Ltd</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Expected Delivery:</span>
              <span className="font-bold text-emerald-600">Tomorrow morning</span>
            </div>
          </div>
        </div>

        <button className="w-full py-2.5 bg-[#0071E3] text-white rounded-xl text-xs font-bold">
          1-Tap Re-Order 20 Bags
        </button>
      </div>
    ),
  },
  {
    id: "col3-screen3",
    category: "Daily Sales Report",
    title: "Income Analytics",
    subtitle: "Hourly profit and sales chart made easy",
    theme: "dark",
    renderContent: () => (
      <div className="h-full flex flex-col justify-between p-5 bg-[#0B0C0E] text-white">
        <div>
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>Daily Profit Tracker</span>
            <span className="text-emerald-400 font-bold">+24% vs Last Week</span>
          </div>

          <div className="text-2xl font-black mt-2 text-white">₹52,480</div>
          <div className="text-[10px] text-neutral-400">Total cleared sales today</div>

          {/* Mini Bar Chart */}
          <div className="mt-6 flex items-end justify-between h-20 gap-1.5 px-2 pt-2 bg-neutral-900/80 rounded-xl border border-neutral-800">
            <div className="w-full bg-blue-500/40 hover:bg-blue-500 h-[40%] rounded-t" />
            <div className="w-full bg-blue-500/40 hover:bg-blue-500 h-[65%] rounded-t" />
            <div className="w-full bg-blue-500/40 hover:bg-blue-500 h-[50%] rounded-t" />
            <div className="w-full bg-blue-500/40 hover:bg-blue-500 h-[85%] rounded-t" />
            <div className="w-full bg-[#0071E3] h-[95%] rounded-t" />
            <div className="w-full bg-blue-500/40 hover:bg-blue-500 h-[60%] rounded-t" />
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-neutral-900 text-[11px] text-neutral-300 flex items-center justify-between">
          <span>Best-Selling Hour</span>
          <span className="font-bold text-white">5:00 PM - 7:00 PM</span>
        </div>
      </div>
    ),
  },
];

export const MobileShowreelSection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section
      id="mobile-showreel"
      className="relative py-24 sm:py-32 bg-white text-neutral-900 overflow-hidden border-b border-neutral-200"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-blue-100/50 via-purple-100/40 to-emerald-100/30 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-50/70 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with simple plain words */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0071E3] mb-4"
          >
            <Film className="w-4 h-4 text-[#0071E3]" />
            <span>Mobile App Showreel</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight leading-tight"
          >
            Real Screens. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Designed for Daily Life.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto"
          >
            Every button, form, and page is kept clean and simple so that you and your customers can get things done without getting confused.
          </motion.p>

          {/* Pause / Play Speed Control Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-semibold text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 shadow-xs transition-colors cursor-pointer"
            >
              {isPaused ? (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Resume Screen Scroll</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pause Screen Scroll</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── 3-Column Endless Scrolling Showreel Stage ── */}
        <div
          className="relative h-[680px] sm:h-[750px] overflow-hidden rounded-3xl border border-neutral-200/90 bg-[#F5F5F7] p-4 sm:p-6 shadow-inner"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Top & Bottom fade gradients for seamless look */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#F5F5F7] to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F5F5F7] to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 h-full">
            {/* ── COLUMN 1: Scrolls Upwards ── */}
            <div className="overflow-hidden relative h-full">
              <motion.div
                animate={isPaused ? {} : { y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 22,
                  ease: "linear",
                }}
                className="space-y-6"
              >
                {/* Loop items twice for seamless infinite scroll */}
                {[...COLUMN_1_SCREENS, ...COLUMN_1_SCREENS].map((screen, idx) => (
                  <ShowreelPhoneCard key={`${screen.id}-${idx}`} screen={screen} />
                ))}
              </motion.div>
            </div>

            {/* ── COLUMN 2: Scrolls Downwards ── */}
            <div className="overflow-hidden relative h-full hidden md:block">
              <motion.div
                animate={isPaused ? {} : { y: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
                className="space-y-6"
              >
                {[...COLUMN_2_SCREENS, ...COLUMN_2_SCREENS].map((screen, idx) => (
                  <ShowreelPhoneCard key={`${screen.id}-${idx}`} screen={screen} />
                ))}
              </motion.div>
            </div>

            {/* ── COLUMN 3: Scrolls Upwards ── */}
            <div className="overflow-hidden relative h-full hidden md:block">
              <motion.div
                animate={isPaused ? {} : { y: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 28,
                  ease: "linear",
                }}
                className="space-y-6"
              >
                {[...COLUMN_3_SCREENS, ...COLUMN_3_SCREENS].map((screen, idx) => (
                  <ShowreelPhoneCard key={`${screen.id}-${idx}`} screen={screen} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Strip in simple words */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-left">
            <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">
              ⚡
            </div>
            <h4 className="text-sm font-bold text-neutral-900">Very Fast to Learn</h4>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
              Your staff can start billing and taking customer orders in under 5 minutes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-left">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm mb-3">
              🛡️
            </div>
            <h4 className="text-sm font-bold text-neutral-900">Always Works Offline</h4>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
              Keep printing bills even if your Wi-Fi or mobile internet disconnects.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm text-left">
            <div className="w-8 h-8 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm mb-3">
              💬
            </div>
            <h4 className="text-sm font-bold text-neutral-900">WhatsApp Connected</h4>
            <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
              Bills, delivery updates, and reminders arrive straight on customer WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─────────────────────────────────────────────────────────
// SLEEK PHONE CARD FOR SHOWREEL STREAM
// ─────────────────────────────────────────────────────────
interface ShowreelPhoneCardProps {
  screen: ShowreelScreen;
}

const ShowreelPhoneCard: React.FC<ShowreelPhoneCardProps> = ({ screen }) => {
  return (
    <div className="group relative w-full h-[480px] rounded-[36px] p-2.5 bg-neutral-900 border border-neutral-800 shadow-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:scale-[1.01]">
      {/* Screen container */}
      <div className="w-full h-full rounded-[28px] overflow-hidden bg-neutral-950 flex flex-col relative select-none">
        {/* Dynamic Island Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 w-20 h-4 bg-black rounded-full" />

        {/* Screen inner render */}
        <div className="flex-1 overflow-hidden">{screen.renderContent()}</div>

        {/* Home bar */}
        <div className="w-full h-3 flex items-center justify-center shrink-0 bg-transparent">
          <div className="w-20 h-1 bg-neutral-500/30 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default MobileShowreelSection;
