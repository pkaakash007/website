import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";

export const AboutMilestonesStats: React.FC = () => {
  const stats = [
    {
      value: "10M+",
      label: "Interactions Processed",
      desc: "Across our client web portals, API microservices, and marketing funnels.",
    },
    {
      value: "99.98%",
      label: "Production Uptime SLA",
      desc: "Carrier-grade cloud availability and proactive 24/7 technical monitoring.",
    },
    {
      value: "150+",
      label: "Enterprise Deployments",
      desc: "Delivered across manufacturing, export, healthcare, retail, and SaaS sectors.",
    },
    {
      value: "4.2x",
      label: "Average Revenue Multiple",
      desc: "Measured across client digital marketing and software automation investments.",
    },
  ];

  return (
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-4">
          <Badge variant="gold">VERIFIED METRICS</Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Scale Backed by Verifiable Telemetry
          </h2>
          <p className="text-charcoal-muted text-base leading-relaxed">
            Real Result is designed for enterprises where downtime, broken funnels, or missed search rankings directly impact payroll and inventory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-charcoal-surface border border-charcoal-border hover:border-gold/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-black font-mono text-gold mb-2">
                  {item.value}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed mt-4 pt-4 border-t border-charcoal-border">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutMilestonesStats;
