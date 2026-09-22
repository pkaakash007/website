import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/seo/SEOHead";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Building2,
  Phone,
  MessageCircle,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  CheckCircle2,
  Layers,
  Globe,
  Cpu,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";

// Verified high-resolution photography mapping matching each industry slug
const INDUSTRY_PHOTOS: Record<string, { image: string; alt: string; categoryGroup: string; icon: any }> = {
  healthcare: {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    alt: "Doctor with stethoscope consulting patient in modern healthcare clinic",
    categoryGroup: "specialized",
    icon: Stethoscope,
  },
  b2b: {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "B2B enterprise technology strategy team analyzing corporate data",
    categoryGroup: "b2b",
    icon: Briefcase,
  },
  finance: {
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital banking analytics and mobile fintech payments",
    categoryGroup: "specialized",
    icon: ShieldCheck,
  },
  "real-estate": {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury architectural modern residential villa property",
    categoryGroup: "consumer",
    icon: Building2,
  },
  education: {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Students learning together in modern university library campus",
    categoryGroup: "specialized",
    icon: TrendingUp,
  },
  fmcg: {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan food product packaging and retail shelf",
    categoryGroup: "consumer",
    icon: ShoppingBag,
  },
  ecommerce: {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern retail storefront and customer shopping",
    categoryGroup: "consumer",
    icon: ShoppingBag,
  },
  "skincare-beauty": {
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1600&q=80",
    alt: "Aesthetic luxury skincare bottles, cosmetic jars, and clean beauty serums",
    categoryGroup: "consumer",
    icon: Sparkles,
  },
  "home-decor": {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Aesthetic modern living room interior design with luxury furniture",
    categoryGroup: "consumer",
    icon: Layers,
  },
  "travel-tourism": {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury tropical resort swimming pool and hotel suite",
    categoryGroup: "consumer",
    icon: Building2,
  },
};

const CATEGORY_TABS = [
  { id: "all", label: "All Sectors", count: 10, icon: Globe },
  { id: "specialized", label: "Specialized & Tech", count: 3, icon: Cpu },
  { id: "consumer", label: "Consumer & Retail", count: 5, icon: ShoppingBag },
  { id: "b2b", label: "B2B & Enterprise", count: 2, icon: Briefcase },
];

const SUB_TABS: Record<string, string[]> = {
  all: [
    "All Sectors",
    "Healthcare",
    "Real Estate",
    "Ecommerce",
    "B2B Enterprise",
    "Financial Services",
  ],
  specialized: [
    "All Specialized",
    "Healthcare",
    "Financial Services",
    "Higher Education",
  ],
  consumer: [
    "All Consumer",
    "Real Estate",
    "Ecommerce & Retail",
    "Skincare & Beauty",
    "FMCG & Food",
    "Home Decor",
    "Travel & Tourism",
  ],
  b2b: [
    "All B2B",
    "B2B Enterprise",
  ],
};

const SUB_TAB_SLUG_MAP: Record<string, string | string[]> = {
  Healthcare: "healthcare",
  "Real Estate": "real-estate",
  Ecommerce: "ecommerce",
  "Ecommerce & Retail": "ecommerce",
  "B2B Enterprise": "b2b",
  "Financial Services": "finance",
  "Higher Education": "education",
  "FMCG & Food": "fmcg",
  "Skincare & Beauty": "skincare-beauty",
  "Home Decor": "home-decor",
  "Travel & Tourism": "travel-tourism",
};

export default function IndustriesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [subTab, setSubTab] = useState("All Sectors");
  const rawList = useMemo(
    () => Object.values(INDUSTRIES_DATA).filter((item) => item.slug !== "ev" && item.slug !== "automotive"),
    []
  );

  const handleMainTab = (id: string) => {
    setActiveTab(id);
    const firstSub = SUB_TABS[id]?.[0] || "All Sectors";
    setSubTab(firstSub);
  };

  const filteredList = useMemo(() => {
    let list = rawList;
    if (activeTab !== "all") {
      list = list.filter((item) => {
        const meta = INDUSTRY_PHOTOS[item.slug];
        return meta?.categoryGroup === activeTab;
      });
    }
    const firstSubTab = SUB_TABS[activeTab]?.[0];
    if (subTab && subTab !== firstSubTab) {
      const targetSlug = SUB_TAB_SLUG_MAP[subTab];
      if (Array.isArray(targetSlug)) {
        list = list.filter((item) => targetSlug.includes(item.slug));
      } else if (targetSlug) {
        list = list.filter((item) => item.slug === targetSlug);
      }
    }
    return list;
  }, [activeTab, subTab, rawList]);

  const whatsappUrl = `https://wa.me/918111033390?text=${encodeURIComponent(
    "Hi Real Result team, I would like to discuss sector-specific growth strategy for my industry."
  )}`;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#FBFBFA] text-neutral-900 selection:bg-[#0071E3]/20 selection:text-[#0071E3]">
      <SEOHead
        title="Industries We Transform | Real Result Growth Agency"
        description="Category-specific digital strategy and custom software engineering across 10 sectors: Healthcare, B2B, Ecommerce, Real Estate, Skincare & Beauty, and Financial Services."
        canonicalPath="/industries"
      />

      {/* ── 1. Radiant Ambient Hero Header (Bright & High-Contrast) ── */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden bg-white border-b border-black/[0.06]">
        {/* Subtle illuminated lighting effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(0,113,227,0.08)_0%,_rgba(197,160,89,0.04)_45%,_transparent_70%)] pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

        <Container size="wide" className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            {/* High-Contrast Bold Headline */}
            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]"
              style={{
                fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
                letterSpacing: "-0.03em",
              }}
            >
              Industries We{" "}
              <span className="text-gradient-glowing">
                Transform.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto">
              We never use generic templates. Every sector gets bespoke customer acquisition funnels, digital branding, and custom software engineered for its exact unit economics.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 2. Interactive Category Filter Bar (Apple Segmented Control & Sub-Pill Track) ── */}
      <section className="sticky top-16 z-30 py-4 sm:py-5 bg-white/90 backdrop-blur-md border-b border-black/[0.06] shadow-xs">
        <Container size="wide">
          {/* Main Category Tabs (Apple Segmented Control) */}
          <div className="flex justify-center mb-3.5 sm:mb-4 overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex p-1.5 rounded-full bg-black/[0.06] border border-black/[0.06] shadow-sm shrink-0">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleMainTab(tab.id)}
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer select-none whitespace-nowrap"
                    style={{
                      background: isActive ? "#000000" : "transparent",
                      color: isActive ? "#FFFFFF" : "rgba(60,60,67,0.70)",
                      boxShadow: isActive ? "0 2px 10px rgba(0,0,0,0.18)" : "none",
                    }}
                  >
                    <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? "text-white" : "text-neutral-500"}`} />
                    <span>{tab.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded-full font-bold ml-0.5 ${
                        isActive ? "bg-white/20 text-white" : "bg-black/[0.06] text-neutral-600"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-Category Filter Tabs (Apple Segmented Pill Track) */}
          <div className="flex justify-center overflow-x-auto no-scrollbar py-1">
            <div className="inline-flex flex-wrap items-center justify-center p-1 rounded-full bg-black/[0.04] border border-black/[0.05] gap-1 max-w-full shrink-0">
              {SUB_TABS[activeTab]?.map((sub) => {
                const isSubActive = subTab === sub;
                return (
                  <button
                    key={sub}
                    onClick={() => setSubTab(sub)}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all duration-200 cursor-pointer select-none whitespace-nowrap"
                    style={{
                      background: isSubActive ? "#FFFFFF" : "transparent",
                      color: isSubActive ? "#000000" : "rgba(60,60,67,0.65)",
                      boxShadow: isSubActive
                        ? "0 2px 8px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)"
                        : "none",
                    }}
                  >
                    {sub}
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. High-End Bright Bento Cards Grid ── */}
      <section className="py-12 sm:py-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredList.map((ind) => {
              const meta = INDUSTRY_PHOTOS[ind.slug] || {
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
                alt: ind.name,
                categoryGroup: "all",
                icon: Building2,
              };

              const detailUrl = ind.slug === "healthcare" ? "/industries/healthcare" : `/industries/${ind.slug}`;

              return (
                <div
                  key={ind.slug}
                  id={ind.slug}
                  className="rounded-[28px] sm:rounded-[32px] bg-white border border-black/[0.07] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,113,227,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* ── Top Full Cover Visual ── */}
                  <div className="relative aspect-[16/10] sm:aspect-[16/10.5] w-full overflow-hidden bg-neutral-100">
                    <img
                      src={meta.image}
                      alt={meta.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.fallback) {
                          target.dataset.fallback = "true";
                          target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80";
                        }
                      }}
                    />
                  </div>

                  {/* ── Bottom Content Area ── */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between bg-white space-y-5">
                    <div className="space-y-3">
                      {/* Industry Name */}
                      <h3
                        className="text-xl sm:text-[22px] font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-[#0071E3] transition-colors"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        {ind.name}
                      </h3>

                      {/* Tagline */}
                      <p className="text-xs sm:text-sm font-semibold text-[#0071E3] tracking-wide">
                        {ind.tagline}
                      </p>

                      {/* Overview summary */}
                      <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3 font-normal">
                        {ind.heroSubheadline || ind.overview}
                      </p>

                      {/* Strategic Pillar Badges / Key Deliverables */}
                      {ind.subVerticals && ind.subVerticals.length > 0 && (
                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {ind.subVerticals.slice(0, 3).map((sub, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded-md bg-neutral-100/90 text-neutral-700 text-[11.5px] font-medium border border-black/[0.03]"
                            >
                              {sub.title}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action Footer */}
                    <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
                      <Link
                        to={detailUrl}
                        className="cursor-pointer inline-flex items-center gap-2 text-sm font-bold text-[#0071E3] hover:text-[#005bb5] transition-colors group/link"
                      >
                        <span>Explore {ind.shortName} Playbook</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => openLeadModal(`Industry Consultation: ${ind.name}`)}
                        className="cursor-pointer text-xs font-semibold px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 transition-colors"
                      >
                        Consult
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 4. Strategic Edge Banner: Why Industry Specialization Matters ── */}
      <section className="py-14 sm:py-20 bg-white border-t border-black/[0.06]">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0071E3] block">
              The Real Result Advantage
            </span>
            <h2
              className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight"
              style={{ letterSpacing: "-0.025em" }}
            >
              Why Vertical Specialization Beats Generic Agencies
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              A healthcare clinic requires medical ethics compliance; a real estate developer requires high-ticket qualification funnels; an ecommerce brand requires high-conversion retention funnels. We build specifically for your sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#FBFBFA] border border-black/[0.06] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Zero Generic Templates
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                Every customer persona, ad creative, and keyword strategy is grounded in how your real customers make purchasing decisions in your industry.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[28px] bg-[#FBFBFA] border border-black/[0.06] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Unit Economic Modeling
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                We calculate client acquisition cost (CAC) versus customer lifetime value (LTV) specific to your industry margins before scaling ad spend.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-[28px] bg-[#FBFBFA] border border-black/[0.06] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                Regulatory & Ethics Native
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                From medical ethics compliance and clinical claims to financial disclosure regulations and export certifications, we protect your brand.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Executive Floating Consultation Card ── */}
      <section className="py-14 sm:py-20 bg-[#FBFBFA]">
        <Container size="wide">
          <div className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#0E2036] to-[#0A1128] text-white p-8 sm:p-14 lg:p-16 overflow-hidden border border-white/10 shadow-2xl">
            {/* Subtle glow effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(0,113,227,0.25)_0%,_transparent_65%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(229,180,86,0.15)_0%,_transparent_65%)] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">

              <h2
                className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight"
                style={{ letterSpacing: "-0.03em" }}
              >
                Operating in a Specialized or Emerging Sector?
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-2xl mx-auto">
                We frequently architect custom acquisition funnels, digital branding, and custom software for specialized industries across Tamil Nadu, India, and global markets.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <button
                  type="button"
                  onClick={() => openLeadModal("custom-industry-consultation")}
                  className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-semibold text-xs sm:text-sm hover:bg-neutral-100 transition-all shadow-sm active:scale-[0.98] whitespace-nowrap"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0071E3]" />
                </button>

                <a
                  href="tel:+918111033390"
                  className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E5B456]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-300 border border-[#25D366]/40 font-semibold text-xs sm:text-sm transition-all active:scale-[0.98] whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
