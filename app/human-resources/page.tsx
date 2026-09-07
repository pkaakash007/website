import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import ContactForm from "@/components/shared/ContactForm";
import {
  Users,
  UserCheck,
  Building,
  Layers,
  HeartHandshake,
  Compass,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Human Resources & Talent Capital | Real Result",
  description:
    "Enterprise Human Resources, Talent Acquisition, Workforce Strategy, Executive Search, and Human Capital Management.",
  keywords: [
    "Human Resources",
    "Talent Acquisition",
    "Workforce Management",
    "Recruitment",
    "Human Capital",
    "Employee Experience",
  ],
};

const hrPillars = [
  {
    title: "Talent Acquisition & Executive Search",
    icon: UserCheck,
    desc: "Identifying and recruiting high-impact executive leaders, specialized engineers, and domain experts who accelerate organizational velocity.",
  },
  {
    title: "Workforce Strategy & Planning",
    icon: Building,
    desc: "Designing scalable workforce models, departmental org structures, and flexible talent capacity to support rapid enterprise expansion.",
  },
  {
    title: "People & Human Capital Management",
    icon: Users,
    desc: "Aligning human capital strategies with overarching business milestones to build cohesive, high-performance company cultures.",
  },
  {
    title: "Employee Experience & Engagement",
    icon: HeartHandshake,
    desc: "Crafting modern onboarding journeys, professional development paths, and retention frameworks that keep top performers engaged.",
  },
  {
    title: "HR Operations & Organizational Design",
    icon: Layers,
    desc: "Streamlining foundational people operations, role definitions, and performance review cycles for clarity and operational efficiency.",
  },
  {
    title: "Leadership Advisory & Cultural Growth",
    icon: Compass,
    desc: "Guiding founders and executive teams through organizational scaling challenges, leadership transitions, and team alignment.",
  },
];

export default function HumanResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 sm:pt-24 sm:pb-28 bg-white border-b border-border relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-emerald-50/70 rounded-full blur-3xl -z-10"></div>
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <Badge variant="default">Human Resources & Talent Capital</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Empowering High-Performance{" "}
              <span className="font-serif italic font-normal text-primary">People & Teams</span>.
            </h1>
            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              From executive recruitment and specialized engineering talent to workforce strategy and employee experience design — building the teams that move companies forward.
            </p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button variant="primary" size="lg" href="#inquiry" withArrow>
                Discuss Talent Requirements
              </Button>
              <Button variant="secondary" size="lg" href="#pillars">
                Explore Focus Areas
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Focus Areas */}
      <section id="pillars" className="py-20 bg-white">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline">HUMAN CAPITAL ARCHITECTURE</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight mt-3">
              Strategic Talent & Workforce Solutions
            </h2>
            <p className="text-sm sm:text-base text-secondary mt-2">
              Designed to connect enterprise vision with capable, motivated, and aligned team execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hrPillars.map((item, idx) => {
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
                    <span>Strategic Advisory</span>
                    <span className="font-semibold text-primary">People First</span>
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
              <Badge variant="default">TALENT CONSULTATION</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Connect With Our Talent Advisors
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                Whether you are hiring leadership, scaling a specialized technical division, or refining workforce strategy, our team is ready to assist.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ContactForm defaultDivision="Human Resources" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
