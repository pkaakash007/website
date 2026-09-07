import React, { useState } from "react";
import {
  Sparkles,
  X,
  ArrowRight,
  TrendingUp,
  Bot,
  Code2,
  Users,
  MessageSquare,
  RefreshCw,
} from "lucide-react";
import { openLeadModal } from "@/components/common/LeadModal";
import { Button } from "@/components/common/Button";

interface Recommendation {
  division: string;
  badge: string;
  title: string;
  description: string;
  channels: string[];
  ctaUrl: string;
  ctaText: string;
}

const QUICK_GOALS = [
  { id: "grow-brand", label: "Grow my brand", icon: Sparkles },
  { id: "media-campaign", label: "Plan a campaign", icon: TrendingUp },
  { id: "generate-leads", label: "Generate leads", icon: TrendingUp },
  { id: "customer-engagement", label: "Improve engagement", icon: MessageSquare },
  { id: "auto-comm", label: "Automate communication", icon: Bot },
  { id: "build-tech", label: "Build technology", icon: Code2 },
  { id: "hr-req", label: "HR requirement", icon: Users },
];

const RECOMMENDATIONS: Record<string, Recommendation> = {
  "grow-brand": {
    division: "Marketing & Media",
    badge: "Omnichannel Brand Growth",
    title: "Brand Visibility & High-Impact Media",
    description: "High-reach television, digital video, influencer amplification, and premium outdoor/DOOH advertising designed to maximize market share and brand recall.",
    channels: ["Outdoor & DOOH", "Television & OTT", "Influencer Media", "Paid Social", "Brand Content"],
    ctaUrl: "/marketing",
    ctaText: "Explore Brand Campaign",
  },
  "media-campaign": {
    division: "Marketing & Media",
    badge: "Media Planning & Buying",
    title: "Multichannel Broadcast & Digital Buying",
    description: "Targeted cross-media placement spanning programmatic digital, regional television, connected TV, radio, cinema, and transit media networks.",
    channels: ["Programmatic DSP", "Connected TV (CTV)", "Radio & Audio", "Cinema Advertising", "Transit Media"],
    ctaUrl: "/marketing",
    ctaText: "Plan Media Mix",
  },
  "generate-leads": {
    division: "Marketing & Media",
    badge: "Performance Marketing",
    title: "High-Intent Performance & CRO Funnel",
    description: "Google paid search, high-intent transactional SEO, paid social funnels, dynamic number insertion (DNI), and conversion rate optimization.",
    channels: ["High-Intent SEO", "Google PPC Ads", "Paid Social Funnels", "DNI Call Tracking", "Landing Page CRO"],
    ctaUrl: "/marketing",
    ctaText: "Launch Performance Strategy",
  },
  "customer-engagement": {
    division: "Marketing & Media + AI",
    badge: "Customer Engagement",
    title: "Interactive Social & Conversational Retention",
    description: "Multi-channel creator collaborations, customer retention programs, official WhatsApp Business API, and automated personalized engagement workflows.",
    channels: ["WhatsApp API", "Content Marketing", "Creator Relations", "Customer Retention", "Community Velocity"],
    ctaUrl: "/marketing",
    ctaText: "Explore Engagement Strategy",
  },
  "auto-comm": {
    division: "AI Communication",
    badge: "Intelligent Telephony",
    title: "Regional Voice AI & Omnichannel Messaging",
    description: "Regional language AI telecalling bots, automated bulk IVR outreach, official WhatsApp Business API integration, and enterprise CPaaS routing.",
    channels: ["Regional Voice Bots", "Bulk Interactive IVR", "WhatsApp API", "RCS & Bulk SMS", "CRM Telephony Sync"],
    ctaUrl: "/ai-communication",
    ctaText: "Discover AI Communication",
  },
  "build-tech": {
    division: "Technology & Software",
    badge: "Full-Stack Engineering",
    title: "Custom Web, Mobile & Cloud Engineering",
    description: "High-performance web applications, mobile apps, SaaS platform development, custom CRM/ERP integration, and cloud infrastructure architecture.",
    channels: ["Custom SaaS Architecture", "React & Vite Web Platforms", "iOS & Android Apps", "Cloud & DevOps", "Enterprise API Integrations"],
    ctaUrl: "/technology",
    ctaText: "Explore Tech Solutions",
  },
  "hr-req": {
    division: "Human Resources",
    badge: "Talent & Search",
    title: "Executive Search & Technical Talent Acquisition",
    description: "Executive leadership hiring, specialized engineering recruitment, flexible team scaling, and workforce strategy aligned with rapid business expansion.",
    channels: ["Executive Search", "Technical Headhunting", "Workforce Operations", "Leadership Advisory"],
    ctaUrl: "/human-resources",
    ctaText: "Discuss Talent Requirements",
  },
};

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const rec = selectedGoal ? RECOMMENDATIONS[selectedGoal] : null;

  return (
    <>
      {/* Floating Trigger Button (Positioned gracefully next to WhatsApp) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Real Result Assistant"
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-primary/95 hover:bg-black text-white border border-gold-400/40 shadow-card hover:shadow-gold-subtle transition-all duration-300 group cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs font-mono uppercase font-bold tracking-wider text-gray-200 group-hover:text-white">
            Real Result Assistant
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Floating Assistant Modal Panel */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-[92vw] sm:w-[420px] max-h-[85vh] bg-white rounded-3xl border border-border shadow-floating overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-5 bg-charcoal text-white flex items-center justify-between border-b border-charcoal-border">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">
                  Real Result Assistant
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  Smart Solution Matching Engine
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Content Area */}
          <div className="p-6 overflow-y-auto max-h-[calc(85vh-90px)] space-y-5">
            {/* Opening Prompt */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-widest text-gold-700 font-bold">
                Guidance System
              </div>
              <h4 className="text-base font-black text-primary tracking-tight uppercase">
                WHAT ARE YOU TRYING TO ACHIEVE?
              </h4>
              <p className="text-xs text-secondary">
                Select your primary objective to view our tailored strategic recommendation.
              </p>
            </div>

            {/* Goals Selection */}
            <div className="space-y-1.5">
              {QUICK_GOALS.map((g) => {
                const isSelected = selectedGoal === g.id;
                const Icon = g.icon;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => setSelectedGoal(g.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between text-xs font-semibold cursor-pointer ${
                      isSelected
                        ? "bg-primary text-white border border-primary shadow-subtle"
                        : "bg-canvas hover:bg-surface text-primary border border-border/80"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-gold" : "text-secondary"}`} />
                      <span>{g.label}</span>
                    </div>
                    <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? "text-gold" : "text-muted"}`} />
                  </button>
                );
              })}
            </div>

            {/* Recommendation Display */}
            {rec && (
              <div className="p-4 rounded-2xl bg-canvas border border-gold/40 shadow-subtle space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-gold-800 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded">
                    {rec.division}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedGoal(null)}
                    className="text-[10px] font-mono text-muted hover:text-primary flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-2.5 h-2.5" /> Reset
                  </button>
                </div>

                <div className="text-sm font-bold text-primary">
                  {rec.title}
                </div>

                <p className="text-xs text-secondary leading-relaxed">
                  {rec.description}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {rec.channels.map((ch) => (
                    <span
                      key={ch}
                      className="text-[9px] font-mono px-2 py-0.5 rounded bg-white border border-border text-primary font-medium"
                    >
                      {ch}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <Button
                    variant="gold"
                    size="sm"
                    withArrow
                    onClick={() => {
                      setIsOpen(false);
                      openLeadModal(`assistant-${selectedGoal}`);
                    }}
                    className="text-xs py-2 px-4 w-full cursor-pointer"
                  >
                    Discuss This Solution
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
