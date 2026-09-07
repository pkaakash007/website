import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Award, TrendingUp, BarChart3, ShieldCheck, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Textile & Knitwear Exporter: Global SEO & B2B Inquiries",
    client: "Tiruppur Apparel Manufacturing Group",
    industry: "Apparel & Garment Exports",
    metric: "+340%",
    metricLabel: "Increase in International B2B Inquiries",
    desc: "Engineered a programmatic B2B SEO architecture targeting wholesale buyers across Germany, the UK, and the US, resulting in $1.8M in attributed new order pipelines within 8 months.",
    services: ["Export SEO", "Google Ads B2B", "Web Performance"],
  },
  {
    title: "Regional Multispecialty Hospital Network: Google Maps 3-Pack Dominance",
    client: "Healthcare & Surgical Centers",
    industry: "Healthcare & Medicine",
    metric: "+420%",
    metricLabel: "Increase in Verified Patient Appointments",
    desc: "Restructured Google Business Profiles across 4 clinical locations in Erode and Coimbatore, deploying localized schema and citation standardization to capture top map pack placement for emergency and specialist queries.",
    services: ["Local SEO", "Reputation Management", "Google Maps 3-Pack"],
  },
  {
    title: "Precision Engineering & Foundry: Custom ERP & Shop-Floor Software",
    client: "Coimbatore Industrial Machinery Foundry",
    industry: "Heavy Engineering & Foundries",
    metric: "-70%",
    metricLabel: "Reduction in Manual Spreadsheet Discrepancies",
    desc: "Replaced disconnected spreadsheets with a bespoke web-based ERP and order-tracking system built with React, TypeScript, and PostgreSQL, giving leadership real-time production tracking and automated GST e-invoicing.",
    services: ["Custom Software Development", "ERP Automation", "PostgreSQL"],
  },
];

export const CaseStudiesHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Client Case Studies & Quantified Results | Real Result Marketing"
        description="Explore verified client case studies across SEO, Google Ads, and custom software development for Tamil Nadu manufacturing, healthcare, and export leaders."
        canonicalPath="/case-studies"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Real Result Client Case Studies",
          url: "https://realresult.in/case-studies",
          description: "Documented client growth case studies and software engineering deliverables across Tamil Nadu.",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              <span>Verifiable Outcomes · Tamil Nadu Enterprises</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Quantified Case Studies &{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Outcomes
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              We do not rely on hypothetical claims. Every engagement is evaluated on commercial metrics: qualified search inquiries, verified return on ad spend (ROAS), and automated operational savings.
            </p>

            <DirectAnswerBox
              question="What proof supports Real Result Marketing's methodologies?"
              summary="Our client portfolio encompasses market leaders across Tamil Nadu's industrial, export, healthcare, and retail sectors. We maintain strict NDAs while transparently tracking search impressions, organic conversion volume, Google Maps phone inquiries, and software adoption metrics."
              takeaways={[
                "Verified multi-district enterprise case studies across Tamil Nadu",
                "Quantified revenue attribution via Google Analytics 4 and call tracking",
                "Zero fabricated metrics, fake quotes, or manipulated review signals",
                "Scalable software systems actively managing mission-critical operations",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="space-y-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-50 text-gold-900 border border-gold-200 font-bold">
                      {cs.industry}
                    </span>
                    <span className="text-xs text-muted">Client: {cs.client}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                    {cs.title}
                  </h3>

                  <p className="text-sm text-secondary leading-relaxed max-w-2xl">
                    {cs.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {cs.services.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-surface border border-border text-primary"
                      >
                        ✓ {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 p-6 rounded-2xl bg-canvas border border-border/80 text-center space-y-2">
                  <div className="text-4xl sm:text-5xl font-black font-mono text-gold-700">
                    {cs.metric}
                  </div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wide">
                    {cs.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white text-center">
        <Container size="sm">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Achieve Quantifiable Growth?
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
              Schedule an evaluation with our Erode and Coimbatore senior directors to review how our methodologies apply to your business model.
            </p>
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("case-studies-cta")}
              className="cursor-pointer"
            >
              Discuss Your Growth Plan
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CaseStudiesHubPage;
