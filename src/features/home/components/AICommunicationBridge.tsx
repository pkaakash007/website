
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { Bot, ArrowRight, MessageSquare, PhoneCall, Radio, Sparkles } from "lucide-react";

const FLOW_STEPS = [
  "CAMPAIGN",
  "LEAD",
  "AI VOICE",
  "WHATSAPP",
  "SMS / RCS",
  "CUSTOMER",
];

const CAPABILITY_PILLS = [
  "AI Telecalling",
  "Regional Language AI Telecalling",
  "Bulk IVR",
  "WhatsApp Business API",
  "Bulk SMS",
  "RCS Messaging",
  "Enterprise CPaaS",
];

export default function AICommunicationBridge() {
  return (
    <section className="py-24 sm:py-36 bg-white border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Transition Header (15% Weight Supporting Extension) */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle mb-4">
            <Bot className="w-3.5 h-3.5 text-gold-600" />
            <span>CONVERSATIONAL CONTINUITY · 15% CAPABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary tracking-tight uppercase leading-[1.08]">
            MARKETING CREATES THE OPPORTUNITY. <br />
            <span className="font-serif italic text-gold-700 font-normal lowercase">
              ai communication
            </span>{" "}
            CONTINUES THE CONVERSATION.
          </h2>

          <p className="text-base sm:text-lg text-secondary mt-4 max-w-2xl font-normal leading-relaxed">
            Turn campaign responses into intelligent customer dialogues. When an audience responds to your broadcast, billboard, or digital ad, our conversational AI instantly engages them in their native regional dialect.
          </p>
        </div>

        {/* One Large Visual & Horizontal Flow (Zero Small Cards) */}
        <div className="rounded-3xl bg-charcoal border border-charcoal-border shadow-card overflow-hidden text-white relative mb-12">
          {/* Background Image with Ambient Vignette */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />

          {/* Container Content */}
          <div className="relative z-10 p-8 sm:p-14 space-y-10">
            {/* Simple Horizontal Flow */}
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-gold font-bold mb-4">
                Continuous Response Architecture
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                {FLOW_STEPS.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2 sm:gap-4">
                    <span className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-mono font-black uppercase tracking-wider text-white">
                      {step}
                    </span>
                    {idx < FLOW_STEPS.length - 1 && (
                      <span className="text-gold font-black text-sm">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Highlight Capability Pills */}
            <div className="space-y-3 pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                Core Telephony & Messaging Infrastructure
              </div>
              <div className="flex flex-wrap gap-2.5">
                {CAPABILITY_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase bg-white/5 border border-white/15 text-gray-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="text-xs sm:text-sm text-secondary font-medium">
            Multi-dialect regional AI telecalling and Meta-verified WhatsApp Business API integration.
          </div>
          <Button
            variant="gold"
            size="md"
            withArrow
            onClick={() => openLeadModal("ai-communication-inquiry")}
            className="text-xs font-bold uppercase tracking-wider px-6 py-3 shadow-gold-subtle"
          >
            Explore AI Communication
          </Button>
        </div>
      </Container>
    </section>
  );
}
