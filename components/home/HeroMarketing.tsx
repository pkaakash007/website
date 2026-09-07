"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";
import { ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";

export default function HeroMarketing() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-80px)] flex flex-col justify-center pt-8 pb-16 sm:pt-14 sm:pb-24 border-b border-border">
      {/* Subtle ambient light glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-gold-100/30 via-gold-50/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Bold Editorial Typography & Clear CTAs */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            {/* Small Eyebrow: MARKETING · MEDIA · PERFORMANCE */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-gold-400/80 shadow-gold-subtle text-xs font-mono font-bold tracking-widest text-primary uppercase">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>MARKETING · MEDIA · PERFORMANCE</span>
            </div>

            {/* Headline: MAKE YOUR BRAND IMPOSSIBLE TO IGNORE. */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-primary leading-[1.03] uppercase">
              MAKE YOUR BRAND <br />
              <span className="relative inline-block font-serif lowercase italic text-gold-700 font-semibold pr-1">
                impossible
                <svg
                  className="absolute left-0 -bottom-1 w-full h-3 text-gold/50 -z-10"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,9 Q50,1 100,9"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              TO IGNORE.
            </h1>

            {/* Supporting line */}
            <p className="text-lg sm:text-xl text-secondary leading-relaxed max-w-xl font-normal">
              Strategy, creativity, media and performance built to move brands forward.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("hero-start-campaign")}
                className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 shadow-gold-subtle"
              >
                START A CAMPAIGN
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="/marketing"
                withArrow
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-7 py-4 border-border hover:border-gold-400"
              >
                EXPLORE MARKETING
              </Button>
            </div>

            {/* Core Brand Disciplines Strip (Clean 1-line scannable) */}
            <div className="pt-6 border-t border-border/80 flex items-center gap-6 sm:gap-10 text-xs font-mono">
              <div>
                <span className="text-gold-700 font-bold mr-1.5">01</span>
                <span className="font-bold text-primary">CREATIVE</span>
              </div>
              <div className="text-border">•</div>
              <div>
                <span className="text-gold-700 font-bold mr-1.5">02</span>
                <span className="font-bold text-primary">MEDIA</span>
              </div>
              <div className="text-border">•</div>
              <div>
                <span className="text-gold-700 font-bold mr-1.5">03</span>
                <span className="font-bold text-primary">PERFORMANCE</span>
              </div>
            </div>
          </div>

          {/* Right Column: ONE LARGE, BEAUTIFUL, ART-DIRECTED MARKETING IMAGE (NO 3D) */}
          <div className="lg:col-span-6 relative w-full h-[460px] sm:h-[540px] lg:h-[620px] flex items-center justify-center">
            <div
              className="relative w-full h-full rounded-3xl overflow-hidden border border-border shadow-card bg-charcoal group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Single Dominant Editorial Advertising Campaign Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85')",
                }}
              />
              {/* Subtle luxury vignette gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />

              {/* Gold directional corner graphic */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-gold" />
              </div>

              {/* Watermark Tag */}
              <div className="absolute top-6 left-6 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wider uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span>REAL RESULT CAMPAIGN NETWORK</span>
              </div>

              {/* Bottom Image Caption & Narrative */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gold-300 font-bold">
                    Omnichannel Presence
                  </div>
                  <div className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mt-0.5">
                    Metropolitan Billboard & Broadcast
                  </div>
                </div>

                <div className="text-[11px] font-mono text-gray-300 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shrink-0 self-start sm:self-auto">
                  HIGH-IMPACT REACH
                </div>
              </div>

              {/* Gold directional line along bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
