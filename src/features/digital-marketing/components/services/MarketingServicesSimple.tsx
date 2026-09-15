import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";
import {
  Search,
  Share2,
  TrendingUp,
  MapPin,
  Target,
  BarChart3,
  ArrowRight,
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

export interface MarketingServiceItem {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  link: string;
}

export const CORE_MARKETING_SERVICES: MarketingServiceItem[] = [
  {
    id: "google-ads",
    name: "Google Search Ads & PPC",
    category: "Paid Search",
    icon: Search,
    tagline: "Reach active buyers searching on Google right now",
    description:
      "We build and manage targeted Google search campaigns so your business appears at the top when local or national customers search for your products or services.",
    deliverables: [
      "Strategic keyword research & negative keyword filtering",
      "High-converting ad copy written in clear Tamil or English",
      "Precise location & radius targeting around your business",
      "Real-time conversion tracking for phone calls & WhatsApp chats",
    ],
    bestFor: "Local Services, Showrooms, Clinics, Real Estate, B2B Companies",
    link: "/digital-marketing/google-ads",
  },
  {
    id: "meta-ads",
    name: "Instagram & Facebook Ads",
    category: "Paid Social",
    icon: Share2,
    tagline: "Engage customers with high-converting visual & video ads",
    description:
      "We create and run photo, reel, and video ad campaigns targeted directly at ready buyers in your target cities and customer demographics.",
    deliverables: [
      "Creative ad design (Reels, Carousels, and Direct Lead Forms)",
      "Targeted demographic & interest-based customer audience selection",
      "Direct WhatsApp lead routing and instant customer inquiry forms",
      "Continuous ad testing to optimize your cost per customer lead",
    ],
    bestFor: "E-commerce, Retail Brands, Showrooms, Healthcare, Education",
    link: "/digital-marketing/social-media-marketing",
  },
  {
    id: "seo-search",
    name: "Search Engine Optimization (SEO)",
    category: "Organic Search",
    icon: TrendingUp,
    tagline: "Build long-term organic rankings on Google search",
    description:
      "We optimize your website structure, page content, and technical setup so you rank higher on Google search results without paying per click.",
    deliverables: [
      "Technical website speed & mobile responsiveness optimization",
      "On-page keyword optimization for your core service pages",
      "High-quality content creation and search-friendly structure",
      "Ongoing search ranking tracking and transparent monthly reports",
    ],
    bestFor: "Service Businesses, Manufacturers, Exporters, Local Brands",
    link: "/digital-marketing/seo",
  },
  {
    id: "local-maps-seo",
    name: "Google Maps & Local SEO",
    category: "Local Search",
    icon: MapPin,
    tagline: "Rank #1 on Google Maps for local customer searches",
    description:
      "We optimize your Google Business Profile and local directory listings so nearby customers find your shop, clinic, or showroom easily.",
    deliverables: [
      "Google Business Profile setup, verification & optimization",
      "Local directory citations and consistent NAP contact details",
      "Customer review generation strategy & guidance",
      "Local 3-Pack Map ranking optimization for nearby buyers",
    ],
    bestFor: "Showrooms, Clinics, Restaurants, Local Service Providers",
    link: "/digital-marketing/seo",
  },
  {
    id: "cro-funnel",
    name: "Conversion Rate Optimization (CRO)",
    category: "Website Optimization",
    icon: Target,
    tagline: "Turn more website visitors into inquiries & phone calls",
    description:
      "We analyze how visitors use your website and fix layout friction points to make it easier for potential buyers to contact you.",
    deliverables: [
      "User behavior analysis & landing page layout audits",
      "Prominent click-to-call and WhatsApp inquiry button placement",
      "Simplified lead forms with zero unnecessary fields",
      "Fast page load speed and mobile usability improvements",
    ],
    bestFor: "Businesses with existing website traffic wanting more leads",
    link: "/digital-marketing/cro",
  },
  {
    id: "analytics-tracking",
    name: "Lead Tracking & Analytics",
    category: "Analytics & ROI",
    icon: BarChart3,
    tagline: "Know exactly where every phone call and lead came from",
    description:
      "We set up transparent tracking so you can see exactly which ad campaigns produce phone calls, WhatsApp messages, and actual customer inquiries.",
    deliverables: [
      "Direct phone call & WhatsApp click-to-chat event tracking",
      "Clear Google Analytics 4 (GA4) reporting dashboard setup",
      "Weekly transparent reports on your ad spend and lead costs",
      "Instant email and WhatsApp notifications for new inquiries",
    ],
    bestFor: "All active ad campaigns requiring clear ROI visibility",
    link: "/digital-marketing/seo",
  },
];

export const MarketingServicesSimple: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("google-ads");

  const currentService =
    CORE_MARKETING_SERVICES.find((s) => s.id === selectedServiceId) ||
    CORE_MARKETING_SERVICES[0];

  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="bg-white py-20 sm:py-28 border-b border-neutral-200/60 scroll-mt-20">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#DCC195] leading-tight">
            Digital Marketing Services That Drive Real Customers
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Select a service below to see how we help businesses across Tamil Nadu get more customer phone calls, WhatsApp inquiries, and sales.
          </p>
        </div>

        {/* ── Interactive Tabs (Clean Open Layout) ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CORE_MARKETING_SERVICES.map((svc) => {
              const isSelected = selectedServiceId === svc.id;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedServiceId(svc.id)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                    isSelected
                      ? "bg-black text-white"
                      : "text-neutral-600 hover:text-black hover:bg-neutral-100"
                  }`}
                >
                  {svc.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Featured Service Details Content (Open Layout) ── */}
        <div className="max-w-4xl space-y-8 py-4 mb-12">
          
          {/* Header with Icon & Title */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-black shrink-0">
              <CurrentIcon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0E2036]">
                {currentService.name}
              </h3>
            </div>
          </div>

          {/* Tagline & Description */}
          <div className="space-y-2">
            <p className="text-base sm:text-lg font-medium text-neutral-900 leading-snug">
              {currentService.tagline}
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              {currentService.description}
            </p>
          </div>

          {/* Core Deliverables List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              What We Deliver:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentService.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-sm text-neutral-700 font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-2" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </Container>
    </section>
  );
};

export default MarketingServicesSimple;
