import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
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
    <section id="leadership" className="py-20 lg:py-28 bg-white border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold">MULTIDISCIPLINARY DIRECTORS</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Practitioners at the Helm
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Every client account is personally spearheaded by senior directors who actively code, architect systems, and monitor search telemetry every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, idx) => {
            const Icon = leader.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-canvas border border-border hover:border-gold/50 transition-colors flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-border flex items-center justify-center text-gold-700 shadow-subtle">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {leader.role}
                    </h3>
                    <span className="text-xs font-mono text-gold-700 font-semibold block mt-0.5">
                      {leader.discipline}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutLeadershipTeam;
