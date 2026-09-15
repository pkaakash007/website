import React from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { REAL_RESULT_CONFIG, getWhatsAppUrl } from "@/config";
import { BrandWhatsAppIcon } from "@/components/brand/BrandChannelIcons";
import { ServiceSketchIllustration } from "@/features/digital-marketing/components/services/ServiceSketchIllustration";
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

      {/* ── 1. Hero Section (Social Panga Split Layout) ── */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-neutral-200/80 relative overflow-hidden">
        {/* Subtle light aura */}
        <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-blue-50/60 blur-3xl" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 rounded-full bg-slate-50 blur-2xl" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Big Bold Title */}
            <div className="lg:col-span-5 space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0E2036] leading-[1.05]">
                Our <br className="hidden sm:inline" />
                Services.
              </h1>
            </div>

            {/* Right Column: Conversational Agency Philosophy */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 pt-2 lg:pt-4">
              <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed text-balance">
                We help businesses realize their highest growth velocity by building authentic brand identities, high-intent customer acquisition funnels, and enterprise-grade software.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Every business arrives with distinct operational bottlenecks and unit economics. We join hands as your dedicated growth partners—combining engineering precision with bold creative execution to deliver tangible business outcomes every single time.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. The Signature Alternating Zig-Zag Showcase (Social Panga Layout) ── */}
      <section className="py-16 sm:py-24 bg-white divide-y divide-neutral-100">
        <Container size="wide">
          <div className="space-y-20 sm:space-y-28">
            {SERVICES_CATALOG.map((service, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    !isEven ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* TEXT CONTENT COLUMN */}
                  <div
                    className={`space-y-6 ${
                      isEven ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-7"
                    }`}
                  >
                    {/* Top Index */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-neutral-300">
                        {service.number}
                      </span>
                    </div>

                    {/* Headline */}
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2036] leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-base text-slate-700 leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="space-y-2 pt-1">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="text-xs sm:text-sm text-slate-700 font-medium">
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* VISUAL ILLUSTRATION & MOCKUP STAGE */}
                  <div
                    className={`${
                      isEven ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-1"
                    }`}
                  >
                    <ServiceSketchIllustration
                      serviceId={service.id}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

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

      {/* ── 4. Strategic Discussion CTA Section ── */}
      <section className="py-20 sm:py-24 bg-white border-t border-neutral-200/80">
        <Container size="default">
          <div className="text-center space-y-5 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0E2036]">
              Ready to Accelerate Your Business Growth?
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Connect directly with our team in Erode. We will analyze your requirements and provide a clear, transparent strategy within 8 business hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openLeadModal("services-bottom-cta")}
                className="w-full sm:w-auto"
              >
                Schedule Strategy Session
              </Button>

              <a
                href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-neutral-300 hover:bg-neutral-50 text-[#0E2036] text-sm font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1d4ed8]" />
                <span>Call {REAL_RESULT_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ServicesPage;
