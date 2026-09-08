import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import {
  ShieldCheck,
  Lock,
  Cpu,
  Layers,
  Zap,
  Globe2,
} from "lucide-react";

export const AppDevArchitectureHighlights: React.FC = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Bank-Grade Data Security",
      desc: "AES-256 encryption at rest, TLS 1.3 in transit, role-based access control (RBAC), and automated penetration testing against OWASP Top 10 vulnerabilities.",
    },
    {
      icon: Zap,
      title: "Sub-100ms API Performance",
      desc: "Optimized database indexing, Redis memory caching layers, connection pooling, and CDN edge caching to ensure lightning-fast responses even at peak traffic.",
    },
    {
      icon: Layers,
      title: "Multi-Tenant Scalability",
      desc: "Logical or schema-level database isolation, custom tenant domains, automated workspace provisioning, and per-tenant metric tracking for SaaS models.",
    },
    {
      icon: Lock,
      title: "Full Intellectual Property Transfer",
      desc: "You retain 100% ownership of source code, git repositories, architectural schematics, and cloud access keys upon project completion with zero recurring royalty fees.",
    },
    {
      icon: Globe2,
      title: "Regional & Billing Capabilities",
      desc: "Seamless support for Indian GST billing standards, Tamil Nadu localized tax compliance, multi-currency conversion, and English-Tamil bilingual interfaces.",
    },
    {
      icon: Cpu,
      title: "Automated Failover & Backups",
      desc: "Hourly encrypted snapshot backups, point-in-time database restoration, multi-availability zone replication, and 99.98% uptime SLA compliance.",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="outline">Enterprise Standards</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Engineered for Stability, Security & Speed
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Enterprise software requires strict architectural guardrails. Here is how our engineering team protects your business continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-canvas border border-border hover:border-gold/50 transition-colors space-y-3"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center text-primary shadow-sm">
                  <Icon className="w-5 h-5 text-gold-700" />
                </div>
                <h3 className="text-lg font-bold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AppDevArchitectureHighlights;
