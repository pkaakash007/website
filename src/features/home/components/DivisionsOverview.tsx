
import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import {
  Bot,
  Code2,
  TrendingUp,
  Users,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  Cpu,
  Layers,
  BarChart3,
  Globe,
  UserCheck,
  Building,
} from "lucide-react";

const divisions = [
  {
    id: "ai-communication",
    badge: "AI & Telephony",
    badgeVariant: "teal" as const,
    title: "AI Communication",
    headline: "Intelligent Voice, Messaging & Cloud Telephony",
    description:
      "Automate outbound and inbound customer conversations with natural regional language AI voice bots, bulk IVR, WhatsApp Business API, and enterprise CPaaS infrastructure.",
    icon: Bot,
    href: "/ai-communication",
    color: "teal",
    features: [
      { text: "Multilingual AI Telecalling (Hindi, Tamil, Telugu, Kannada & more)", icon: PhoneCall },
      { text: "Automated Bulk IVR & Outbound Call Center Dialers", icon: Cpu },
      { text: "WhatsApp Business API, RCS & Voice OTP Verification", icon: MessageSquare },
      { text: "Omnichannel CPaaS, CCaaS & Conversational Speech Analytics", icon: Layers },
    ],
    metric: "10M+ Calls Processed",
  },
  {
    id: "technology",
    badge: "Engineering",
    badgeVariant: "default" as const,
    title: "Technology & Software",
    headline: "Enterprise Software & Cloud Infrastructure",
    description:
      "Architecting scalable web applications, custom software, cloud native ecosystems, AI models, and mission-critical API integrations built for resilience.",
    icon: Code2,
    href: "/technology",
    color: "blue",
    features: [
      { text: "Custom Enterprise Software & Full-Stack Web Applications", icon: Code2 },
      { text: "SaaS Architecture, Microservices & Mobile App Development", icon: Layers },
      { text: "AI & Machine Learning Pipelines, Data & Analytics", icon: Cpu },
      { text: "CRM / ERP Integration, DevOps & Cybersecurity Compliance", icon: Globe },
    ],
    metric: "99.98% Uptime SLA",
  },
  {
    id: "marketing",
    badge: "Growth",
    badgeVariant: "default" as const,
    title: "Marketing & Media",
    headline: "Performance Marketing & Omnichannel Media",
    description:
      "Data-driven acquisition, search dominance, programmatic media buying, paid social, and 360-degree traditional and DOOH campaigns with multi-touch attribution.",
    icon: TrendingUp,
    href: "/marketing",
    color: "indigo",
    features: [
      { text: "High-Intent SEO & Technical Search Engine Dominance", icon: Globe },
      { text: "Google PPC, Paid Social (Meta, LinkedIn) & Media Buying", icon: BarChart3 },
      { text: "Conversion Rate Optimization (CRO) & Funnel Engineering", icon: TrendingUp },
      { text: "DOOH, Transit Media, Events & Digital PR Distribution", icon: Building },
    ],
    metric: "4.2x Avg. ROAS Lift",
  },
  {
    id: "human-resources",
    badge: "Talent",
    badgeVariant: "default" as const,
    title: "Human Resources",
    headline: "Workforce Strategy & Talent Capital",
    description:
      "Empowering high-performance enterprises through strategic recruitment, executive search, workforce planning, and employee experience architecture.",
    icon: Users,
    href: "/human-resources",
    color: "emerald",
    features: [
      { text: "Executive Search & Leadership Talent Placements", icon: UserCheck },
      { text: "Technical & Specialized Engineering Recruitment", icon: Users },
      { text: "Workforce Planning & Scalable Staffing Operations", icon: Building },
      { text: "Employee Experience, Retention & Performance Frameworks", icon: Layers },
    ],
    metric: "94.8% Retention Rate",
  },
];

export default function DivisionsOverview() {
  return (
    <section id="divisions" className="py-20 sm:py-28 bg-canvas relative">
      <Container size="wide">
        <SectionHeader
          badge="OUR DIVISIONS"
          title="Four pillars. One integrated execution engine."
          subtitle="Eliminate vendor fragmentation. We connect technology, growth, communication, and talent into a seamless operational advantage."
        />

        {/* 2x2 Clean Enterprise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {divisions.map((div) => {
            const Icon = div.icon;
            const isTeal = div.color === "teal";

            return (
              <div
                key={div.id}
                className={`group relative rounded-3xl bg-white border p-6 sm:p-9 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                  isTeal
                    ? "border-brand-teal/40 hover:border-brand-teal"
                    : "border-border hover:border-border-strong"
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Badge + Metric */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                          isTeal
                            ? "bg-brand-teal-light text-brand-teal"
                            : "bg-surface text-primary"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted">
                          {div.badge}
                        </span>
                        <h3 className="text-xl font-bold text-primary">
                          {div.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-canvas border border-border text-secondary hidden sm:inline-block">
                      {div.metric}
                    </span>
                  </div>

                  {/* Headline & Description */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-primary leading-snug">
                      {div.headline}
                    </h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  {/* Feature Bullets */}
                  <div className="space-y-2.5 pt-4 border-t border-border mb-6">
                    {div.features.map((feat, idx) => {
                      const FeatIcon = feat.icon;
                      return (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-secondary">
                          <FeatIcon className="w-3.5 h-3.5 text-brand-teal shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2">
                  <Link to={div.href}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-all ${
                      isTeal
                        ? "text-brand-teal-dark hover:text-brand-teal"
                        : "text-primary hover:text-secondary"
                    }`}
                  >
                    <span>Explore {div.title}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
