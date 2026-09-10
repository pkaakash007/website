import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Layers,
  Cpu,
  BarChart3,
  TrendingUp,
  Building2,
  ShoppingBag,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Coins,
  Rocket,
} from "lucide-react";

export const MarketingProcessSimple: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: Layers,
      color: "#007AFF",
      title: "Full-Funnel Architecture & Tracking Audit",
      desc: "We diagnose your tracking infrastructure, verify server-side GTM tagging, audit historical CAC & conversion rates, and identify high-intent competitor keyword gaps.",
      deliverable: "Custom 48-Hour Growth Diagnostic & Unit Economics Blueprint",
    },
    {
      num: "02",
      icon: Cpu,
      color: "#5856D6",
      title: "Hypothesis & Performance Creative Sprint",
      desc: "Our in-house studio scripts and designs high-converting motion ad creatives, while our engineers deploy sub-second, conversion-optimized landing pages and configure ICP audiences.",
      deliverable: "15+ High-Velocity Creative Variations & A/B Landing Pages",
    },
    {
      num: "03",
      icon: Zap,
      color: "#34C759",
      title: "Algorithmic Media & Programmatic Scale",
      desc: "We launch segmented Alpha/Beta search clusters and algorithmic paid social campaigns, letting automated value-based bidding scale ad spend into the highest-converting segments.",
      deliverable: "Automated Bidding Scripts & Real-Time Bid Modifiers",
    },
    {
      num: "04",
      icon: BarChart3,
      color: "#AF52DE",
      title: "Closed-Loop Revenue Attribution & LTV Sprints",
      desc: "We sync ad spend directly with your CRM deal stages (HubSpot / Salesforce), running bi-weekly executive reviews focused on pipeline contribution, CAC payback, and LTV expansion.",
      deliverable: "Bi-Weekly Executive Strategy & Live Looker Dashboard",
    },
  ];

  const enterpriseIndustries = [
    {
      icon: Cpu,
      color: "#007AFF",
      name: "B2B SaaS & Cloud Platforms",
      desc: "Enterprise demo bookings, free trial velocity, and multi-touch CRM pipeline tracking.",
      focus: "LTV/CAC Optimization · Product-Led Inbound · ABM",
    },
    {
      icon: ShoppingBag,
      color: "#FF2D55",
      name: "Global DTC & High-Volume E-Commerce",
      desc: "Scaling paid social and Google Shopping with high-velocity motion creative sprints.",
      focus: "4.5x+ Blended ROAS · Headless Checkout · Retention",
    },
    {
      icon: Coins,
      color: "#34C759",
      name: "FinTech & Cross-Border Payments",
      desc: "Capturing institutional and enterprise treasury decision-makers through high-intent search.",
      focus: "Compliance Ad Approval · Bottom-of-Funnel Search · High-Ticket Deals",
    },
    {
      icon: Stethoscope,
      color: "#00C7BE",
      name: "HealthTech & MedTech Enterprises",
      desc: "HIPAA-compliant server-side event tracking with verified clinical provider lead pipelines.",
      focus: "Server-Side GTM · Clinic Director Inbound · Trust Strategy",
    },
    {
      icon: Sparkles,
      color: "#AF52DE",
      name: "AI & Developer Tool Platforms",
      desc: "Dominating Generative Engine Optimization (GEO) on ChatGPT, Perplexity, and Google AI.",
      focus: "Entity Schema · Technical Inbound · Programmatic SEO",
    },
    {
      icon: Rocket,
      color: "#FF9500",
      name: "Venture-Backed Scale-Ups (Series A–C)",
      desc: "Disciplined capital allocation and CAC payback compression for fast-scaling growth rounds.",
      focus: "Predictable Unit Economics · Rapid Creative Iteration · Board-Ready Metrics",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-b border-black/[0.08]">
      <Container size="wide">
        {/* ── 4-Stage Quantitative Growth Engine ── */}
        <div className="mb-24">
          <div className="max-w-3xl mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white shadow-2xs">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Engineered Growth Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              The 4-Stage Quantitative Growth Engine
            </h2>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              How we systematically scale pipeline and enterprise revenue from initial tracking audits to compounding closed-loop scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-[24px] bg-[#F8F9FA] hover:bg-white border border-black/[0.06] hover:border-black/20 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-105"
                        style={{ background: `${step.color}15`, color: step.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-neutral-400 px-2.5 py-1 rounded-full bg-white border border-black/[0.06]">
                        STAGE {step.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug group-hover:text-[#007AFF] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal mb-5">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] text-xs font-semibold text-neutral-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="line-clamp-2">{step.deliverable}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Enterprise Industries We Scale ── */}
        <div>
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#007AFF]/[0.08] text-[#007AFF] border border-[#007AFF]/20 shadow-2xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>Target Client Profiles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              Industries We Scale Across the US &amp; Global Markets
            </h2>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              Tailored growth frameworks optimized for your industry's specific unit economics, buyer journey, and compliance landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseIndustries.map((biz, idx) => {
              const Icon = biz.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-[24px] bg-[#F8F9FA] hover:bg-white border border-black/[0.06] hover:border-black/20 shadow-2xs hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3.5 mb-4">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                        style={{ background: `${biz.color}15`, color: biz.color }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-base font-bold text-neutral-900 leading-snug">
                        {biz.name}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-4">
                      {biz.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-black/[0.06] text-[11px] font-semibold text-neutral-500">
                    <span className="text-neutral-400 font-bold block mb-0.5 uppercase tracking-wider">Growth Focus:</span>
                    <span className="text-neutral-800 font-semibold">{biz.focus}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingProcessSimple;
