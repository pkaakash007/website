import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Globe, Smartphone, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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
const mobilePortfolio: Record<string, { name: string; category: string; icon: string; desc: string; rating: string }[]> = {
  "iOS App": [
    { name: "Swiggy",      category: "Food Delivery",   icon: "/logos/swiggy.png",     desc: "Order food, track delivery live on map",   rating: "4.4" },
    { name: "Meesho",      category: "Social Commerce", icon: "/logos/meesho.png",     desc: "Sell products, earn from home",            rating: "4.3" },
    { name: "Practo",      category: "Healthcare",      icon: "/logos/practo.png",     desc: "Book doctors, get medicines, lab tests",   rating: "4.2" },
    { name: "CRED",        category: "Fintech",         icon: "/logos/cred.png",       desc: "Pay credit cards, earn rewards",           rating: "4.5" },
    { name: "Nykaa",       category: "Beauty & Fashion",icon: "/logos/nykaa.png",      desc: "Shop beauty, fashion & wellness",         rating: "4.3" },
    { name: "MakeMyTrip",  category: "Travel & Hotels", icon: "/logos/makemytrip.png", desc: "Book flights, hotels and holiday packages",rating: "4.2" },
  ],
  "Android App": [
    { name: "PhonePe",       category: "UPI Payments",  icon: "/logos/phonepe.png",      desc: "Send money, pay bills, UPI payments",     rating: "4.4" },
    { name: "Zomato",        category: "Food Delivery", icon: "/logos/zomato.png",       desc: "Order food from nearby restaurants",      rating: "4.3" },
    { name: "Ola",           category: "Cab Booking",   icon: "/logos/ola.png",          desc: "Book autos, cabs and bikes instantly",    rating: "4.1" },
    { name: "Urban Company", category: "Home Services", icon: "/logos/urbancompany.png", desc: "Book plumbers, electricians at home",   rating: "4.5" },
    { name: "Dunzo",         category: "Quick Delivery",icon: "/logos/dunzo.svg",        desc: "10 min grocery & essentials delivery",   rating: "4.0" },
    { name: "Byju's",        category: "EdTech",        icon: "/logos/byjus.svg",        desc: "Learn subjects with video lessons & tests",rating: "4.1" },
  ],
  "Cross-Platform": [
    { name: "Amazon",      category: "E-Commerce",    icon: "/logos/amazon.png",    desc: "Shop millions of products with fast delivery",rating: "4.5" },
    { name: "Flipkart",    category: "E-Commerce",    icon: "/logos/flipkart.png",  desc: "Buy electronics, fashion, groceries",    rating: "4.3" },
    { name: "Paytm",       category: "Super App",     icon: "/logos/paytm.png",     desc: "Pay, invest, shop and recharge in one app",rating: "3.9" },
    { name: "Google Pay",  category: "UPI Payments",  icon: "/logos/googlepay.png", desc: "Send money & pay bills via UPI",         rating: "4.2" },
    { name: "BigBasket",   category: "Grocery",       icon: "/logos/bigbasket.png", desc: "Fresh groceries delivered at doorstep",  rating: "4.3" },
    { name: "Rapido",      category: "Bike Taxi",     icon: "/logos/rapido.png",    desc: "Fastest & cheapest bike taxi in India",  rating: "4.1" },
  ],
};
const MOBILE_PORTFOLIO_TABS = ["iOS App", "Android App", "Cross-Platform"];

// ─── Web Development Services Data ──────────────────────────────────────────
const webServices = [
  {
    number: "01",
    title: "Static Business Website",
    desc: "Fast, clean, mobile-friendly websites for shops, clinics, and local businesses. Loads in under 1 second on all smartphones.",
    points: ["100% Mobile & WhatsApp ready", "Google Maps & contact form", "Easy to share on social media"],
  },
  {
    number: "02",
    title: "Dynamic Website",
    desc: "Websites where you can add and edit your own content, news, products, and customer inquiries without needing a developer.",
    points: ["Admin login to update content", "Enquiries sent directly to your WhatsApp", "Multi-page structure with blog & gallery"],
  },
  {
    number: "03",
    title: "E-Commerce Website",
    desc: "Your own online shop with UPI, Google Pay, credit card, and COD. Customers browse, order, and pay directly on your website.",
    points: ["Direct UPI & card payment checkout", "Automatic WhatsApp order alerts", "Product catalog & inventory management"],
  },
  {
    number: "04",
    title: "ERP & Business Software",
    desc: "Custom software to manage your inventory, billing, staff attendance, and purchase orders in one system.",
    points: ["GST billing & invoice generation", "Stock & supplier tracking", "Staff attendance & payroll management"],
  },
  {
    number: "05",
    title: "SaaS Web Application",
    desc: "Cloud-based software platforms that multiple users can access and subscribe to. Built for startups and expanding businesses.",
    points: ["Multi-user login & permission roles", "Subscription billing system", "Scalable cloud deployment"],
  },
  {
    number: "06",
    title: "API & Backend Systems",
    desc: "The core engine behind your app. We build secure, fast backend services that power mobile apps, dashboards, and integrations.",
    points: ["REST & GraphQL API endpoints", "Third-party system integrations", "High availability and data safety"],
  },
];

// ─── Mobile App Development Services Data ───────────────────────────────────
const mobileServices = [
  {
    number: "01",
    title: "iOS App (iPhone & iPad)",
    desc: "Native iPhone and iPad apps published on the Apple App Store. Fast, smooth, and designed for iOS users.",
    points: ["App Store publishing included", "Face ID & Touch ID secure login", "Push notifications & updates"],
  },
  {
    number: "02",
    title: "Android App",
    desc: "Custom Android apps for your business, published on the Google Play Store. Tested on all Android phone models.",
    points: ["Google Play Store publishing included", "Works across all Android smartphones", "Offline mode data caching"],
  },
  {
    number: "03",
    title: "Cross-Platform App (iOS + Android)",
    desc: "One codebase built for both iPhone and Android at the same time. Reduces development timeline and total cost.",
    points: ["Single codebase for iOS & Android", "Faster launch & lower investment", "Built with React Native / Flutter"],
  },
  {
    number: "04",
    title: "E-Commerce Mobile App",
    desc: "Your own shopping app on your customers' phones. Customers browse products, add to cart, and pay via UPI.",
    points: ["UPI & debit/credit card checkout", "Order tracking & purchase history", "Push notifications for special offers"],
  },
  {
    number: "05",
    title: "Delivery & Service App",
    desc: "Applications for food delivery, courier services, and home services, with customer app, rider app, and admin dashboard.",
    points: ["Live GPS tracking on map", "Complete system: customer, driver & admin", "Automated order assignment"],
  },
  {
    number: "06",
    title: "Enterprise Mobile App",
    desc: "Internal business apps for staff to manage attendance, daily reports, field visits, approvals, and CRM from their phone.",
    points: ["Biometric & OTP secure login", "Offline data synchronization", "Role-based staff permissions"],
  },
];

const TABS = [
  { id: "web",    label: "Web Development",        icon: <Globe className="w-4 h-4" /> },
  { id: "mobile", label: "Mobile App Development", icon: <Smartphone className="w-4 h-4" /> },
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
  const webScrollRef = useRef<HTMLDivElement>(null);

  const scrollWeb = (direction: "left" | "right") => {
    if (webScrollRef.current) {
      const scrollAmount = webScrollRef.current.clientWidth * 0.85;
      webScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const services = activeTab === "web" ? webServices : mobileServices;

  return (
    <section id="app-dev-switcher" className="py-16 lg:py-24 bg-white border-t border-neutral-200">
      <Container size="wide">

        {/* Section title */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#DCC195] mb-3">
            {activeTab === "web" ? "Web Development Services" : "Mobile App Development Services"}
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            {activeTab === "web"
              ? "From clean business websites to custom software — we build everything your business needs online."
              : "iPhone apps and Android apps engineered cleanly, tested thoroughly, and published live on app stores."}
          </p>
        </div>

        {/* ── Service Cards Grid (Human Handcrafted Layout) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between pt-2 pb-6 border-b border-neutral-200"
            >
              <div>
                {/* Index Number */}
                <div className="text-xs font-semibold text-neutral-400 mb-3 tracking-wide">
                  {svc.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-neutral-900 mb-2 leading-snug">
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  {svc.desc}
                </p>

                {/* Feature points */}
                <ul className="space-y-2 mb-6">
                  {svc.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 leading-snug"
                    >
                      <span className="text-neutral-400 select-none">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-3 flex items-center justify-between border-t border-neutral-100">
                <Link
                  to="/contact"
                  className="text-xs sm:text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ── Web Portfolio Section ── */}
        {activeTab === "web" && (
          <div className="mt-20 pt-16 border-t border-neutral-200">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0E2036] mb-1">
                  Recent Web Projects
                </h2>
                <p className="text-sm text-neutral-500">Real websites built for business clients</p>
              </div>

              {/* Category Filter Links & Side Scroll Controls */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-4 sm:gap-6">
                  {WEB_PORTFOLIO_TABS.map((tab) => {
                    const isActive = webPortfolioTab === tab;
                    return (
                      <button
                        key={tab}
                        onClick={() => {
                          setWebPortfolioTab(tab);
                          if (webScrollRef.current) {
                            webScrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
                          }
                        }}
                        className={`text-sm font-medium transition-colors cursor-pointer select-none ${
                          isActive
                            ? "text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1"
                            : "text-neutral-500 hover:text-neutral-900"
                        }`}
                      >
                        {tab}
                      </button>
                    );
                  })}
                </div>

                {/* Side Scroll Arrows */}
                <div className="flex items-center gap-1.5 pl-2 border-l border-neutral-200">
                  <button
                    onClick={() => scrollWeb("left")}
                    aria-label="Scroll projects left"
                    className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors text-neutral-700 cursor-pointer select-none"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => scrollWeb("right")}
                    aria-label="Scroll projects right"
                    className="w-8 h-8 rounded-full border border-neutral-200 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white flex items-center justify-center transition-colors text-neutral-700 cursor-pointer select-none"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Side Scrolling 3-Column Container */}
            <div
              ref={webScrollRef}
              className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {(webPortfolio[webPortfolioTab] || []).map((site, idx) => (
                <div
                  key={idx}
                  className="shrink-0 w-[85vw] sm:w-[calc(50%-16px)] lg:w-[calc((100%-64px)/3)] snap-start group cursor-pointer pb-4 border-b border-neutral-200"
                  onClick={() => openLeadModal(`${webPortfolioTab} - ${site.name}`)}
                >
                  {/* Screenshot Container */}
                  <div className="aspect-[16/10] overflow-hidden rounded bg-neutral-100 mb-3 border border-neutral-200">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-base font-bold text-neutral-900 leading-snug">
                        {site.name}
                      </p>
                      <p className="text-xs text-neutral-500 mt-0.5">{site.industry}</p>
                    </div>
                    <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Mobile App Portfolio Section ── */}
        {activeTab === "mobile" && (
          <div className="mt-20 pt-16 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0E2036] mb-1">
                  Mobile App Concepts We Build
                </h2>
                <p className="text-sm text-neutral-500">Popular app architectures tailored for your custom business requirements</p>
              </div>

              {/* Filter Links */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {MOBILE_PORTFOLIO_TABS.map((tab) => {
                  const isActive = mobilePortfolioTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setMobilePortfolioTab(tab)}
                      className={`text-sm font-medium transition-colors cursor-pointer select-none ${
                        isActive
                          ? "text-neutral-900 font-semibold border-b-2 border-neutral-900 pb-1"
                          : "text-neutral-500 hover:text-neutral-900"
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* App Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {(mobilePortfolio[mobilePortfolioTab] || []).map((app, idx) => (
                <div
                  key={idx}
                  className="group cursor-pointer text-center flex flex-col items-center gap-2.5 py-4 border-b border-neutral-200"
                  onClick={() => openLeadModal(`Build an app like ${app.name}`)}
                >
                  {/* App Icon */}
                  <div
                    className="relative flex items-center justify-center overflow-hidden transition-transform duration-200 group-hover:scale-105"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                    }}
                  >
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-cover"
                      style={{ borderRadius: "14px" }}
                      loading="lazy"
                    />
                  </div>

                  {/* App Name & Category */}
                  <div className="w-full">
                    <p className="text-sm font-bold text-neutral-900 leading-snug">
                      {app.name}
                    </p>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {app.category}
                    </p>
                  </div>

                  {/* Star rating (Clean text without pill box) */}
                  <div className="flex items-center gap-1 text-xs text-neutral-600 font-medium">
                    <span className="text-[#FF9500]">★</span>
                    <span>{app.rating}</span>
                  </div>

                  {/* Build similar CTA link */}
                  <div className="text-xs font-semibold text-[#007AFF] hover:underline pt-0.5">
                    Build Similar
                  </div>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p style={{ fontSize: "11.5px", color: "#8E8E93", textAlign: "center", marginTop: "24px", lineHeight: 1.5 }}>
              * These are popular apps shown as reference examples only. We build similar apps for your business — not copies of these brands.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 rounded transition-colors"
          >
            {activeTab === "web" ? "Start Web Project" : "Start App Project"}
          </Link>
          <p className="text-xs text-neutral-500 mt-3">
            Free consultation · No upfront payment · Tamil &amp; English support
          </p>
        </div>

      </Container>
    </section>
  );
};

export default AppDevSectionSwitcher;
