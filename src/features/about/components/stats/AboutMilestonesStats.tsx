import React from "react";
import { Container } from "@/components/layout/Container";

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
    <section className="py-20 bg-charcoal text-white relative">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
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
              className="p-8 rounded-2xl bg-charcoal-surface border border-charcoal-border flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl font-bold text-gold mb-2">
                  {item.value}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
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
