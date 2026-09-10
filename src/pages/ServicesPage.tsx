import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";
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
  Check,
} from "lucide-react";
import { AppleLogo, AndroidLogo } from "@/components/common/PlatformLogos";

// ─── Service Data Definitions ──────────────────────────────────────────────────

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  category: "web-apps" | "marketing" | "design" | "security";
  categoryLabel: string;
  gradient: string;
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
    categoryLabel: "Web & Apps",
    gradient: "from-[#0071E3] to-[#5856D6]",
    icon: Monitor,
    simpleDesc: "Ultra-fast, mobile-first business websites engineered for instant customer discovery, high Google Lighthouse scores, and effortless lead capture.",
    keyPoints: [
      "Sub-second page hydration & loading speed",
      "Optimized for iPhone, Android & desktop browsers",
      "Direct phone call & WhatsApp click-to-chat triggers",
    ],
    bestFor: "Clinics, Showrooms, Factories, Professional Services",
    actionUrl: "/application-development",
  },
  {
    id: "ecommerce-website",
    number: "02",
    title: "Ecommerce Platforms",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    gradient: "from-[#FF9500] to-[#FF3B30]",
    icon: ShoppingCart,
    simpleDesc: "Turnkey digital storefronts with seamless UPI, credit card, and COD checkout. Scalable product catalog with live stock tracking.",
    keyPoints: [
      "One-click UPI, Razorpay & Apple Pay readiness",
      "Automated order confirmation alerts on WhatsApp",
      "Frictionless checkout with zero cart drop-off friction",
    ],
    bestFor: "D2C Brands, Textile Retailers, Wholesalers, Food & Spices",
    actionUrl: "/application-development",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "iOS & Android Mobile Apps",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    gradient: "from-[#34C759] to-[#0071E3]",
    icon: Smartphone,
    simpleDesc: "Native iOS & Android mobile applications engineered for fluid 60fps performance, biometric authentication, and push retention campaigns.",
    keyPoints: [
      "Official App Store & Google Play Store submission",
      "Instant push notification broadcasting to customers",
      "Biometric Face ID, Touch ID & secure SMS/WhatsApp OTP",
    ],
    bestFor: "Startups, On-Demand Delivery, Booking, Wholesale Portals",
    actionUrl: "/application-development",
  },
  {
    id: "ui-ux-designing",
    number: "04",
    title: "UI/UX Architecture",
    category: "web-apps",
    categoryLabel: "Web & Apps",
    gradient: "from-[#AF52DE] to-[#5856D6]",
    icon: Layout,
    simpleDesc: "Human-centered user interface design built strictly on Apple HIG and Material Design principles. High-fidelity clickable Figma prototypes.",
    keyPoints: [
      "Interactive clickable Figma prototype workflows",
      "Strict Apple Human Interface Guidelines (HIG) compliance",
      "Production-ready design tokens and reusable components",
    ],
    bestFor: "SaaS Platforms, Mobile Apps, Enterprise Systems",
    actionUrl: "/application-development",
  },

  // ── 2. Digital Marketing & SEO ──
  {
    id: "digital-marketing",
    number: "05",
    title: "Performance Marketing",
    category: "marketing",
    categoryLabel: "Marketing & SEO",
    gradient: "from-[#FF2D55] to-[#FF9500]",
    icon: Megaphone,
    simpleDesc: "Full-funnel digital advertising campaigns engineered to generate verified phone inquiries, WhatsApp buyer chats, and showroom visits.",
    keyPoints: [
      "Direct, tracked phone calls & buyer inquiries",
      "Precision regional geo-targeting across Tamil Nadu",
      "Transparent weekly ROAS & ad expenditure metrics",
    ],
    bestFor: "Commercial Corridors, Retailers, Healthcare, Real Estate",
    actionUrl: "/digital-marketing",
  },
  {
    id: "search-engine-optimization",
    number: "06",
    title: "SEO, GEO & AI Search",
    category: "marketing",
    categoryLabel: "Marketing & SEO",
    gradient: "from-[#0071E3] to-[#34C759]",
    icon: TrendingUp,
    simpleDesc: "Dominate Google Page 1, Google Maps 3-Pack, and emerging generative AI engines (ChatGPT & Gemini) without paying recurring per-click fees.",
    keyPoints: [
      "Top organic rankings for high-intent regional keywords",
      "Google Business Profile & Maps citation dominance",
      "Generative Engine Optimization (GEO) for AI search tools",
    ],
    bestFor: "Long-term organic inbound volume & local market leaders",
    actionUrl: "/digital-marketing/seo",
  },
  {
    id: "social-media-marketing",
    number: "07",
    title: "Social Media Growth",
    category: "marketing",
    categoryLabel: "Marketing & SEO",
    gradient: "from-[#E1306C] to-[#833AB4]",
    icon: Share2,
    simpleDesc: "High-engagement short-form video, reels, and paid social funnels across Instagram, Facebook, and LinkedIn designed to build brand authority.",
    keyPoints: [
      "Cinematic reels & brand storytelling creatives",
      "Targeted lead generation funnels with instant messaging",
      "Direct DM inquiry routing to your sales desk",
    ],
    bestFor: "Fashion, Hospitality, Lifestyle Brands, Education",
    actionUrl: "/digital-marketing/social-media-marketing",
  },
  {
    id: "content-writing",
    number: "08",
    title: "Content Strategy & PR",
    category: "marketing",
    categoryLabel: "Marketing & SEO",
    gradient: "from-[#5856D6] to-[#0071E3]",
    icon: FileText,
    simpleDesc: "Persuasive bilingual (English & Tamil) commercial copywriting for product catalogs, high-converting landing pages, and corporate profiles.",
    keyPoints: [
      "Search-optimized editorial articles and buyer guides",
      "High-converting landing page copywriting",
      "Technical B2B company documentation & brochures",
    ],
    bestFor: "Exporters, Industrial Manufacturers, Enterprise Brands",
    actionUrl: "/digital-marketing/content-marketing",
  },

  // ── 3. Creative & Branding ──
  {
    id: "logo-design",
    number: "09",
    title: "Identity & Logo Systems",
    category: "design",
    categoryLabel: "Branding & Media",
    gradient: "from-[#FF9500] to-[#AF52DE]",
    icon: Sparkles,
    simpleDesc: "Distinctive, timeless corporate brand identity marks with full trademark copyright ownership. Scalable across digital apps and outdoor signage.",
    keyPoints: [
      "Custom concept exploration tailored to your industry",
      "Vector master packages (SVG, EPS, PDF, high-res PNG)",
      "100% full intellectual property & copyright handover",
    ],
    bestFor: "New Ventures, Corporate Rebranding, Manufacturers",
    actionUrl: "/digital-marketing",
  },
  {
    id: "graphic-design",
    number: "10",
    title: "Packaging & Print Design",
    category: "design",
    categoryLabel: "Branding & Media",
    gradient: "from-[#34C759] to-[#30B0C7]",
    icon: Palette,
    simpleDesc: "Export-grade packaging boxes, pouches, labels, and commercial brochures designed to capture retail attention and inspire consumer trust.",
    keyPoints: [
      "Precision print-ready CMYK master artwork files",
      "Retail shelf presence & pouch typography standards",
      "Complete stationery suite and corporate marketing collateral",
    ],
    bestFor: "FMCG, Textiles, Consumer Goods, Agro-Commodities",
    actionUrl: "/digital-marketing",
  },
  {
    id: "video-editing",
    number: "11",
    title: "Motion & Video Production",
    category: "design",
    categoryLabel: "Branding & Media",
    gradient: "from-[#FF3B30] to-[#FF9500]",
    icon: Video,
    simpleDesc: "Premium post-production for Instagram Reels, YouTube explainers, factory machinery walkthroughs, and client testimonial showcases.",
    keyPoints: [
      "High-tempo editing, sound effects & dynamic pacing",
      "Tamil & English localized subtitle overlays",
      "Professional color grading and audio master balancing",
    ],
    bestFor: "Industrial Demos, Influencers, Commercial Promos",
    actionUrl: "/digital-marketing",
  },
  {
    id: "ecommerce-photography",
    number: "12",
    title: "Product Photography",
    category: "design",
    categoryLabel: "Branding & Media",
    gradient: "from-[#AF52DE] to-[#FF2D55]",
    icon: Camera,
    simpleDesc: "Ultra-high-resolution studio photography with authentic color accuracy. Formatted for Amazon, Flipkart, online stores, and print catalogs.",
    keyPoints: [
      "100% compliant with Amazon & Flipkart guidelines",
      "Clean seamless pure white & lifestyle backdrops",
      "Macro lens close-ups showcasing fabric & material textures",
    ],
    bestFor: "Textiles, Apparels, Packaged Foods, Hardware, Jewelry",
    actionUrl: "/digital-marketing",
  },

  // ── 4. Security & Infrastructure ──
  {
    id: "cyber-security-services",
    number: "13",
    title: "Cloud & Cyber Defense",
    category: "security",
    categoryLabel: "Security & Cloud",
    gradient: "from-[#0071E3] to-[#1D1D1F]",
    icon: Shield,
    simpleDesc: "Enterprise-grade SSL encryption, Web Application Firewall (WAF) deployment, automated cloud disaster recovery, and vulnerability screening.",
    keyPoints: [
      "Managed SSL configuration & Cloudflare WAF protection",
      "Automated daily encrypted off-site cloud backups",
      "Proactive vulnerability audits & malware defense",
    ],
    bestFor: "Ecommerce Platforms, Healthcare, Portals, SaaS Apps",
    actionUrl: "/application-development",
  },
];

const FILTER_TABS = [
  { id: "all",      label: "All Services (13)" },
  { id: "web-apps", label: "Web & Apps" },
  { id: "marketing", label: "Marketing & SEO" },
  { id: "design",   label: "Branding & Media" },
  { id: "security", label: "Security & Cloud" },
];

export const ServicesPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredServices =
    selectedFilter === "all"
      ? ALL_SERVICES
      : ALL_SERVICES.filter((s) => s.category === selectedFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F7] font-sans selection:bg-[#0071E3] selection:text-white">
      <SEOHead
        title="Services — Real Result | Engineering & Performance Marketing"
        description="Explore our 13 end-to-end digital services: Website Design, Ecommerce, Mobile Apps, SEO, Google Ads, Social Media, Branding, Packaging, and Cyber Security across Tamil Nadu."
        canonicalPath="/services"
      />

      {/* ── 1. Apple Hero Section ── */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 text-center bg-white border-b border-black/[0.06]">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-5">
            {/* Apple Large Display Title */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.06]"
              style={{ letterSpacing: "-0.035em" }}
            >
              All your digital operations.
              <br />
              <span className="text-[#86868B]">Engineered to perfection.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-[#6E6E73] max-w-2xl mx-auto font-normal leading-relaxed pt-1">
              From fast websites and mobile apps to digital marketing that brings real customers and sales.
            </p>

          </div>
        </Container>
      </section>

      {/* ── 2. iOS Segmented Navigation & Services Grid ── */}
      <section className="py-14 sm:py-20">
        <Container size="wide">

          {/* iOS Segmented Control Bar */}
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <div className="p-1.5 rounded-full bg-[#E5E5EA]/80 backdrop-blur-md border border-black/[0.04] shadow-2xs flex flex-wrap justify-center gap-1 max-w-full">
              {FILTER_TABS.map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none ${
                      isActive
                        ? "bg-white text-[#1D1D1F] shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                        : "text-[#86868B] hover:text-[#1D1D1F]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Apple Modular Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className="rounded-[28px] sm:rounded-[32px] bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: iOS App Icon Tile + Category Pill */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div
                        className={`w-13 h-13 rounded-[16px] bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-300`}
                      >
                        {service.id === "mobile-app-development" ? (
                          <div className="flex items-center gap-1">
                            <AppleLogo className="w-4 h-4 fill-current text-white" />
                            <AndroidLogo className="w-4 h-4 fill-current text-[#3DDC84]" />
                          </div>
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>

                      <span className="text-[11px] font-semibold text-[#86868B] uppercase tracking-wider px-3 py-1 rounded-full bg-[#F5F5F7]">
                        {service.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="text-xl sm:text-[22px] font-bold text-[#1D1D1F] tracking-tight leading-snug mb-2.5"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[13.5px] text-[#6E6E73] leading-relaxed mb-6 font-normal">
                      {service.simpleDesc}
                    </p>

                    {/* iOS Inset Grouped Specs Pod */}
                    <div className="p-4 rounded-2xl bg-[#F5F5F7] border border-black/[0.03] space-y-2.5 mb-5">
                      {service.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-[12.5px] text-[#1D1D1F]">
                          <Check className="w-3.5 h-3.5 text-[#0071E3] shrink-0 mt-0.5" />
                          <span className="leading-snug">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best for tag */}
                    <p className="text-[12px] text-[#86868B] mb-6">
                      <span className="font-semibold text-[#1D1D1F]">Best for: </span>
                      {service.bestFor}
                    </p>
                  </div>

                  {/* Card Actions: Primary Action + Direct Subpage Link */}
                  <div className="pt-4 border-t border-black/[0.05] flex items-center justify-between gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => openLeadModal(`Inquiry: ${service.title}`)}
                      withArrow={false}
                    >
                      Enquire
                    </Button>

                    <Link
                      to={service.actionUrl}
                      className="text-xs sm:text-[13px] font-semibold text-[#0071E3] hover:underline flex items-center gap-1 group/link"
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

      {/* ── 3. Apple 3-Step Engagement Model ── */}
      <section className="py-20 sm:py-28 bg-white border-t border-black/[0.06]">
        <Container size="wide">
          
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-semibold text-[#0071E3] uppercase tracking-wider block mb-2">
              Our Process
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D1D1F] leading-[1.12]"
              style={{ letterSpacing: "-0.03em" }}
            >
              How we collaborate.
            </h2>
            <p className="text-base text-[#6E6E73] mt-3 leading-relaxed">
              Transparent, milestone-based execution with zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                desc: "We analyze your business flow, customer audience, and commercial objectives to blueprint the exact software or growth roadmap.",
              },
              {
                step: "02",
                title: "Milestone Execution",
                desc: "Transparent sprint deliverables with fixed timelines and clear documentation. No hidden fees or unexpected delays.",
              },
              {
                step: "03",
                title: "Launch & IP Handover",
                desc: "Rigorous deployment on app stores and cloud infrastructure, complete with 100% intellectual property and code ownership handover.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-9 rounded-[28px] bg-[#F5F5F7] border border-black/[0.04] flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#1D1D1F] tracking-tight block mb-4">
                    {p.step}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1F] mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#6E6E73] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </Container>
      </section>

      {/* ── 4. Apple Dark Bottom CTA Pod ── */}
      <section className="py-16 sm:py-24 bg-[#F5F5F7]">
        <Container size="wide">
          <div className="rounded-[36px] bg-[#1D1D1F] text-white p-8 sm:p-16 text-center space-y-6 max-w-5xl mx-auto shadow-[0_24px_64px_rgba(0,0,0,0.18)]">
            
            <span className="inline-block text-xs font-semibold tracking-wider text-white/60 uppercase px-3.5 py-1 rounded-full bg-white/10">
              Erode, Tamil Nadu
            </span>

            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Ready to grow your business online?
            </h2>

            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-normal">
              Talk directly with our team to discuss your project, get honest guidance, and receive a free quote.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button
                variant="brand-white"
                size="lg"
                onClick={() => openLeadModal("Bottom Services Banner Consultation")}
              >
                Get a Free Quote
              </Button>

              <Button
                variant="outline"
                size="lg"
                href={`tel:${REAL_RESULT_CONFIG.contact.phone.replace(/\s+/g, "")}`}
                isExternal
                className="!text-white !border-white/20 hover:!bg-white/10"
                icon={<Phone className="w-4 h-4 text-[#E5B456]" />}
                withArrow={false}
              >
                {REAL_RESULT_CONFIG.contact.phone}
              </Button>
            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default ServicesPage;
