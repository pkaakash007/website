import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import {
  Search,
  Users,
  Target,
  BarChart3,
  CheckCircle,
  Network,
  Zap,
} from "lucide-react";

interface FunnelStep {
  id: string;
  stage: string;
  title: string;
  tagline: string;
  channels: string[];
  deliverables: string[];
  metricTarget: string;
  icon: React.ElementType;
}

const funnelSteps: FunnelStep[] = [
  {
    id: "discovery",
    stage: "Stage 01: Top of Funnel",
    title: "Entity Authority & AI Discovery",
    tagline: "Be the indisputable recommendation when buyers ask search engines or AI assistants.",
    channels: ["Generative Engine Optimization (GEO)", "Technical SEO", "Digital PR & Citations"],
    deliverables: [
      "Structured schema markup for LLM citation parsing",
      "Authoritative industry backlink acquisition",
      "Entity graph alignment across Google & Bing",
      "Zero-click search feature snippet capture",
    ],
    metricTarget: "300%+ Search Impression Growth",
    icon: Network,
  },
  {
    id: "capture",
    stage: "Stage 02: Middle of Funnel",
    title: "High-Intent Commercial Capture",
    tagline: "Engage decision-makers actively searching with purchase intent.",
    channels: ["Google Search Ads (PPC)", "Local Maps 3-Pack", "LinkedIn Sponsored Content"],
    deliverables: [
      "Negative keyword gating to eliminate ad waste",
      "High-intent commercial landing pages",
      "Localized proximity geo-fencing for Tamil Nadu & metros",
      "Real-time bid adjustments on highest conversion hours",
    ],
    metricTarget: "4.5x+ Average ROAS Multiplier",
    icon: Target,
  },
  {
    id: "conversion",
    stage: "Stage 03: Bottom of Funnel",
    title: "Frictionless Conversion Engine",
    tagline: "Turn engaged traffic into phone calls, WhatsApp chats, and verified RFQs.",
    channels: ["Conversion Rate Optimization", "WhatsApp Lead Automation", "Direct Lead Desks"],
    deliverables: [
      "Sub-2-second mobile load speeds",
      "One-click WhatsApp conversational routing",
      "Multi-step qualified quote intake forms",
      "Heatmap-driven UX friction remediation",
    ],
    metricTarget: "42% Increase in Inquiry Rate",
    icon: Zap,
  },
  {
    id: "retention",
    stage: "Stage 04: Retention & Scale",
    title: "Data Intelligence & Continuous Scale",
    tagline: "Refine buyer personas and compound organic market dominance month over month.",
    channels: ["Analytics Dashboards", "Audience Retargeting", "Lifetime Value CRM Sync"],
    deliverables: [
      "Automated weekly ROI attribution dashboards",
      "Dynamic search remarketing lists",
      "Competitor search displacement monitoring",
      "Executive growth reviews every 30 days",
    ],
    metricTarget: "Compounding Growth Baseline",
    icon: BarChart3,
  },
];

export const MarketingFunnelInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(funnelSteps[0].id);
  const currentStep = funnelSteps.find((s) => s.id === activeTab) || funnelSteps[0];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-20 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="outline">System Architecture</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            The Synchronized Revenue Funnel
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Click through our 4-stage acquisition architecture to see how we guide prospect journeys from initial AI citation to signed commercial invoices.
          </p>
        </div>

        {/* Stage Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {funnelSteps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeTab === step.id;
            return (
              <button
                key={step.id}
                type="button"
                onClick={() => setActiveTab(step.id)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-sm"
                    : "bg-surface hover:bg-white border-border text-secondary hover:text-primary"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-white text-gray-700 border border-border"
                    }`}
                  >
                    Step 0{idx + 1}
                  </span>
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-gold-300" : "text-muted"
                    }`}
                  />
                </div>
                <div>
                  <h4
                    className={`text-sm font-bold line-clamp-1 ${
                      isSelected ? "text-white" : "text-primary"
                    }`}
                  >
                    {step.title}
                  </h4>
                  <p
                    className={`text-xs mt-0.5 line-clamp-1 ${
                      isSelected ? "text-gray-300" : "text-secondary"
                    }`}
                  >
                    {step.stage}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="p-8 lg:p-10 rounded-2xl bg-surface border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-[#FBF7EE] border border-[#E8D298] text-[#8E6D2E] flex items-center justify-center font-bold">
                  <StepIcon className="w-4 h-4" />
                </span>
                <span className="text-xs font-semibold text-[#8E6D2E]">
                  {currentStep.stage}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                {currentStep.title}
              </h3>

              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {currentStep.tagline}
              </p>

              {/* Channels */}
              <div className="pt-2">
                <span className="text-xs text-muted block mb-2 font-semibold">
                  Core Channels Deployed:
                </span>
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-primary font-medium">
                  {currentStep.channels.map((channel, i) => (
                    <span key={i}>
                      {channel}{i < currentStep.channels.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div className="pt-4 border-t border-border space-y-2">
                <span className="text-xs text-muted block font-semibold">
                  Key Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-secondary">
                  {currentStep.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Target Output Metric Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-2xl bg-white border border-border shadow-sm space-y-3 text-center">
                <span className="text-xs font-semibold text-[#8E6D2E]">
                  Phase Impact Benchmark
                </span>
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {currentStep.metricTarget}
                </div>
                <p className="text-xs text-secondary leading-relaxed">
                  Real-time reporting integrated with Google Search Console, Looker Studio, and verified call tracking.
                </p>
                <div className="pt-2">
                  <span className="text-xs font-semibold text-primary block">
                    SLA-Guaranteed Telemetry
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingFunnelInteractive;
