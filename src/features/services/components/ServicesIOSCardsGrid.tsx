import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Monitor,
  ShoppingBag,
  Smartphone,
  Palette,
  TrendingUp,
  Search,
  Share2,
  MessageCircle,
  Sparkles,
  Package,
  Video,
  Camera,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

export interface ServiceIOSCardItem {
  id: string;
  number: string;
  title: string;
  category: "web-apps" | "marketing-seo" | "branding-media" | "security-cloud";
  categoryLabel: string;
  icon: LucideIcon;
  iconBg: string;
  simpleDesc: string;
  actionUrl: string;
}

export const ALL_IOS_SERVICES: ServiceIOSCardItem[] = [
  // ── 1. Web & Applications ──
  {
    id: "website-design",
    number: "01",
    title: "Website Design",
    category: "web-apps",
    categoryLabel: "WEB & APPS",
    icon: Monitor,
    iconBg: "bg-blue-50 text-blue-600 border border-blue-100/80",
    simpleDesc:
      "Ultra-fast, mobile-first business websites engineered for instant customer discovery, high Google Lighthouse scores, and effortless lead capture.",
    actionUrl: "/services/website-design",
  },
  {
    id: "ecommerce-platforms",
    number: "02",
    title: "Ecommerce Platforms",
    category: "web-apps",
    categoryLabel: "WEB & APPS",
    icon: ShoppingBag,
    iconBg: "bg-amber-50 text-amber-600 border border-amber-100/80",
    simpleDesc:
      "Turnkey digital storefronts with seamless UPI, credit card, and COD checkout. Scalable product catalog with live stock tracking.",
    actionUrl: "/services/ecommerce-platforms",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "iOS & Android Mobile Apps",
    category: "web-apps",
    categoryLabel: "WEB & APPS",
    icon: Smartphone,
    iconBg: "bg-emerald-50 text-emerald-600 border border-emerald-100/80",
    simpleDesc:
      "Native iOS & Android mobile applications engineered for fluid 60fps performance, biometric authentication, and push retention campaigns.",
    actionUrl: "/services/mobile-app-development",
  },
  {
    id: "ui-ux-architecture",
    number: "04",
    title: "UI/UX & Screen Design",
    category: "web-apps",
    categoryLabel: "WEB & APPS",
    icon: Palette,
    iconBg: "bg-purple-50 text-purple-600 border border-purple-100/80",
    simpleDesc:
      "Clean, modern Apple-style UI prototypes and interactive screen layouts crafted to guide visitors into ordering without confusion.",
    actionUrl: "/services/ui-ux-architecture",
  },

  // ── 2. Digital Marketing & SEO ──
  {
    id: "performance-marketing",
    number: "05",
    title: "Google & Social Media Ads",
    category: "marketing-seo",
    categoryLabel: "MARKETING & SEO",
    icon: TrendingUp,
    iconBg: "bg-rose-50 text-rose-600 border border-rose-100/80",
    simpleDesc:
      "High-ROI targeted advertisements that bring active buyers straight to your phone, WhatsApp, and showroom every single week.",
    actionUrl: "/services/performance-marketing",
  },
  {
    id: "seo-geo-ai-search",
    number: "06",
    title: "Google Maps & Search Ranking",
    category: "marketing-seo",
    categoryLabel: "MARKETING & SEO",
    icon: Search,
    iconBg: "bg-indigo-50 text-indigo-600 border border-indigo-100/80",
    simpleDesc:
      "Dominant Google Maps 3-Pack and search visibility so nearby customers searching for your products call you first.",
    actionUrl: "/services/seo-geo-ai-search",
  },
  {
    id: "social-media-marketing",
    number: "07",
    title: "Instagram Reels & Posts",
    category: "marketing-seo",
    categoryLabel: "MARKETING & SEO",
    icon: Share2,
    iconBg: "bg-pink-50 text-pink-600 border border-pink-100/80",
    simpleDesc:
      "Eye-catching Reels and creative social media posters that expand followers and establish authority across your local region.",
    actionUrl: "/services/social-media-marketing",
  },
  {
    id: "content-marketing-pr",
    number: "08",
    title: "Business Copywriting & Content",
    category: "marketing-seo",
    categoryLabel: "MARKETING & SEO",
    icon: MessageCircle,
    iconBg: "bg-cyan-50 text-cyan-600 border border-cyan-100/80",
    simpleDesc:
      "Persuasive English and Tamil sales copy for websites, company profiles, brochures, and commercial pitch decks.",
    actionUrl: "/services/content-marketing-pr",
  },

  // ── 3. Creative, Branding & Media ──
  {
    id: "brand-identity-logo",
    number: "09",
    title: "Logo & Brand Identity",
    category: "branding-media",
    categoryLabel: "BRANDING & MEDIA",
    icon: Sparkles,
    iconBg: "bg-amber-50 text-amber-600 border border-amber-100/80",
    simpleDesc:
      "Signature logos and complete brand asset systems that make your business look established, premium, and trustworthy.",
    actionUrl: "/services/brand-identity-logo",
  },
  {
    id: "graphic-design-packaging",
    number: "10",
    title: "Product Packaging & Print",
    category: "branding-media",
    categoryLabel: "BRANDING & MEDIA",
    icon: Package,
    iconBg: "bg-orange-50 text-orange-600 border border-orange-100/80",
    simpleDesc:
      "Production-ready label and box packaging engineered to stand out on retail shelves and comply with manufacturing standards.",
    actionUrl: "/services/graphic-design-packaging",
  },
  {
    id: "video-editing-motion",
    number: "11",
    title: "Video Shooting & Editing",
    category: "branding-media",
    categoryLabel: "BRANDING & MEDIA",
    icon: Video,
    iconBg: "bg-red-50 text-red-600 border border-red-100/80",
    simpleDesc:
      "Sharp 4K video shooting, customer testimonials, and viral short-form reels with crisp audio and Tamil/English subtitles.",
    actionUrl: "/services/video-editing-motion",
  },
  {
    id: "ecommerce-photography",
    number: "12",
    title: "Product Photography",
    category: "branding-media",
    categoryLabel: "BRANDING & MEDIA",
    icon: Camera,
    iconBg: "bg-sky-50 text-sky-600 border border-sky-100/80",
    simpleDesc:
      "Clean studio-lit product photos with pure white backgrounds tailored for ecommerce storefronts, catalogs, and Amazon.",
    actionUrl: "/services/ecommerce-photography",
  },

  // ── 4. Security & Cloud ──
  {
    id: "cyber-security-cloud",
    number: "13",
    title: "Fast Hosting & Cloud Security",
    category: "security-cloud",
    categoryLabel: "SECURITY & CLOUD",
    icon: ShieldCheck,
    iconBg: "bg-slate-100 text-slate-700 border border-slate-200",
    simpleDesc:
      "Reliable cloud hosting with automated daily backups, free SSL certificates, and 99.9% uptime to keep your site fast and secure.",
    actionUrl: "/services/cyber-security-cloud",
  },
];

export const SERVICE_FILTER_TABS = [
  { id: "all", label: "All Services (13)" },
  { id: "web-apps", label: "Web & Apps" },
  { id: "marketing-seo", label: "Marketing & SEO" },
  { id: "branding-media", label: "Branding & Media" },
  { id: "security-cloud", label: "Security & Cloud" },
];

interface ServicesIOSCardsGridProps {
  selectedFilter?: string;
  onSelectFilter?: (filterId: string) => void;
}

export const ServicesIOSCardsGrid: React.FC<ServicesIOSCardsGridProps> = ({
  selectedFilter: propFilter,
  onSelectFilter,
}) => {
  const [internalFilter, setInternalFilter] = useState<string>("all");
  const activeFilter = propFilter ?? internalFilter;

  const handleFilterClick = (id: string) => {
    setInternalFilter(id);
    if (onSelectFilter) {
      onSelectFilter(id);
    }
  };

  const filteredServices =
    activeFilter === "all"
      ? ALL_IOS_SERVICES
      : ALL_IOS_SERVICES.filter((s) => s.category === activeFilter);

  return (
    <section id="services-cards" className="pt-2 sm:pt-4 pb-16 sm:pb-20 bg-[#F5F5F7] scroll-mt-24">
      <Container size="wide">
        {/* iOS Segmented Filter Pill Track */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="p-1 sm:p-1.5 rounded-full bg-[#E5E5EA]/85 backdrop-blur-md border border-black/[0.04] shadow-inner flex flex-wrap justify-center gap-1 max-w-full">
            {SERVICE_FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleFilterClick(tab.id)}
                  className={`cursor-pointer select-none px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#1D1D1F] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                      : "text-[#86868B] font-semibold hover:text-[#1D1D1F]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive 3-Column Compact Cards Grid (Exact Old Design Scale) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service) => {
            const IconComp = service.icon;

            return (
              <div
                key={service.id}
                id={service.id}
                className="rounded-[24px] sm:rounded-[28px] bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between group"
              >
                {/* ── Top Row: Left Icon Box + Right Category Pill Badge ── */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-xs ${service.iconBg}`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider text-neutral-400 bg-neutral-100/90 border border-black/[0.03] px-2.5 py-1 rounded-full uppercase">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* ── Service Title & Explanation ── */}
                <div className="mb-6 flex-1">
                  <h3
                    className="text-xl sm:text-[22px] font-bold text-neutral-900 tracking-tight leading-snug mb-2.5"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[13.5px] sm:text-[14px] text-neutral-600 leading-relaxed font-normal">
                    {service.simpleDesc}
                  </p>
                </div>

                {/* ── Compact Card Action Row ── */}
                <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => openLeadModal(`Inquiry: ${service.title}`)}
                    className="cursor-pointer inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-neutral-950 hover:bg-black text-white text-xs font-bold shadow-xs transition-all active:scale-[0.98]"
                  >
                    <span>Enquire</span>
                    <img
                      src="/brand/realresult-mark-transparent.png"
                      alt=""
                      className="w-3.5 h-3.5 object-contain filter drop-shadow-[0_0_3px_rgba(229,180,86,0.6)]"
                    />
                  </button>

                  <Link
                    to={service.actionUrl}
                    className="text-xs sm:text-[13px] font-semibold text-[#0071E3] hover:underline inline-flex items-center gap-1 group/link"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesIOSCardsGrid;
