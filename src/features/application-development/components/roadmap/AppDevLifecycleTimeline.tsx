import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import {
  FileCode,
  Layout,
  GitBranch,
  ShieldCheck,
  Rocket,
  CheckCircle,
} from "lucide-react";

export const AppDevLifecycleTimeline: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Technical Discovery & Architecture",
      icon: FileCode,
      duration: "Week 1 - 2",
      description:
        "Requirements mapping, database schema design, third-party API audit, system architecture blueprint, and milestone roadmap alignment.",
      outcomes: ["Software Architecture Document", "Database ER Diagrams", "Milestone Delivery SLA"],
    },
    {
      step: "02",
      title: "UI/UX & Interactive Prototype",
      icon: Layout,
      duration: "Week 2 - 3",
      description:
        "User flow validation, clickable mobile and desktop wireframes in Figma, responsive design token systems, and client stakeholder review.",
      outcomes: ["Interactive Figma Prototypes", "Design System Tokens", "Validated User Journeys"],
    },
    {
      step: "03",
      title: "Agile Sprint Development",
      icon: GitBranch,
      duration: "Week 3 - 8",
      description:
        "Two-week agile sprints with continuous integration, automated test coverage, staging server previews, and transparent code reviews.",
      outcomes: ["Bi-weekly Staging Demos", "Clean TypeScript / Node Code", "Automated CI/CD Pipelines"],
    },
    {
      step: "04",
      title: "Security, QA & Performance Tuning",
      icon: ShieldCheck,
      duration: "Week 8 - 10",
      description:
        "Automated end-to-end testing, cross-device mobile verification, load testing, SQL injection / XSS prevention, and OWASP compliance.",
      outcomes: ["Security Vulnerability Audit", "Sub-100ms API Latency", "Zero Breaking Defects"],
    },
    {
      step: "05",
      title: "Cloud Launch & SLA Handover",
      icon: Rocket,
      duration: "Week 10+",
      description:
        "Zero-downtime production deployment, DNS cutover, App Store / Play Store submission, complete source code handover, and 24/7 SLA monitoring.",
      outcomes: ["Full Source Code & IP Transfer", "App Store Approvals", "24/7 Production SLA"],
    },
  ];

  return (
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="gold">Development Roadmap</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            How We Build & Ship Software
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Predictable delivery timelines with zero surprises. You retain 100% intellectual property and full source code ownership at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white border border-border hover:border-gold/60 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gold-700">
                      {item.step}
                    </span>
                    <span className="text-xs text-muted bg-surface px-2 py-0.5 rounded border border-border">
                      {item.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border space-y-1.5">
                  <span className="text-xs text-muted font-semibold block">
                    Deliverables:
                  </span>
                  {item.outcomes.map((out, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-secondary">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{out}</span>
                    </div>
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

export default AppDevLifecycleTimeline;
