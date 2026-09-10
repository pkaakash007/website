
import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";

interface CreativePillar {
  id: string;
  label: string;
  tagline: string;
  image: string;
}

const CREATIVE_PILLARS: CreativePillar[] = [
  {
    id: "brand",
    label: "Brand Identity",
    tagline: "Positioning & visual identity systems that command category leadership.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "creative",
    label: "Campaign Concepts",
    tagline: "360-degree provocative campaign concepts that shape cultural dialogue.",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "content",
    label: "Editorial Content",
    tagline: "High-engagement editorial narratives and thumb-stopping digital storytelling.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1800&q=85",
  },
  {
    id: "video",
    label: "Commercial Films",
    tagline: "Cinematic commercial films and vertical formats designed to be remembered.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85",
  },
];

export default function CreativeShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = CREATIVE_PILLARS[activeIdx];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-primary">
              Ideas Built to Be Remembered
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              We engineer brand positioning, visual identity systems, and cinematic digital content that stand out in crowded commercial markets.
            </p>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              onClick={() => openLeadModal("creative-strategy-plan")}
              className="text-xs font-semibold px-6 py-3 cursor-pointer"
            >
              Start Creative Strategy
            </Button>
          </div>
        </div>

        {/* Large Viewport-Scale Editorial Image with Minimal Overlay Labels */}
        <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] rounded-2xl overflow-hidden bg-charcoal border border-border shadow-sm group">
          {/* Background Images with Real-time Transition */}
          {CREATIVE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out ${
                activeIdx === idx
                  ? "opacity-90 scale-100"
                  : "opacity-0 scale-105 pointer-events-none"
              }`}
              style={{ backgroundImage: `url('${pillar.image}')` }}
            />
          ))}

          {/* Dark luxury vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

          {/* Interactive Clean Tabs */}
          <div className="absolute top-6 left-6 right-6 z-20 flex flex-wrap items-center gap-2.5">
            {CREATIVE_PILLARS.map((pillar, idx) => {
              const isSelected = activeIdx === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`px-4 py-2 rounded-md text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-gold text-black border border-gold"
                      : "bg-black/70 text-white hover:bg-black/90 hover:text-gold border border-white/20"
                  }`}
                >
                  {pillar.label}
                </button>
              );
            })}
          </div>

          {/* Bottom Message & CTA */}
          <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white max-w-4xl">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-gold-300 block">
                {active.label} Standards
              </span>
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
                {active.tagline}
              </p>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => openLeadModal(`creative-${active.id}`)}
              className="text-xs font-semibold px-4 py-2 cursor-pointer bg-white text-primary hover:bg-surface"
            >
              Explore {active.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
