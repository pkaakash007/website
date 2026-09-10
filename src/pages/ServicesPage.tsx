import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl, REAL_RESULT_CONFIG } from "@/config";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  Monitor,
  ShoppingCart,
  Smartphone,
  Layout,
  Megaphone,
  TrendingUp,
  Share2,
  FileText,
  Sparkles,
  Palette,
  Video,
  Shield,
  Camera,
  Layers,
} from "lucide-react";
import { AppleLogo, AndroidLogo } from "@/components/common/PlatformLogos";

const MobileAppServiceIcon: React.FC<{ className?: string }> = () => (
  <div className="flex items-center gap-1">
    <AppleLogo className="w-3.5 h-3.5 fill-current text-white" />
    <AndroidLogo className="w-3.5 h-3.5 fill-current text-[#3DDC84]" />
  </div>
);

// ─── Data Definitions ────────────────────────────────────────────────────────

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  category: "web-apps" | "marketing" | "design" | "creative-security";
  categoryLabel: string;
  categoryColor: string;
  icon: React.ElementType;
  simpleDesc: string;
  keyPoints: string[];
  bestFor: string;
  actionUrl: string;
}

export const ALL_SERVICES: ServiceData[] = [
  // ── 1. Web & Applications ──
  {
    id: "website-design",
    number: "01",
    title: "Website Design",
    category: "web-apps",
    categoryLabel: "Web & Software",
    categoryColor: "#007AFF",
    icon: Monitor,
    simpleDesc: "Modern, ultra-fast, mobile-friendly business websites. Fully optimized so local customers can instantly find your phone number, location, and services.",
    keyPoints: ["Sub-second page loading speed", "100% Mobile & WhatsApp ready", "Built-in Google Maps & contact leads"],
    bestFor: "Shops, Showrooms, Clinics, Factories & Local Businesses",
    actionUrl: "/application-development",
  },
  {
    id: "ecommerce-website",
    number: "02",
    title: "Ecommerce Website",
    category: "web-apps",
    categoryLabel: "Web & Software",
    categoryColor: "#007AFF",
    icon: ShoppingCart,
    simpleDesc: "Your own high-converting online shop with UPI, Google Pay, credit cards, and COD. Customers browse catalog, add to cart, and order seamlessly.",
    keyPoints: ["Razorpay & UPI payment gateways", "Instant automated order alerts on WhatsApp", "Simple product & stock inventory control"],
    bestFor: "Textile stores, Groceries, D2C Brands, Manufacturers",
    actionUrl: "/application-development",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    category: "web-apps",
    categoryLabel: "Web & Software",
    categoryColor: "#007AFF",
    icon: MobileAppServiceIcon,
    simpleDesc: "Native iOS & Android mobile applications engineered for smooth 60fps performance, intuitive UI, and direct customer push notification campaigns.",
    keyPoints: ["App Store & Play Store publishing included", "Push offer alerts directly to customer phones", "Biometric Face ID & secure OTP login"],
    bestFor: "Startups, Delivery apps, Wholesalers, Booking platforms",
    actionUrl: "/application-development",
  },
  {
    id: "ui-ux-designing",
    number: "04",
    title: "UI/UX Designing",
    category: "web-apps",
    categoryLabel: "Web & Software",
    categoryColor: "#007AFF",
    icon: Layout,
    simpleDesc: "Clickable Figma wireframes and prototypes for mobile apps and cloud portals. Eliminates confusion with intuitive, international-standard navigation.",
    keyPoints: ["Clickable interactive Figma prototypes", "User journey flows & edge-case mapping", "Ready-to-code design tokens & components"],
    bestFor: "Custom software, Mobile apps, SaaS startups",
    actionUrl: "/application-development",
  },

  // ── 2. Digital Marketing & SEO ──
  {
    id: "digital-marketing",
    number: "05",
    title: "Digital Marketing",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    categoryColor: "#10B981",
    icon: Megaphone,
    simpleDesc: "Complete digital growth campaigns designed to generate customer phone calls, high-intent WhatsApp enquiries, and physical showroom walk-ins.",
    keyPoints: ["Direct customer calls & WhatsApp leads", "Hyper-local geo-targeting in your city", "Transparent weekly ad spend reports"],
    bestFor: "Businesses seeking consistent weekly customer leads",
    actionUrl: "/digital-marketing",
  },
  {
    id: "search-engine-optimization",
    number: "06",
    title: "Search Engine Optimization (SEO & GEO)",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    categoryColor: "#10B981",
    icon: TrendingUp,
    simpleDesc: "Rank your business at the top of Google Search, Google Maps, and modern AI engines (ChatGPT & Gemini) without paying per click.",
    keyPoints: ["Google Page #1 organic rankings", "GEO & AIO AI search recommendations", "Non-stop inbound website visitors"],
    bestFor: "Long-term organic authority & zero-ad-cost leads",
    actionUrl: "/digital-marketing/seo",
  },
  {
    id: "social-media-marketing",
    number: "07",
    title: "Social Media Marketing",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    categoryColor: "#10B981",
    icon: Share2,
    simpleDesc: "Captivate local audiences across Instagram, Facebook, and LinkedIn with viral reels, festival creatives, and hyper-targeted lead ad funnels.",
    keyPoints: ["Viral reels & high-engagement posters", "Daily community interaction & DM tracking", "Targeted ads for your exact locality"],
    bestFor: "Fashion, Restaurants, Real Estate, Retailers, Educators",
    actionUrl: "/digital-marketing/social-media-marketing",
  },
  {
    id: "content-writing",
    number: "08",
    title: "Content Marketing & PR",
    category: "marketing",
    categoryLabel: "Growth & Ads",
    categoryColor: "#10B981",
    icon: FileText,
    simpleDesc: "Persuasive English and Tamil copywriting for websites, product catalogs, company profiles, and technical B2B industry whitepapers.",
    keyPoints: ["SEO-optimized business blogs & guides", "Persuasive sales copy for landing pages", "Tamil & English professional drafting"],
    bestFor: "Exporters, B2B Manufacturers, Corporate firms",
    actionUrl: "/digital-marketing/content-marketing",
  },

  // ── 3. Creative, Media & Security ──
  {
    id: "logo-design",
    number: "09",
    title: "Logo Design & Identity",
    category: "design",
    categoryLabel: "Branding & Media",
    categoryColor: "#8B5CF6",
    icon: Sparkles,
    simpleDesc: "Distinctive, memorable corporate brand marks with full trademark copyright ownership. Looks sharp across signboards, invoices, and digital apps.",
    keyPoints: ["3 to 5 unique custom design concepts", "Vector master files (SVG, AI, PDF, PNG)", "Lifetime copyright transfer included"],
    bestFor: "New startups, Re-branding, Retail stores, Exporters",
    actionUrl: "/digital-marketing",
  },
  {
    id: "graphic-design",
    number: "10",
    title: "Graphic Design & Packaging",
    category: "design",
    categoryLabel: "Branding & Media",
    categoryColor: "#8B5CF6",
    icon: Palette,
    simpleDesc: "High-impact retail packaging boxes, export brochures, banners, and digital creatives that establish trust with clients and buyers.",
    keyPoints: ["Print-ready CMYK master artwork", "Export packaging & pouch typography", "Fast 24 to 48 hour turnaround"],
    bestFor: "Food products, Textiles, Product launches, Banners",
    actionUrl: "/digital-marketing",
  },
  {
    id: "video-editing",
    number: "11",
    title: "Video Editing & Motion",
    category: "creative-security",
    categoryLabel: "Branding & Media",
    categoryColor: "#8B5CF6",
    icon: Video,
    simpleDesc: "Cinematic post-production for Instagram Reels, YouTube explainers, factory machinery demos, and client video testimonials.",
    keyPoints: ["Trending sound design & pacing", "Tamil & English dynamic subtitles", "Color grading & professional sound balance"],
    bestFor: "Manufacturers, Influencers, Product walkthroughs",
    actionUrl: "/digital-marketing",
  },
  {
    id: "cyber-security-services",
    number: "12",
    title: "Cyber Security & Cloud Backup",
    category: "creative-security",
    categoryLabel: "Security & Cloud",
    categoryColor: "#0E7490",
    icon: Shield,
    simpleDesc: "Enterprise SSL encryption, Web Application Firewalls (WAF), daily automated off-site backups, and vulnerability audit defense.",
    keyPoints: ["SSL certificates & WAF firewall protection", "Automated daily encrypted cloud backups", "Hacking & malware vulnerability screening"],
    bestFor: "Ecommerce stores, Schools, Financial portals, Hospitals",
    actionUrl: "/application-development",
  },
  {
    id: "ecommerce-photography",
    number: "13",
    title: "Ecommerce Product Photography",
    category: "creative-security",
    categoryLabel: "Branding & Media",
    categoryColor: "#8B5CF6",
    icon: Camera,
    simpleDesc: "High-resolution studio photography for Amazon, Flipkart, your own ecommerce website, and print export catalogs with true-to-life colors.",
    keyPoints: ["Amazon & Flipkart compliance specs", "Pure white seamless backgrounds", "High-detail macro texture zoom quality"],
    bestFor: "Textiles, Leather, Electronics, Packaged foods, Spices",
    actionUrl: "/digital-marketing",
  },
];

const FILTER_TABS = [
  { id: "all",               label: "All Services (13)" },
  { id: "web-apps",          label: "Web & Software" },
  { id: "marketing",         label: "Digital Marketing" },
  { id: "design",            label: "Branding & Design" },
  { id: "creative-security", label: "Media & Security" },
];

export const ServicesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredServices =
    selectedFilter === "all"
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.category === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#F2F2F7" }}>
      <SEOHead
        title="Complete Digital & IT Services | Real Result"
        description="Explore our 13 end-to-end digital services: Website Design, Ecommerce, Mobile Apps, SEO, Google Ads, Social Media, Branding, Packaging, and Cyber Security across Tamil Nadu."
        canonicalPath="/services"
      />

      {/* ========================================================
          1. HERO SECTION: Balanced, Premium Apple-Grade Layout
         ======================================================== */}
      <section className="bg-white border-b border-black/[0.08] pt-28 pb-16 lg:py-20">
        <Container size="wide">
          <div className="max-w-3xl space-y-6">

            {/* Main Headline */}
            <h1 style={{
              fontSize: "clamp(2rem,4.2vw,3.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#000000",
              lineHeight: 1.1,
            }}>
              All The Services You Need to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007AFF] to-[#5856D6]">
                Grow Your Business Online
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{ fontSize: "16px", color: "rgba(60,60,67,0.70)", lineHeight: 1.65, maxWidth: "640px" }}>
              No complicated technical words. We engineer high-speed websites, native mobile apps, and ROI-focused digital marketing campaigns built for business owners across Tamil Nadu.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => openLeadModal("General Services Hero Consultation")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-black text-white text-sm font-bold shadow-md hover:bg-neutral-800 transition-all cursor-pointer active:scale-[0.97]"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppUrl("Hello Real Result team, I want to discuss services for my business.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-bold shadow-xs transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-black border border-black/[0.08] text-sm font-bold transition-all"
              >
                <Phone className="w-4 h-4 text-[#007AFF]" />
                <span>{REAL_RESULT_CONFIG.contact.phone}</span>
              </a>
            </div>

          </div>
        </Container>
      </section>

      {/* ================================================================
          2. COMPLETE SERVICES DIRECTORY — Apple Segmented Grid
         ================================================================ */}
      <section className="py-16 sm:py-24" style={{ background: "#F2F2F7" }}>
        <Container size="wide">

          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8E8E93" }} className="mb-1">
                Explore Full Directory
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#000000", lineHeight: 1.1 }}>
                Our Complete Capabilities
              </h2>
            </div>

            {/* Apple Segmented Pill Controls */}
            <div className="inline-flex flex-wrap p-1.5 rounded-full bg-black/[0.05] border border-black/[0.06] shadow-xs gap-1">
              {FILTER_TABS.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className="px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none"
                    style={{
                      background: isActive ? "#FFFFFF" : "transparent",
                      color: isActive ? "#000000" : "rgba(60,60,67,0.70)",
                      boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)" : "none",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
                <div
                  key={service.id}
                  id={service.id}
                  className="group flex flex-col justify-between p-6 sm:p-7 rounded-[24px] bg-white border border-black/[0.07] shadow-[0_2px_8px_rgba(0,0,0,0.03),0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div>

                    {/* Title */}
                    <h3 className="text-[18px] sm:text-[19px] font-bold text-black tracking-tight leading-snug group-hover:text-[#007AFF] transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    {/* Simple Description */}
                    <p className="text-[13.5px] text-neutral-600 leading-relaxed font-normal mb-5">
                      {service.simpleDesc}
                    </p>

                    {/* Key features checklist */}
                    <ul className="space-y-2 pb-5 border-b border-black/[0.06] mb-4 list-disc pl-4 marker:text-neutral-400">
                      {service.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="text-[12.5px] text-neutral-700 leading-snug">
                          {point}
                        </li>
                      ))}
                    </ul>

                    {/* Best for tag */}
                    <p className="text-[12px] text-neutral-500 mb-6">
                      <span className="font-semibold text-neutral-800">Best for: </span>
                      {service.bestFor}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-2 flex items-center gap-2.5">
                    <button
                      onClick={() => openLeadModal(`Inquiry for ${service.title}`)}
                      className="flex-1 py-2.5 px-4 rounded-xl text-center text-xs sm:text-[13px] font-bold bg-neutral-900 hover:bg-[#007AFF] text-white transition-colors duration-150 cursor-pointer shadow-xs active:scale-[0.98]"
                    >
                      Enquire Now
                    </button>

                    <a
                      href={getWhatsAppUrl(`Hello Real Result, I would like to know pricing and details for ${service.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
          </div>

        </Container>
      </section>

      {/* ========================================================
          3. HOW WE WORK (Apple 3-Step Process Cards)
         ======================================================== */}
      <section className="py-20 bg-white border-t border-b border-black/[0.08]">
        <Container size="wide">
          <div className="max-w-2xl mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black tracking-tight">
              How Simple It Is to Work With Us
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
              No confusion, no hidden charges. We communicate openly in Tamil or English and stick to clear milestone deadlines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-[22px] bg-[#F8F8FA] border border-black/[0.06] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-black text-white font-extrabold flex items-center justify-center mb-5 text-sm">
                  01
                </div>
                <h3 className="text-base font-bold text-black mb-2">
                  1. Free Phone Call or WhatsApp Chat
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Tell us about your business, shop, or factory. We listen to what you want to achieve and advise the most cost-effective option for your budget.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-[22px] bg-[#F8F8FA] border border-black/[0.06] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-black text-white font-extrabold flex items-center justify-center mb-5 text-sm">
                  02
                </div>
                <h3 className="text-base font-bold text-black mb-2">
                  2. Clear Fixed Price & Milestones
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We give you a straightforward written proposal with exact milestone delivery dates. What we agree upon is what you pay—no surprise invoices later.
                </p>
              </div>
            </div>

            <div className="p-7 rounded-[22px] bg-[#F8F8FA] border border-black/[0.06] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-black text-white font-extrabold flex items-center justify-center mb-5 text-sm">
                  03
                </div>
                <h3 className="text-base font-bold text-black mb-2">
                  3. On-Time Delivery & Local Support
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We build your website, launch your ads, or deliver your designs on schedule. Our engineering team in Erode is always accessible by phone or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>




    </div>
  );
};

export default ServicesPage;
