
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { TrendingUp, ArrowRight, ArrowUpRight } from "lucide-react";

const DIGITAL_AREAS = [
  {
    name: "SEARCH",
    headline: "Active Intent & Google PPC",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tag: "High-Intent Acquisition",
  },
  {
    name: "SOCIAL",
    headline: "Algorithmic Reach & Video",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tag: "Cultural Velocity",
  },
  {
    name: "CONTENT",
    headline: "Editorial & Fandom Creation",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    tag: "Brand Authority",
  },
  {
    name: "PERFORMANCE",
    headline: "Attribution & Revenue Funnels",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tag: "Closed-Loop Yield",
  },
];

export default function DigitalEditorialSection() {
  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Editorial Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-mono uppercase tracking-widest font-bold text-primary">
              DIGITAL STRATEGY
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-primary uppercase leading-[1.03]">
              TURN ATTENTION <br />
              <span className="text-gold-700">INTO</span> ACTION.
            </h2>
            <p className="text-base sm:text-lg text-secondary font-normal max-w-xl">
              Digital strategy built around discovery, engagement and growth.
            </p>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("digital-strategy-plan")}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3.5 shadow-gold-subtle"
            >
              Plan Digital Strategy
            </Button>
          </div>
        </div>

        {/* 4 Large Editorial Visual Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIGITAL_AREAS.map((area, idx) => (
            <div
              key={area.name}
              onClick={() => openLeadModal(`digital-${area.name.toLowerCase()}`)}
              className="group relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden bg-charcoal border border-border cursor-pointer shadow-card transition-all duration-500 hover:border-gold/60"
            >
              {/* Large Image with subtle scale */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-80"
                style={{ backgroundImage: `url('${area.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Area Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gold-300 font-bold uppercase tracking-widest">
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-semibold">
                    {area.tag}
                  </span>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white group-hover:text-gold-200 transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-xs text-gray-300 leading-snug">
                    {area.headline}
                  </p>
                </div>
              </div>

              {/* Gold Directional Bottom Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
