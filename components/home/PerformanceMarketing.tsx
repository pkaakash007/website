"use client";

import React, { useState } from "react";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";
import { TrendingUp, ArrowRight, Check } from "lucide-react";

interface FunnelStage {
  id: string;
  name: string;
  discipline: string;
  explanation: string;
}

const FUNNEL_STAGES: FunnelStage[] = [
  {
    id: "idea",
    name: "IDEA",
    discipline: "A/B Testing & Creative Hooks",
    explanation: "High-concept creative angles split-tested across audiences to uncover peak emotional resonance.",
  },
  {
    id: "audience",
    name: "AUDIENCE",
    discipline: "Intent Clustering & Analytics",
    explanation: "Algorithmic segmentation targeting active in-market buyers ready for commercial consideration.",
  },
  {
    id: "media",
    name: "MEDIA",
    discipline: "Omnichannel Attribution & DNI",
    explanation: "Dynamic number insertion and server-side CAPI tracking tying broadcast and digital spend to pipeline yield.",
  },
  {
    id: "engagement",
    name: "ENGAGEMENT",
    discipline: "CRO (Conversion Rate Optimization)",
    explanation: "Multivariate landing page friction audits and message matching to maximize conversion percentage.",
  },
  {
    id: "conversion",
    name: "CONVERSION",
    discipline: "Lead Scoring & Marketing Automation",
    explanation: "Immediate CRM synchronization, automated qualification triggers, and closed-loop revenue verification.",
  },
];

export default function PerformanceMarketing() {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const active = FUNNEL_STAGES[activeStageIdx];

  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-400 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle mb-4">
            <TrendingUp className="w-3.5 h-3.5 text-gold-600" />
            <span>PERFORMANCE ARCHITECTURE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.03]">
            CREATIVITY GETS ATTENTION. <br />
            <span className="font-serif italic text-gold-700 font-normal lowercase">
              performance
            </span>{" "}
            MOVES IT.
          </h2>
          <p className="text-base sm:text-lg text-secondary font-normal max-w-xl mt-3 leading-relaxed">
            A single unified conversion funnel designed to translate bold advertising ideas into verified revenue.
          </p>
        </div>

        {/* Single Large Visual Funnel: 5 Typographic Stages (No Small Cards) */}
        <div className="rounded-3xl bg-white border border-border p-8 sm:p-14 shadow-card space-y-10">
          {/* Large Typographic Stages Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 relative">
            {FUNNEL_STAGES.map((stage, idx) => {
              const isSelected = activeStageIdx === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIdx(idx)}
                  className={`p-6 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                    isSelected
                      ? "bg-primary text-white border-primary shadow-card scale-102"
                      : "bg-canvas hover:bg-surface text-primary border-border"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-gold" : "text-muted"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                    {stage.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Interactive Stage Explanation Panel */}
          <div className="p-8 sm:p-10 rounded-2xl bg-canvas border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                {active.discipline}
              </div>
              <p className="text-lg sm:text-2xl font-bold text-primary tracking-tight leading-snug">
                {active.explanation}
              </p>
            </div>

            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal(`performance-${active.id}`)}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3.5 shrink-0 shadow-gold-subtle"
            >
              Audit This Stage
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
