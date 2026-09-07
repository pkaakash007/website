"use client";

import React, { useState } from "react";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";
import { ArrowRight, Sparkles } from "lucide-react";

interface CreativePillar {
  id: string;
  label: string;
  tagline: string;
  image: string;
}

const CREATIVE_PILLARS: CreativePillar[] = [
  {
    id: "brand",
    label: "BRAND",
    tagline: "Positioning & visual identity systems that command category leadership.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "creative",
    label: "CREATIVE",
    tagline: "360-degree provocative campaign concepts that shape cultural dialogue.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "content",
    label: "CONTENT",
    tagline: "High-engagement editorial narratives and thumb-stopping digital storytelling.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "video",
    label: "VIDEO",
    tagline: "Cinematic commercial films and vertical formats designed to be remembered.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function CreativeShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CREATIVE_PILLARS[activeIdx];

  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>CREATIVE STORYTELLING</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary uppercase leading-[1.03]">
              IDEAS PEOPLE{" "}
              <span className="font-serif italic text-gold-700 font-normal lowercase">
                remember.
              </span>
            </h2>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("creative-strategy-plan")}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3.5 shadow-gold-subtle"
            >
              Start Creative Strategy
            </Button>
          </div>
        </div>

        {/* Large Viewport-Scale Editorial Image with Minimal Overlay Labels */}
        <div className="relative w-full h-[500px] sm:h-[620px] lg:h-[700px] rounded-3xl overflow-hidden bg-charcoal border border-border shadow-card group">
          {/* Background Images with Real-time Transition */}
          {CREATIVE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out ${
                activeIdx === idx
                  ? "opacity-85 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
              style={{ backgroundImage: `url('${pillar.image}')` }}
            />
          ))}

          {/* Dark luxury vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

          {/* Minimal Interactive Overlay Labels: BRAND | CREATIVE | CONTENT | VIDEO */}
          <div className="absolute top-8 left-8 right-8 z-20 flex flex-wrap items-center gap-3">
            {CREATIVE_PILLARS.map((pillar, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase font-bold tracking-widest transition-all duration-300 backdrop-blur-md ${
                    isSelected
                      ? "bg-gold text-black border border-gold shadow-gold-subtle scale-105"
                      : "bg-black/60 text-white hover:bg-black/80 hover:text-gold border border-white/20"
                  }`}
                >
                  {pillar.label}
                </button>
              );
            })}
          </div>

          {/* Bottom Single-Sentence Message & CTA */}
          <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white max-w-4xl">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                {active.label} EXCELLENCE
              </span>
              <p className="text-xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                {active.tagline}
              </p>
            </div>

            <button
              onClick={() => openLeadModal(`creative-${active.id}`)}
              className="text-xs font-mono font-bold uppercase tracking-wider text-gold hover:text-white flex items-center gap-2 transition-colors shrink-0"
            >
              <span>Explore {active.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
