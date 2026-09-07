
import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { REAL_RESULT_CONFIG, getWhatsAppUrl } from "@/config";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  TrendingUp,
  Layers,
  PieChart,
  RefreshCw,
} from "lucide-react";

const OBJECTIVES = [
  "Brand Awareness",
  "Lead Generation",
  "Sales",
  "Engagement",
  "Performance",
  "Full-Funnel Growth",
];

const CHANNELS = [
  "Search",
  "Social",
  "TV",
  "Radio",
  "Outdoor",
  "Cinema",
  "Influencer",
  "WhatsApp",
  "SMS",
  "RCS",
];

export default function CampaignFinder() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedObjective, setSelectedObjective] = useState("Lead Generation");
  const [selectedChannels, setSelectedChannels] = useState<string[]>([
    "Search",
    "Social",
    "Outdoor",
    "WhatsApp",
  ]);

  const toggleChannel = (ch: string) => {
    if (selectedChannels.includes(ch)) {
      if (selectedChannels.length > 1) {
        setSelectedChannels(selectedChannels.filter((c) => c !== ch));
      }
    } else {
      setSelectedChannels([...selectedChannels, ch]);
    }
  };

  // Generate visual recommended campaign mix based on Step 1 and Step 2
  const getRecommendedMix = () => {
    if (selectedObjective === "Brand Awareness" || selectedObjective === "Sales") {
      return {
        pillarMix: ["BROADCAST & DOOH", "SOCIAL VELOCITY", "INTENT SEARCH"],
        distribution: [
          { name: "Television & Outdoor (DOOH)", pct: 40, color: "bg-gold-500" },
          { name: "Paid Social & Creator Media", pct: 35, color: "bg-primary" },
          { name: "High-Intent Google PPC", pct: 25, color: "bg-gold-700" },
        ],
        rationale:
          "High-reach visual immersion across major metropolitan corridors and television, supported by high-frequency social creative and intent capture.",
      };
    } else if (selectedObjective === "Engagement") {
      return {
        pillarMix: ["CREATOR ALLIANCE", "WHATSAPP API", "COMMUNITY SOCIAL"],
        distribution: [
          { name: "Influencer & Creator Media", pct: 45, color: "bg-gold-500" },
          { name: "WhatsApp Business API & RCS", pct: 30, color: "bg-primary" },
          { name: "Social Content Marketing", pct: 25, color: "bg-gold-700" },
        ],
        rationale:
          "Peer-level creator trust combined with instant WhatsApp conversational threads to maximize direct audience dialogue and community loyalty.",
      };
    } else {
      // Default: Lead Generation, Performance, Full-Funnel Growth
      return {
        pillarMix: ["DIGITAL", "SOCIAL", "PERFORMANCE"],
        distribution: [
          { name: "High-Intent Paid Search (PPC & SEO)", pct: 40, color: "bg-primary" },
          { name: "Paid Social & Vertical Video", pct: 35, color: "bg-gold-500" },
          { name: "Closed-Loop CRO & Attribution", pct: 25, color: "bg-gold-700" },
        ],
        rationale:
          "Laser-targeted capture of active commercial searchers, retargeted with high-converting social proof and tracked to pipeline revenue.",
      };
    }
  };

  const rec = getRecommendedMix();

  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle mb-4">
            <Layers className="w-3.5 h-3.5 text-gold-600" />
            <span>INTERACTIVE STRATEGY ENGINE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.03]">
            BUILD YOUR{" "}
            <span className="font-serif italic text-gold-700 font-normal lowercase">
              campaign.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-secondary mt-4 max-w-2xl font-normal leading-relaxed">
            Select your commercial objective and channel preferences to receive an immediate, algorithmic campaign mix recommendation.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between max-w-2xl mb-10 pb-4 border-b border-border/80 text-xs font-mono">
          <div
            className={`flex items-center gap-2 cursor-pointer ${
              step >= 1 ? "text-primary font-bold" : "text-muted"
            }`}
            onClick={() => setStep(1)}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 1 ? "bg-gold text-black" : "bg-canvas border border-border"}`}>
              1
            </span>
            <span>OBJECTIVE</span>
          </div>

          <div className="text-border">→</div>

          <div
            className={`flex items-center gap-2 cursor-pointer ${
              step >= 2 ? "text-primary font-bold" : "text-muted"
            }`}
            onClick={() => setStep(2)}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 2 ? "bg-gold text-black" : "bg-canvas border border-border"}`}>
              2
            </span>
            <span>CHANNELS</span>
          </div>

          <div className="text-border">→</div>

          <div
            className={`flex items-center gap-2 cursor-pointer ${
              step === 3 ? "text-primary font-bold" : "text-muted"
            }`}
            onClick={() => setStep(3)}
          >
            <span className={`w-6 h-6 rounded-full flex items-center justify-center ${step === 3 ? "bg-gold text-black" : "bg-canvas border border-border"}`}>
              3
            </span>
            <span>RECOMMENDED MIX</span>
          </div>
        </div>

        {/* Builder Container */}
        <div className="rounded-3xl bg-canvas border border-border p-8 sm:p-12 shadow-card max-w-4xl">
          {/* STEP 1: OBJECTIVE */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                  STEP 1 / 3
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-primary uppercase mt-1">
                  Choose Your Primary Campaign Objective
                </h3>
                <p className="text-xs sm:text-sm text-secondary mt-1">
                  What is the primary needle you need to move in the next 90 days?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                {OBJECTIVES.map((obj) => {
                  const isSelected = selectedObjective === obj;
                  return (
                    <button
                      key={obj}
                      onClick={() => setSelectedObjective(obj)}
                      className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between min-h-[96px] ${
                        isSelected
                          ? "bg-primary text-white border-primary shadow-subtle"
                          : "bg-white text-primary border-border hover:border-gold/50"
                      }`}
                    >
                      <span className="text-sm font-bold uppercase tracking-tight">{obj}</span>
                      {isSelected && (
                        <span className="text-[10px] font-mono text-gold uppercase flex items-center gap-1">
                          <Check className="w-3 h-3" /> Selected
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-end pt-4 border-t border-border/80">
                <Button
                  variant="gold"
                  size="md"
                  withArrow
                  onClick={() => setStep(2)}
                  className="text-xs font-bold uppercase tracking-wider px-6 py-3"
                >
                  Continue to Channels
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: CHANNELS */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                  STEP 2 / 3
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-primary uppercase mt-1">
                  Select Channel Preferences
                </h3>
                <p className="text-xs sm:text-sm text-secondary mt-1">
                  Choose the channels you want included in your integrated media mix.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {CHANNELS.map((ch) => {
                  const isSelected = selectedChannels.includes(ch);
                  return (
                    <button
                      key={ch}
                      onClick={() => toggleChannel(ch)}
                      className={`p-4 rounded-xl text-center transition-all duration-200 border flex flex-col items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-primary text-white border-primary shadow-subtle font-bold"
                          : "bg-white text-secondary border-border hover:border-gold/40"
                      }`}
                    >
                      <span className="text-xs uppercase tracking-wider">{ch}</span>
                      {isSelected ? (
                        <span className="w-2 h-2 rounded-full bg-gold" />
                      ) : (
                        <span className="w-2 h-2 rounded-full border border-border" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/80">
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-mono text-secondary hover:text-primary flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Objective
                </button>

                <Button
                  variant="gold"
                  size="md"
                  withArrow
                  onClick={() => setStep(3)}
                  className="text-xs font-bold uppercase tracking-wider px-6 py-3"
                >
                  Generate Recommended Mix
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: RECOMMENDED MIX & CTA */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                  STEP 3 / 3 · RECOMMENDED MIX
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-primary uppercase mt-1">
                  Your Strategic Campaign Blueprint
                </h3>
                <p className="text-xs sm:text-sm text-secondary mt-1">
                  Engineered specifically for <strong>{selectedObjective}</strong> across your selected channels.
                </p>
              </div>

              {/* Visual Recommended Mix Formula Bar: e.g. DIGITAL + SOCIAL + PERFORMANCE */}
              <div className="p-6 rounded-2xl bg-white border border-border text-center space-y-2">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted">
                  Recommended Core Triad
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-xl font-black tracking-tight text-primary">
                  <span className="text-gold-700 bg-gold-50 px-3 py-1 rounded-xl border border-gold-200">
                    {rec.pillarMix[0]}
                  </span>
                  <span className="text-muted">+</span>
                  <span className="text-primary bg-surface px-3 py-1 rounded-xl border border-border">
                    {rec.pillarMix[1]}
                  </span>
                  <span className="text-muted">+</span>
                  <span className="text-gold-800 bg-gold-100 px-3 py-1 rounded-xl border border-gold-300">
                    {rec.pillarMix[2]}
                  </span>
                </div>
              </div>

              {/* Channel Distribution Chart */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-muted font-bold">
                  Targeted Budget Allocation
                </div>
                <div className="space-y-2.5">
                  {rec.distribution.map((d) => (
                    <div key={d.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold text-primary">
                        <span>{d.name}</span>
                        <span className="font-mono text-gold-800">{d.pct}%</span>
                      </div>
                      <div className="h-2 w-full bg-surface rounded-full overflow-hidden">
                        <div
                          className={`h-full ${d.color} rounded-full transition-all duration-700`}
                          style={{ width: `${d.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rationale Brief */}
              <div className="p-4 rounded-xl bg-white border border-border text-xs text-secondary leading-relaxed">
                <strong>Strategic Rationale:</strong> {rec.rationale}
              </div>

              {/* Action Buttons: DISCUSS THIS CAMPAIGN */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border/80">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-mono text-secondary hover:text-primary flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Adjust Channels
                </button>

                <Button
                  variant="gold"
                  size="lg"
                  withArrow
                  onClick={() =>
                    openLeadModal(
                      `campaign-builder-${selectedObjective.toLowerCase().replace(/\s+/g, "-")}`
                    )
                  }
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 shadow-gold-subtle"
                >
                  DISCUSS THIS CAMPAIGN
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
