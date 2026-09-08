import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Code2,
  Smartphone,
  Server,
  Cloud,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export const AppDevHero: React.FC = () => {
  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-canvas via-white to-canvas border-b border-border overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-gold/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <Container size="wide">
        <Breadcrumbs items={[{ label: "Application Development" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-6">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-mono uppercase tracking-widest font-bold shadow-subtle">
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Full-Cycle Application Engineering · Web & Mobile</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.08]">
              Modern{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Application Development
              </span>{" "}
              Engineered for Enterprise Scale.
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed max-w-2xl font-normal">
              From responsive high-speed web apps and cross-platform mobile apps (iOS & Android) to multi-tenant cloud SaaS and custom enterprise ERPs. We engineer robust, secure software built to scale effortlessly.
            </p>

            {/* Quick Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface border border-border/80 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>iOS & Android Native/Cross-Platform</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface border border-border/80 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Modern React & Node.js Microservices</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-surface border border-border/80 text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>High-Availability Cloud Architecture</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("app-dev-hero")}
                className="cursor-pointer shadow-gold-subtle font-bold"
              >
                Discuss Your App Requirement
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#app-services"
                className="border-border text-primary hover:bg-surface"
              >
                Explore Engineering Disciplines
              </Button>
            </div>

            {/* Metrics */}
            <div className="pt-6 border-t border-border flex flex-wrap gap-8 items-center text-sm">
              <div>
                <span className="block text-2xl font-bold font-mono text-primary">99.98%</span>
                <span className="text-xs text-muted">Cloud Uptime SLA</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold font-mono text-primary">&lt;100ms</span>
                <span className="text-xs text-muted">API Latency Target</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold font-mono text-primary">100%</span>
                <span className="text-xs text-muted">Source Code Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: User's Flagship Application Development Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto rounded-3xl p-2 bg-gradient-to-tr from-blue-300 via-white to-gold-400/40 shadow-floating border border-blue-200/60">
              <div className="relative rounded-2xl overflow-hidden group">
                <img
                  src="/images/application-development-hero.jpg"
                  alt="Real Result Application Development, Mobile Apps and Cloud Architecture"
                  className="w-full h-auto object-cover rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                />

                {/* Floating Glass Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl glass-panel-dark text-white border border-white/10 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">Full-Stack Ecosystem</p>
                      <p className="text-[11px] text-gray-300">Mobile Apps · Web Apps · Cloud APIs</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevHero;
