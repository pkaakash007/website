import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import { ArrowRight, BookOpen, FileText, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights, Case Studies & Research | Real Result",
  description:
    "Enterprise research, AI voice telemetry benchmarks, technical playbooks, and growth case studies from Real Result.",
};

const insights = [
  {
    title: "Regional Language AI Telecalling: Architecture, Latency & Dialect Tuning",
    category: "AI Communication",
    readTime: "8 min read",
    desc: "A comprehensive guide on acoustic model training, Indian dialect nuances, sub-400ms speech turnaround, and CRM webhook orchestration.",
    date: "Aug 2026",
  },
  {
    title: "Eliminating Agency Fragmentation: The Compounding Power of Unified Execution",
    category: "Executive Strategy",
    readTime: "6 min read",
    desc: "Why scaling companies lose up to 34% of pipeline velocity managing disconnected software, advertising, and telephony vendors.",
    date: "Jul 2026",
  },
  {
    title: "Full-Funnel Closed-Loop Attribution: Connecting Ad Clicks to Phone Sales",
    category: "Marketing & Growth",
    readTime: "7 min read",
    desc: "How Dynamic Number Insertion (DNI) and server-side conversion APIs eliminate attribution discrepancies between ad networks and CRM records.",
    date: "Jun 2026",
  },
  {
    title: "Next.js App Router & Serverless Microservices for Enterprise SaaS",
    category: "Technology",
    readTime: "9 min read",
    desc: "Architectural blueprint for building resilient multi-tenant SaaS applications with zero cold starts, global edge caching, and automated CI/CD.",
    date: "May 2026",
  },
];

export default function InsightsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal">RESEARCH & KNOWLEDGE</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Enterprise Insights &{" "}
              <span className="font-serif italic font-normal text-primary">Technical Playbooks</span>.
            </h1>
            <p className="text-base sm:text-lg text-secondary">
              In-depth research on conversational AI voice models, cloud architecture, performance attribution, and organizational design.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-canvas">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {insights.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-border hover:border-brand-teal/40 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted mb-4">
                    <span className="font-semibold uppercase tracking-wider text-brand-teal-dark bg-brand-teal-light px-2.5 py-0.5 rounded-full border border-brand-teal-border">
                      {item.category}
                    </span>
                    <span>{item.readTime} • {item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs font-semibold text-primary">Read Article</span>
                  <ArrowRight className="w-4 h-4 text-brand-teal" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
