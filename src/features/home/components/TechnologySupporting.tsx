
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Code2, ArrowRight } from "lucide-react";

const TECH_PILLS = [
  "WEB",
  "MOBILE",
  "SAAS",
  "AI",
  "DATA",
  "CLOUD",
  "CRM",
  "INTEGRATION",
];

export default function TechnologySupporting() {
  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Minimal Supporting Text (10% weight) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
              TECHNOLOGY & SOFTWARE · 10% CAPABILITY
            </p>

            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight uppercase leading-[1.08]">
              WHEN MARKETING NEEDS TECHNOLOGY, <br />
              <span className="text-gold-700">WE BUILD</span> IT.
            </h2>

            <p className="text-base text-secondary leading-relaxed font-normal">
              High-speed web platforms, mobile apps, and custom data pipelines engineered to back every campaign.
            </p>

            {/* 8 Clean Visual Pills (No Dense Descriptions!) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {TECH_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-xl bg-canvas border border-border text-xs font-mono font-bold uppercase tracking-wider text-primary"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="md"
                href="/technology"
                withArrow
                className="text-xs font-bold uppercase tracking-wider px-6 py-3 border-border hover:border-gold"
              >
                EXPLORE TECHNOLOGY
              </Button>
            </div>
          </div>

          {/* Right Column: One Strong Technology Visual */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden bg-charcoal border border-border shadow-card group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 mix-blend-luminosity"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">
                HIGH-PERFORMANCE ARCHITECTURES
              </span>
              <span className="text-xs font-mono text-gray-300">
                BUILT IN-HOUSE
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
