"use client";

import React from "react";
import Container from "../layout/Container";
import SectionHeader from "../shared/SectionHeader";
import { Check, X, Shield, ArrowRight } from "lucide-react";
import Button from "../shared/Button";
import { openLeadModal } from "../shared/LeadModal";

const comparisonRows = [
  {
    feature: "Cross-Disciplinary Alignment",
    realResult: "Unified architecture connecting Software, Ads, Voice AI, & Staffing.",
    fragmented: "4-6 separate agencies with misaligned incentives and finger-pointing.",
  },
  {
    feature: "AI Voice & Telephony Setup",
    realResult: "Native in-house low-latency regional AI voice engine & carrier trunks.",
    fragmented: "Outsourced to third-party resellers with high latency and marked-up rates.",
  },
  {
    feature: "Data & Attribution Clarity",
    realResult: "Single source of truth linking ad spend directly to phone conversions and sales.",
    fragmented: "Siloed dashboards with conflicting metrics and duplicate conversion counts.",
  },
  {
    feature: "Engineering & Tech Velocity",
    realResult: "Dedicated full-stack engineering team building custom software & APIs.",
    fragmented: "Slow offshore contractors or no technical capabilities inside ad agencies.",
  },
  {
    feature: "Talent & Team Scalability",
    realResult: "Integrated executive search & workforce recruiting on demand.",
    fragmented: "Expensive external recruiters with zero understanding of tech stack.",
  },
  {
    feature: "Accountability & SLA",
    realResult: "Single enterprise SLA with dedicated account leadership and 99.98% uptime.",
    fragmented: "Scattered vendor contracts, multiple invoices, and no single point of contact.",
  },
];

export default function UnifiedModel() {
  return (
    <section className="py-20 sm:py-28 bg-canvas relative">
      <Container size="wide">
        <SectionHeader
          badge="THE UNIFIED ADVANTAGE"
          title={
            <>
              Why fragmented agencies fail — and{" "}
              <span className="font-serif italic font-normal text-primary">unified execution</span> wins.
            </>
          }
          subtitle="Modern enterprises lose momentum coordinating separate software shops, marketing agencies, telephony vendors, and recruiters. We fix this."
        />

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-border shadow-card overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-surface border-b border-border p-5 sm:p-6 text-xs font-bold uppercase tracking-wider">
            <div className="md:col-span-4 text-muted">Operational Capability</div>
            <div className="md:col-span-4 text-brand-teal-dark flex items-center gap-1.5 mt-2 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
              Real Result Unified Model
            </div>
            <div className="md:col-span-4 text-muted mt-2 md:mt-0">
              Traditional Multi-Vendor Chaos
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 text-sm hover:bg-canvas/50 transition-colors items-center gap-3 md:gap-0"
              >
                <div className="md:col-span-4 font-semibold text-primary">
                  {row.feature}
                </div>
                <div className="md:col-span-4 text-secondary flex items-start gap-2.5 pr-4">
                  <div className="w-5 h-5 rounded-full bg-brand-teal-light text-brand-teal flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs leading-relaxed text-primary font-medium">
                    {row.realResult}
                  </span>
                </div>
                <div className="md:col-span-4 text-muted flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs leading-relaxed text-secondary">
                    {row.fragmented}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Card Footer */}
          <div className="p-6 bg-surface border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-secondary">
              <Shield className="w-4 h-4 text-brand-teal" />
              <span>Consolidated billing, singular SLA, and seamless cross-team velocity.</span>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => openLeadModal()}
              withArrow
            >
              Discuss Your Migration
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
