"use client";

import React, { useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import { Eye, Radio, HeartHandshake, TrendingUp, Compass, ArrowRight } from "lucide-react";
import { openLeadModal } from "../shared/LeadModal";

const stages = [
  {
    number: "01",
    title: "ATTENTION",
    label: "Capturing Mindshare",
    description: "High-impact broadcast media and outdoor canvases create immediate, commanding presence in your category.",
    channels: ["Television", "Outdoor DOOH", "Connected TV", "Print & Audio"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    icon: Eye,
  },
  {
    number: "02",
    title: "REACH",
    label: "Expanding Across Channels",
    description: "Connecting targeted demographic audiences across digital display, programmatic video, search, and transit networks.",
    channels: ["Programmatic DSP", "High-Intent Search", "Transit Networks", "Streaming Audio"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    icon: Radio,
  },
  {
    number: "03",
    title: "ENGAGEMENT",
    label: "Igniting Interaction",
    description: "Compelling social creative, influencer partnerships, and localized messaging turn passive views into active conversations.",
    channels: ["Creator Campaigns", "Paid Social", "Interactive Video", "Community PR"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "CONVERSION",
    label: "Measurable Business Outcomes",
    description: "Full-funnel attribution, conversion rate optimization, and automated customer routing transform traffic into customers.",
    channels: ["Funnel CRO", "DNI Call Tracking", "Direct Sales Telephony", "CRM Integration"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    icon: TrendingUp,
  },
  {
    number: "05",
    title: "GROWTH",
    label: "Continuous Forward Movement",
    description: "Iterative campaign scaling, multi-market expansion, and long-term brand equity compound your competitive advantage.",
    channels: ["Market Expansion", "LTV Scaling", "Cross-Sell Telephony", "Brand Equity"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    icon: Compass,
  },
];

export default function ScrollStorytelling() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-charcoal text-white relative overflow-hidden border-b border-charcoal-border">
      {/* Gold ambient background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-gold/30 text-gold-300 text-xs font-mono uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Scroll-Driven Methodology
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              The Journey of Impact.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-md leading-relaxed">
            Every campaign follows an intentional progression from category attention to measurable business expansion.
          </p>
        </div>

        {/* 5-Stage Interactive Storyteller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Stage Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStage === idx;
              return (
                <div
                  key={stage.number}
                  onClick={() => setActiveStage(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-charcoal-surface border-gold/50 shadow-gold-subtle"
                      : "bg-charcoal/60 border-charcoal-border/70 hover:border-white/20 hover:bg-charcoal-surface/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                          isActive ? "bg-gold text-black" : "bg-white/10 text-white/70"
                        }`}
                      >
                        {stage.number}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
                        {stage.title}
                      </h3>
                    </div>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-gold" : "text-charcoal-muted"
                      }`}
                    />
                  </div>

                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-charcoal-border text-xs text-charcoal-muted leading-relaxed animate-in fade-in duration-200">
                      <div className="text-white font-medium mb-1">{stage.label}</div>
                      <p>{stage.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {stage.channels.map((ch, cIdx) => (
                          <span
                            key={cIdx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/40 border border-gold/30 text-gold-300"
                          >
                            ✦ {ch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage Showcase */}
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden bg-black border border-charcoal-border flex flex-col justify-end p-8 sm:p-12">
            {/* Stage Background Image */}
            <div
              key={stages[activeStage].image}
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 opacity-50 mix-blend-luminosity scale-100 hover:scale-105"
              style={{
                backgroundImage: `url('${stages[activeStage].image}')`,
              }}
            />
            {/* Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

            {/* Overlaid Stage Content */}
            <div className="relative z-10 space-y-3 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 border border-gold/40 text-gold text-xs font-mono font-bold">
                STAGE {stages[activeStage].number} • {stages[activeStage].title}
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stages[activeStage].label}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {stages[activeStage].description}
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => openLeadModal(`stage-${stages[activeStage].title.toLowerCase()}`)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold hover:bg-gold-hover text-black text-xs font-bold transition-all shadow-gold-subtle"
                >
                  <span>Build This Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
