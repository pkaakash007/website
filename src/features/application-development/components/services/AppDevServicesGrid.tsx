import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import AppDevServiceCard from "./AppDevServiceCard";
import {
  Smartphone,
  Globe,
  Cloud,
  Server,
  Cpu,
  Layers,
  ShieldCheck,
  Palette,
} from "lucide-react";

export const appDevDisciplines = [
  {
    title: "Mobile App Development",
    href: "/application-development",
    icon: Smartphone,
    desc: "Cross-platform iOS and Android applications built using React Native and Flutter. Features offline-first database sync, real-time push notifications, and native hardware performance.",
    badge: "iOS & Android",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Custom Web Applications",
    href: "/application-development",
    icon: Globe,
    desc: "Single-page and server-rendered web applications built on React, TypeScript, Next.js, and Vite. Optimized for instant load speeds, responsive layouts, and rock-solid reliability.",
    badge: "Full-Stack Web",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SaaS Platform Engineering",
    href: "/application-development",
    icon: Cloud,
    desc: "Multi-tenant cloud Software-as-a-Service architecture, automated subscription billing, role-based access control (RBAC), multi-region database failover, and tenant isolation.",
    badge: "Cloud SaaS",
    tags: ["Multi-Tenant", "Stripe/Razorpay", "PostgreSQL", "Redis"],
  },
  {
    title: "Enterprise ERP & Operational Software",
    href: "/application-development",
    icon: Server,
    desc: "Automated inventory management, textile batch tracking, factory floor scheduling, automated billing, and supply chain management engineered for Tamil Nadu manufacturers.",
    badge: "Enterprise Scale",
    tags: ["Custom ERP", "Batch Tracking", "Supply Chain", "Automated Billing"],
  },
  {
    title: "AI Agents & LLM Integration",
    href: "/application-development",
    icon: Cpu,
    desc: "Custom generative AI tools, Retrieval-Augmented Generation (RAG) knowledge bots, intelligent document scanning, and automated WhatsApp workflow assistants.",
    badge: "AI Automation",
    tags: ["OpenAI", "LangChain", "RAG Pipeline", "Vector DB"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    href: "/application-development",
    icon: Layers,
    desc: "Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, zero-downtime rolling deployments, and automated AWS/GCP cloud security audits.",
    badge: "DevOps & Cloud",
    tags: ["AWS", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    title: "API Architecture & Systems Integration",
    href: "/application-development",
    icon: ShieldCheck,
    desc: "RESTful & GraphQL microservice APIs connecting legacy databases, payment gateways, CRM suites, and third-party logistics tracking platforms.",
    badge: "Microservices",
    tags: ["Node.js", "FastAPI", "GraphQL", "Webhooks"],
  },
  {
    title: "UI/UX Product Architecture",
    href: "/application-development",
    icon: Palette,
    desc: "User journey mapping, high-fidelity Figma design systems, interactive mobile prototypes, and accessibility-compliant design built to maximize user retention.",
    badge: "Product Design",
    tags: ["Figma Systems", "Design Tokens", "Wireframing", "Usability"],
  },
];

export const AppDevServicesGrid: React.FC = () => {
  return (
    <section id="app-services" className="py-20 bg-canvas border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="gold">Engineering Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            End-to-End Application Capabilities
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            We handle the complete development lifecycle—from initial architectural blueprint and UI/UX wireframes to sprint coding, security hardening, and ongoing cloud operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {appDevDisciplines.map((item, idx) => (
            <AppDevServiceCard key={idx} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AppDevServicesGrid;
