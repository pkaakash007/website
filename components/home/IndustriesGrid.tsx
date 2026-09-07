"use client";

import React, { useState } from "react";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";
import { Compass, ArrowRight } from "lucide-react";

interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  image: string;
}

const SECTOR_LIST: IndustryItem[] = [
  {
    id: "retail",
    name: "RETAIL",
    tagline: "Footfall & Multi-Store Domination",
    description: "Metropolitan DOOH screens synchronized with hyper-local geotargeted paid social promotions.",
    tags: ["Arterial DOOH", "Geotargeted Meta Ads", "WhatsApp Store Concierge"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "healthcare",
    name: "HEALTHCARE",
    tagline: "Diagnostic Trust & Patient Discovery",
    description: "Symptom-intent organic search optimization combined with verified local service ads and appointment IVR.",
    tags: ["Intent Search PPC", "Clinic DOOH", "Automated Dialect IVR"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "bfsi",
    name: "BFSI",
    tagline: "Institutional Stature & High-Value Pipeline",
    description: "Prime television broadcast sponsorships and encrypted multi-dialect telecalling lead qualification.",
    tags: ["Broadcast TV", "High-Intent SEO", "Encrypted Telephony"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "technology",
    name: "TECHNOLOGY",
    tagline: "B2B Category Creation & Pipeline Yield",
    description: "Account-based marketing across enterprise decision-makers and high-speed developer portals.",
    tags: ["LinkedIn ABM", "Technical SEO", "Full-Funnel CRO"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "telecom",
    name: "TELECOM",
    tagline: "Mass Subscriber Acquisition & Upgrades",
    description: "National TV commercial blitzes and regional language voice bots for instant plan upgrades.",
    tags: ["National TVC", "Transit Media", "Autonomous Voice Bots"],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "travel",
    name: "TRAVEL",
    tagline: "Aspirational Desire & Instant Bookings",
    description: "Cinematic destination video reels, programmatic CTV ads, and airport terminal takeovers.",
    tags: ["Creator Video", "Airport Screens", "Booking CRO Funnels"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function IndustriesGrid() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = SECTOR_LIST[selectedIdx];

  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold mb-4">
            <Compass className="w-3.5 h-3.5 text-gold-600" />
            <span>SECTOR PLAYBOOKS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-primary tracking-tight uppercase leading-[1.03]">
            TAILORED STRATEGY FOR <br />
            <span className="font-serif italic text-gold-700 font-normal lowercase">
              leading
            </span>{" "}
            INDUSTRIES.
          </h2>
        </div>

        {/* Horizontal Visual Selector Bar (RETAIL | HEALTHCARE | BFSI | TECHNOLOGY | TELECOM | TRAVEL) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar mb-8 border-b border-border/80">
          {SECTOR_LIST.map((sector, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedIdx(idx)}
                className={`shrink-0 px-6 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? "bg-primary text-white shadow-card border border-primary"
                    : "bg-canvas text-secondary hover:text-primary hover:bg-surface border border-border"
                }`}
              >
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                <span>{sector.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Split-Screen Visual Area (Large Image, Short Description, Capability Tags) */}
        <div className="rounded-3xl bg-canvas border border-border overflow-hidden shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Content Area */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold">
                  Sector Focus · {active.name}
                </span>

                <h3 className="text-2xl sm:text-4xl font-black text-primary tracking-tight leading-snug">
                  {active.tagline}
                </h3>

                <p className="text-sm sm:text-base text-secondary font-normal leading-relaxed">
                  {active.description}
                </p>

                {/* Relevant Capability Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-white border border-border text-xs font-mono text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  variant="gold"
                  size="md"
                  withArrow
                  onClick={() => openLeadModal(`industry-${active.id}`)}
                  className="text-xs font-bold uppercase tracking-wider px-6 py-3 shadow-gold-subtle"
                >
                  Plan {active.name} Campaign
                </Button>
              </div>
            </div>

            {/* Right Large Image Area */}
            <div className="lg:col-span-6 relative min-h-[360px] sm:min-h-[440px] bg-charcoal">
              <div
                key={active.id}
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out opacity-75 mix-blend-luminosity"
                style={{ backgroundImage: `url('${active.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gold/30">
                  {active.name} PRACTICE
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
