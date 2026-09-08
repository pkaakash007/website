import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import PortfolioCaseCard from "./PortfolioCaseCard";
import { Layers, Smartphone, Globe } from "lucide-react";

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
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl space-y-3">
            <Badge variant="gold">Production Case Studies</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
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
              href="/contact"
              withArrow
            >
              Discuss Your Project
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <PortfolioCaseCard key={idx} {...proj} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AppDevPortfolioShowcase;
