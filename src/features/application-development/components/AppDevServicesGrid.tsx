import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import {
  Smartphone,
  Globe,
  Cloud,
  Server,
  Cpu,
  Layers,
  ShieldCheck,
  Palette,
  ArrowRight,
} from "lucide-react";

export const appDevDisciplines = [
  {
    title: "Mobile App Development",
    href: "/software-development/mobile-app-development",
    icon: Smartphone,
    desc: "Cross-platform iOS and Android applications built using React Native and Flutter. Features offline-first database sync, real-time push notifications, and native hardware performance.",
    badge: "iOS & Android",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Custom Web Applications",
    href: "/software-development/web-development",
    icon: Globe,
    desc: "Single-page and server-rendered web applications built on React, TypeScript, Next.js, and Vite. Optimized for instant load speeds, responsive layouts, and rock-solid reliability.",
    badge: "Full-Stack Web",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SaaS Platform Engineering",
    href: "/software-development/saas-development",
    icon: Cloud,
    desc: "Multi-tenant cloud Software-as-a-Service architecture, automated subscription billing, role-based access control (RBAC), multi-region database failover, and tenant isolation.",
    badge: "Cloud SaaS",
    tags: ["Multi-Tenant", "Stripe/Razorpay", "PostgreSQL", "Redis"],
  },
  {
    title: "Enterprise ERP & Operational Software",
    href: "/software-development/custom-software-development",
    icon: Server,
    desc: "Automated inventory management, textile batch tracking, factory floor scheduling, automated billing, and supply chain management engineered for Tamil Nadu manufacturers.",
    badge: "Enterprise Scale",
    tags: ["Custom ERP", "Batch Tracking", "Supply Chain", "Automated Billing"],
  },
  {
    title: "AI Agents & LLM Integration",
    href: "/software-development/ai-development",
    icon: Cpu,
    desc: "Custom generative AI tools, Retrieval-Augmented Generation (RAG) knowledge bots, intelligent document scanning, and automated WhatsApp workflow assistants.",
    badge: "AI & Automations",
    tags: ["OpenAI", "LangChain", "RAG Pipeline", "Vector DB"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    href: "/software-development/custom-software-development",
    icon: Layers,
    desc: "Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, zero-downtime rolling deployments, and automated AWS/GCP cloud security audits.",
    badge: "DevOps & Cloud",
    tags: ["AWS", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    title: "API Architecture & Systems Integration",
    href: "/software-development/web-development",
    icon: ShieldCheck,
    desc: "RESTful & GraphQL microservice APIs connecting legacy databases, payment gateways, CRM suites, and third-party logistics tracking platforms.",
    badge: "Microservices",
    tags: ["Node.js", "Python FastAPI", "GraphQL", "Webhook Systems"],
  },
  {
    title: "UI/UX Product Architecture",
    href: "/software-development/web-development",
    icon: Palette,
    desc: "User journey mapping, high-fidelity Figma design systems, interactive mobile prototypes, and accessibility-compliant design built to maximize user retention.",
    badge: "Product Design",
    tags: ["Figma Systems", "Design Tokens", "Wireframing", "Usability Testing"],
  },
];

export const AppDevServicesGrid: React.FC = () => {
  return (
    <section id="app-services" className="py-20 lg:py-28 bg-canvas border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold">APPLICATION ENGINEERING SUITE</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            End-to-End Application Capabilities
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            We handle the complete development lifecycle—from initial architectural blueprint and UI/UX wireframes to sprint coding, security hardening, and ongoing cloud operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appDevDisciplines.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                to={item.href}
                className="group p-7 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-gold-50 border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface text-secondary font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-canvas text-secondary px-2 py-0.5 rounded-md border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-gold-700">
                  <span>View Specifications</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AppDevServicesGrid;
