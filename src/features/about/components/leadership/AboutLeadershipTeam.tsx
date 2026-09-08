import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import LeaderBioCard from "./LeaderBioCard";
import { Code2, TrendingUp, Cpu, Sparkles } from "lucide-react";

export const AboutLeadershipTeam: React.FC = () => {
  const leaders = [
    {
      role: "Lead Solutions Architect",
      discipline: "Software Engineering & Cloud Architecture",
      icon: Code2,
      bio: "12+ years designing distributed systems, high-concurrency microservices, multi-tenant databases, and enterprise mobile platforms.",
    },
    {
      role: "Director of Performance Search",
      discipline: "SEO, GEO & Algorithmic Growth",
      icon: TrendingUp,
      bio: "Pioneered early Generative Engine Optimization models and high-intent programmatic search systems for Tamil Nadu industrial exporters.",
    },
    {
      role: "Head of Cloud Infrastructure & AI",
      discipline: "DevOps, LLM Integration & SLA Operations",
      icon: Cpu,
      bio: "Specializes in carrier-grade uptime architectures, automated CI/CD pipelines, container orchestration, and bespoke RAG pipeline deployments.",
    },
    {
      role: "Creative Director & UX Architect",
      discipline: "Brand Design, Conversion UX & Product Systems",
      icon: Sparkles,
      bio: "Combines Swiss editorial typography, human behavioral psychology, and interactive digital experiences that turn visitors into long-term clients.",
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="gold">Leadership Team</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Practitioners at the Helm
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Every client account is personally spearheaded by senior directors who actively code, architect systems, and monitor search telemetry every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => (
            <LeaderBioCard key={idx} {...leader} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutLeadershipTeam;
