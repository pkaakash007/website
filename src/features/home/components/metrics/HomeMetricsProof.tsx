import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import MetricCard from "./MetricCard";

export const HomeMetricsProof: React.FC = () => {
  const stats = [
    {
      value: "4.8x",
      label: "Average Client ROAS",
      note: "Measured across Google Ads, Meta & high-intent organic funnels.",
    },
    {
      value: "99.98%",
      label: "Production Cloud SLA",
      note: "Continuous automated uptime monitoring across web & mobile backends.",
    },
    {
      value: "10M+",
      label: "Search & App Engagements",
      note: "Processed across our client portals, APIs, and commercial systems.",
    },
    {
      value: "150+",
      label: "Deployments Across Tamil Nadu & Global",
      note: "Across manufacturing, textile exports, healthcare, and SaaS sectors.",
    },
  ];

  return (
    <section className="py-20 bg-charcoal text-white relative">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="gold">Measured Performance</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Proof in Hard Numbers
          </h2>
          <p className="text-charcoal-muted text-base leading-relaxed">
            We hold ourselves to mathematical standards. Every campaign and codebase is monitored in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => (
            <MetricCard key={idx} {...s} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeMetricsProof;
