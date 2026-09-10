
import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Zap, Activity, TrendingUp, Users } from "lucide-react";

const metrics = [
  {
    value: "99.98%",
    label: "Telephony & Cloud SLA",
    description: "Carrier-grade SIP trunks & redundant cloud infrastructure ensuring zero downtime.",
    icon: Zap,
  },
  {
    value: "10M+",
    label: "AI Conversations Handled",
    description: "Multilingual AI voice calls and automated bulk IVRs processed with natural fluency.",
    icon: Activity,
  },
  {
    value: "4.2x",
    label: "Average Growth Multiplier",
    description: "Measurable ROAS and pipeline expansion across paid search, social, and SEO channels.",
    icon: TrendingUp,
  },
  {
    value: "500+",
    label: "Enterprise Roles Placed",
    description: "High-impact software engineers, team leads, and executives recruited on demand.",
    icon: Users,
  },
];

export default function MetricsImpact() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-border relative">
      <Container size="wide">
        <SectionHeader
          badge="MEASURABLE IMPACT"
          title="Proven outcomes across scale, speed and reliability."
          subtitle="We measure success not by vanity metrics, but by reliable systems, customer interactions delivered, and bottom-line expansion."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-canvas border border-border hover:border-brand-teal/40 hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center text-primary group-hover:text-brand-teal group-hover:border-brand-teal/40 transition-all mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight font-mono mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-primary mb-2">
                    {metric.label}
                  </div>
                  <p className="text-xs text-secondary leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center gap-1.5 text-[11px] text-brand-teal-dark font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal"></span>
                  Verified Enterprise Outcome
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
