
import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { Sparkles, ArrowRight, Layers, Compass } from "lucide-react";

// Lazy-load the custom 3D abstract media installation
const MediaUniverse3DCanvas = lazy(() => import("./MediaUniverse3DCanvas"));

const ALL_CHANNELS = [
  { name: "TV", type: "Broadcast", desc: "Prime-time national & regional spots" },
  { name: "RADIO", type: "Audio", desc: "Metropolitan radio & digital podcasts" },
  { name: "PRINT", type: "Press", desc: "Top-tier business & consumer publications" },
  { name: "OUTDOOR", type: "OOH", desc: "High-impact arterial billboards & hoardings" },
  { name: "CINEMA", type: "Immersion", desc: "Dolby 7.1 theatrical surround pre-rolls" },
  { name: "DIGITAL", type: "Display", desc: "Programmatic auctions & contextual banners" },
  { name: "SOCIAL", type: "Feeds", desc: "Meta, TikTok, LinkedIn & YouTube campaigns" },
  { name: "SEARCH", type: "Intent", desc: "High-intent Google & Bing paid auctions" },
  { name: "INFLUENCER", type: "Creators", desc: "Contracted celebrity & micro-creator voices" },
  { name: "CTV", type: "Connected TV", desc: "Smart TV unskippable streaming spots" },
  { name: "OTT", type: "Streaming", desc: "Premium episodic streaming networks" },
];

export default function MediaEcosystem() {
  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Title & Eyebrow */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle">
              <Compass className="w-3.5 h-3.5 text-gold-600" />
              <span>THE MEDIA UNIVERSE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.03]">
              ONE CAMPAIGN. <br />
              <span className="font-serif italic text-gold-700 font-normal lowercase">
                every meaningful
              </span>{" "}
              CHANNEL.
            </h2>
            <p className="text-base sm:text-lg text-secondary max-w-2xl font-normal leading-relaxed">
              We eliminate fragmented agency silos. Your campaign deploys across broadcast, physical screens, and digital auctions through a single unified buying and measurement architecture.
            </p>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("media-universe-plan")}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3.5 shadow-gold-subtle"
            >
              Plan Omnichannel Media
            </Button>
          </div>
        </div>

        {/* 3D Abstract Media Installation Container */}
        <div className="relative rounded-3xl bg-charcoal border border-charcoal-border shadow-card overflow-hidden mb-12">
          {/* Top Bar Status */}
          <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 text-xs font-mono text-white">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold-300 font-bold uppercase">3D Installation</span>
              <span className="text-gray-400">· Synchronized Ecosystem</span>
            </div>

            <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 hidden sm:inline">
              Drag to explore • Scroll for perspective
            </span>
          </div>

          {/* 3D Canvas */}
          <Suspense
            fallback={
              <div className="w-full h-full min-h-[460px] sm:min-h-[540px] flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-2 border-gold/40 border-t-gold animate-spin" />
              </div>
            }
          >
            <MediaUniverse3DCanvas />
          </Suspense>

          {/* Bottom Bar Status */}
          <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-300 pointer-events-none">
            <div className="flex items-center gap-2 bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/10">
              <span className="text-white font-bold">11 Core Media Channels</span>
              <span className="text-gold">Linked by Real Result Attribution</span>
            </div>
            <div className="bg-black/60 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-white/10">
              ZERO SILOS
            </div>
          </div>
        </div>

        {/* 11 Channel Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {ALL_CHANNELS.map((ch) => (
            <div
              key={ch.name}
              className="p-4 rounded-2xl bg-canvas border border-border/80 hover:border-gold/50 transition-colors group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-black text-primary group-hover:text-gold-700 transition-colors">
                  {ch.name}
                </span>
                <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-white border border-border text-muted">
                  {ch.type}
                </span>
              </div>
              <p className="text-[11px] text-secondary leading-snug line-clamp-2 mt-1">
                {ch.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
