import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  MousePointerClick,
  Target,
  BarChart2,
  DollarSign,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export const GoogleAdsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Google Ads & PPC Management Agency in Tamil Nadu | Real Result"
        description="Maximize return on ad spend with high-intent Google Search, Shopping, Display, and YouTube campaigns managed by certified PPC specialists in Tamil Nadu."
        canonicalPath="/digital-marketing/google-ads"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Google Ads & PPC Management Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Pay-Per-Click Advertising",
          areaServed: "Tamil Nadu, India",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Google Ads & PPC" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MousePointerClick className="w-3.5 h-3.5 text-gold-600" />
              <span>High-Intent Commercial Paid Acquisition</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Google Ads & PPC Management in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Capture ready-to-buy customers with precision Google Search, Shopping, and Remarketing campaigns. We eliminate wasted ad spend through negative keyword sculpting, conversion tracking, and high-converting dedicated landing pages.
            </p>

            <DirectAnswerBox
              question="Why choose Real Result Marketing for Google Ads in Tamil Nadu?"
              summary="Many businesses waste 40–60% of their Google Ads budget on broad-match queries and unqualified clicks. Real Result Marketing builds granular single-theme ad groups, enforces strict negative keyword lists, implements offline conversion tracking, and designs bespoke landing pages that consistently achieve above-average Quality Scores, resulting in lower cost-per-click and higher profit margins."
              takeaways={[
                "Laser-targeted B2B and consumer Google Search campaigns",
                "Advanced Dynamic Number Insertion (DNI) call tracking",
                "Bespoke conversion-optimized landing pages included",
                "Transparent ad spend management with direct client billing access",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("google-ads-audit")}
                className="cursor-pointer"
              >
                Request PPC Audit
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                View ROAS Results
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GoogleAdsPage;
