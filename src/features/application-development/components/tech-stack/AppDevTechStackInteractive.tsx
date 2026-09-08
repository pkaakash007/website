import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import {
  Code,
  Smartphone,
  Server,
  Database,
  Cloud,
  CheckCircle2,
} from "lucide-react";

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  technologies: {
    name: string;
    description: string;
    badge: string;
  }[];
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    name: "Web & Frontend",
    icon: Code,
    description: "Modern, performant client-side architectures delivering sub-second page loads and fluid 60fps animations.",
    technologies: [
      { name: "React & TypeScript", description: "Strictly typed component systems with clean state management", badge: "Core Stack" },
      { name: "Next.js / Vite", description: "High-speed bundlers and hybrid SSR/SSG for SEO and performance", badge: "Framework" },
      { name: "Tailwind CSS", description: "Utility-first responsive design tokens and custom dark/light modes", badge: "Styling" },
      { name: "Framer Motion", description: "Smooth micro-interactions and scroll-driven page physics", badge: "Animations" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Platforms",
    icon: Smartphone,
    description: "Native and cross-platform mobile apps for iOS and Android with unified codebase efficiency.",
    technologies: [
      { name: "React Native", description: "Shared business logic with native UI rendering on iOS & Android", badge: "Cross-Platform" },
      { name: "Flutter", description: "Pixel-perfect multi-platform UI with Dart high-performance engine", badge: "High Performance" },
      { name: "Swift & SwiftUI", description: "High-performance native iOS development for Apple ecosystems", badge: "Native iOS" },
      { name: "Kotlin & Jetpack Compose", description: "Modern, expressive Android applications for Android devices", badge: "Native Android" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: Server,
    description: "Low-latency microservices, REST & GraphQL endpoints capable of handling millions of requests.",
    technologies: [
      { name: "Node.js & TypeScript", description: "Event-driven asynchronous backend services with strict type safety", badge: "High Concurrency" },
      { name: "Python & FastAPI", description: "High-throughput APIs for AI models, data analytics, and automation", badge: "AI & Data" },
      { name: "Go (Golang)", description: "Ultra-fast compiled microservices for mission-critical concurrency", badge: "Ultra Fast" },
      { name: "GraphQL & REST", description: "Flexible, predictable client-server data contracts with zero over-fetching", badge: "API Design" },
    ],
  },
  {
    id: "database",
    name: "Database & Cache",
    icon: Database,
    description: "ACID-compliant relational databases, real-time sync, and distributed caching layers.",
    technologies: [
      { name: "PostgreSQL", description: "Rock-solid relational database with JSONB support and robust indexing", badge: "Relational Core" },
      { name: "Redis In-Memory Cache", description: "Sub-millisecond latency caching, session stores, and rate-limiting", badge: "Fast Caching" },
      { name: "Supabase & Firebase", description: "Real-time subscriptions, edge functions, and managed auth", badge: "Real-time" },
      { name: "MongoDB & DynamoDB", description: "Scalable document stores for flexible catalog and telemetry datasets", badge: "NoSQL" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Fault-tolerant infrastructure, serverless edge workers, and automated deployment pipelines.",
    technologies: [
      { name: "Amazon Web Services (AWS)", description: "ECS, Lambda, S3, CloudFront, and RDS with multi-AZ failover", badge: "Enterprise Cloud" },
      { name: "Cloudflare Workers & Edge", description: "Global CDN, DDoS mitigation, and serverless edge execution", badge: "Edge Network" },
      { name: "Docker & Kubernetes", description: "Isolated containerization and horizontal automated autoscaling", badge: "Containers" },
      { name: "GitHub Actions CI/CD", description: "Automated linting, unit test suites, security scans, and rolling releases", badge: "DevOps" },
    ],
  },
];

export const AppDevTechStackInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const activeCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <section className="py-20 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <Badge variant="outline">Technology Foundation</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Battle-Tested Technology Stack
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            We select modern, open, and scalable technologies that protect your software against obsolescence and vendor lock-in.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 pb-2 border-b border-border">
          {techCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isSelected
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface text-secondary hover:text-primary hover:bg-gray-200/70 border border-border"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-gold-300" : "text-muted"}`} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel */}
        <div className="p-8 rounded-2xl bg-surface border border-border space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-border text-primary flex items-center justify-center shrink-0">
              <ActiveIcon className="w-5 h-5 text-gold-700" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">
                {activeCategory.name} Engineering Standards
              </h3>
              <p className="text-sm text-secondary mt-0.5 max-w-2xl leading-relaxed">
                {activeCategory.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeCategory.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-border shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#FBF7EE] text-[#8E6D2E] border border-[#E8D298] inline-block">
                    {tech.badge}
                  </span>
                  <h4 className="text-base font-bold text-primary">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-secondary leading-relaxed">
                    {tech.description}
                  </p>
                </div>
                <div className="pt-3 mt-2 border-t border-border flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Enterprise Grade</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevTechStackInteractive;
