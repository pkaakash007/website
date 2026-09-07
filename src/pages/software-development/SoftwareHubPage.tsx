import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  Code2,
  Globe,
  Smartphone,
  Server,
  Cloud,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

const softwareClusters = [
  {
    title: "Custom Web Development",
    href: "/software-development/web-development",
    icon: Globe,
    desc: "Blazing-fast, SEO-optimized web applications built on modern React, Vite, Next.js, and TypeScript architectures engineered for maximum conversion and zero lag.",
    badge: "High Performance",
  },
  {
    title: "Mobile App Development",
    href: "/software-development/mobile-app-development",
    icon: Smartphone,
    desc: "Cross-platform iOS and Android mobile applications built using React Native and Flutter, with offline-first sync, real-time notifications, and intuitive UX.",
    badge: "iOS & Android",
  },
  {
    title: "Custom Business Software & ERP",
    href: "/software-development/custom-software-development",
    icon: Server,
    desc: "Tailored business management software, automated inventory/billing engines, supply chain systems, and custom internal operational tools.",
    badge: "Enterprise Scale",
  },
  {
    title: "SaaS Platform Engineering",
    href: "/software-development/saas-development",
    icon: Cloud,
    desc: "Multi-tenant cloud Software-as-a-Service architecture, subscription billing, secure role-based access control (RBAC), and high-availability database clustering.",
    badge: "Cloud Scale",
  },
  {
    title: "Enterprise AI & LLM Engineering",
    href: "/software-development/ai-development",
    icon: Cpu,
    desc: "Bespoke AI solutions, Retrieval-Augmented Generation (RAG) agents, custom business automation, and intelligent document processing.",
    badge: "AI Automation",
  },
];

export const SoftwareHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Software Development Company in Tamil Nadu | Web & AI | Real Result"
        description="Real Result Technology is a premier custom software and web development company in Tamil Nadu. Headquartered in Erode, delivering enterprise web apps, mobile apps, SaaS, and AI systems."
        canonicalPath="/software-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Software & Application Development Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Software Engineering & Web Development",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      {/* Hero */}
      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Software Development" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Code2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Real Result Technology Division · Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.08]">
              Software Development Company in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Enterprise engineering that powers real business operations. From custom web portals and high-scale SaaS architectures to native mobile apps and regional language AI integrations, we build scalable software designed to last.
            </p>

            <DirectAnswerBox
              question="What software development services does Real Result provide in Tamil Nadu?"
              summary="Real Result Technology is the dedicated software engineering division of Real Result Marketing, operating from Erode, Tamil Nadu. We build custom web applications, cross-platform mobile apps (iOS/Android), enterprise ERP/inventory software, scalable multi-tenant SaaS platforms, and custom AI/LLM automation tools for manufacturing, healthcare, educational, and commercial enterprises across Tamil Nadu."
              takeaways={[
                "Modern high-speed tech stack: React, TypeScript, Node.js, Python, PostgreSQL & AWS",
                "Strict enterprise engineering standards with clean code and full documentation",
                "Seamless integration with digital marketing, lead funnels, and CRM systems",
                "Dedicated on-ground technical support and maintenance SLA guarantees",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("software-development-hub-hero")}
                className="cursor-pointer"
              >
                Discuss Your Software Project
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                Explore Engineering Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Cluster Grid */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">ENGINEERING CAPABILITIES</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
              Software Solutions Built for Enterprise Scale
            </h2>
            <p className="text-base text-secondary">
              Explore our core software development disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareClusters.map((cluster) => {
              const Icon = cluster.icon;
              return (
                <Link
                  key={cluster.href}
                  to={cluster.href}
                  className="group p-6 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-gold-50 border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface text-secondary font-medium">
                        {cluster.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary group-hover:text-gold-700 transition-colors">
                      {cluster.title}
                    </h3>

                    <p className="text-xs text-secondary leading-relaxed">
                      {cluster.desc}
                    </p>
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
    </div>
  );
};

export default SoftwareHubPage;
