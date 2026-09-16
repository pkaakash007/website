import React from "react";
import { Container } from "@/components/layout/Container";

interface Phase {
  number: string;
  title: string;
  summary: string;
  keyPoints: string[];
}

const PROCESS_PHASES: Phase[] = [
  {
    number: "01",
    title: "Discovery & Planning",
    summary:
      "We sit down with you to understand your exact business workflow, specify technical requirements, and define clear project milestones.",
    keyPoints: ["System Architecture Blueprint", "Database Schema Design", "Milestone & Timeline Roadmap"],
  },
  {
    number: "02",
    title: "UI/UX & Interactive Design",
    summary:
      "We design clickable, high-fidelity prototypes in Figma so you can test every screen, button, and user journey before we write code.",
    keyPoints: ["Mobile & Web Wireframes", "Interactive Clickable Prototype", "Validated User Journeys"],
  },
  {
    number: "03",
    title: "Sprint Development & QA",
    summary:
      "Our team builds your software in focused 2-week development sprints with regular staging demos, security reviews, and cross-device testing.",
    keyPoints: ["Live Staging Demos", "Full-Stack API Integration", "Security & Speed Audits"],
  },
  {
    number: "04",
    title: "Launch & Source Code Transfer",
    summary:
      "We handle cloud deployment, publish mobile apps to the App Store and Google Play, and hand over 100% of source code and credentials to your team.",
    keyPoints: ["Production Cloud Setup", "App Store & Play Store Release", "100% IP & Code Ownership"],
  },
];

export const AppDevLifecycleTimeline: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FBFBFA] border-t border-b border-neutral-200 font-sans">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-tight">
            How We Build &amp; Ship Projects
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            A straightforward 4-phase process to turn your idea into reliable production software—delivered on time with 100% source code ownership.
          </p>
        </div>

        {/* 4 Clean Editorial Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_PHASES.map((phase) => (
            <div
              key={phase.number}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-neutral-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between space-y-6 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-200"
            >
              <div className="space-y-4">
                {/* Phase Number */}
                <div className="flex items-center justify-end">
                  <span className="text-sm font-bold text-neutral-400">
                    {phase.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0E2036] tracking-tight leading-snug">
                  {phase.title}
                </h3>

                {/* Plain English Summary */}
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {phase.summary}
                </p>
              </div>

              {/* Deliverable Items */}
              <div className="pt-4 border-t border-neutral-100 space-y-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                  Key Deliverables
                </span>
                <ul className="space-y-1.5">
                  {phase.keyPoints.map((point, pIdx) => (
                    <li key={pIdx} className="text-xs text-neutral-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AppDevLifecycleTimeline;


