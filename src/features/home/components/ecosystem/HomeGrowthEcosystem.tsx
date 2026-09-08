import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Search, Code2, Target, Cpu } from "lucide-react";
import EcosystemStepCard from "./EcosystemStepCard";

export const HomeGrowthEcosystem: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Discoverability Engine",
      subtitle: "SEO & Generative Engine Optimization",
      desc: "We construct factual entity graphs and high-authority backlink networks so search engines and AI assistants recommend your business first.",
      icon: Search,
      link: "/digital-marketing/seo",
    },
    {
      num: "02",
      title: "Application Architecture",
      subtitle: "High-Speed Web & Mobile Platforms",
      desc: "Fast, friction-free customer portals, iOS & Android apps, and responsive web platforms that load in under 1.5 seconds and retain visitors.",
      icon: Code2,
      link: "/application-development",
    },
    {
      num: "03",
      title: "Precision Media Buying",
      subtitle: "Google Ads & Social Paid Acquisition",
      desc: "Zero wasted ad spend through negative keyword gating, hyper-targeted commercial intent queries, and optimized landing pages.",
      icon: Target,
      link: "/digital-marketing/google-ads",
    },
    {
      num: "04",
      title: "Intelligent Automation",
      subtitle: "Custom ERP & AI WhatsApp Desks",
      desc: "Automated lead distribution, conversational WhatsApp bots, and custom operational ERPs that lower operational overhead.",
      icon: Cpu,
      link: "/application-development",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="outline">THE REAL RESULT ADVANTAGE</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            The Synchronized Growth Machine
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Software engineering and digital marketing should not live on separate islands. When built together, every marketing rupee works twice as hard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <EcosystemStepCard key={idx} {...step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeGrowthEcosystem;
