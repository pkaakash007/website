import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Share2,
  TrendingUp,
  MapPin,
  Target,
  BarChart3,
} from "lucide-react";

// --- Custom Platform & Service SVGs for Backwards Compatibility ---

export const GoogleAdsIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Google Ads"
  >
    <path
      d="M5.888 166.405L90.88 20.9C101.676 27.256 156.116 57.384 164.908 63.114L79.916 208.627C70.621 220.907 -5.888 185.04 5.888 166.396V166.405Z"
      fill="#FBBC04"
    />
    <path
      d="M250.084 166.402L165.092 20.906C153.21 1.132 127.619 -6.054 106.601 5.625C85.582 17.304 79.182 42.462 91.064 63.119L176.056 208.633C187.938 228.398 213.529 235.584 234.548 223.905C254.648 212.226 261.966 186.176 250.084 166.419V166.402Z"
      fill="#4285F4"
    />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="10" fill="#0A66C2" />
    <path
      d="M14.5 19H19.5V35H14.5V19ZM17 12C18.6 12 20 13.4 20 15C20 16.6 18.6 18 17 18C15.4 18 14 16.6 14 15C14 13.4 15.4 12 17 12ZM22.5 19H27.3V21.2H27.4C28.1 19.9 29.8 18.5 32.2 18.5C37.3 18.5 38.2 21.9 38.2 26.2V35H33.2V27.1C33.2 25.2 33.2 22.8 30.5 22.8C27.8 22.8 27.4 24.9 27.4 26.9V35H22.4V19H22.5Z"
      fill="white"
    />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <defs>
      <radialGradient id="ig-grad" cx="20%" cy="105%" r="120%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="15%" stopColor="#fdf497" />
        <stop offset="35%" stopColor="#fd5949" />
        <stop offset="50%" stopColor="#d6249f" />
        <stop offset="85%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#ig-grad)" />
    <rect x="11" y="11" width="26" height="26" rx="7" stroke="white" strokeWidth="3" fill="none" />
    <circle cx="24" cy="24" r="6" stroke="white" strokeWidth="3" fill="none" />
    <circle cx="31.5" cy="16.5" r="1.5" fill="white" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="10" fill="#1877F2" />
    <path
      d="M31.5 24.8H26.3V40H19.7V24.8H16.5V19.2H19.7V15.5C19.7 12.3 21.6 9 26.8 9H31.5V14.4H28.1C26.5 14.4 26.3 15.1 26.3 16.3V19.2H31.9L31.5 24.8Z"
      fill="white"
    />
  </svg>
);

export const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#FF0000" />
    <path d="M34 24L19 15V33L34 24Z" fill="white" />
  </svg>
);

export const GeoIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#F0F4FF" />
    <defs>
      <linearGradient id="gemini-grad-us" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path
      d="M24 8C24 16.8 16.8 24 8 24C16.8 24 24 31.2 24 40C24 31.2 31.2 24 40 24C31.2 24 24 16.8 24 8Z"
      fill="url(#gemini-grad-us)"
    />
  </svg>
);

export const SeoIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <circle cx="21" cy="21" r="14" fill="#F2F2F2" />
    <path d="M21 13C16.6 13 13 16.6 13 21C13 25.4 16.6 29 21 29C23.1 29 25 28.2 26.5 26.9L31.5 31.9C32.3 32.7 33.5 32.7 34.3 31.9C35.1 31.1 35.1 29.9 34.3 29.1L29.3 24.1C30.4 22.6 31 20.9 31 21C31 16.6 27.4 13 21 13Z" fill="#9AA0A6" />
    <circle cx="21" cy="21" r="6" fill="white" />
    <path d="M21 15C18.2 15 15.8 16.7 14.7 19.2L17.5 21C18.1 19.2 19.4 18 21 18C22.1 18 23.1 18.4 23.8 19.1L26 17C24.8 15.8 23 15 21 15Z" fill="#EA4335" />
    <path d="M14.5 21C14.5 20.3 14.6 19.7 14.7 19.1L12.2 17.4C11.7 18.5 11.5 19.7 11.5 21C11.5 22.3 11.7 23.5 12.2 24.5L14.7 22.8C14.6 22.2 14.5 21.6 14.5 21Z" fill="#FBBC04" />
    <path d="M21 27C19.4 27 18.1 26.3 17.2 25.2L14.7 26.8C16.1 28.7 18.4 30 21 30C23 30 24.8 29.3 26.1 28.1L23.7 26.3C23.1 26.8 22.1 27 21 27Z" fill="#34A853" />
    <path d="M27.5 21H21.5V23.5H24.7C24.4 24.4 23.7 25 23.6 25.2L26 26.9C27.1 25.7 27.8 24 27.8 22C27.8 21.6 27.6 21.3 27.5 21Z" fill="#4285F4" />
  </svg>
);

export const CroIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#ECFDF5" />
    <path d="M14 34L22 22L28 28L36 16" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M30 16H36V22" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const AttributionIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#F5F3FF" />
    <path d="M14 36V24M24 36V16M34 36V28" stroke="#7C3AED" strokeWidth="3.5" strokeLinecap="round" />
  </svg>
);

export const LocalMapsIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill="#FEF2F2" />
    <path
      d="M24 12C18.48 12 14 16.48 14 22C14 29.5 24 38 24 38C24 38 34 29.5 34 22C34 16.48 29.52 12 24 12ZM24 25.5C22.07 25.5 20.5 23.93 20.5 22C20.5 20.07 22.07 18.5 24 18.5C25.93 18.5 27.5 20.07 27.5 22C27.5 23.93 25.93 25.5 24 25.5Z"
      fill="#EA4335"
    />
  </svg>
);

// ─── CORE ENTERPRISE GROWTH DISCIPLINES ───

export interface CoreMarketingService {
  id: string;
  name: string;
  tabLabel?: string;
  category: string;
  icon: React.ElementType;
  tabIcon: React.ElementType;
  image: string;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  projectedLift: string;
  cadence: string;
  attribution: string;
  link: string;
}

export const CORE_MARKETING_SERVICES: CoreMarketingService[] = [
  {
    id: "google-ads",
    name: "Google Search Ads & PPC",
    tabLabel: "Google Ads",
    category: "Google Ads & Microsoft Advertising",
    icon: GoogleAdsIcon,
    tabIcon: Search,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tagline: "Capture Active Buyers at the Exact Moment of Commercial Intent",
    description:
      "We design rigorous Alpha/Beta search account architectures, negative keyword shields, and value-based bidding algorithms to capture high-intent enterprise buyers and commercial shoppers with minimal CPC waste.",
    deliverables: [
      "Alpha/Beta keyword segregation & search query mining",
      "Automated value-based Smart Bidding & offline conversion imports",
      "Direct Click-to-Call & high-converting lead extensions",
      "Sub-second landing page testing for 10/10 Quality Score",
    ],
    bestFor: "Local Services, Showrooms, Clinics, Real Estate, B2B Companies",
    projectedLift: "+45% to +75%",
    cadence: "Bi-Weekly Sprints",
    attribution: "Multi-Touch CRM",
    link: "/digital-marketing/google-ads",
  },
  {
    id: "meta-ads",
    name: "Instagram & Facebook Ads",
    tabLabel: "Instagram & Meta",
    category: "Paid Social, Reels & Meta Funnels",
    icon: InstagramIcon,
    tabIcon: Share2,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
    tagline: "Stop the Scroll with High-Converting Visual & Reel Ads",
    description:
      "Target decision makers and retail buyers across Meta. We produce high-impact photo and Reels video ads, coupled with 1-click WhatsApp lead routing and AI lookalike audience targeting.",
    deliverables: [
      "High-converting Reels, carousel, and video creative production",
      "1-click Direct-to-WhatsApp conversational ad funnels",
      "Precise geo-radius, demographic, and interest audience targeting",
      "Rapid A/B multivariate testing to slash cost-per-lead (CPL)",
    ],
    bestFor: "E-Commerce, Retail, Real Estate, Healthcare, Education & B2B",
    projectedLift: "+50% to +85%",
    cadence: "Weekly Sprints",
    attribution: "Meta Pixel & CAPI",
    link: "/digital-marketing/social-media-marketing",
  },
  {
    id: "seo-search",
    name: "Search Engine Optimization (SEO)",
    tabLabel: "SEO Ranking",
    category: "Organic Search & Generative AI Search",
    icon: SeoIcon,
    tabIcon: TrendingUp,
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=1200&q=80",
    tagline: "Build Long-Term #1 Organic Rankings That Compound Monthly",
    description:
      "Beyond basic blogs: we build programmatic SEO database architectures, optimize Core Web Vitals to sub-second load times, and execute technical crawl budget management for compounding organic pipelines.",
    deliverables: [
      "Technical Core Web Vitals engineering & crawl budget optimization",
      "Programmatic SEO template architectures for high-intent queries",
      "Generative Engine Optimization (GEO) for ChatGPT & Perplexity",
      "High-authority editorial link building and data journalism PR",
    ],
    bestFor: "Manufacturers, Exporters, B2B SaaS, Regional Brands & Platforms",
    projectedLift: "+55% to +110%",
    cadence: "Bi-Weekly Sprints",
    attribution: "Search Console & GA4",
    link: "/digital-marketing/seo",
  },
  {
    id: "local-maps-seo",
    name: "Google Maps & Local SEO",
    tabLabel: "Google Maps",
    category: "Local 3-Pack & Proximity Domination",
    icon: LocalMapsIcon,
    tabIcon: MapPin,
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    tagline: "Dominate Google Maps 3-Pack for High-Intent Local Searches",
    description:
      "We optimize your Google Business Profile, geo-tagged photo citations, and customer review velocity so customers in your target city contact you first before nearby competitors.",
    deliverables: [
      "Google Business Profile (GBP) audit, verification & optimization",
      "Local 3-Pack map ranking optimization for 'near me' commercial queries",
      "NAP directory citation consistency across 50+ local platforms",
      "Automated WhatsApp review generation and response strategy",
    ],
    bestFor: "Showrooms, Clinics, Hospitals, Restaurants & Local Service Providers",
    projectedLift: "+70% to +140%",
    cadence: "Monthly Sprints",
    attribution: "GBP Calls & Directions",
    link: "/digital-marketing/seo",
  },
  {
    id: "cro-funnel",
    name: "Conversion Rate Optimization (CRO)",
    tabLabel: "CRO & Funnels",
    category: "Funnel Engineering & Experimentation",
    icon: CroIcon,
    tabIcon: Target,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    tagline: "Turn More Paid & Organic Visitors into Qualified Inquiries",
    description:
      "Driving traffic is only half the battle. We conduct user session recordings, heatmaps, and continuous multivariate A/B testing on headlines, form friction, pricing tables, and checkout flows to lift conversion rates by 40–80%.",
    deliverables: [
      "Full-funnel drop-off analytics & user session friction audits",
      "Continuous multivariate A/B testing on landing page variants",
      "High-converting pricing calculators & interactive lead qualifiers",
      "Post-click personalization based on ad creative & search term",
    ],
    bestFor: "All Brands Spending Over $10K/mo on Paid Traffic or with 1K+ Visitors",
    projectedLift: "+40% to +80%",
    cadence: "Weekly Sprints",
    attribution: "Funnel Event Sync",
    link: "/digital-marketing/cro",
  },
  {
    id: "analytics-tracking",
    name: "Lead Tracking & Analytics",
    tabLabel: "Lead Analytics",
    category: "Closed-Loop CRM & Server-Side Attribution",
    icon: AttributionIcon,
    tabIcon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tagline: "First-Party Data, Server-Side Tracking & True Multi-Touch ROAS",
    description:
      "Eliminate attribution guesswork. We set up server-side Google Tag Manager (GTM), GA4 BigQuery export pipelines, and CRM integration to attribute pipeline and revenue accurately across all marketing touchpoints.",
    deliverables: [
      "Dynamic Number Insertion (DNI) & WhatsApp lead source attribution",
      "Server-side GTM tagging resilient to iOS & browser ad blockers",
      "Real-time executive Looker Studio ROI dashboard setup",
      "Instant SMS, WhatsApp & CRM lead notifications for your sales team",
    ],
    bestFor: "Venture-Backed Startups, Scale-ups, Enterprise Revenue Teams",
    projectedLift: "100% Signal Integrity",
    cadence: "Weekly Sprints",
    attribution: "BigQuery / GTM",
    link: "/digital-marketing/seo",
  },
];

// Backwards compatibility for existing imports
export const paidAdsServices = CORE_MARKETING_SERVICES.slice(0, 3);
export const organicServices = CORE_MARKETING_SERVICES.slice(2, 6);

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const MarketingServicesSimple: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("google-ads");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const handleTabSelect = (id: string) => {
    setSelectedServiceId(id);
    tabRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const currentService =
    CORE_MARKETING_SERVICES.find((s) => s.id === selectedServiceId) ||
    CORE_MARKETING_SERVICES[0];

  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="bg-white py-16 sm:py-24 border-b border-black/[0.06] scroll-mt-20">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-900 tracking-tight leading-tight">
            Full-Funnel Performance Marketing Services
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mt-3">
            Engineered for high-growth US and global businesses. Select a discipline below to examine strategic deliverables, technical frameworks, and performance benchmarks.
          </p>
        </div>

        {/* ── Interactive Discipline Tabs (Single-Row Segmented Pill Navigation) ── */}
        <div className="w-full flex justify-center mb-10 sm:mb-12">
          <div className="w-full max-w-5xl overflow-x-auto no-scrollbar py-2 px-3 sm:px-0">
            <div className="flex items-center justify-start sm:justify-center p-1.5 rounded-full bg-[#EAECEF] border border-black/[0.06] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.02)] gap-1 sm:gap-1.5 w-max mx-auto">
              {CORE_MARKETING_SERVICES.map((svc) => {
                const isSelected = selectedServiceId === svc.id;
                const TabIcon = svc.tabIcon;
                return (
                  <button
                    key={svc.id}
                    ref={(el) => {
                      tabRefs.current[svc.id] = el;
                    }}
                    type="button"
                    onClick={() => handleTabSelect(svc.id)}
                    className={`group flex items-center gap-1.5 sm:gap-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 px-3.5 sm:px-4 py-2 sm:py-2.5 ${
                      isSelected
                        ? "bg-neutral-950 text-white shadow-[0_2px_8px_rgba(0,0,0,0.18),0_1px_2px_rgba(0,0,0,0.08)]"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.04]"
                    }`}
                  >
                    <TabIcon
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${
                        isSelected
                          ? "text-white"
                          : "text-neutral-500 group-hover:text-neutral-800"
                      }`}
                    />
                    <span>{svc.tabLabel || svc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Featured Deep-Dive Card for Selected Discipline ── */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#FAFBFD] via-white to-[#F7F8FA] border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Icon & Title */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight leading-tight">
                    {currentService.name}
                  </h3>
                </div>
              </div>

              {/* Tagline & Description */}
              <div>
                <p className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                  {currentService.tagline}
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mt-2.5">
                  {currentService.description}
                </p>
              </div>

              {/* Core Deliverables Checklist */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.06] shadow-2xs space-y-3">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  ENTERPRISE DELIVERABLES &amp; CAMPAIGN ARCHITECTURE:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentService.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-2" />
                      <span className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => openLeadModal(`Strategy Call: ${currentService.name}`)}
                  className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 hover:bg-black text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-[0.98]"
                >
                  <span>Book Strategy Call for {currentService.name}</span>
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt=""
                    className="w-4 h-4 object-contain filter drop-shadow-[0_0_3px_rgba(229,180,86,0.6)]"
                  />
                </button>

                <Link
                  to={currentService.link}
                  className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 text-xs sm:text-sm font-semibold transition-all shadow-2xs active:scale-[0.98]"
                >
                  <span>Explore Technical Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt=""
                    className="w-3.5 h-3.5 object-contain opacity-50"
                  />
                </Link>
              </div>
            </div>

            {/* Right: Dynamic Contextual Related Discipline Imagery (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-black/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.06)] bg-neutral-100 group aspect-[4/3] sm:aspect-[16/11] lg:h-[480px] w-full">
                <img
                  src={currentService.image}
                  alt={currentService.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.dataset.fallback) {
                      target.dataset.fallback = "true";
                      target.src = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80";
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent pointer-events-none" />


                {/* Bottom Overlay Glass Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider truncate">
                      Expected Growth Outcome
                    </p>
                    <p className="text-sm sm:text-base font-bold text-neutral-900 truncate mt-0.5">
                      {currentService.projectedLift}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openLeadModal(`Growth Scope: ${currentService.name}`)}
                    className="cursor-pointer shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 hover:bg-black text-white text-xs font-bold transition-all shadow-xs active:scale-[0.98]"
                  >
                    <span>Get Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E5B456]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingServicesSimple;
