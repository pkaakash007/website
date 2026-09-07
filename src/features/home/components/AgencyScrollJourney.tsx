
import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { Sparkles, ArrowRight } from "lucide-react";

interface StoryStep {
  id: string;
  number: string;
  title: string;
  tagline: string;
  image: string;
}

const STORY_STEPS: StoryStep[] = [
  {
    id: "creative",
    number: "01",
    title: "Creative",
    tagline: "Unforgettable campaign concepts and visual identity systems.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "media",
    number: "02",
    title: "Media",
    tagline: "Broadcast television, DOOH hoardings, and transit immersion.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "digital",
    number: "03",
    title: "Digital",
    tagline: "Paid search, programmatic DSP auctions, and vertical social video.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
  },
  {
    id: "performance",
    number: "04",
    title: "Performance",
    tagline: "Closed-loop attribution, multivariate CRO, and verified revenue yield.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
  },
];

export default function AgencyScrollJourney() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = STORY_STEPS[activeIdx];

  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>AGENCY PORTFOLIO JOURNEY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.03]">
            FOUR DISCIPLINES. <br />
            <span className="font-serif italic text-gold-700 font-normal lowercase">
              one unified
            </span>{" "}
            DIRECTION.
          </h2>
        </div>

        {/* Agency Split-Screen Storytelling with Vertical Gold Traveling Line */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: 4 Vertical Navigation Steps with Traveling Gold Line */}
          <div className="lg:col-span-5 relative pl-8 space-y-4">
            {/* Vertical Track Line */}
            <div className="absolute left-2.5 top-3 bottom-3 w-0.5 bg-border">
              {/* Dynamic Traveling Gold Indicator */}
              <div
                className="w-1 bg-gold rounded-full transition-all duration-500 absolute -left-[1px]"
                style={{
                  height: "25%",
                  top: `${activeIdx * 25}%`,
                }}
              />
            </div>

            {/* 4 Interactive Steps */}
            {STORY_STEPS.map((step, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                    isSelected
                      ? "bg-canvas border-gold/60 shadow-card"
                      : "bg-white border-transparent hover:border-border text-secondary"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold ${
                        isSelected ? "text-gold-700" : "text-muted"
                      }`}
                    >
                      {step.number}
                    </span>
                    {isSelected && (
                      <span className="text-[10px] font-mono text-gold-700 uppercase font-bold">
                        ACTIVE DISCIPLINE
                      </span>
                    )}
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-black uppercase tracking-tight mt-1 ${
                      isSelected ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs mt-1.5 leading-relaxed ${
                      isSelected ? "text-secondary font-medium" : "text-muted"
                    }`}
                  >
                    {step.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Large Agency Portfolio Image Panel */}
          <div className="lg:col-span-7 relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden bg-charcoal border border-border shadow-card group">
            {/* Images with clean cross-fade */}
            {STORY_STEPS.map((step, idx) => (
              <div
                key={step.id}
                className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out ${
                  activeIdx === idx
                    ? "opacity-85 scale-100"
                    : "opacity-0 scale-105 pointer-events-none"
                }`}
                style={{ backgroundImage: `url('${step.image}')` }}
              />
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Bottom Floating Info Tag */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex items-center justify-between text-white">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gold font-bold">
                  {active.number} / DISCIPLINE IN FOCUS
                </span>
                <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight">
                  {active.title} Practice
                </div>
              </div>

              <Button
                variant="gold"
                size="sm"
                withArrow
                onClick={() => openLeadModal(`agency-scroll-${active.id}`)}
                className="text-xs font-bold uppercase tracking-wider px-5 py-2.5 shadow-gold-subtle"
              >
                Explore {active.title}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
