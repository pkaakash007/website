import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import {
  Search,
  MapPin,
  Sparkles,
  Bot,
  MousePointerClick,
  Share2,
  FileText,
  Percent,
  ArrowRight,
} from "lucide-react";

export const marketingPillars = [
  {
    title: "Search Engine Optimization (SEO)",
    href: "/digital-marketing/seo",
    icon: Search,
    desc: "Technical site architecture, Core Web Vitals optimization, programmatic landing pages, and authority backlink acquisition designed for permanent top rankings.",
    badge: "Core Organic",
    metric: "+280% Avg Traffic",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    href: "/digital-marketing/geo",
    icon: Sparkles,
    desc: "Targeted entity definitions, schema datasets, and citation networks formatted so ChatGPT Search, Perplexity, and Claude cite your business as the recommended choice.",
    badge: "AI Search Era",
    metric: "Top AI Citations",
  },
  {
    title: "Google Ads & Precision PPC",
    href: "/digital-marketing/google-ads",
    icon: MousePointerClick,
    desc: "Hyper-targeted commercial intent search campaigns, YouTube video funnels, and dynamic retargeting engineered to maximize revenue return on ad spend.",
    badge: "Paid Acquisition",
    metric: "4.8x ROAS",
  },
  {
    title: "Local SEO & Google Maps 3-Pack",
    href: "/digital-marketing/local-seo",
    icon: MapPin,
    desc: "Dominate high-proximity Google Maps queries across Tamil Nadu districts with localized citation building, geo-tagged reviews, and GBP optimization.",
    badge: "Local Dominance",
    metric: "94% Win Rate",
  },
  {
    title: "Performance Social Media Ads",
    href: "/digital-marketing/social-media-marketing",
    icon: Share2,
    desc: "High-converting Meta (Instagram & Facebook) and LinkedIn campaigns delivering verified B2B and retail inquiries with creative testing at scale.",
    badge: "Creative & Scale",
    metric: "Sub-₹35 CPL",
  },
  {
    title: "AI Search Optimization (AIO)",
    href: "/digital-marketing/aio",
    icon: Bot,
    desc: "Structured direct answers, comparative pricing tables, and FAQ schemas optimized to capture prime placement inside Google's algorithmic AI Overviews.",
    badge: "AI Overviews",
    metric: "#1 Answer Box",
  },
  {
    title: "Content Marketing & Digital PR",
    href: "/digital-marketing/content-marketing",
    icon: FileText,
    desc: "Topical cluster whitepapers, industry reports, and tier-1 press mentions establishing undisputed entity authority in search engines and AI indices.",
    badge: "Topical Authority",
    metric: "High DA Links",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    href: "/digital-marketing/conversion-rate-optimization",
    icon: Percent,
    desc: "Behavioral heatmap auditing, friction removal, and fast-loading checkout/lead funnels that turn visitors into phone calls and paid invoices.",
    badge: "Revenue Multiplier",
    metric: "+45% Conversions",
  },
];

export const MarketingPillarsGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-canvas border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold">SPECIALIZED CAPABILITIES</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Eight Disciplines of Engineered Growth
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            We don't do superficial vanity metrics. Each pillar operates with mathematical precision, tracking Cost Per Acquisition (CPA) and verifiable client pipeline value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={pillar.href}
                to={pillar.href}
                className="group p-7 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-surface group-hover:bg-gold-50 border border-border flex items-center justify-center text-primary group-hover:text-gold-700 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface text-secondary font-medium">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/70 flex items-center justify-between text-xs">
                  <span className="font-mono text-gold-800 font-bold bg-gold-50 px-2 py-0.5 rounded-md border border-gold-200">
                    {pillar.metric}
                  </span>
                  <span className="font-semibold text-primary group-hover:text-gold-700 flex items-center gap-1 transition-colors">
                    Explore
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default MarketingPillarsGrid;
