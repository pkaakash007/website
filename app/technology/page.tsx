import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import ContactForm from "@/components/shared/ContactForm";
import {
  Code2,
  Cpu,
  Layers,
  Globe,
  Database,
  ShieldCheck,
  Server,
  Smartphone,
  Workflow,
  CheckCircle2,
  Terminal,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology & Software Development | Real Result",
  description:
    "Enterprise Custom Software Development, Next.js Web Applications, SaaS Architecture, AI & ML Engineering, Cloud DevOps, and CRM/ERP Integrations.",
  keywords: [
    "Custom Software Development",
    "Web Applications",
    "Mobile Applications",
    "SaaS Architecture",
    "CRM ERP Solutions",
    "Cloud Solutions",
    "AI Machine Learning",
    "DevOps",
    "Cybersecurity",
  ],
};

const techCapabilities = [
  {
    title: "Custom Software Development",
    icon: Code2,
    desc: "Bespoke enterprise software engineered from scratch to match your exact business logic, workflows, and regulatory constraints.",
  },
  {
    title: "Modern Web Applications",
    icon: Globe,
    desc: "Blazing-fast, SEO-optimized web applications built using Next.js, React, TypeScript, and serverless edge runtimes.",
  },
  {
    title: "Mobile Applications (iOS & Android)",
    icon: Smartphone,
    desc: "Native and cross-platform mobile apps built with React Native and Flutter with offline capabilities and push notification engines.",
  },
  {
    title: "SaaS Multi-Tenant Platforms",
    icon: Layers,
    desc: "Scalable SaaS product architecture with isolated multi-tenancy, granular RBAC, subscription billing, and automated provisioning.",
  },
  {
    title: "CRM & ERP Enterprise Solutions",
    icon: Workflow,
    desc: "End-to-end implementation and customization of Salesforce, SAP, Oracle, Zoho, or custom ERP systems tailored for your operations.",
  },
  {
    title: "Cloud Solutions & Architecture",
    icon: Server,
    desc: "Cloud migration, multi-region architecture on AWS, Azure, and Google Cloud with high-availability disaster recovery.",
  },
  {
    title: "AI & Machine Learning Engineering",
    icon: Cpu,
    desc: "Custom LLM fine-tuning, retrieval-augmented generation (RAG), computer vision, predictive modeling, and real-time inference.",
  },
  {
    title: "Data Engineering & Analytics",
    icon: Database,
    desc: "Enterprise data warehouses, ETL/ELT pipelines, real-time streaming architectures, and executive BI dashboards.",
  },
  {
    title: "API & System Integration",
    icon: Terminal,
    desc: "Robust REST and GraphQL API gateways unifying legacy databases, third-party payment gateways, and telecommunication hubs.",
  },
  {
    title: "DevOps & CI/CD Automation",
    icon: Zap,
    desc: "Kubernetes orchestration, automated deployment pipelines, infrastructure-as-code (Terraform), and zero-downtime releases.",
  },
  {
    title: "Cybersecurity & Governance",
    icon: ShieldCheck,
    desc: "SOC2 Type II, HIPAA, and ISO 27001 compliance readiness, vulnerability assessments, penetration testing, and automated security scanning.",
  },
  {
    title: "QA & Software Testing Automation",
    icon: CheckCircle2,
    desc: "Comprehensive automated unit, end-to-end, and load testing ensuring rock-solid stability under high transaction volumes.",
  },
];

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-border relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-blue-50/70 rounded-full blur-3xl -z-10"></div>
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <Badge variant="default">Technology & Software Engineering</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Architecting <span className="font-serif italic font-normal text-primary">Enterprise Software</span> & Cloud Systems.
            </h1>
            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              We engineer custom web apps, scalable SaaS platforms, mission-critical API integrations, and machine learning pipelines designed for high concurrency and resilience.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button variant="primary" size="lg" href="#inquiry" withArrow>
                Discuss Technical Scope
              </Button>
              <Button variant="secondary" size="lg" href="#capabilities">
                View Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Tech Stack & Standards */}
      <section className="py-12 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-border">
              <div className="text-xs font-mono text-muted uppercase">Frameworks</div>
              <div className="text-base font-bold text-primary mt-1">Next.js • React • Node.js</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border">
              <div className="text-xs font-mono text-muted uppercase">Cloud & Infra</div>
              <div className="text-base font-bold text-primary mt-1">AWS • GCP • Kubernetes</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border">
              <div className="text-xs font-mono text-muted uppercase">Data & AI</div>
              <div className="text-base font-bold text-primary mt-1">Python • PyTorch • Postgres</div>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border">
              <div className="text-xs font-mono text-muted uppercase">Compliance</div>
              <div className="text-base font-bold text-primary mt-1">SOC2 • ISO 27001 • HIPAA</div>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities Grid */}
      <section id="capabilities" className="py-20 bg-white">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline">ENGINEERING SERVICES</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mt-3">
              Full-Lifecycle Software Engineering
            </h2>
            <p className="text-sm sm:text-base text-secondary mt-2">
              From early product architecture and MVP sprints to high-scale enterprise migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-canvas border border-border hover:border-border-strong hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-primary mb-5 shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-[11px] text-muted">
                    <span>Clean Architecture</span>
                    <span className="font-semibold text-primary">Production Ready</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Lead Form */}
      <section id="inquiry" className="py-20 bg-canvas border-t border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <Badge variant="default">ENGINEERING CONSULTATION</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Plan Your Technical Roadmap With Us
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                Connect with our senior software architects to review your technical requirements, cloud infrastructure, or modernization schedule.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm defaultDivision="Technology & Software" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
