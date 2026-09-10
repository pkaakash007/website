
import React, { useState } from "react";
import { Image } from "@/components/common/Image";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ArrowUpRight } from "lucide-react";

const TRIAD_WORDS = [
  {
    word: "CREATE",
    eyebrow: "01 / ORIGINATION",
    tagline: "Unforgettable Brand Ideas",
    description: "Creative direction, provocative campaign narratives, visual identity, and thumb-stopping cultural moments.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative strategy and editorial art direction",
    href: "/marketing",
  },
  {
    word: "REACH",
    eyebrow: "02 / DISTRIBUTION",
    tagline: "Every Meaningful Screen",
    description: "Television broadcast, dynamic outdoor DOOH, cinema, transit, paid search, and high-frequency social media.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital media screens and outdoor advertising reach",
    href: "/marketing",
  },
  {
    word: "GROW",
    eyebrow: "03 / IMPACT",
    tagline: "Engineered Performance",
    description: "Closed-loop attribution, real-time analytics, high-intent lead conversion, and market share expansion.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural modern corporate growth",
    href: "/marketing",
  },
];

export default function BrandStatementTriad() {
  const [activeWord, setActiveWord] = useState<number | null>(null);

  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Minimal text, Monumental Typography */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-6 font-bold">
            BRAND PRINCIPLE
          </p>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight leading-[1.05] uppercase">
            ATTENTION IS EARNED. <br />
            <span className="text-gold-700">GROWTH IS</span> ENGINEERED.
          </h2>
        </div>

        {/* The Three Visual Words: CREATE, REACH, GROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRIAD_WORDS.map((item, idx) => {
            const isHovered = activeWord === idx;
            return (
              <Link key={item.word}
                to={item.href}
                onMouseEnter={() => setActiveWord(idx)}
                onMouseLeave={() => setActiveWord(null)}
                className="group relative rounded-3xl overflow-hidden min-h-[460px] sm:min-h-[520px] bg-charcoal flex flex-col justify-between p-8 sm:p-10 border border-charcoal-border transition-all duration-500 hover:border-gold/60 shadow-card hover:shadow-gold-subtle"
              >
                {/* Background Image with Rich Editorial Treatment */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-40 group-hover:opacity-60 mix-blend-luminosity"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
                {/* Luxury Vignette & Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />

                {/* Top Badge & Number */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold-300 font-bold bg-black/40 backdrop-blur-xs px-3 py-1 rounded-full border border-gold-400/30">
                    {item.eyebrow}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Bottom Content with Large Visual Word */}
                <div className="relative z-10 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-gold-400 font-semibold">
                    {item.tagline}
                  </div>
                  <h3 className="text-5xl sm:text-6xl font-black tracking-tight text-white uppercase group-hover:text-gold-200 transition-colors">
                    {item.word}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-sm pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Gold Directional Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400/0 to-transparent group-hover:via-gold-400 transition-all duration-500" />
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
