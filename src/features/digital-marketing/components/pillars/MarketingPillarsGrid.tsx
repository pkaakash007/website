import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import PillarServiceCard from "./PillarServiceCard";
import {
  Search,
  MapPin,
  Network,
  Bot,
  MousePointerClick,
  Share2,
  FileText,
  Percent,
} from "lucide-react";

export const marketingPillars = [
  {
    title: "Search Engine Optimization (SEO)",
    href: "/digital-marketing/seo",
    icon: Search,
    desc: "Technical site architecture, Core Web Vitals optimization, programmatic landing pages, and authority backlink acquisition designed for permanent top rankings.",
    badge: "Organic Search",
    metric: "+280% Avg Traffic",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    href: "/digital-marketing/geo",
    icon: Network,
    desc: "Targeted entity definitions, schema datasets, and citation networks formatted so ChatGPT Search, Perplexity, and Claude cite your business as the recommended choice.",
    badge: "AI Engine Search",
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
    badge: "Local Authority",
    metric: "94% Win Rate",
  },
  {
    title: "Performance Social Media Ads",
    href: "/digital-marketing/social-media-marketing",
    icon: Share2,
    desc: "High-converting Meta (Instagram & Facebook) and LinkedIn campaigns delivering verified B2B and retail inquiries with creative testing at scale.",
    badge: "Paid Social",
    metric: "Sub-₹35 CPL",
  },
  {
    title: "AI Search Optimization (AIO)",
    href: "/digital-marketing/aio",
    icon: Bot,
    desc: "Structured direct answers, comparative pricing tables, and FAQ schemas optimized to capture prime placement inside Google's algorithmic AI Overviews.",
    badge: "Google AI Overviews",
    metric: "#1 Answer Placement",
  },
  {
    title: "Content Marketing & Digital PR",
    href: "/digital-marketing/content-marketing",
    icon: FileText,
    desc: "Topical cluster whitepapers, industry reports, and tier-1 press mentions establishing undisputed entity authority in search engines and AI indices.",
    badge: "Brand Authority",
    metric: "Authoritative Citations",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    href: "/digital-marketing/conversion-rate-optimization",
    icon: Percent,
    desc: "Behavioral heatmap auditing, friction removal, and fast-loading checkout/lead funnels that turn visitors into phone calls and paid invoices.",
    badge: "Revenue Multiplier",
    metric: "+45% Inquiries",
  },
];

export const MarketingPillarsGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-canvas border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-3">
          <Badge variant="gold">Specialized Capabilities</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Eight Disciplines of Engineered Growth
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            We focus on measurable revenue rather than superficial vanity metrics. Each pillar operates with mathematical discipline, tracking customer acquisition cost and verified commercial pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketingPillars.map((pillar, idx) => (
            <PillarServiceCard key={idx} {...pillar} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MarketingPillarsGrid;
