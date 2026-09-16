import React from "react";
import { Container } from "@/components/layout/Container";

export const AppDevArchitectureHighlights: React.FC = () => {
  const highlights = [
    {
      title: "Bank-Grade Data Security",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), and automated vulnerability testing.",
    },
    {
      title: "Sub-100ms API Performance",
      desc: "Optimized database indexing, Redis memory caching layers, connection pooling, and CDN edge caching to ensure lightning-fast responses.",
    },
    {
      title: "Multi-Tenant Scalability",
      desc: "Logical or schema-level database isolation, custom tenant domains, automated workspace provisioning, and per-tenant metric tracking.",
    },
    {
      title: "Full Intellectual Property Transfer",
      desc: "You retain 100% ownership of source code, git repositories, architectural schematics, and cloud access keys upon project completion.",
    },
    {
      title: "Regional & Billing Capabilities",
      desc: "Seamless support for Indian GST billing standards, Tamil Nadu localized tax compliance, multi-currency conversion, and English-Tamil interfaces.",
    },
    {
      title: "Automated Failover & Backups",
      desc: "Hourly encrypted snapshot backups, point-in-time database restoration, multi-availability zone replication, and 99.98% uptime SLA compliance.",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6] border-t border-b border-neutral-200">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Core Promise */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-32">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] tracking-wider uppercase">
                <span>Enterprise Standards</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2036] tracking-tight leading-tight">
                Engineered for Stability, Security &amp; Speed
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed font-normal">
                Enterprise software requires strict architectural guardrails. Here is how our engineering team protects your business continuity from day one.
              </p>
            </div>

            {/* Highlight Guarantee Box */}
            <div className="p-6 rounded-xl bg-white border border-neutral-200 space-y-2 shadow-2xs">
              <div className="text-xs font-semibold text-[#0E2036] uppercase tracking-wider">
                Engineering Commitment
              </div>
              <p className="text-sm font-medium text-neutral-700 leading-relaxed">
                100% source code handover, zero vendor lock-in, and sub-second response times across all devices.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Engineering Standards with Clean Editorial Lines */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="pt-5 border-t border-neutral-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-neutral-400 mb-2 tracking-wide">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#0E2036] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevArchitectureHighlights;
