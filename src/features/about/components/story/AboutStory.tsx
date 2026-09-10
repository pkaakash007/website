import React from "react";
import { Container } from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

export const AboutStory: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-border">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Where Engineering Rigor Meets Digital Performance
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              Founded in Erode, at the geographic and manufacturing heart of Tamil Nadu, Real Result was built on a simple premise: commercial growth in the digital era is an engineering discipline, not a guesswork exercise.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              While traditional marketing agencies rely on vanity impressions and offshore dev shops produce software disconnected from business pipelines, we engineered an integrated model. Every application we code is built for high search conversion, and every search campaign we run is supported by modern data architecture.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary">Unified Account Executive</h4>
                  <p className="text-xs text-secondary mt-0.5">One accountable leadership contact across all engineering and marketing deliverables.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary">Zero Black-Box Pricing</h4>
                  <p className="text-xs text-secondary mt-0.5">Transparent milestone scoping, clear hourly breakdowns, and complete IP handover.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-7 rounded-2xl bg-surface border border-border space-y-3">
                <h3 className="text-lg font-bold text-primary">Erode Central Lab</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Our central headquarters in Erode serves as our primary engineering hub and client briefing center for Tamil Nadu enterprises.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-surface border border-border space-y-3">
                <h3 className="text-lg font-bold text-primary">Statewide Reach</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Active client partnerships across Coimbatore, Chennai, Tiruppur, Salem, Madurai, Trichy, and national commercial corridors.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-surface border border-border space-y-3 sm:col-span-2">
                <h3 className="text-lg font-bold text-primary">Global Standards</h3>
                <p className="text-xs text-secondary leading-relaxed">
                  Engineering adhering strictly to international OWASP security protocols, WCAG accessibility benchmarks, and Google Search quality rater guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStory;
