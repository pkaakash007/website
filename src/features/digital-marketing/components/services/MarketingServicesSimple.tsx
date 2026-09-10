import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";
import {
  ArrowRight,
  Sparkles,
  Target,
  ShieldCheck,
  Cpu,
  BarChart3,
  Globe,
  Sliders,
  Zap,
} from "lucide-react";

// --- Custom Platform & Service SVGs ---

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
    <ellipse cx="42.664" cy="187.924" rx="42.664" ry="41.604" fill="#34A853" />
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

// ─── CORE ENTERPRISE GROWTH DISCIPLINES ───

export interface CoreMarketingService {
  id: string;
  name: string;
  category: string;
  icon: React.ElementType;
  tagline: string;
  description: string;
  deliverables: string[];
  bestFor: string;
  metrics: string;
  link: string;
}

export const CORE_MARKETING_SERVICES: CoreMarketingService[] = [
  {
    id: "google-ads",
    name: "Paid Search & Intent Capture",
    category: "Google Ads & Microsoft Advertising",
    icon: GoogleAdsIcon,
    tagline: "Capture Active Buyers at the Exact Moment of Intent",
    description:
      "We design rigorous Alpha/Beta search account architectures, negative keyword shields, and value-based bidding algorithms to capture high-intent enterprise buyers and commercial shoppers with minimal CPC waste.",
    deliverables: [
      "Alpha/Beta keyword segregation & search query mining",
      "Automated value-based Smart Bidding & offline conversion imports",
      "Dynamic search ad campaigns for long-tail high-intent queries",
      "Sub-second landing page testing for maximum Quality Score",
    ],
    bestFor: "B2B SaaS, Enterprise Software, High-Ticket Services, DTC Scale",
    metrics: "5.4x Average ROAS · -42% Lower Cost Per Opportunity",
    link: "/digital-marketing/google-ads",
  },
  {
    id: "linkedin-abm",
    name: "B2B Paid Social & ABM",
    category: "LinkedIn Ads & Account-Based Marketing",
    icon: LinkedInIcon,
    tagline: "Precision Targeting for Enterprise Buying Committees",
    description:
      "Target decision makers by job title, company revenue, tech stack, and buying intent. We combine LinkedIn Sponsored Content, Document Ads, and dynamic retargeting to accelerate pipeline velocity.",
    deliverables: [
      "Tier-1 Account List (ABM) matching & CRM audience synchronization",
      "Thought-leadership Document Ads & interactive case studies",
      "First-party Matched Audiences & competitor conquest campaigns",
      "Closed-loop CRM deal tracking via HubSpot & Salesforce",
    ],
    bestFor: "Enterprise B2B, SaaS, FinTech, Mid-Market Professional Services",
    metrics: "+280% Qualified Sales Demos · 4.2 Month CAC Payback",
    link: "/digital-marketing/social-media-marketing",
  },
  {
    id: "geo-ai",
    name: "Generative Engine Optimization (GEO)",
    category: "AI Search: ChatGPT, Perplexity & Gemini",
    icon: GeoIcon,
    tagline: "Get Recommended by AI Search Engines & LLM Citations",
    description:
      "Modern buyers use ChatGPT, Perplexity, and Google AI Overviews to choose software and vendors. We engineer entity authority, schema graphs, and technical citations to ensure your brand is the top AI-recommended solution.",
    deliverables: [
      "LLM entity citation mapping & semantic brand authority",
      "Structured schema architecture for Google Gemini & ChatGPT Search",
      "Digital PR entity footprint across authoritative industry publications",
      "Comparative feature matrices & programmatic AI answer indexing",
    ],
    bestFor: "High-Growth Tech, B2B SaaS, HealthTech, Disruptive DTC Brands",
    metrics: "#1 Cited Platform on Perplexity & ChatGPT · +340% AI Traffic",
    link: "/digital-marketing/geo",
  },
  {
    id: "programmatic-seo",
    name: "Programmatic & Technical SEO",
    category: "Enterprise Search Scale",
    icon: SeoIcon,
    tagline: "Scalable Inbound Revenue That Compounds Monthly",
    description:
      "Beyond basic blogs: we build programmatic SEO database architectures, optimize Core Web Vitals to sub-second load times, and execute technical crawl budget management for multi-million dollar organic pipelines.",
    deliverables: [
      "Programmatic SEO template architectures for high-intent queries",
      "Technical Core Web Vitals engineering & crawl budget optimization",
      "International multi-region hreflang & enterprise headless SEO",
      "High-authority editorial link building and data journalism PR",
    ],
    bestFor: "Platforms, Marketplaces, SaaS, Multi-Region Global Businesses",
    metrics: "Top 3 Google SERP Dominance · +380% Organic Inbound Pipeline",
    link: "/digital-marketing/seo",
  },
  {
    id: "cro-funnel",
    name: "Conversion Rate Optimization (CRO)",
    category: "Funnel Engineering & Experimentation",
    icon: CroIcon,
    tagline: "Turn More Paid & Organic Visitors into Qualified Pipeline",
    description:
      "Driving traffic is only half the battle. We conduct user session recordings, heatmaps, and continuous multivariate A/B testing on headlines, form friction, pricing tables, and checkout flows to lift conversion rates by 40–80%.",
    deliverables: [
      "Full-funnel drop-off analytics & user session friction audits",
      "Continuous multivariate A/B testing on landing page variants",
      "High-converting pricing calculators & interactive lead qualifiers",
      "Post-click personalization based on ad creative & search term",
    ],
    bestFor: "All Brands Spending Over $10K/mo on Paid Traffic",
    metrics: "+62% Average Conversion Rate Lift · Lower Blended CAC",
    link: "/digital-marketing/cro",
  },
  {
    id: "attribution-data",
    name: "Attribution & Modern Data Stack",
    category: "Closed-Loop CRM & Warehouse Analytics",
    icon: AttributionIcon,
    tagline: "First-Party Data, Server-Side Tracking & True Multi-Touch ROAS",
    description:
      "Eliminate attribution guesswork. We set up server-side Google Tag Manager (GTM), GA4 BigQuery export pipelines, and CRM integration to attribute pipeline and revenue accurately across all marketing touchpoints.",
    deliverables: [
      "Server-side GTM tagging resilient to browser privacy changes",
      "Closed-loop revenue attribution syncing directly into CRM",
      "BigQuery marketing data warehouse & real-time Looker dashboards",
      "Multi-touch attribution models: First-Touch, Last-Touch & W-Shaped",
    ],
    bestFor: "Venture-Backed Startups, Scale-ups, Enterprise Revenue Teams",
    metrics: "100% Verified Revenue Attribution · Zero Vanity Metrics",
    link: "/digital-marketing/seo",
  },
];

// Backwards compatibility for existing imports
export const paidAdsServices = CORE_MARKETING_SERVICES.slice(0, 3);
export const organicServices = CORE_MARKETING_SERVICES.slice(2, 6);

// --- Official 4K Vector Platform Logos ---
export const GoogleAdsOfficialLogo = () => (
  <div className="flex items-center justify-center gap-2.5">
    <GoogleAdsIcon className="w-8 h-8 shrink-0" />
    <div className="flex flex-col text-left font-sans leading-none">
      <span className="text-sm font-bold text-[#3c4043] tracking-tight">Google</span>
      <span className="text-[11px] font-semibold text-[#5f6368] mt-0.5">Premier Partner</span>
    </div>
  </div>
);

export const LinkedInAdsOfficialLogo = () => (
  <div className="flex items-center justify-center gap-2">
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        d="M7.12 9.47H4.56V18h2.56V9.47ZM5.84 5.5a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96ZM19.44 13.52c0-3.32-1.77-4.87-4.14-4.87-1.91 0-2.77 1.05-3.24 1.79V9.47H9.5c.03.72 0 8.53 0 8.53h2.56v-4.76c0-.25.02-.51.09-.7.21-.51.68-1.04 1.48-1.04 1.04 0 1.46.79 1.46 1.96V18h2.56v-4.48h-.21Z"
        fill="white"
      />
    </svg>
    <div className="flex flex-col text-left font-sans leading-none">
      <span className="text-sm font-bold text-[#0A66C2] tracking-tight">LinkedIn</span>
      <span className="text-[11px] font-semibold text-[#5f6368] mt-0.5">Marketing Partner</span>
    </div>
  </div>
);

export const MetaAdsOfficialLogo = () => (
  <div className="flex items-center justify-center gap-2.5">
    <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="meta-official-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0064E0" />
          <stop offset="50%" stopColor="#0081FB" />
          <stop offset="100%" stopColor="#0079F5" />
        </linearGradient>
      </defs>
      <path
        fill="url(#meta-official-grad)"
        d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
      />
    </svg>
    <div className="text-left leading-tight">
      <span className="text-sm font-extrabold text-neutral-900 tracking-tight">Meta</span>
      <span className="block text-[11px] text-neutral-500 font-medium">Business Partner</span>
    </div>
  </div>
);

export const HubSpotOfficialLogo = () => (
  <div className="flex items-center justify-center gap-2.5">
    <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#FF7A59">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 0 0 1.267-1.978v-.067A2.2 2.2 0 0 0 17.238.845h-.067a2.2 2.2 0 0 0-2.193 2.193v.067a2.196 2.196 0 0 0 1.252 1.973l.013.006v2.852a6.22 6.22 0 0 0-2.969 1.31l.012-.01-7.828-6.095A2.497 2.497 0 1 0 4.3 4.656l-.012.006 7.697 5.991a6.176 6.176 0 0 0-1.038 3.446c0 1.343.425 2.588 1.147 3.607l-.013-.02-2.342 2.343a1.968 1.968 0 0 0-.58-.095h-.002a2.033 2.033 0 1 0 2.033 2.033 1.978 1.978 0 0 0-.1-.595l.005.014 2.317-2.317a6.247 6.247 0 1 0 4.782-11.134l-.036-.005zm-.964 9.378a3.206 3.206 0 1 1 3.215-3.207v.002a3.206 3.206 0 0 1-3.207 3.207z" />
    </svg>
    <div className="text-left leading-tight">
      <span className="text-sm font-bold text-neutral-900">HubSpot</span>
      <span className="block text-[11px] text-neutral-500 font-medium">Certified CRM Sync</span>
    </div>
  </div>
);

export const SalesforceOfficialLogo = () => (
  <div className="flex items-center justify-center gap-2.5">
    <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#00A1E0">
      <path d="M10.006 5.415a4.195 4.195 0 0 1 3.045-1.306c1.56 0 2.954.9 3.69 2.205.63-.3 1.35-.45 2.1-.45 2.85 0 5.159 2.34 5.159 5.22s-2.31 5.22-5.176 5.22c-.345 0-.69-.044-1.02-.104a3.75 3.75 0 0 1-3.3 1.95c-.6 0-1.155-.15-1.65-.375A4.314 4.314 0 0 1 8.88 20.4a4.302 4.302 0 0 1-4.05-2.82c-.27.062-.54.076-.825.076-2.204 0-4.005-1.8-4.005-4.05 0-1.5.811-2.805 2.01-3.51-.255-.57-.39-1.2-.39-1.846 0-2.58 2.1-4.65 4.65-4.65 1.53 0 2.85.705 3.72 1.8" />
    </svg>
    <div className="text-left leading-tight">
      <span className="text-sm font-bold text-neutral-900">Salesforce</span>
      <span className="block text-[11px] text-neutral-500 font-medium">Pipeline Integration</span>
    </div>
  </div>
);

export const BigQueryOfficialLogo = () => (
  <div className="flex items-center justify-center gap-2.5">
    <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="#4285F4">
      <path d="M5.676 10.595h2.052v5.244a5.892 5.892 0 0 1-2.052-2.088v-3.156zm18.179 10.836a.504.504 0 0 1 0 .708l-1.716 1.716a.504.504 0 0 1-.708 0l-4.248-4.248a.206.206 0 0 1-.007-.007c-.02-.02-.028-.045-.043-.066a10.736 10.736 0 0 1-6.334 2.065C4.835 21.599 0 16.764 0 10.799S4.835 0 10.8 0s10.799 4.835 10.799 10.8c0 2.369-.772 4.553-2.066 6.333.025.017.052.028.074.05l4.248 4.248zm-5.028-10.632a8.015 8.015 0 1 0-8.028 8.028h.024a8.016 8.016 0 0 0 8.004-8.028zm-4.86 4.98a6.002 6.002 0 0 0 2.04-2.184v-1.764h-2.04v3.948zm-4.5.948c.442.057.887.08 1.332.072.4.025.8.025 1.2 0V7.692H9.468v9.035z" />
    </svg>
    <div className="text-left leading-tight">
      <span className="text-sm font-bold text-neutral-900">BigQuery</span>
      <span className="block text-[11px] text-neutral-500 font-medium">Warehouse Analytics</span>
    </div>
  </div>
);

export const OFFICIAL_PLATFORMS = [
  { name: "Google Premier Partner", renderLogo: GoogleAdsOfficialLogo },
  { name: "LinkedIn Marketing Partner", renderLogo: LinkedInAdsOfficialLogo },
  { name: "Meta Business Partner", renderLogo: MetaAdsOfficialLogo },
  { name: "HubSpot Diamond Partner", renderLogo: HubSpotOfficialLogo },
  { name: "Salesforce Cloud Sync", renderLogo: SalesforceOfficialLogo },
  { name: "Google Cloud BigQuery", renderLogo: BigQueryOfficialLogo },
];

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export const MarketingServicesSimple: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>("google-ads");

  const currentService =
    CORE_MARKETING_SERVICES.find((s) => s.id === selectedServiceId) ||
    CORE_MARKETING_SERVICES[0];

  const CurrentIcon = currentService.icon;

  return (
    <section id="services" className="bg-white py-20 sm:py-24 border-b border-black/[0.06] scroll-mt-20">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Full-Funnel Performance Marketing Services
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal mt-3">
            Engineered for high-growth US and global businesses. Select a discipline below to examine strategic deliverables, technical frameworks, and performance benchmarks.
          </p>
        </div>

        {/* ── Interactive Discipline Tabs ── */}
        <div className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {CORE_MARKETING_SERVICES.map((svc) => {
              const isSelected = selectedServiceId === svc.id;
              return (
                <button
                  key={svc.id}
                  type="button"
                  onClick={() => setSelectedServiceId(svc.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 cursor-pointer whitespace-nowrap select-none border ${
                    isSelected
                      ? "bg-neutral-900 text-white font-bold border-neutral-900 shadow-md scale-[1.02]"
                      : "bg-neutral-100 hover:bg-neutral-200/80 text-neutral-700 font-medium border-transparent"
                  }`}
                >
                  {svc.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Featured Deep-Dive Card for Selected Discipline ── */}
        <div className="mb-20 rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#FAFBFD] via-white to-[#F7F8FA] border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.06)] p-6 sm:p-10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Icon & Title */}
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                    {currentService.name}
                  </h3>
                </div>
              </div>

              {/* Tagline & Description */}
              <div>
                <p className="text-lg font-bold text-neutral-900 leading-snug">
                  {currentService.tagline}
                </p>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mt-2.5">
                  {currentService.description}
                </p>
              </div>

              {/* Core Deliverables Checklist */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-2xs space-y-3">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                  Enterprise Deliverables &amp; Campaign Architecture:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => openLeadModal(`US Service: ${currentService.name}`)}
                >
                  Book Strategy Call for {currentService.name}
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={currentService.link}
                >
                  Explore Technical Breakdown
                </Button>
              </div>
            </div>

            {/* Right Interactive Dashboard Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-neutral-900 text-white p-6 sm:p-7 shadow-xl border border-neutral-800 space-y-6">


                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-neutral-400 font-medium">Projected Revenue Lift</div>
                    <div className="text-3xl font-extrabold text-white tracking-tight mt-0.5">
                      +35% to +65%
                    </div>
                    <div className="w-full bg-neutral-800 h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#007AFF] to-[#34C759] h-full rounded-full w-[82%]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-neutral-400">Weekly Cadence</div>
                      <div className="text-sm font-bold text-white mt-0.5">Bi-Weekly Sprints</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[11px] text-neutral-400">Attribution</div>
                      <div className="text-sm font-bold text-emerald-400 mt-0.5">Multi-Touch CRM</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/10 text-xs text-neutral-300 leading-relaxed">
                    <span className="font-bold text-white block mb-1">Global Delivery Standard:</span>
                    Dedicated senior growth strategist, asynchronous Slack Connect channel, real-time Looker dashboards, and zero long-term lock-in contracts.
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => openLeadModal("us-performance-index")}
                  className="w-full"
                >
                  Request Custom Growth Scope
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Official Enterprise Platform Credentials ("We Are Expertise In") ── */}
        <div className="rounded-[24px] bg-neutral-50/80 border border-black/[0.06] p-8 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest block mb-1">
              OFFICIAL PLATFORM ACCREDITATIONS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
              Enterprise Ecosystem &amp; Cloud Partners
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Direct certified partner access, priority API rate limits, and alpha/beta product features.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {OFFICIAL_PLATFORMS.map((platform, pIdx) => {
              const LogoComponent = platform.renderLogo;
              return (
                <div
                  key={pIdx}
                  className="p-4 rounded-2xl bg-white border border-black/[0.06] shadow-2xs flex items-center justify-center text-center hover:border-black/20 hover:shadow-xs transition-all"
                >
                  <LogoComponent />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingServicesSimple;
