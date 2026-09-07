"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "../layout/Container";
import SectionHeader from "../shared/SectionHeader";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";
import {
  Bot,
  PhoneCall,
  Languages,
  Radio,
  Headphones,
  ShieldAlert,
  PhoneForwarded,
  MessageSquare,
  ShieldCheck,
  Zap,
  Activity,
  PhoneOutgoing,
  Lock,
  Sparkles,
  Server,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const communicationPillars = [
  {
    category: "AI Voice & Telecalling",
    icon: Bot,
    items: [
      {
        name: "Regional Language AI Telecalling",
        tag: "Core Feature",
        desc: "Autonomous conversational AI phone agents fluent in Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, and 12+ dialects with real-time intent recognition.",
      },
      {
        name: "Interactive Voice Bots (IVR)",
        tag: "Automated",
        desc: "Human-like natural voice response bots resolving tier-1 inquiries, appointment confirmations, and payment reminders without human agent queues.",
      },
      {
        name: "Automated Bulk IVR",
        tag: "High Volume",
        desc: "Broadcast personalized voice blasts to hundreds of thousands of contacts concurrently with instant DTMF feedback and retry logic.",
      },
      {
        name: "Conversational Speech Analytics",
        tag: "Intelligence",
        desc: "Automated transcriptions, sentiment scoring, compliance keyword tracking, and real-time agent guidance during live voice calls.",
      },
    ],
  },
  {
    category: "Cloud Telephony & Call Centers",
    icon: PhoneCall,
    items: [
      {
        name: "Outbound Call Center Dialers",
        tag: "High Velocity",
        desc: "Predictive, progressive, and preview dialers maximizing agent talk-time while automating CRM contact workflows.",
      },
      {
        name: "Inbound Call Management & Smart Routing",
        tag: "Enterprise",
        desc: "Skill-based routing, priority queues, interactive multi-level IVR, and business-hours overflow routing.",
      },
      {
        name: "Call Masking & Number Privacy",
        tag: "Privacy First",
        desc: "Protect customer and delivery/driver personal numbers with temporary virtual numbers and end-to-end encrypted session bridges.",
      },
      {
        name: "Virtual & Toll-Free Numbers",
        tag: "Global",
        desc: "National 1800/800 toll-free numbers, local DIDs in 100+ countries, and centralized call tracking for marketing attribution.",
      },
    ],
  },
  {
    category: "Enterprise Messaging & CPaaS",
    icon: MessageSquare,
    items: [
      {
        name: "WhatsApp Business API",
        tag: "Verified",
        desc: "Official green-tick WhatsApp API with rich interactive templates, AI chatbot integrations, catalog checkouts, and 24/7 session management.",
      },
      {
        name: "RCS Business Messaging & Bulk SMS",
        tag: "Next-Gen",
        desc: "Branded interactive carousels, action buttons, delivery receipts, and high-throughput transactional/promotional SMS pipelines.",
      },
      {
        name: "Transactional OTP, 2FA & Voice OTP",
        tag: "Sub-Second",
        desc: "High-deliverability authentication pipelines with instant automated voice fallback for uninterrupted user logins.",
      },
      {
        name: "SIP Trunking & WebRTC VoIP / CCaaS",
        tag: "Carrier Grade",
        desc: "Elastic SIP trunks with 99.98% SLA, browser-based WebRTC softphones, and full contact center as a service (CCaaS).",
      },
    ],
  },
];

export default function AICommunicationFocus() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-white border-y border-border relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-teal-light/50 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <Container size="wide">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-teal-light text-brand-teal-dark border border-brand-teal-border mb-3.5">
              <Sparkles className="w-3.5 h-3.5" />
              Strategic Business Core
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.15]">
              AI Telecalling & <span className="font-serif italic font-normal text-primary">Regional Voice</span> Infrastructure.
            </h2>
            <p className="text-base sm:text-lg text-secondary leading-relaxed mt-3">
              Power millions of conversational touchpoints with low-latency regional AI voice bots, automated dialers, WhatsApp API, and carrier-grade cloud telephony.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="teal"
              size="md"
              onClick={() => openLeadModal("AI Communication")}
              withArrow
            >
              Deploy AI Voice Agents
            </Button>
            <Button
              variant="secondary"
              size="md"
              href="/ai-communication"
            >
              Full Service Catalog
            </Button>
          </div>
        </div>

        {/* Pillar Switcher Buttons */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-canvas rounded-2xl border border-border mb-8 max-w-2xl">
          {communicationPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;
            return (
              <button
                key={pillar.category}
                onClick={() => setActivePillar(idx)}
                className={`flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-white text-primary shadow-subtle border border-border"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-brand-teal" : "text-muted"}`} />
                <span>{pillar.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communicationPillars[activePillar].items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-canvas border border-border hover:border-brand-teal/40 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-brand-teal-light text-brand-teal-dark border border-brand-teal-border">
                    {item.tag}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-xs text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] text-muted">Zero packet loss</span>
                <span className="text-[11px] font-semibold text-brand-teal-dark flex items-center gap-0.5">
                  Live SLA <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Language Callout Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-surface border border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-brand-teal shrink-0">
              <Languages className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-primary">
                Multi-Dialect & Regional Language Support
              </h4>
              <p className="text-xs text-secondary mt-0.5">
                Native speech-to-speech AI models for Hindi, Tamil, Telugu, Kannada, Bengali, Gujarati, Marathi, Malayalam, Punjabi, and Indian English.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/ai-communication"
              className="text-xs font-semibold text-primary hover:text-brand-teal-dark flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Voice Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
