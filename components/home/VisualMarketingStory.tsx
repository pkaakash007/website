"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";
import { ArrowRight, ArrowUpRight, Eye, Sparkles } from "lucide-react";

const MARKETING_WORLDS = [
  {
    id: "creative-campaign",
    category: "01 / CREATIVE CAMPAIGN",
    title: "Provocative Ideas That Stop the Scroll",
    subtitle: "High-concept art direction, cinematic narrative, and identity systems crafted to live in the cultural conversation.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85",
    tags: ["Brand Films", "Creative Strategy", "Visual Identity"],
    span: "lg:col-span-8",
  },
  {
    id: "outdoor-media",
    category: "02 / OUTDOOR MEDIA",
    title: "Monumental Physical Stature",
    subtitle: "High-impact digital out-of-home (DOOH), prime metropolitan billboards, and transit dominance.",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32b?auto=format&fit=crop&w=1200&q=85",
    tags: ["Metropolitan DOOH", "City Center Takeovers", "Transit Hubs"],
    span: "lg:col-span-4",
  },
  {
    id: "digital-advertising",
    category: "03 / DIGITAL ADVERTISING",
    title: "Algorithmic Precision at Global Scale",
    subtitle: "Programmatic display, Connected TV (CTV), and automated auction bidding targeting high-intent consumer cohorts.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=85",
    tags: ["Programmatic DSP", "Connected TV", "Contextual Ads"],
    span: "lg:col-span-4",
  },
  {
    id: "social-content",
    category: "04 / SOCIAL CONTENT & CULTURE",
    title: "Viral Velocity & Social-First Formats",
    subtitle: "Short-form vertical video, creator collaborations, and organic resonance that drives genuine brand fandom.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=85",
    tags: ["Creator Media", "Vertical Video", "Community Velocity"],
    span: "lg:col-span-8",
  },
  {
    id: "audience-media",
    category: "05 / AUDIENCE & MEDIA",
    title: "Broadcast Frequency & Mass Immersion",
    subtitle: "Television sports sponsorships, cinema surround audio, and prime-time streaming placements.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=85",
    tags: ["Television Buying", "Cinema 7.1", "Audio Networks"],
    span: "lg:col-span-7",
  },
  {
    id: "performance-marketing",
    category: "06 / PERFORMANCE MARKETING",
    title: "Verifiable Revenue Engine",
    subtitle: "Continuous split-testing, high-intent transactional search, dynamic number insertion, and multi-touch attribution.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["High-CRO Funnels", "Google Search PPC", "Closed-Loop Data"],
    span: "lg:col-span-5",
  },
];

export default function VisualMarketingStory() {
  const [activeWorld, setActiveWorld] = useState(MARKETING_WORLDS[0].id);

  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-gold-400 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>THE VISUAL MARKETING STORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-primary uppercase leading-[1.05]">
              Every Canvas. <br />
              <span className="font-serif italic text-gold-700 font-normal lowercase">
                one cohesive
              </span>{" "}
              UNIVERSE.
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("visual-story-plan")}
              className="text-xs uppercase font-bold tracking-wider px-6 py-3 shadow-gold-subtle"
            >
              Start Campaign Strategy
            </Button>
          </div>
        </div>

        {/* Asymmetric Art-Directed Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {MARKETING_WORLDS.map((item) => (
            <div
              key={item.id}
              className={`${item.span} group relative rounded-3xl overflow-hidden min-h-[420px] sm:min-h-[480px] bg-charcoal flex flex-col justify-between p-8 sm:p-10 border border-border/80 shadow-card transition-all duration-500 hover:border-gold/50`}
            >
              {/* Background Art-Directed Imagery with Parallax & Hover Reveal */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-55 group-hover:opacity-75"
                style={{ backgroundImage: `url('${item.image}')` }}
              />
              {/* Dark Gradient Mask for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

              {/* Top Tags */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-gold-300 font-bold bg-black/60 backdrop-blur-xs px-3.5 py-1 rounded-full border border-gold-400/40">
                  {item.category}
                </span>

                <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Bottom Editorial Copy */}
              <div className="relative z-10 space-y-3 max-w-xl">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.subtitle}
                </p>

                {/* Sub-tags */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-lg bg-white/15 text-white/90 border border-white/10 backdrop-blur-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gold Directional Bottom Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/0 group-hover:bg-gold transition-all duration-300" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
