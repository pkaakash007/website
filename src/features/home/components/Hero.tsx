
import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Bot,
  Code2,
  TrendingUp,
  Users,
  PhoneCall,
  Activity,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  Shield,
  Zap,
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"ai" | "tech" | "marketing" | "hr">("ai");

  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
      {/* Background Subtle Gradient & Grid Glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e4e0_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-teal-light/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <Container size="wide">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Eyebrow Badge */}
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
            <Badge variant="outline" className="shadow-2xs">
              Modern Business Solutions
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-primary leading-[1.08] animate-in fade-in slide-in-from-bottom-4 duration-600">
            One Partner for Technology, Marketing, AI Communication & HR.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-secondary leading-relaxed max-w-2xl font-normal animate-in fade-in slide-in-from-bottom-5 duration-700">
            We integrate four critical business capabilities under one unified delivery model — helping enterprise and high-growth companies scale with precision.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 animate-in fade-in slide-in-from-bottom-6 duration-800">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openLeadModal()}
              withArrow
              className="shadow-md hover:shadow-lg"
            >
              Talk to an Expert
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="#divisions"
            >
              Explore Solutions
            </Button>
          </div>
        </div>

        {/* Interactive Unified Telemetry Platform Preview */}
        <div className="mt-16 sm:mt-20 max-w-5xl mx-auto rounded-3xl bg-white border border-border p-4 sm:p-8 shadow-card relative animate-in fade-in zoom-in-95 duration-900">
          {/* Top Bar / Switcher Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-border gap-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
              </div>
              <span className="text-xs font-mono text-muted ml-2">
                realresult.enterprise / unified-engine v2.4
              </span>
            </div>

            {/* Division Interactive Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-surface rounded-2xl border border-border">
              <button
                onClick={() => setActiveTab("ai")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === "ai"
                    ? "bg-white text-primary shadow-2xs font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <Bot className="w-3.5 h-3.5 text-brand-teal" />
                AI Communication
              </button>
              <button
                onClick={() => setActiveTab("tech")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === "tech"
                    ? "bg-white text-primary shadow-2xs font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <Code2 className="w-3.5 h-3.5 text-blue-600" />
                Technology
              </button>
              <button
                onClick={() => setActiveTab("marketing")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === "marketing"
                    ? "bg-white text-primary shadow-2xs font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
                Marketing
              </button>
              <button
                onClick={() => setActiveTab("hr")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  activeTab === "hr"
                    ? "bg-white text-primary shadow-2xs font-semibold"
                    : "text-secondary hover:text-primary"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                Human Capital
              </button>
            </div>
          </div>

          {/* Interactive Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Interactive Panel */}
            <div className="lg:col-span-7 space-y-4">
              {activeTab === "ai" && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-teal-light text-brand-teal-dark text-xs font-medium border border-brand-teal-border">
                    <PhoneCall className="w-3.5 h-3.5" />
                    Regional Voice & AI Telephony Engine
                  </div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">
                    Natural Multilingual Conversations at Scale
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Deploy AI telecalling agents in Hindi, Tamil, Telugu, Kannada, English and 8+ regional languages with sub-400ms conversational latency and native CRM integrations.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Daily Outbound Capacity</div>
                      <div className="text-xl font-bold text-primary mt-0.5">500,000+ Calls</div>
                      <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Auto-predictive dialer
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Languages Supported</div>
                      <div className="text-xl font-bold text-primary mt-0.5">12+ Regional</div>
                      <div className="text-[11px] text-brand-teal-dark flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Emotion & accent aware
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tech" && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200">
                    <Code2 className="w-3.5 h-3.5" />
                    Custom Software & Cloud Architecture
                  </div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">
                    Mission-Critical Systems Built to Last
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    From Next.js web applications and mobile apps to microservices, ERP integrations, and machine learning pipelines engineered for high concurrency.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">API Response SLA</div>
                      <div className="text-xl font-bold text-primary mt-0.5">&lt; 35ms</div>
                      <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1">
                        <Zap className="w-3 h-3" /> Global edge CDN
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Code Quality & Security</div>
                      <div className="text-xl font-bold text-primary mt-0.5">SOC2 & ISO</div>
                      <div className="text-[11px] text-blue-600 flex items-center gap-1 mt-1">
                        <Shield className="w-3 h-3" /> Automated CI/CD audits
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "marketing" && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium border border-indigo-200">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Omnichannel Growth & Attribution
                  </div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">
                    Acquisition Driven by Hard Business Metrics
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    High-intent organic search dominance, precision paid search, programmatic media buying, paid social, and DOOH media measured with multi-touch attribution.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Average ROAS Lift</div>
                      <div className="text-xl font-bold text-primary mt-0.5">4.2x Multiplier</div>
                      <div className="text-[11px] text-indigo-600 flex items-center gap-1 mt-1">
                        <Activity className="w-3 h-3" /> Real-time bid optimization
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Channel Coverage</div>
                      <div className="text-xl font-bold text-primary mt-0.5">Digital + DOOH</div>
                      <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Unified reporting hub
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "hr" && (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
                    <Users className="w-3.5 h-3.5" />
                    Human Capital & Talent Search
                  </div>
                  <h3 className="text-2xl font-bold text-primary tracking-tight">
                    Building High-Velocity Leadership & Teams
                  </h3>
                  <p className="text-sm text-secondary leading-relaxed">
                    Connecting tier-one organizations with executive talent, engineering leaders, specialized operators, and scalable workforce solutions.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Placement Velocity</div>
                      <div className="text-xl font-bold text-primary mt-0.5">14 Days Avg.</div>
                      <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Vetted talent bench
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-canvas border border-border">
                      <div className="text-xs text-muted font-medium">Year-1 Retention</div>
                      <div className="text-xl font-bold text-primary mt-0.5">94.8%</div>
                      <div className="text-[11px] text-emerald-600 flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> Cultural & technical fit
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Telemetry Live Box */}
            <div className="lg:col-span-5 bg-canvas rounded-2xl border border-border p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-border text-xs">
                <span className="font-semibold text-primary flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-brand-teal" /> Live Execution Stream
                </span>
                <span className="font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  HEALTHY (99.98%)
                </span>
              </div>

              {/* Real-time simulation stream */}
              <div className="space-y-2.5 font-mono text-[11px]">
                <div className="p-2.5 rounded-lg bg-white border border-border/80 flex items-start justify-between">
                  <div>
                    <span className="text-brand-teal font-semibold">[AI-VOICE]</span>
                    <p className="text-primary mt-0.5 font-sans">Campaign &quot;Renewal-IN&quot; active</p>
                    <span className="text-[10px] text-muted font-sans">Regional bot handling 1,420 concurrent calls</span>
                  </div>
                  <span className="text-[10px] text-muted">Just now</span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-border/80 flex items-start justify-between">
                  <div>
                    <span className="text-blue-600 font-semibold">[TECH-API]</span>
                    <p className="text-primary mt-0.5 font-sans">Microservice deployment synced</p>
                    <span className="text-[10px] text-muted font-sans">Zero latency spike detected on US-East & APAC</span>
                  </div>
                  <span className="text-[10px] text-muted">2m ago</span>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-border/80 flex items-start justify-between">
                  <div>
                    <span className="text-indigo-600 font-semibold">[MKT-ROAS]</span>
                    <p className="text-primary mt-0.5 font-sans">Attribution event captured</p>
                    <span className="text-[10px] text-muted font-sans">High-intent pipeline value: $142,000</span>
                  </div>
                  <span className="text-[10px] text-muted">4m ago</span>
                </div>
              </div>

              <div className="pt-2 border-t border-border flex items-center justify-between">
                <span className="text-xs text-secondary">Want unified orchestration?</span>
                <button
                  onClick={() => openLeadModal()}
                  className="text-xs font-semibold text-brand-teal-dark hover:underline flex items-center gap-1"
                >
                  Consult division leads <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
