
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { getWhatsAppUrl, REAL_RESULT_CONFIG } from "@/config";
import { MessageSquare, ArrowRight, CheckCheck } from "lucide-react";

export default function WhatsAppSection() {
  const whatsappUrl = getWhatsAppUrl("marketing");

  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-4xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gold-400 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle mb-4">
            <MessageSquare className="w-3.5 h-3.5 text-gold-600" />
            <span>CONVERSATIONAL COMMERCE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.03]">
            TURN REACH INTO <br />
            <span className="font-serif italic text-gold-700 font-normal lowercase">
              direct
            </span>{" "}
            CONVERSATION.
          </h2>
          <p className="text-base sm:text-lg text-secondary mt-3 max-w-xl font-normal leading-relaxed">
            Eliminate friction. Route high-intent prospects directly from your billboards, TV ads, and social campaigns into verified WhatsApp dialogues.
          </p>
        </div>

        {/* Visual Pipeline Bar: CAMPAIGN → WHATSAPP → AI ASSISTANT → CUSTOMER */}
        <div className="p-6 rounded-2xl bg-white border border-border mb-12 shadow-subtle flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-black uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-primary">CAMPAIGN</span>
          </div>
          <span className="text-gold font-bold">→</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-primary">WHATSAPP</span>
          </div>
          <span className="text-gold font-bold">→</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-primary">AI ASSISTANT</span>
          </div>
          <span className="text-gold font-bold">→</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-primary">CUSTOMER</span>
          </div>
        </div>

        {/* WhatsApp Conversational UI Preview (Large Readable Text) & Direct Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Clear, Highly Readable WhatsApp Dialogue Mockup */}
          <div className="lg:col-span-7 bg-charcoal rounded-3xl p-8 sm:p-10 text-white border border-charcoal-border shadow-card relative">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-black text-sm">
                  RR
                </div>
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-2">
                    Real Result Growth Concierge
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs text-gray-400 font-mono">
                    Official Meta-Verified Account
                  </div>
                </div>
              </div>

              <span className="text-[10px] font-mono uppercase tracking-wider text-gold px-3 py-1 rounded bg-gold/10 border border-gold/20">
                Official API
              </span>
            </div>

            {/* Chat Thread with Large, Readable Typography */}
            <div className="space-y-4 text-sm">
              <div className="bg-white/10 rounded-2xl p-4 sm:p-5 max-w-[85%] border border-white/5 space-y-1.5">
                <div className="text-gold-300 font-bold text-xs">Real Result Campaign Desk</div>
                <p className="text-gray-100 leading-relaxed font-normal">
                  Welcome to Real Result. We received your campaign inquiry from the highway DOOH display. Which media allocation would you like to review today?
                </p>
                <div className="text-[11px] text-gray-400 text-right flex items-center justify-end gap-1 pt-1">
                  Just now <CheckCheck className="w-4 h-4 text-gold" />
                </div>
              </div>

              <div className="bg-gold/25 text-white rounded-2xl p-4 sm:p-5 max-w-[80%] ml-auto border border-gold/30 space-y-1.5">
                <p className="leading-relaxed font-medium">
                  We are planning our Q4 omnichannel campaign across television, prime outdoor hoardings, and Google search.
                </p>
                <div className="text-[11px] text-gold-200 text-right flex items-center justify-end gap-1 pt-1">
                  Read <CheckCheck className="w-4 h-4 text-gold-300" />
                </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 sm:p-5 max-w-[85%] border border-white/5 space-y-1.5">
                <p className="text-gray-100 leading-relaxed font-normal">
                  Understood. Connecting you directly with our senior media strategist now.
                </p>
                <div className="text-[11px] text-gray-400 text-right flex items-center justify-end gap-1 pt-1">
                  Automated routing <CheckCheck className="w-4 h-4 text-gold" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Connection Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-black text-primary uppercase tracking-tight">
                Immediate Response. <br />
                Zero Drop-Off.
              </h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed font-normal">
                WhatsApp Business API eliminates cold forms and long waiting times. Inbound leads receive immediate personalized engagement in their preferred language.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-border space-y-2 text-xs text-secondary font-mono">
              <div>
                Centralized corporate number: <strong className="text-primary">{REAL_RESULT_CONFIG.whatsapp.displayNumber}</strong>
              </div>
              <div className="text-gold-700">
                100% compliant with Meta Business API policies
              </div>
            </div>

            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-primary hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-card hover:shadow-gold-subtle group"
              >
                <MessageSquare className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                <span>TALK ON WHATSAPP</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
