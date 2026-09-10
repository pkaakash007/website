import React, { useState, useRef } from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  BarChart2,
  Film,
  Building2,
  ShoppingBag,
  Cpu,
  Zap,
} from "lucide-react";

interface CaseStudyItem {
  id: string;
  category: "all" | "b2b" | "dtc" | "fintech" | "geo";
  title: string;
  clientLocation: string;
  vertical: string;
  metrics: string;
  badge: string;
  tagColor: string;
  imageSrc: string;
  videoSrc?: string;
  description: string;
  channels: string[];
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-b2b-saas",
    category: "b2b",
    title: "B2B Cloud Data Platform: Scaling Enterprise Pipeline",
    clientLocation: "San Francisco, CA",
    vertical: "Enterprise SaaS",
    metrics: "$2.8M Pipeline · -44% Blended CAC",
    badge: "LinkedIn ABM + Google Alpha",
    tagColor: "#007AFF",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    description: "Re-architected paid search and LinkedIn ABM targeting to capture high-intent IT decision makers, reducing sales cycle from 90 to 52 days with multi-touch Salesforce attribution.",
    channels: ["Google Search", "LinkedIn ABM", "Salesforce Sync"],
  },
  {
    id: "cs-dtc-scale",
    category: "dtc",
    title: "Global DTC Consumer Brand: Scaling from $120K to $680K MRR",
    clientLocation: "New York, NY",
    vertical: "DTC E-Commerce",
    metrics: "4.6x Blended ROAS · $680K MRR",
    badge: "Meta PMax + Motion Creative Studio",
    tagColor: "#AF52DE",
    imageSrc: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    videoSrc: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    description: "Deployed high-velocity creative sprints delivering 35+ monthly UGC and motion video ad variations, achieving record holiday quarter revenue with Shopify headless checkout.",
    channels: ["Meta Performance Max", "TikTok Ads", "Klaviyo Retention"],
  },
  {
    id: "cs-fintech",
    category: "fintech",
    title: "Cross-Border FinTech: Capturing High-LTV Accounts",
    clientLocation: "Austin, TX & London",
    vertical: "Financial Technology",
    metrics: "180+ Enterprise Contracts · 5.4x ROAS",
    badge: "High-Intent Search + Retargeting",
    tagColor: "#34C759",
    imageSrc: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    description: "Targeted CFOs and treasury officers searching for commercial payment rails. Compliance-audited campaigns with server-side GTM event streaming directly into BigQuery.",
    channels: ["Google High-Intent", "LinkedIn Sponsored", "BigQuery BI"],
  },
  {
    id: "cs-geo-ai",
    category: "geo",
    title: "AI Developer Platform: Dominating Generative Search (GEO)",
    clientLocation: "Seattle, WA",
    vertical: "Developer Tools & AI",
    metrics: "#1 on ChatGPT & Perplexity · 38K Organic Signups",
    badge: "Generative Engine Optimization (GEO)",
    tagColor: "#5856D6",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    description: "Engineered programmatic technical documentation and structured schema graphs, making the platform the #1 cited developer solution across ChatGPT, Perplexity, and Google AI Overviews.",
    channels: ["GEO / AI Citations", "Programmatic SEO", "Technical Docs"],
  },
  {
    id: "cs-healthtech",
    category: "b2b",
    title: "MedTech & Telehealth SaaS: Enterprise Demo Acceleration",
    clientLocation: "Boston, MA",
    vertical: "Healthcare Technology",
    metrics: "+310% Demo Bookings · 6.2:1 LTV/CAC",
    badge: "HIPAA-Compliant GTM + HubSpot",
    tagColor: "#00C7BE",
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    description: "Built HIPAA-compliant server-side event tracking, feeding qualified clinic director leads directly into HubSpot lifecycle stages with automated nurture workflows.",
    channels: ["Google Search", "HubSpot CRM", "Server-Side GTM"],
  },
  {
    id: "cs-dtc-lifestyle",
    category: "dtc",
    title: "Modern Consumer Tech & Audio: Direct Response YouTube Ads",
    clientLocation: "Los Angeles, CA",
    vertical: "Consumer Hardware",
    metrics: "$2.1M Annualized GMV · 4.8x ROAS",
    badge: "YouTube Shorts + Shopping Ads",
    tagColor: "#FF9500",
    imageSrc: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    description: "Scripted and produced studio audio demonstration commercials optimized for YouTube in-stream and Shorts, yielding a 38% lower CPA compared to standard social video.",
    channels: ["YouTube Ads", "Google Merchant Center", "Meta DPA"],
  },
];

export const MarketingMediaGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "b2b" | "dtc" | "fintech" | "geo">("all");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter);

  return (
    <section className="py-20 sm:py-24 bg-[#FAFAFC] border-b border-black/[0.06]">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white mb-4 shadow-2xs">
              <BarChart2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Proven Performance Across US &amp; Global Verticals</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
              Case Studies &amp; Growth Engine Proof.
            </h2>
            <p className="text-base text-neutral-600 mt-3 leading-relaxed">
              Real revenue outcomes for venture-backed SaaS platforms, high-volume consumer brands, and global enterprises. No vanity metrics — only verified pipeline, lower CAC, and high ROAS.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-neutral-200/60 p-1.5 rounded-2xl self-start">
            {[
              { id: "all", label: "All Case Studies" },
              { id: "b2b", label: "B2B SaaS" },
              { id: "dtc", label: "DTC Brands" },
              { id: "fintech", label: "FinTech" },
              { id: "geo", label: "AI Search (GEO)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? "bg-white text-neutral-900 shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((study) => (
            <div
              key={study.id}
              className="rounded-[24px] bg-white border border-black/[0.08] shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Visual Thumbnail / Video Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={study.imageSrc}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] text-white font-semibold border border-white/15">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: study.tagColor }}
                    />
                    <span>{study.badge}</span>
                  </div>

                  {/* Top Right Client Location */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10.5px] text-neutral-900 font-bold shadow-xs">
                    {study.clientLocation}
                  </div>

                  {/* Bottom Metric Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 text-white text-xs font-bold shadow-md">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{study.metrics}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5">
                  <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-1">
                    {study.vertical}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 leading-snug group-hover:text-[#007AFF] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Channels Mini-Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {study.channels.map((chan, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200/60 text-[10.5px] font-semibold text-neutral-700"
                      >
                        {chan}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-4 bg-neutral-50/70 border-t border-black/[0.06] flex items-center justify-between">
                <button
                  onClick={() => openLeadModal(`case-study-${study.id}`)}
                  className="text-xs font-bold text-[#007AFF] flex items-center gap-1 hover:gap-1.5 transition-all cursor-pointer"
                >
                  <span>View Full Strategy Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <ShieldCheck className="w-4 h-4 text-neutral-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-[24px] bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Looking for tailored growth projections for your industry?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed">
              We provide confidential, data-backed unit economics modeling and ad spend efficiency forecasts before any contract is signed.
            </p>
          </div>
          <button
            onClick={() => openLeadModal("us-case-studies-cta")}
            className="px-7 py-3 rounded-full text-xs sm:text-sm font-bold bg-white text-neutral-900 hover:bg-neutral-100 transition-all cursor-pointer shrink-0 shadow-md"
          >
            Request Custom Forecast Brief
          </button>
        </div>
      </Container>
    </section>
  );
};

export default MarketingMediaGallery;
