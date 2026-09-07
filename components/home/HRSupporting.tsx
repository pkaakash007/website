"use client";

import React from "react";
import Container from "../layout/Container";
import Button from "../shared/Button";
import { Users, ArrowRight } from "lucide-react";

const HR_PILLARS = ["TALENT", "RECRUITMENT", "WORKFORCE", "PEOPLE"];

export default function HRSupporting() {
  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Headline & Minimal 5% Weight Supporting Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border text-xs font-mono uppercase tracking-widest text-secondary font-bold">
              <Users className="w-3.5 h-3.5 text-gold-600" />
              <span>HUMAN RESOURCES · 5% CAPABILITY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-primary tracking-tight uppercase leading-[1.08]">
              BRANDS GROW <br />
              <span className="font-serif italic text-gold-700 font-normal lowercase">
                through
              </span>{" "}
              PEOPLE.
            </h2>

            <p className="text-base text-secondary leading-relaxed font-normal">
              Securing the executive leadership, marketing visionaries, and specialized operators who execute bold ideas.
            </p>

            {/* 4 Clean Visual Pills (TALENT, RECRUITMENT, WORKFORCE, PEOPLE) */}
            <div className="flex flex-wrap gap-2 pt-2">
              {HR_PILLARS.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-xl bg-white border border-border text-xs font-mono font-bold uppercase tracking-wider text-primary"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="secondary"
                size="md"
                href="/human-resources"
                withArrow
                className="text-xs font-bold uppercase tracking-wider px-6 py-3 border-border hover:border-gold"
              >
                EXPLORE TALENT SOLUTIONS
              </Button>
            </div>
          </div>

          {/* Right Column: Premium Workplace / Leadership Photography */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden bg-charcoal border border-border shadow-card group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 mix-blend-luminosity"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-white">
              <span className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold">
                EXECUTIVE SEARCH & CAPITAL
              </span>
              <span className="text-xs font-mono text-gray-300">
                STRATEGIC TALENT
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
