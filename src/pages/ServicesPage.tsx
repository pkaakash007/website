import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { REAL_RESULT_CONFIG, getWhatsAppUrl } from "@/config";
import { BrandWhatsAppIcon } from "@/components/brand/BrandChannelIcons";
import ServicesTopIntroHeader from "@/features/services/components/ServicesTopIntroHeader";
import ServicesIOSCardsGrid from "@/features/services/components/ServicesIOSCardsGrid";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Layers,
  Search,
  Smartphone,
  Palette,
  Video,
  ShieldCheck,
  Code2,
  BarChart3,
  MessageCircle,
  Phone,
  Compass,
  Cpu,
  MonitorCheck,
  Zap,
} from "lucide-react";

export interface ServiceOffering {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: "strategy-media" | "engineering-apps" | "creative-branding";
  categoryLabel: string;
  description: string;
  deliverables: string[];
  metricsBadge: string;
  highlightTag: string;
  destinationUrl: string;
  visualTheme: {
    badgeBg: string;
    badgeText: string;
    accentGlow: string;
    iconColor: string;
  };
}

export const SERVICES_CATALOG: ServiceOffering[] = [
  {
    id: "creative-digital-strategy",
    number: "01",
    title: "Creative & Digital Strategy",
    subtitle: "Audience Research, Competitor Moats & Growth Architecture",
    category: "strategy-media",
    categoryLabel: "Strategy & Media",
    description:
      "We engineer strategies that best fit your business objectives by combining deep consumer research, market positioning, and creative storytelling. From multichannel acquisition funnels to market entry roadmaps, we give your brand an unshakeable competitive moat.",
    deliverables: [
      "Target audience persona modeling & buyer journey mapping",
      "Omnichannel media distribution & flight budgeting",
      "Full-funnel conversion attribution & quarterly KPIs",
    ],
    metricsBadge: "+4.8× Average ROAS",
    highlightTag: "Strategic Consulting",
    destinationUrl: "/digital-marketing",
    visualTheme: {
      badgeBg: "bg-blue-50",
      badgeText: "text-[#1d4ed8]",
      accentGlow: "from-blue-600/10 to-indigo-600/5",
      iconColor: "text-[#1d4ed8]",
    },
  },
  {
    id: "media-planning-buying",
    number: "02",
    title: "Media Planning & Performance Buying",
    subtitle: "Google Search, Meta Ads, YouTube & Omni-Channel Media",
    category: "strategy-media",
    categoryLabel: "Strategy & Media",
    description:
      "We help you profitably define your customer acquisition goals with our expertise in high-intent media buying. We allocate your advertising budget across Google Search, Shopping, YouTube, and Meta feeds with surgical targeting and server-side tracking.",
    deliverables: [
      "Laser-targeted Google Search & Meta catalog campaigns",
      "Server-side conversion API & zero signal loss tracking",
      "Daily spend optimization & direct WhatsApp lead routing",
    ],
    metricsBadge: "Zero Wasted Ad Spend",
    highlightTag: "High Intent Channels",
    destinationUrl: "/digital-marketing",
    visualTheme: {
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-700",
      accentGlow: "from-emerald-600/10 to-teal-600/5",
      iconColor: "text-emerald-600",
    },
  },
  {
    id: "analytics-seo",
    number: "03",
    title: "Search Engine Optimization & AI GEO",
    subtitle: "Google 3-Pack Maps Dominance & Generative Search Authority",
    category: "strategy-media",
    categoryLabel: "Strategy & Media",
    description:
      "Performance is at the heart of our SEO practice. We combine deep technical audits, local Google Business Profile dominance, and Generative Engine Optimization (GEO) so your business is recommended by Google, Perplexity, and AI search engines.",
    deliverables: [
      "Top 3 Google Maps Local 3-Pack ranking optimization",
      "Core Web Vitals acceleration & structural JSON-LD schema",
      "Generative Engine Optimization (GEO) for AI citations",
    ],
    metricsBadge: "+310% Inbound Organic Traffic",
    highlightTag: "Organic Dominance",
    destinationUrl: "/digital-marketing/seo",
    visualTheme: {
      badgeBg: "bg-purple-50",
      badgeText: "text-purple-700",
      accentGlow: "from-purple-600/10 to-fuchsia-600/5",
      iconColor: "text-purple-600",
    },
  },
  {
    id: "branding-marketing-communications",
    number: "04",
    title: "Branding & Marketing Communications",
    subtitle: "Brand Identity, Packaging Design & Persuasive Copy",
    category: "creative-branding",
    categoryLabel: "Creative & Branding",
    description:
      "We give your brand a distinct and authoritative voice. From bespoke typography and packaging box designs to bilingual English and Tamil corporate copywriting, we construct an identity that builds instant trust on retail shelves and digital feeds.",
    deliverables: [
      "Comprehensive visual guidelines, logo vectors & brand decks",
      "Retail-ready packaging, box dielines & print collateral",
      "High-converting bilingual copy for sales decks and web pages",
    ],
    metricsBadge: "100% Full IP Handover",
    highlightTag: "Identity & Packaging",
    destinationUrl: "/digital-marketing",
    visualTheme: {
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      accentGlow: "from-amber-600/10 to-orange-600/5",
      iconColor: "text-amber-600",
    },
  },
  {
    id: "mobile-website-uiux",
    number: "05",
    title: "Mobile & Website UI/UX Design",
    subtitle: "Figma Prototypes, Design Systems & High-Conversion UX",
    category: "engineering-apps",
    categoryLabel: "Engineering & Apps",
    description:
      "From the essential to the intricate, we design interfaces that make complex software feel effortless. Every screen is tested against real touch ergonomics, Apple Human Interface Guidelines, and conversion funnels before writing a single line of code.",
    deliverables: [
      "Clickable interactive prototypes for mobile and desktop",
      "Scalable design tokens, typography, and component libraries",
      "Frictionless checkout and lead capture wireframing",
    ],
    metricsBadge: "Mobile-First Ergonomics",
    highlightTag: "Interactive Wireframes",
    destinationUrl: "/application-development",
    visualTheme: {
      badgeBg: "bg-cyan-50",
      badgeText: "text-cyan-700",
      accentGlow: "from-cyan-600/10 to-blue-600/5",
      iconColor: "text-cyan-600",
    },
  },
  {
    id: "web-software-engineering",
    number: "06",
    title: "Custom Web & Software Engineering",
    subtitle: "Next.js Platforms, Ecommerce Stores & Business Automation",
    category: "engineering-apps",
    categoryLabel: "Engineering & Apps",
    description:
      "We build blazing-fast web applications, custom ecommerce systems with integrated UPI/cards, and cloud software that eliminates manual business paperwork. Engineered for sub-second page loads and automated WhatsApp customer communications.",
    deliverables: [
      "Next.js & React platforms with sub-second page speeds",
      "Custom ecommerce stores with UPI & instant WhatsApp alerts",
      "Enterprise ERP, CRM & inventory automation backends",
    ],
    metricsBadge: "< 1s Phone Load Speed",
    highlightTag: "High-Speed Code",
    destinationUrl: "/application-development",
    visualTheme: {
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-700",
      accentGlow: "from-indigo-600/10 to-blue-600/5",
      iconColor: "text-indigo-600",
    },
  },
  {
    id: "mobile-apps-native",
    number: "07",
    title: "iOS & Android Native Mobile Apps",
    subtitle: "App Store Publishing, Push Notifications & Complete Code Handover",
    category: "engineering-apps",
    categoryLabel: "Engineering & Apps",
    description:
      "We build robust mobile applications that customers love using every day. We manage the entire lifecycle from architecture to guaranteed live publishing on the Apple App Store and Google Play Store, handing over 100% of source code rights.",
    deliverables: [
      "Guaranteed publishing on Apple App Store & Google Play",
      "Real-time push notification marketing engine",
      "Zero vendor lock-in with 100% source code handover",
    ],
    metricsBadge: "iOS & Android Live",
    highlightTag: "App Store Delivery",
    destinationUrl: "/application-development",
    visualTheme: {
      badgeBg: "bg-rose-50",
      badgeText: "text-rose-700",
      accentGlow: "from-rose-600/10 to-pink-600/5",
      iconColor: "text-rose-600",
    },
  },
  {
    id: "video-production-motion",
    number: "08",
    title: "Commercial Video Production & Reels",
    subtitle: "4K Product Cinematography, Reels & Corporate Storytelling",
    category: "creative-branding",
    categoryLabel: "Creative & Branding",
    description:
      "A compelling brand story requires striking visuals and cinematography. We produce high-converting commercial reels, factory walkthroughs, and executive interviews formatted natively for Instagram Reels, YouTube Shorts, and paid advertising feeds.",
    deliverables: [
      "High-definition 4K video shooting, color grading, and audio mastering",
      "Fast-paced viral reel editing with Tamil & English captions",
      "Product showcase videos optimized for online conversions",
    ],
    metricsBadge: "+140% View Retention",
    highlightTag: "Commercial Reels",
    destinationUrl: "/digital-marketing",
    visualTheme: {
      badgeBg: "bg-red-50",
      badgeText: "text-red-700",
      accentGlow: "from-red-600/10 to-rose-600/5",
      iconColor: "text-red-600",
    },
  },
  {
    id: "cloud-cyber-security",
    number: "09",
    title: "Cloud Infrastructure & Cyber Security",
    subtitle: "Enterprise SSL, Automated Backups & 99.98% Uptime SLA",
    category: "engineering-apps",
    categoryLabel: "Engineering & Apps",
    description:
      "We ensure your digital assets are impenetrable, resilient, and always operational. From automated daily cloud database backups to web application firewall configurations, your customer data remains guarded under strict confidentiality.",
    deliverables: [
      "Enterprise SSL encryption & Web Application Firewall (WAF)",
      "Automated daily incremental cloud database backups",
      "24/7 server health monitoring with 99.98% production SLA",
    ],
    metricsBadge: "99.98% Uptime SLA",
    highlightTag: "Enterprise Protection",
    destinationUrl: "/application-development",
    visualTheme: {
      badgeBg: "bg-slate-100",
      badgeText: "text-slate-800",
      accentGlow: "from-slate-600/10 to-neutral-600/5",
      iconColor: "text-slate-700",
    },
  },
];

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#0E2036] selection:bg-[#1d4ed8] selection:text-white">
      <SEOHead
        title="Our Services | Full-Stack Digital Marketing & Software Engineering Company"
        description="Explore Real Result's core services: Creative Digital Strategy, Media Planning & Buying, SEO, UI/UX Design, Mobile Apps, Web Engineering, Video Production, and Cloud Security."
        canonicalPath="/services"
      />

      {/* ── 0. Top Intro Header: All your digital operations. Engineered to perfection. ── */}
      <ServicesTopIntroHeader />

      {/* ── 1. iOS Services Cards Grid with Top Full Cover Images & Clean White Description UI ── */}
      <ServicesIOSCardsGrid />

      {/* ── 3. Structured 4-Stage Methodology (Social Panga "How We Work") ── */}
      <section className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200/80">
        <Container size="wide">
          <div className="max-w-3xl mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2036]">
              How We Turn Briefs Into Predictable Revenue.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We eliminate guesswork with a proven 4-stage delivery process tailored for executive accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Research & Audit",
                desc: "We analyze your commercial unit economics, competitor gaps, and consumer search behavior before prescribing any plan.",
              },
              {
                step: "02",
                title: "Strategy & Wireframing",
                desc: "We draft conversion funnels, screen prototypes, and campaign flight schedules for transparent review and sign-off.",
              },
              {
                step: "03",
                title: "Execution & Engineering",
                desc: "Our creative designers and software engineers build production assets in weekly sprints with live staging previews.",
              },
              {
                step: "04",
                title: "Launch & Growth Optimization",
                desc: "We deploy live campaigns and codebases with continuous monitoring, daily optimization, and 100% IP rights transfer.",
              },
            ].map((st) => (
              <div
                key={st.step}
                className="p-7 rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black font-mono text-[#1d4ed8] block mb-3">
                    {st.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#0E2036] mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4. Executive Dark CTA Card: Ready to grow your business online? ── */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F5F5F7]">
        <Container size="wide">
          <div className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[36px] lg:rounded-[40px] bg-[#16171A] border border-white/[0.08] shadow-[0_24px_50px_rgba(0,0,0,0.18)] px-6 py-14 sm:px-12 sm:py-18 lg:px-16 lg:py-20 text-center relative overflow-hidden">
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12] mb-5">
              Ready to grow your business<br className="hidden sm:inline" /> online?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto mb-8 font-normal">
              Talk directly with our team to discuss your project, get honest guidance, and receive a free quote.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              {/* White Pill Button with Real Result mark & Arrow */}
              <button
                type="button"
                onClick={() => openLeadModal("services-get-quote")}
                className="group cursor-pointer inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-neutral-100 text-[#0E2036] font-bold text-sm sm:text-[15px] shadow-sm transition-all duration-200 active:scale-[0.98]"
              >
                <span>Get a Free Quote</span>
                <span className="inline-flex items-center gap-1 shrink-0 ml-1">
                  <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt=""
                    className="w-4 h-4 object-contain opacity-75"
                  />
                </span>
              </button>

              {/* Dark Pill Phone Button */}
              <a
                href="tel:+918111033390"
                className="cursor-pointer inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.09] border border-white/15 text-white font-semibold text-sm sm:text-[15px] transition-all duration-200 active:scale-[0.98]"
              >
                <Phone className="w-4 h-4 text-[#E5B456]" />
                <span>+91 81110 33390</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
