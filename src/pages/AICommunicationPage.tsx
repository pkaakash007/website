import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { ContactForm } from "@/components/common/ContactForm";
import {
  Bot,
  PhoneCall,
  Languages,
  Radio,
  Headphones,
  ShieldCheck,
  MessageSquare,
  Zap,
  Activity,
  PhoneOutgoing,
  Lock,
  Sparkles,
  Server,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  PhoneForwarded,
  Bell,
  Mail,
  Fingerprint,
} from "lucide-react";


const serviceCategories = [
  {
    category: "AI Voice & Telecalling Engines",
    icon: Bot,
    items: [
      {
        title: "AI Telecalling in Regional Languages",
        desc: "Autonomous conversational AI agents speaking Hindi, Tamil, Telugu, Kannada, Marathi, Bengali, Gujarati, and Indian English with sub-400ms speech turnaround.",
      },
      {
        title: "Interactive Voice Bots (AI IVR)",
        desc: "Natural human-like voice responders handling complex tier-1 customer inquiries, bookings, and payments with zero human queue wait times.",
      },
      {
        title: "Automated Bulk IVR Broadcasting",
        desc: "Broadcast personalized voice blasts to hundreds of thousands of concurrent contacts with dynamic data injection and DTMF input capture.",
      },
      {
        title: "Conversational Speech Analytics",
        desc: "Real-time acoustic analysis, sentiment detection, automated call summaries, and regulatory compliance monitoring on 100% of calls.",
      },
    ],
  },
  {
    category: "Call Center & Cloud Telephony",
    icon: PhoneCall,
    items: [
      {
        title: "Outbound Call Center Dialers",
        desc: "Predictive, progressive, and preview dialers maximizing agent active talk time by automatically filtering busy signals and answering machines.",
      },
      {
        title: "Inbound Call Management & Smart Routing",
        desc: "Skill-based routing, automated business hours routing, multi-tier queue management, and VIP caller prioritization.",
      },
      {
        title: "Call Masking & Number Privacy",
        desc: "Protect customer and driver/agent phone numbers through temporary virtual number bridges and encrypted audio sessions.",
      },
      {
        title: "Virtual & Toll-Free Numbers (1800)",
        desc: "Instant provisioning of national 1800 toll-free numbers and local DIDs across 100+ countries with unified routing.",
      },
      {
        title: "Click-to-Call & Missed Call Services",
        desc: "Embed instant one-click calling in web apps and capture leads via zero-cost missed call verification workflows.",
      },
      {
        title: "Marketing Call Tracking & DNI",
        desc: "Dynamic Number Insertion attribution mapping incoming phone leads directly to Google Search, Meta ads, and SEO keywords.",
      },
    ],
  },
  {
    category: "Messaging, CPaaS & OTP Infrastructure",
    icon: MessageSquare,
    items: [
      {
        title: "WhatsApp Business API",
        desc: "Official green-tick verified WhatsApp messaging for interactive catalogs, AI bot flows, transaction receipts, and customer support.",
      },
      {
        title: "RCS Business Messaging & Bulk SMS",
        desc: "Rich interactive RCS cards, verified sender branding, and ultra-high-throughput transactional and promotional SMS routes.",
      },
      {
        title: "Transactional OTP, 2FA & Voice OTP",
        desc: "Mission-critical 2-factor authentication delivery with automated voice OTP fallback ensuring 99.99% login completion.",
      },
      {
        title: "SIP Trunking, WebRTC VoIP & CCaaS",
        desc: "Elastic SIP connectivity, browser-based WebRTC softphone SDKs, and Contact Center as a Service architecture.",
      },
      {
        title: "Enterprise Email Relay & Push Notifications",
        desc: "Dedicated SMTP relay for high-volume transactional email, web push, and in-app messaging triggers.",
      },
      {
        title: "Omnichannel CPaaS Gateway",
        desc: "Unified REST APIs and webhooks connecting Voice, SMS, WhatsApp, Email, and In-App messaging to your central CRM.",
      },
    ],
  },
];

const languagesSupported = [
  { lang: "Hindi", speakers: "500M+ Native", code: "hi-IN" },
  { lang: "Tamil", speakers: "80M+ Native", code: "ta-IN" },
  { lang: "Telugu", speakers: "85M+ Native", code: "te-IN" },
  { lang: "Kannada", speakers: "45M+ Native", code: "kn-IN" },
  { lang: "Marathi", speakers: "90M+ Native", code: "mr-IN" },
  { lang: "Bengali", speakers: "100M+ Native", code: "bn-IN" },
  { lang: "Gujarati", speakers: "60M+ Native", code: "gu-IN" },
  { lang: "Malayalam", speakers: "35M+ Native", code: "ml-IN" },
  { lang: "Punjabi", speakers: "30M+ Native", code: "pa-IN" },
  { lang: "Indian English", speakers: "Pan-India", code: "en-IN" },
];

export default function AICommunicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-border relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-brand-teal-light/70 rounded-full blur-3xl -z-10"></div>
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <Badge variant="teal">AI Communication & Cloud Telephony</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Conversational <span className="font-serif italic font-normal text-primary">AI Voice</span>, Regional Telecalling & CPaaS.
            </h1>
            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Empower your business with natural multilingual AI telecalling agents, carrier-grade cloud dialers, WhatsApp Business API, and automated voice workflows engineered for massive concurrency.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button variant="teal" size="lg" href="#inquiry" withArrow>
                Deploy AI Telecalling
              </Button>
              <Button variant="secondary" size="lg" href="#catalog">
                Explore Full Catalog
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Languages Banner */}
      <section className="py-12 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-teal-dark flex items-center gap-1.5 mb-1">
                <Languages className="w-4 h-4 text-brand-teal" />
                Native Regional Speech Recognition
              </div>
              <h2 className="text-2xl font-bold text-primary">
                Multi-Dialect Indian & Global Regional Support
              </h2>
            </div>
            <p className="text-xs text-secondary max-w-md">
              Acoustic voice models tuned for local dialects, accents, and code-mixing (Hinglish, Tanglish) with zero uncanny robotic pauses.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {languagesSupported.map((l) => (
              <div
                key={l.lang}
                className="p-3.5 rounded-2xl bg-white border border-border flex flex-col justify-between shadow-2xs hover:border-brand-teal/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-primary">{l.lang}</span>
                  <span className="text-[10px] font-mono text-muted uppercase">{l.code}</span>
                </div>
                <span className="text-[11px] text-secondary mt-2">{l.speakers}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Detailed Service Catalog */}
      <section id="catalog" className="py-20 bg-white">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline">COMPREHENSIVE TELEPHONY SUITE</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mt-3">
              Full Spectrum Communication Architecture
            </h2>
            <p className="text-sm sm:text-base text-secondary mt-2">
              From low-latency AI telecalling and automated bulk IVRs to carrier SIP trunking and WhatsApp APIs.
            </p>
          </div>

          <div className="space-y-14">
            {serviceCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-8 h-8 rounded-lg bg-brand-teal-light text-brand-teal flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-bold text-primary">
                      {cat.category}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cat.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="p-6 rounded-2xl bg-canvas border border-border hover:border-brand-teal/40 hover:bg-white hover:shadow-card transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                            <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                          </div>
                          <h4 className="text-base font-bold text-primary mb-2">
                            {item.title}
                          </h4>
                          <p className="text-xs text-secondary leading-relaxed">
                            {item.desc}
                          </p>
                        </div>

                        <div className="mt-4 pt-3 border-t border-border/80 flex items-center justify-between text-[11px]">
                          <span className="text-muted">Enterprise Ready</span>
                          <span className="font-semibold text-brand-teal-dark">
                            SLA 99.98%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Inquiry Lead Form Section */}
      <section id="inquiry" className="py-20 bg-canvas border-t border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="teal">AI TELEPHONY CONSULTATION</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Pilot Regional AI Voice Agents for Your Enterprise
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                Connect with our telephony engineers to configure live demos, simulate regional voice conversations, and review SIP trunking integration workflows.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-border space-y-3 text-xs text-secondary">
                <div className="font-semibold text-primary">Included in Pilot:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Custom voice model prompt engineering in target regional dialects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>CRM webhook & real-time analytics dashboard integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                  <span>Dedicated SIP interconnect & telecom DND compliance scrubbing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm defaultDivision="AI Communication" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
