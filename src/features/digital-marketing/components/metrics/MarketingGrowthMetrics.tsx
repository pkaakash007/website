import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";

export const MarketingGrowthMetrics: React.FC = () => {
  const metrics = [
    {
      value: "340%",
      label: "Average Organic Traffic Growth",
      subtext: "Achieved across client domains within 6 months of programmatic SEO deployment.",
    },
    {
      value: "4.8x",
      label: "Verified Return on Ad Spend (ROAS)",
      subtext: "Google Search Ads & Meta Campaigns with negative keyword gating.",
    },
    {
      value: "94%",
      label: "Google Maps 3-Pack Presence",
      subtext: "Dominating local discovery across target Tamil Nadu and tier-1 metro clusters.",
    },
    {
      value: "₹18 Cr+",
      label: "Client Revenue Pipeline Generated",
      subtext: "Directly tracked via CRM lead routing and verified enterprise purchases.",
    },
  ];

  return (
    <section className="py-20 bg-charcoal text-white relative">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="gold">Proven Performance</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Performance Quantified, Not Promised.
          </h2>
          <p className="text-charcoal-muted text-base leading-relaxed">
            Every rupee invested into our digital marketing campaigns is tracked against customer acquisition cost (CAC), pipeline volume, and bottom-line gross margin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
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
                {item.subtext}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MarketingGrowthMetrics;
