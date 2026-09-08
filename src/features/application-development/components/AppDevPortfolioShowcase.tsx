import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowUpRight, CheckCircle2, Smartphone, Globe, Layers } from "lucide-react";

export const AppDevPortfolioShowcase: React.FC = () => {
  const projects = [
    {
      title: "Textile & Apparel ERP Platform",
      category: "Custom Enterprise Software · Erode & Tiruppur",
      icon: Layers,
      description:
        "Engineered a multi-factory ERP system tracking yarn lot numbers, dye-house chemical recipes, cutting-to-packing stages, and automated GST e-invoicing for a 1,200-employee apparel exporter.",
      metrics: ["42% Reduction in Inventory Lag", "Real-Time Factory IoT Sync", "100% Tax Audit Compliance"],
      tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      title: "Cross-Platform Telehealth Mobile App",
      category: "iOS & Android Mobile Application",
      icon: Smartphone,
      description:
        "Built a HIPAA-ready patient consultation app with encrypted WebRTC video calling, bilingual Tamil-English doctor appointment scheduling, and automated prescription delivery integration.",
      metrics: ["50K+ Monthly Active Users", "4.8 App Store Rating", "<1s Video Connect Time"],
      tech: ["React Native", "WebRTC", "FastAPI", "Redis", "AWS"],
    },
    {
      title: "Multi-Tenant Industrial B2B SaaS",
      category: "Cloud SaaS Platform Engineering",
      icon: Globe,
      description:
        "Architected a scalable SaaS platform enabling manufacturing supply vendors to manage quotation bids, automated SLA tracking, and multi-currency international wire settlement.",
      metrics: ["₹60 Cr+ Transaction Volume", "99.99% Production Uptime", "3-Minute Onboarding Flow"],
      tech: ["Next.js", "Node.js", "GraphQL", "Tailwind CSS", "Cloudflare"],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <Badge variant="gold">PRODUCTION CASE STUDIES</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
              Featured Application Deployments
            </h2>
            <p className="text-base text-secondary leading-relaxed">
              Explore real-world software platforms engineered and deployed by Real Result Technology.
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              size="md"
              href="/case-studies"
              withArrow
            >
              View All Case Studies
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const Icon = proj.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-surface flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5 text-gold-700" />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-muted bg-surface px-2.5 py-0.5 rounded-full border border-border">
                      Case Study
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gold-700 font-bold block mb-1">
                      {proj.category}
                    </span>
                    <h3 className="text-xl font-bold text-primary">
                      {proj.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {proj.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-border/80">
                    {proj.metrics.map((m, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-primary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border flex flex-wrap gap-1.5">
                  {proj.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-canvas text-secondary px-2 py-0.5 rounded-md border border-border"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AppDevPortfolioShowcase;
