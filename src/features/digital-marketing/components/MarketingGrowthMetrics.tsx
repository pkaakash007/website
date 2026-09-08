import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { TrendingUp, Award, BarChart2, ShieldCheck } from "lucide-react";

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
    <section className="py-20 bg-charcoal text-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-4">
          <Badge variant="gold">PROVEN PERFORMANCE TELEMETRY</Badge>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
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
              className="p-8 rounded-3xl bg-charcoal-surface border border-charcoal-border hover:border-gold/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="text-4xl sm:text-5xl font-black font-mono text-gold mb-3">
                  {item.value}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
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
