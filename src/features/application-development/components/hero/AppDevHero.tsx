import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import { Code2, CheckCircle2 } from "lucide-react";

export const AppDevHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white border-b border-border">
      <Container size="wide">
        <Breadcrumbs items={[{ label: "Application Development" }]} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center mt-6">
          {/* Left Column: Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-900 text-xs font-semibold">
              <Code2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>Full-Cycle Application Engineering · Web & Mobile</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Modern Application Development Engineered for Enterprise Scale.
            </h1>

            <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-2xl font-normal">
              From high-speed web apps and cross-platform mobile apps (iOS & Android) to multi-tenant cloud SaaS and custom enterprise ERPs. We engineer robust, secure software built to scale effortlessly.
            </p>

            {/* Quick Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-border text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>iOS & Android Native & Cross-Platform</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-border text-xs font-medium text-primary">
                <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                <span>Modern React & Node.js Microservices</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-lg bg-surface border border-border text-xs font-medium text-primary">
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
                className="cursor-pointer font-bold"
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
            <div className="pt-6 border-t border-border flex flex-wrap gap-8 items-center">
              <div>
                <span className="block text-2xl font-bold text-primary">99.98%</span>
                <span className="text-xs text-muted">Cloud Uptime SLA</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold text-primary">&lt;100ms</span>
                <span className="text-xs text-muted">API Latency Target</span>
              </div>
              <div className="w-px h-8 bg-border hidden sm:block" />
              <div>
                <span className="block text-2xl font-bold text-primary">100%</span>
                <span className="text-xs text-muted">Source Code Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: User's Flagship Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-border shadow-md bg-white">
              <img
                src="/images/application-development-hero.jpg"
                alt="Real Result Application Development, Mobile Apps and Cloud Architecture"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="p-4 bg-surface border-t border-border flex items-center justify-between text-xs text-secondary">
                <span className="font-semibold text-primary">Full-Stack Application Suite</span>
                <span className="text-muted">iOS · Android · Web · Cloud APIs</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevHero;
