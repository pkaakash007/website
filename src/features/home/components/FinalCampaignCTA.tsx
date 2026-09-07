
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl, REAL_RESULT_CONFIG } from "@/config";
import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react";

export default function FinalCampaignCTA() {
  const whatsappUrl = getWhatsAppUrl("general");

  return (
    <section className="py-28 sm:py-40 bg-charcoal text-white relative overflow-hidden border-t border-charcoal-border">
      {/* Continuing Gold Directional Laser / Beam across the section */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-80" />

      {/* Diagonal Gold Directional Motif in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M-200,600 L600,0 L1400,600"
            stroke="#C5A059"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <path
            d="M-100,600 L600,100 L1300,600"
            stroke="#DFBE73"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Ambient Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-gold/40 text-gold-300 text-xs font-mono uppercase tracking-widest font-bold backdrop-blur-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>THE NEXT EVOLUTION</span>
          </div>

          {/* Headline: READY TO MOVE YOUR BRAND FORWARD? */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.03]">
            READY TO MOVE YOUR BRAND{" "}
            <span className="font-serif italic text-gold-300 font-normal lowercase">
              forward?
            </span>
          </h2>

          <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Strategy, creativity, media and intelligent communication built to make your brand impossible to ignore.
          </p>

          {/* The 3 Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {/* 1. START A CAMPAIGN */}
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("final-cta-start-campaign")}
              className="text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 shadow-gold-glow"
            >
              START A CAMPAIGN
            </Button>

            {/* 2. TALK TO AN EXPERT */}
            <Button
              variant="secondary"
              size="lg"
              onClick={() => openLeadModal("final-cta-talk-expert")}
              className="text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 bg-white/10 hover:bg-white/20 text-white border-white/20"
            >
              TALK TO AN EXPERT
            </Button>

            {/* 3. WHATSAPP */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-transparent hover:bg-white/5 text-gold hover:text-gold-200 border border-gold/50 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all duration-200"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WHATSAPP</span>
            </a>
          </div>

          {/* Sub-note */}
          <div className="pt-8 text-xs font-mono text-gray-400">
            Real Result Enterprise Media Hub · Strict Non-Disclosure & Brand Confidentiality
          </div>
        </div>
      </Container>
    </section>
  );
}
