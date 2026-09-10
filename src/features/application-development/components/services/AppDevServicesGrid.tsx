import React from "react";
import { Container } from "@/components/layout/Container";
import AppDevServiceCard from "./AppDevServiceCard";
import {
  Smartphone,
  Globe,
  Cloud,
  Server,
  Cpu,
  Layers,
  ShieldCheck,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AppleLogo, AndroidLogo } from "@/components/common/PlatformLogos";

const DualMobileLogo: React.FC<{ className?: string }> = () => (
  <div className="flex items-center gap-1">
    <AppleLogo className="w-3.5 h-3.5 fill-current" />
    <AndroidLogo className="w-3.5 h-3.5 fill-current text-[#3DDC84]" />
  </div>
);

export const appDevDisciplines = [
  {
    title: "Mobile App Development",
    href: "/application-development",
    icon: DualMobileLogo,
    color: "#007AFF",
    desc: "Cross-platform iOS and Android applications built using React Native and Flutter. Features offline-first database sync, real-time push notifications, and native hardware performance.",
    badge: "iOS & Android",
    tags: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    title: "Custom Web Applications",
    href: "/application-development",
    icon: Globe,
    color: "#30B0C7",
    desc: "Single-page and server-rendered web applications built on React, TypeScript, Next.js, and Vite. Optimized for instant load speeds, responsive layouts, and rock-solid reliability.",
    badge: "Full-Stack Web",
    tags: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "SaaS Platform Engineering",
    href: "/application-development",
    icon: Cloud,
    color: "#5856D6",
    desc: "Multi-tenant cloud Software-as-a-Service architecture, automated subscription billing, role-based access control (RBAC), multi-region database failover, and tenant isolation.",
    badge: "Cloud SaaS",
    tags: ["Multi-Tenant", "Stripe / UPI", "PostgreSQL", "Redis"],
  },
  {
    title: "Enterprise ERP & Operational Software",
    href: "/application-development",
    icon: Server,
    color: "#34C759",
    desc: "Automated inventory management, textile batch tracking, factory floor scheduling, automated billing, and supply chain management engineered for Tamil Nadu manufacturers.",
    badge: "Enterprise Scale",
    tags: ["Custom ERP", "Batch Tracking", "Supply Chain", "Automated Billing"],
  },
  {
    title: "AI Agents & LLM Integration",
    href: "/application-development",
    icon: Cpu,
    color: "#AF52DE",
    desc: "Custom generative AI tools, Retrieval-Augmented Generation (RAG) knowledge bots, intelligent document scanning, and automated WhatsApp workflow assistants.",
    badge: "AI Automation",
    tags: ["OpenAI", "LangChain", "RAG Pipeline", "Vector DB"],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    href: "/application-development",
    icon: Layers,
    color: "#007AFF",
    desc: "Automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, zero-downtime rolling deployments, and automated AWS/GCP cloud security audits.",
    badge: "DevOps & Cloud",
    tags: ["AWS / GCP", "Cloudflare", "Docker", "GitHub Actions"],
  },
  {
    title: "API Architecture & Systems Integration",
    href: "/application-development",
    icon: ShieldCheck,
    color: "#FF2D55",
    desc: "RESTful & GraphQL microservice APIs connecting legacy databases, payment gateways, CRM suites, and third-party logistics tracking platforms.",
    badge: "Microservices",
    tags: ["Node.js", "FastAPI", "GraphQL", "Webhooks"],
  },
  {
    title: "UI/UX Product Architecture",
    href: "/application-development",
    icon: Palette,
    color: "#FF9500",
    desc: "User journey mapping, high-fidelity Figma design systems, interactive mobile prototypes, and accessibility-compliant design built to maximize user retention.",
    badge: "Product Design",
    tags: ["Figma Systems", "Design Tokens", "Wireframing", "Usability"],
  },
];

export const AppDevServicesGrid: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Mouse drag-to-scroll support
  const [isDragging, setIsDragging] = React.useState(false);
  const isDraggingRef = React.useRef(false);
  const startXRef = React.useRef(0);
  const startScrollLeftRef = React.useRef(0);

  const checkScroll = React.useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Approximate active card
    const cardWidth = 380;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), appDevDisciplines.length - 1));
  }, []);

  React.useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardElements = scrollRef.current.children;
    if (cardElements[index]) {
      (cardElements[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    isDraggingRef.current = false;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    startScrollLeftRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startXRef.current;
    if (Math.abs(walk) > 6) {
      isDraggingRef.current = true;
    }
    scrollRef.current.scrollLeft = startScrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section id="app-services" className="py-20 sm:py-28 bg-white border-b border-black/[0.08] scroll-mt-20 overflow-hidden">
      <Container size="wide">
        {/* Header with Title & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              End-to-End Application Capabilities
            </h2>
            <p className="text-[15px] sm:text-[16px] text-neutral-500 leading-relaxed font-normal">
              We handle the complete development lifecycle—from initial architectural blueprint and UI/UX wireframes to sprint coding, security hardening, and ongoing cloud operations.
            </p>
          </div>

          {/* Apple Carousel Controls (Prev/Next & Counter) */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.05] text-[12px] font-semibold text-neutral-600">
              <span className="text-black font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-neutral-400">/</span>
              <span>{String(appDevDisciplines.length).padStart(2, "0")}</span>
            </div>

            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-neutral-200 active:scale-95 flex items-center justify-center transition-all duration-150 disabled:opacity-30 disabled:pointer-events-none cursor-pointer border border-black/[0.06]"
            >
              <ChevronLeft className="w-5 h-5 text-neutral-800" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="w-11 h-11 rounded-full bg-neutral-100 hover:bg-neutral-200 active:scale-95 flex items-center justify-center transition-all duration-150 disabled:opacity-30 disabled:pointer-events-none cursor-pointer border border-black/[0.06]"
            >
              <ChevronRight className="w-5 h-5 text-neutral-800" />
            </button>
          </div>
        </div>

        {/* Single Row Carousel Slider Track */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className={`flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 pt-2 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            isDragging ? "cursor-grabbing select-none" : "cursor-grab"
          }`}
        >
          {appDevDisciplines.map((item, idx) => (
            <div
              key={idx}
              className="shrink-0 w-[310px] sm:w-[350px] lg:w-[380px] snap-start flex flex-col"
              onClickCapture={(e) => {
                if (isDraggingRef.current) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            >
              <AppDevServiceCard {...item} />
            </div>
          ))}
        </div>

        {/* Apple Dot Navigation & Exploration Hint */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          {/* Progress Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {appDevDisciplines.map((_, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    isCurrent
                      ? "w-7 h-2 bg-[#007AFF]"
                      : "w-2 h-2 bg-black/15 hover:bg-black/35"
                  }`}
                />
              );
            })}
          </div>

          {/* Swipe / Slide Guidance */}
          <p className="text-[12px] text-neutral-400 font-medium tracking-tight">
            Swipe or use arrows to explore all 8 engineering disciplines
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AppDevServicesGrid;
