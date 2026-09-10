
import React, { useState } from "react";
import { Image } from "@/components/common/Image";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  ArrowRight,
  ArrowUpRight,
  Tv,
  TrendingUp,
  Share2,
  FileText,
  Users2,
  Newspaper,
  Layers,
  BarChart3,
  Flame,
} from "lucide-react";

type ServiceCategory =
  | "CREATIVE"
  | "MEDIA"
  | "DIGITAL"
  | "PERFORMANCE"
  | "SOCIAL"
  | "CONTENT"
  | "INFLUENCE"
  | "PR";

interface CategoryData {
  id: ServiceCategory;
  label: string;
  tagline: string;
  headline: string;
  narrative: string;
  catalogItems: string[];
  capabilities: { title: string; desc: string }[];
  image: string;
  statsLabel: string;
}

const CATEGORY_MAP: Record<ServiceCategory, CategoryData> = {
  CREATIVE: {
    id: "CREATIVE",
    label: "CREATIVE",
    tagline: "Brand Strategy & Visual Direction",
    headline: "Unforgettable concepts that live in the cultural consciousness.",
    narrative:
      "We design distinctive brand worlds that command respect before a single dollar of media is deployed. From core positioning and identity systems to high-concept launch activations and experiential environments.",
    catalogItems: ["Brand Strategy", "Experiential", "Events", "Creative Direction", "BTL Activations"],
    capabilities: [
      { title: "Brand Identity Systems", desc: "Logo architecture, typography, color theory, and bespoke brand books." },
      { title: "Experiential & Events", desc: "Physical pop-ups, launch galas, interactive exhibitions, and festival installations." },
      { title: "Campaign Conceptualization", desc: "360-degree brand platforms that translate seamlessly across digital and real-world media." },
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "Full-Funnel Brand Architecture",
  },
  MEDIA: {
    id: "MEDIA",
    label: "MEDIA",
    tagline: "Omnichannel Broadcast & Physical Networks",
    headline: "Massive scale across public and broadcast airways.",
    narrative:
      "Direct buying power and programmatic precision across traditional and digital out-of-home screens, national and regional television, connected TV, radio, cinema, and transit networks.",
    catalogItems: ["Media Buying", "Television", "Radio", "Print", "OOH", "DOOH", "Cinema", "Transit"],
    capabilities: [
      { title: "Metropolitan DOOH & OOH", desc: "Prime digital billboards, highway hoardings, and ambient urban displays." },
      { title: "Television & Cinema", desc: "Prime-time TV commercial placements, Dolby 7.1 cinema screens, and streaming OTT." },
      { title: "Transit & Audio", desc: "Airport takeovers, metro train wraps, regional radio networks, and digital audio podcasts." },
    ],
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "National Multi-Format Inventory",
  },
  DIGITAL: {
    id: "DIGITAL",
    label: "DIGITAL",
    tagline: "High-Intent & Programmatic Acquisition",
    headline: "Capturing transactional buyers at the moment of intent.",
    narrative:
      "We turn algorithmic search and programmatic auctions into a reliable source of in-market customers. Every keyword, impression, and audience segment is continually optimized for commercial yield.",
    catalogItems: ["SEO", "PPC", "Programmatic", "Affiliate Marketing", "MarTech"],
    capabilities: [
      { title: "High-Intent Organic SEO", desc: "Technical site architecture, programmatic indexing, and authority-building content." },
      { title: "Google & Bing Search PPC", desc: "Laser-targeted search ads bidding dynamically on transactional high-value terms." },
      { title: "Programmatic DSP Networks", desc: "Real-time automated bidding across global ad exchanges and context-rich media." },
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "High-Intent Query Architecture",
  },
  PERFORMANCE: {
    id: "PERFORMANCE",
    label: "PERFORMANCE",
    tagline: "Conversion Engineering & Attribution",
    headline: "Creativity catches attention. Performance proves it.",
    narrative:
      "A rigorous quantitative framework where every dollar is tracked to pipeline revenue. We build closed-loop conversion funnels, landing page split tests, dynamic number insertion, and multi-touch attribution models.",
    catalogItems: ["CRO", "Analytics", "Attribution", "Marketing Automation", "RevOps"],
    capabilities: [
      { title: "Conversion Rate Optimization (CRO)", desc: "Systematic multivariate testing to eliminate friction and maximize on-page conversions." },
      { title: "Multi-Touch Attribution", desc: "Server-side tracking (CAPI) that clarifies channel impact without third-party cookie reliance." },
      { title: "Marketing Automation & RevOps", desc: "Instant CRM sync, lead scoring protocols, and dynamic nurturing sequences." },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "Closed-Loop Attribution",
  },
  SOCIAL: {
    id: "SOCIAL",
    label: "SOCIAL",
    tagline: "Paid Social & Community Velocity",
    headline: "Thumb-stopping creative engineered for algorithmic reach.",
    narrative:
      "We fuse cultural relevance with paid distribution across Meta, Instagram, LinkedIn, and YouTube. Fast-turnaround vertical videos and hyper-targeted custom audiences drive community action.",
    catalogItems: ["Social Media Marketing", "Paid Social", "Audience Sculpting", "Vertical Video"],
    capabilities: [
      { title: "Paid Social Scaling", desc: "High-velocity multivariate ad creative testing on Meta, LinkedIn, and TikTok." },
      { title: "Community Management", desc: "Active brand voice stewardship, community engagement, and brand defense." },
      { title: "B2B Social Account Targeting", desc: "Precision executive-level targeting on LinkedIn matched to enterprise decision-makers." },
    ],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "Algorithmic Attention Engine",
  },
  CONTENT: {
    id: "CONTENT",
    label: "CONTENT",
    tagline: "Editorial Storytelling & Retention",
    headline: "Assets that educate, persuade, and retain.",
    narrative:
      "Deep editorial craftsmanship that turns complex products into compelling narratives. From investigative thought leadership and product documentaries to customer loyalty ecosystems.",
    catalogItems: ["Content Marketing", "Loyalty", "Editorial Video", "Whitepapers"],
    capabilities: [
      { title: "Executive Thought Leadership", desc: "Authoritative whitepapers, industry benchmarks, and keynote addresses." },
      { title: "Video & Documentary Series", desc: "Customer hero stories, episodic brand films, and explainers with cinematic craft." },
      { title: "Customer Retention & Loyalty", desc: "Lifecycle communication that deepens brand affinity and drives recurring revenue." },
    ],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "Editorial Brand Authority",
  },
  INFLUENCE: {
    id: "INFLUENCE",
    label: "INFLUENCE",
    tagline: "Creator Alliances & Cultural Currency",
    headline: "Human-to-human credibility at national scale.",
    narrative:
      "Connecting your brand with trusted creator voices that command genuine loyalty. We orchestrate transparent, contractually secured endorsements, product co-creations, and organic social buzz.",
    catalogItems: ["Influencer Marketing", "Creator Management", "Talent Contracts", "Ambassador Programs"],
    capabilities: [
      { title: "Celebrity & Key Influencer Alliances", desc: "High-profile brand ambassador agreements with measurable deliverables." },
      { title: "Micro-Creator Networks", desc: "Hyper-niche specialist cohorts driving peer-level trust in regional markets." },
      { title: "Contract & Usage Rights Stewardship", desc: "Rigorous legal protection, perpetual licensing, and Whitelisting ad rights." },
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "Authentic Creator Trust",
  },
  PR: {
    id: "PR",
    label: "PR",
    tagline: "Earned Media & Reputation Defense",
    headline: "The third-party endorsement money cannot directly buy.",
    narrative:
      "Securing commanding coverage across top-tier business publications, national news broadcasts, and specialized industry trade press. We manage reputational narrative and crisis preparedness.",
    catalogItems: ["PR", "Earned Media", "Crisis Communications", "Press Conferences"],
    capabilities: [
      { title: "Top-Tier Editorial Placements", desc: "Relationships with editors and journalists across leading financial and trade media." },
      { title: "Crisis Communications", desc: "Rapid-response protocols, holding statements, and proactive narrative defense." },
      { title: "Press Conferences & Media Tours", desc: "Flawlessly executed press events, product reveals, and executive interviews." },
    ],
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1400&q=80",
    statsLabel: "Earned Press Equity",
  },
};

const CATEGORY_KEYS: ServiceCategory[] = [
  "CREATIVE",
  "MEDIA",
  "DIGITAL",
  "PERFORMANCE",
  "SOCIAL",
  "CONTENT",
  "INFLUENCE",
  "PR",
];

export default function MarketingServicesExperience() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>("CREATIVE");
  const activeData = CATEGORY_MAP[activeCategory];

  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <p className="text-xs font-mono uppercase tracking-widest font-bold text-primary mb-4">
            INTEGRATED SERVICE EXPLORER
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight uppercase leading-[1.05]">
            Full-Funnel Capabilities. <br />
            <span className="text-gold-700">GROUPED INTO</span> EIGHT DISCIPLINES.
          </h2>
          <p className="text-base sm:text-lg text-secondary mt-4 max-w-2xl font-normal leading-relaxed">
            We reject disconnected point solutions. Select any discipline to explore how we assemble strategy, media, and conversion into one unified growth engine.
          </p>
        </div>

        {/* 8 Categories Navigation Tabs (Horizontal Scrollable on Mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-10 border-b border-border/80">
          {CATEGORY_KEYS.map((catKey) => {
            const isSelected = activeCategory === catKey;
            return (
              <button
                key={catKey}
                onClick={() => setActiveCategory(catKey)}
                className={`shrink-0 px-5 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  isSelected
                    ? "bg-primary text-white shadow-card border border-primary"
                    : "bg-white text-secondary hover:text-primary hover:bg-surface border border-border"
                }`}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                <span>{catKey}</span>
              </button>
            );
          })}
        </div>

        {/* Rich Interactive Panel (Not a 20-card grid!) */}
        <div className="rounded-3xl bg-white border border-border shadow-card overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                {/* Eyebrow & Headline */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                    {activeData.tagline}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black text-primary tracking-tight leading-snug">
                    {activeData.headline}
                  </h3>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                  {activeData.narrative}
                </p>

                {/* Supported Catalog Items (Pill Bar) */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-semibold">
                    Covering Catalog Specialties:
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    {activeData.catalogItems.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-canvas border border-border text-primary font-semibold flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Capabilities Grid */}
                <div className="space-y-3 pt-4 border-t border-border/70">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted font-bold">
                    Core Strategic Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeData.capabilities.map((cap, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-canvas/70 border border-border/80">
                        <div className="text-xs font-bold text-primary">{cap.title}</div>
                        <div className="text-[11px] text-secondary mt-1 leading-relaxed">
                          {cap.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <Button
                  variant="gold"
                  size="md"
                  withArrow
                  onClick={() => openLeadModal(`service-${activeData.id.toLowerCase()}`)}
                  className="text-xs font-bold uppercase tracking-wider px-6 py-3 shadow-gold-subtle"
                >
                  Plan {activeData.label} Campaign
                </Button>

                <Link to="/marketing"
                  className="text-xs font-semibold text-secondary hover:text-primary flex items-center gap-1 transition-colors"
                >
                  View Full Marketing Catalog <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Visual Column (Editorial Art-Direction) */}
            <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[480px] lg:min-h-full bg-charcoal flex flex-col justify-end p-8 sm:p-10 text-white">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-65 mix-blend-luminosity"
                style={{ backgroundImage: `url('${activeData.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="relative z-10 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold bg-black/60 px-3 py-1 rounded-full border border-gold/30">
                  {activeData.statsLabel}
                </span>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  &ldquo;Marketing that moves markets, not just metrics.&rdquo;
                </div>
                <div className="text-xs font-mono text-gray-300">
                  REAL RESULT STRATEGIC PRACTICE
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
