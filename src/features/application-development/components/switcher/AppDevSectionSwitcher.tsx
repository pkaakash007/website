import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Globe, Smartphone, ArrowRight, Monitor, Code2, ShoppingCart, Database, Layout, Cpu, Zap, Bell, Shield, ExternalLink } from "lucide-react";
import { AppleLogo, AndroidLogo } from "@/components/common/PlatformLogos";

// ─── Web Portfolio Data ──────────────────────────────────────────────────────
const webPortfolio: Record<string, { name: string; industry: string; image: string }[]> = {
  "Static Website": [
    { name: "Vmmeditech",               industry: "Healthcare",     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80" },
    { name: "Anitha Packers & Movers",  industry: "Logistics",     image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80" },
    { name: "Greensprout School",       industry: "Education",     image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=700&q=80" },
    { name: "KKR Multitech Engineers",  industry: "Manufacturing", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80" },
    { name: "MP3H Nutrition Coach",     industry: "Health & Fitness",image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=80" },
    { name: "Accumed RCM Solutions",    industry: "Medical Billing",image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=700&q=80" },
  ],
  "Dynamic Website": [
    { name: "ShopKart Pro",             industry: "Retail",        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80" },
    { name: "Erode Traders Hub",        industry: "B2B Commerce",  image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=80" },
    { name: "TamilStar Events",         industry: "Events",        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=700&q=80" },
    { name: "Clinic Portal",            industry: "Healthcare",    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80" },
    { name: "Real Estate Dashboard",    industry: "Real Estate",   image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80" },
    { name: "School ERP Portal",        industry: "Education",     image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=700&q=80" },
  ],
  "E-commerce Website": [
    { name: "Textile Sree Store",       industry: "Fashion",       image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700&q=80" },
    { name: "Nilgiris Organics",        industry: "Grocery",       image: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?w=700&q=80" },
    { name: "KidZone Toys",             industry: "Toys & Kids",   image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=700&q=80" },
    { name: "Sree Crackers",            industry: "Seasonal",      image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=700&q=80" },
    { name: "Farm Fresh TN",            industry: "Agriculture",   image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80" },
    { name: "MedShop Online",           industry: "Pharmacy",      image: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=700&q=80" },
  ],
};
const WEB_PORTFOLIO_TABS = ["Static Website", "Dynamic Website", "E-commerce Website"];

// ─── Mobile App Portfolio Data ─────────────────────────────────────────────────
const mobilePortfolio: Record<string, { name: string; category: string; icon: string; desc: string; rating: string; color: string }[]> = {
  "iOS App": [
    { name: "Swiggy",      category: "Food Delivery",   icon: "/logos/swiggy.png",     desc: "Order food, track delivery live on map",   rating: "4.4", color: "#FC8019" },
    { name: "Meesho",      category: "Social Commerce", icon: "/logos/meesho.png",     desc: "Sell products, earn from home",            rating: "4.3", color: "#9B2335" },
    { name: "Practo",      category: "Healthcare",      icon: "/logos/practo.png",     desc: "Book doctors, get medicines, lab tests",   rating: "4.2", color: "#13BEBB" },
    { name: "CRED",        category: "Fintech",         icon: "/logos/cred.png",       desc: "Pay credit cards, earn rewards",           rating: "4.5", color: "#1A1A2E" },
    { name: "Nykaa",       category: "Beauty & Fashion",icon: "/logos/nykaa.png",      desc: "Shop beauty, fashion & wellness",         rating: "4.3", color: "#FC2779" },
    { name: "MakeMyTrip",  category: "Travel & Hotels", icon: "/logos/makemytrip.png", desc: "Book flights, hotels and holiday packages",rating: "4.2", color: "#E8432C" },
  ],
  "Android App": [
    { name: "PhonePe",       category: "UPI Payments",  icon: "/logos/phonepe.png",      desc: "Send money, pay bills, UPI payments",     rating: "4.4", color: "#5F259F" },
    { name: "Zomato",        category: "Food Delivery", icon: "/logos/zomato.png",       desc: "Order food from nearby restaurants",      rating: "4.3", color: "#E23744" },
    { name: "Ola",           category: "Cab Booking",   icon: "/logos/ola.png",          desc: "Book autos, cabs and bikes instantly",    rating: "4.1", color: "#00A850" },
    { name: "Urban Company", category: "Home Services", icon: "/logos/urbancompany.png", desc: "Book plumbers, electricians at home",   rating: "4.5", color: "#1C2D5A" },
    { name: "Dunzo",         category: "Quick Delivery",icon: "/logos/dunzo.svg",        desc: "10 min grocery & essentials delivery",   rating: "4.0", color: "#00D290" },
    { name: "Byju's",        category: "EdTech",        icon: "/logos/byjus.svg",        desc: "Learn subjects with video lessons & tests",rating: "4.1", color: "#813588" },
  ],
  "Cross-Platform": [
    { name: "Amazon",      category: "E-Commerce",    icon: "/logos/amazon.png",    desc: "Shop millions of products with fast delivery",rating: "4.5", color: "#FF9900" },
    { name: "Flipkart",    category: "E-Commerce",    icon: "/logos/flipkart.png",  desc: "Buy electronics, fashion, groceries",    rating: "4.3", color: "#2874F0" },
    { name: "Paytm",       category: "Super App",     icon: "/logos/paytm.png",     desc: "Pay, invest, shop and recharge in one app",rating: "3.9", color: "#00BAF2" },
    { name: "Google Pay",  category: "UPI Payments",  icon: "/logos/googlepay.png", desc: "Send money & pay bills via UPI",         rating: "4.2", color: "#4285F4" },
    { name: "BigBasket",   category: "Grocery",       icon: "/logos/bigbasket.png", desc: "Fresh groceries delivered at doorstep",  rating: "4.3", color: "#84C225" },
    { name: "Rapido",      category: "Bike Taxi",     icon: "/logos/rapido.png",    desc: "Fastest & cheapest bike taxi in India",  rating: "4.1", color: "#FFC700" },
  ],
};
const MOBILE_PORTFOLIO_TABS = ["iOS App", "Android App", "Cross-Platform"];

// ─── Web Development Data ───────────────────────────────────────────────────
const webServices = [
  {
    icon: <Monitor className="w-5 h-5" />,
    title: "Static Business Website",
    desc: "Fast, clean, mobile-friendly websites for shops, clinics, and businesses. Loads in under 2 seconds. Looks great on every phone and computer.",
    points: ["100% Mobile & WhatsApp ready", "Google Maps & contact form", "Easy to share on Instagram & Facebook"],
    color: "#007AFF",
  },
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Dynamic Website",
    desc: "Websites where you can add/edit your own content, news, products and enquiries without needing a developer every time.",
    points: ["Admin login to update content", "Enquiry forms go to your WhatsApp", "Multi-page with blog & gallery"],
    color: "#5856D6",
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "E-Commerce Website",
    desc: "Your own online shop with UPI, Google Pay, credit card, and COD. Customers browse, order and pay directly on your website.",
    points: ["UPI & Razorpay payment gateway", "Auto WhatsApp order alerts", "Product catalog & inventory"],
    color: "#34C759",
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: "ERP & Business Software",
    desc: "Custom software to manage your stock, billing, staff attendance, purchase orders — all in one system built for your business.",
    points: ["GST billing & invoicing", "Stock & supplier management", "Staff attendance & payroll"],
    color: "#FF9500",
  },
  {
    icon: <Code2 className="w-5 h-5" />,
    title: "SaaS Web Application",
    desc: "Cloud-based software platforms that many users can access and subscribe to. Built for startups and growing businesses.",
    points: ["Multi-user login & roles", "Subscription billing system", "Scalable cloud hosting"],
    color: "#FF3B30",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "API & Backend Systems",
    desc: "The engine behind your app. We build secure, fast APIs that power your mobile apps, dashboards and third-party integrations.",
    points: ["REST & GraphQL APIs", "Third-party integrations", "99.9% uptime guarantee"],
    color: "#8E8E93",
  },
];

// ─── Mobile App Development Data ────────────────────────────────────────────
const mobileServices = [
  {
    icon: <AppleLogo className="w-6 h-6 fill-current" />,
    title: "iOS App (iPhone & iPad)",
    desc: "Native iPhone and iPad apps published on the Apple App Store. Fast, smooth and perfectly designed for Apple users.",
    points: ["App Store publish included", "Face ID & Touch ID login", "Push notifications & alerts"],
    color: "#000000",
  },
  {
    icon: <AndroidLogo className="w-6 h-6 fill-current" />,
    title: "Android App",
    desc: "Custom Android apps for your business, published on Google Play Store. Works on all Samsung, Redmi, OnePlus and other phones.",
    points: ["Google Play Store publish", "Works on all Android phones", "Offline mode available"],
    color: "#3DDC84",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Cross-Platform App (iOS + Android)",
    desc: "One app built for both iPhone and Android at the same time. Saves cost and time. Same features on both platforms.",
    points: ["One codebase, two platforms", "Faster delivery & lower cost", "React Native / Flutter"],
    color: "#007AFF",
  },
  {
    icon: <ShoppingCart className="w-5 h-5" />,
    title: "E-Commerce Mobile App",
    desc: "Your own shopping app on customers' phones. They browse products, add to cart, pay via UPI and track orders — just like Amazon or Flipkart.",
    points: ["UPI & card payments", "Order tracking & history", "Push offer notifications"],
    color: "#FF9500",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Delivery & Service App",
    desc: "Apps for food delivery, courier, home services and more. With customer app, delivery partner app and admin panel.",
    points: ["Live GPS tracking", "3 apps: customer + rider + admin", "Auto order assignment"],
    color: "#FF3B30",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Enterprise Mobile App",
    desc: "Secure internal business apps for your staff — attendance, reports, field visits, approvals and CRM from their phone.",
    points: ["Biometric & secure login", "Offline data sync", "Role-based access control"],
    color: "#5856D6",
  },
];

const TABS = [
  { id: "web",    label: "Web Development",        icon: <Globe className="w-4 h-4" /> },
  { id: "mobile", label: "Mobile App Development", icon: <AppleLogo className="w-4 h-4 fill-current" /> },
];

export interface AppDevSectionSwitcherProps {
  activeTab?: "web" | "mobile";
  onTabChange?: (tab: "web" | "mobile") => void;
}

// ─── Component ───────────────────────────────────────────────────────────────
export const AppDevSectionSwitcher: React.FC<AppDevSectionSwitcherProps> = ({
  activeTab: propTab,
  onTabChange,
}) => {
  const [internalTab, setInternalTab] = useState<"web" | "mobile">("mobile");
  const activeTab = propTab ?? internalTab;

  const handleTabChange = (tab: "web" | "mobile") => {
    if (onTabChange) onTabChange(tab);
    setInternalTab(tab);
  };

  const [webPortfolioTab, setWebPortfolioTab] = useState("Static Website");
  const [mobilePortfolioTab, setMobilePortfolioTab] = useState("iOS App");

  const services = activeTab === "web" ? webServices : mobileServices;
  const currentTab = TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="app-dev-switcher" className="py-16 lg:py-24" style={{ background: "#F2F2F7" }}>
      <Container size="wide">

        {/* Section title */}
        <div className="mb-10">
          <h2 style={{
            fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "#000000", marginBottom: "8px",
          }}>
            {activeTab === "web" ? "Web Development Services" : "Mobile App Development Services"}
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(60,60,67,0.60)", maxWidth: "560px", lineHeight: 1.6 }}>
            {activeTab === "web"
              ? "From simple business websites to complex cloud software — we build everything your business needs to be online."
              : "iPhone apps, Android apps or both together — we build, test and publish your app on the store."}
          </p>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="group cursor-pointer transition-all duration-200"
              onClick={() => openLeadModal(svc.title)}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "24px",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.04)",
              }}
            >
              {/* Icon squircle */}
              <div style={{
                width: "46px", height: "46px",
                borderRadius: "12px",
                background: `${svc.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: svc.color,
                marginBottom: "16px",
              }}>
                {svc.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: "17px", fontWeight: 700,
                color: "#000000", letterSpacing: "-0.02em",
                lineHeight: 1.2, marginBottom: "10px",
              }}>
                {svc.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: "13.5px", color: "rgba(60,60,67,0.65)",
                lineHeight: 1.65, marginBottom: "16px", fontWeight: 400,
              }}>
                {svc.desc}
              </p>

              {/* Feature points */}
              <div style={{ marginBottom: "20px", paddingBottom: "16px", borderBottom: "0.5px solid rgba(60,60,67,0.10)" }}>
                {svc.points.map((pt, pIdx) => (
                  <div key={pIdx} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: pIdx < svc.points.length - 1 ? "7px" : 0 }}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="7.5" cy="7.5" r="7.5" fill={svc.color} fillOpacity="0.15" />
                      <polyline points="4,7.5 6,9.5 11,5" stroke={svc.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: "12.5px", color: "rgba(60,60,67,0.70)", fontWeight: 400 }}>{pt}</span>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#007AFF" }}>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" style={{ color: "#007AFF", opacity: 0.7 }} />
              </div>
            </div>
          ))}
        </div>

        {/* ── Web Portfolio Section (Web tab only) ── */}
        {activeTab === "web" && (
          <div className="mt-20">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#000000", marginBottom: "4px" }}>
                  Websites Portfolio
                </h2>
                <p style={{ fontSize: "13.5px", color: "#8E8E93" }}>Real websites we built for our clients</p>
              </div>

              {/* Apple segmented filter control */}
              <div className="inline-flex p-1 rounded-full bg-black/[0.05] border border-black/[0.06] shrink-0 self-start sm:self-auto">
                {WEB_PORTFOLIO_TABS.map((tab) => {
                  const isActive = webPortfolioTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setWebPortfolioTab(tab)}
                      className="px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none"
                      style={{
                        background: isActive ? "#FFFFFF" : "transparent",
                        color: isActive ? "#000000" : "rgba(60,60,67,0.70)",
                        boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)" : "none",
                      }}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Screenshot grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(webPortfolio[webPortfolioTab] || []).map((site, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer"
                  onClick={() => openLeadModal(`${webPortfolioTab} - ${site.name}`)}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 14px rgba(0,0,0,0.05)",
                    transition: "box-shadow 0.2s, transform 0.2s",
                  }}
                >
                  {/* Browser chrome bar */}
                  <div style={{ background: "#F2F2F7", padding: "8px 12px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57", display: "inline-block" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E", display: "inline-block" }} />
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28C840", display: "inline-block" }} />
                    <div style={{ flex: 1, background: "#FFFFFF", borderRadius: "6px", padding: "3px 10px", fontSize: "10px", color: "#8E8E93", marginLeft: "6px" }}>
                      www.realresult.in/{site.name.toLowerCase().replace(/\s+/g, "-")}
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div style={{ aspectRatio: "16/10", overflow: "hidden", background: "#E5E5EA" }}>
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>

                  {/* Card footer */}
                  <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <p style={{ fontSize: "14px", fontWeight: 700, color: "#000000", letterSpacing: "-0.01em", marginBottom: "2px" }}>
                        {site.name}
                      </p>
                      <p style={{ fontSize: "11px", color: "#8E8E93" }}>{site.industry}</p>
                    </div>
                    <div style={{
                      width: "30px", height: "30px", borderRadius: "9px",
                      background: "rgba(0,122,255,0.10)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#007AFF",
                    }}>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Mobile App Portfolio Section (Mobile tab only) ── */}
        {activeTab === "mobile" && (
          <div className="mt-20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#000000", marginBottom: "4px" }}>
                  Apps Like These We Can Build
                </h2>
                <p style={{ fontSize: "13.5px", color: "#8E8E93" }}>See popular apps as examples — we build similar ones for your business</p>
              </div>

              {/* Apple segmented filter control */}
              <div className="inline-flex p-1 rounded-full bg-black/[0.05] border border-black/[0.06] shrink-0 self-start sm:self-auto">
                {MOBILE_PORTFOLIO_TABS.map((tab) => {
                  const isActive = mobilePortfolioTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setMobilePortfolioTab(tab)}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none"
                      style={{
                        background: isActive ? "#FFFFFF" : "transparent",
                        color: isActive ? "#000000" : "rgba(60,60,67,0.70)",
                        boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)" : "none",
                      }}
                    >
                      {tab === "iOS App" && <AppleLogo className="w-3.5 h-3.5 fill-current" />}
                      {tab === "Android App" && <AndroidLogo className="w-3.5 h-3.5 fill-current text-[#3DDC84]" />}
                      {tab === "Cross-Platform" && <Zap className="w-3.5 h-3.5" />}
                      <span>{tab}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* App cards grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {(mobilePortfolio[mobilePortfolioTab] || []).map((app, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
                  onClick={() => openLeadModal(`Build an app like ${app.name}`)}
                  style={{
                    background: "#FFFFFF",
                    borderRadius: "22px",
                    padding: "20px 14px 18px",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  {/* Official App icon squircle with Apple continuous corner */}
                  <div
                    className="relative flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105"
                    style={{
                      width: "62px",
                      height: "62px",
                      borderRadius: "15px",
                      background: "#FFFFFF",
                      boxShadow: "0 4px 14px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
                      border: "1px solid rgba(0,0,0,0.08)",
                      padding: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "13px" }}
                      loading="lazy"
                    />
                  </div>

                  {/* App name & category */}
                  <div className="w-full">
                    <p style={{ fontSize: "14px", fontWeight: 700, color: "#000000", letterSpacing: "-0.015em", lineHeight: 1.25 }}>
                      {app.name}
                    </p>
                    <p style={{ fontSize: "11px", color: "#8E8E93", marginTop: "3px", fontWeight: 500 }}>
                      {app.category}
                    </p>
                  </div>

                  {/* Star rating pill */}
                  <div
                    className="flex items-center gap-1 px-2.5 py-0.5 rounded-full"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <span style={{ fontSize: "11px", color: "#FF9500" }}>★</span>
                    <span style={{ fontSize: "11.5px", fontWeight: 600, color: "#3C3C43" }}>{app.rating}</span>
                  </div>

                  {/* Build similar CTA (App Store GET button style) */}
                  <div
                    className="w-full py-1.5 px-3 rounded-full text-center transition-all duration-200 group-hover:bg-[#007AFF] group-hover:text-white"
                    style={{
                      background: "rgba(0,122,255,0.08)",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#007AFF",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Build Similar
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p style={{ fontSize: "11.5px", color: "#8E8E93", textAlign: "center", marginTop: "16px", lineHeight: 1.5 }}>
              * These are popular apps shown as reference examples only. We build similar apps for your business — not copies of these brands.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openLeadModal(activeTab === "web" ? "web-development" : "mobile-app-development")}
            className="inline-flex items-center gap-2.5 cursor-pointer transition-all duration-150 active:scale-[0.97] group"
            style={{
              padding: "14px 36px",
              borderRadius: "9999px",
              background: "#000000",
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: 700,
              border: "none",
              letterSpacing: "-0.01em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <span>{activeTab === "web" ? "Start Web Project" : "Start App Project"}</span>
            <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <p style={{ fontSize: "12px", color: "#8E8E93", marginTop: "10px" }}>
            Free consultation · No upfront payment · Tamil & English support
          </p>
        </div>

      </Container>
    </section>
  );
};

export default AppDevSectionSwitcher;
