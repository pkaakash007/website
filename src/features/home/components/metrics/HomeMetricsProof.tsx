import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import MetricCard from "./MetricCard";

export const HomeMetricsProof: React.FC = () => {
  const stats = [
    { value: "4.8×", label: "Average Client ROAS", note: "Measured across Google Ads, Meta & high-intent organic funnels." },
    { value: "99.98%", label: "Production Cloud SLA", note: "Continuous automated uptime monitoring across web & mobile backends." },
    { value: "10M+", label: "Search & App Engagements", note: "Processed across client portals, APIs, and commercial systems." },
    { value: "500+", label: "Businesses Across Tamil Nadu", note: "Across manufacturing, textile exports, healthcare, and SaaS sectors." },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#111110] text-white relative overflow-hidden">
      {/* Aeren: subtle large watermark behind stats */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="text-[clamp(8rem,22vw,20rem)] font-black tracking-[-0.06em] leading-none"
          style={{ color: "rgba(255,255,255,0.025)" }}
        >
          PROOF
        </span>
      </div>

      <Container size="wide" className="relative z-10">
        <SectionHeader
          badge="Measured Performance"
          badgeVariant="outline"
          title="Proof in Hard Numbers"
          subtitle="We hold ourselves to mathematical standards. Every campaign and codebase is monitored in real time."
          align="left"
          className="max-w-xl mb-16 [&_h2]:text-white [&_p]:text-[rgba(255,255,255,0.50)] [&_.ae-eyebrow]:text-[rgba(255,255,255,0.35)] [&_span]:border-[rgba(255,255,255,0.15)] [&_span]:text-[rgba(255,255,255,0.45)] [&_span]:bg-transparent"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(255,255,255,0.07)] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)]">
          {stats.map((s, idx) => (
            <MetricCard key={idx} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeMetricsProof;
