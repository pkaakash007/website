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
  Search,
  CheckCircle2,
  Code2,
  Zap,
  Globe,
  BarChart,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";

export const SEOPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="SEO Agency in Tamil Nadu | Best SEO Company | Real Result Marketing"
        description="Looking for the best SEO company in Tamil Nadu? Real Result Marketing delivers technical SEO, Core Web Vitals optimization, high-intent keyword mapping, and authoritative backlink acquisition."
        canonicalPath="/digital-marketing/seo"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Search Engine Optimization (SEO) Services Tamil Nadu",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "SEO Agency Services",
          areaServed: "Tamil Nadu, India",
          description:
            "Enterprise and B2B search engine optimization services across Tamil Nadu focusing on technical audits, keyword architecture, on-page optimization, and high-authority link acquisition.",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Search Engine Optimization (SEO)" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Organic Search Dominance · Tamil Nadu
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              SEO Agency in{" "}
              <span className="text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              High-intent organic search rankings engineered through technical precision, programmatic content architecture, and white-hat domain authority. Built to capture buyers at the exact moment of commercial intent.
            </p>

            <DirectAnswerBox
              question="What sets Real Result Marketing's SEO services apart in Tamil Nadu?"
              summary="Real Result Marketing is an engineering-first SEO company based in Erode, Tamil Nadu, serving businesses across Coimbatore, Chennai, and statewide. We solve critical technical bottlenecks—Core Web Vitals, JavaScript hydration, crawl budget optimization, and programmatic topic clustering—combined with authoritative digital PR, delivering predictable top-tier Google rankings without deceptive or spam tactics."
              takeaways={[
                "Exclusively 100% white-hat, sustainable search methodologies",
                "Advanced Core Web Vitals and crawlability engineering",
                "Intent-driven keyword clustering mapped directly to commercial revenue",
                "Transparent monthly reporting via Google Search Console and analytics",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("seo-service-audit")}
                className="cursor-pointer"
              >
                Request Free SEO Audit
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                View SEO Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">FOUR-STAGE SEO ENGINE</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Our Systematic SEO Framework
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              We do not guess. Every optimization is executed against rigorous search engine quality evaluator guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Deep Technical Audit",
                desc: "Resolution of crawl bottlenecks, internal redirect chains, index bloat, schema markup flaws, and sub-second Core Web Vitals optimization.",
                icon: Code2,
              },
              {
                step: "02",
                title: "Topical Authority & Mapping",
                desc: "Complete keyword clustering that models buyer journey intent—answering transactional, commercial, and informational queries ahead of competitors.",
                icon: Cpu,
              },
              {
                step: "03",
                title: "On-Page & Microdata",
                desc: "Crafting semantic HTML5 structures, targeted H1-H3 hierarchies, direct-answer summary snippets, and verified Schema.org JSON-LD microdata.",
                icon: Globe,
              },
              {
                step: "04",
                title: "Digital PR & Authority",
                desc: "Earning editorial backlinks, brand citations, and industry mentions from authentic publications across Tamil Nadu and global industry media.",
                icon: ShieldCheck,
              },
            ].map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="p-6 rounded-3xl bg-white border border-border shadow-card space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-surface flex items-center justify-center text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-700">
                      STAGE {st.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-primary">{st.title}</h3>
                  <p className="text-xs text-secondary leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Internal Links to Sister Silos */}
      <section className="py-16 bg-white border-b border-border">
        <Container size="wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-primary">
                Related Capabilities in Digital Marketing
              </h3>
              <p className="text-xs text-secondary mt-1">
                Explore connected search and paid acquisition channels.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/digital-marketing/local-seo"
                className="px-4 py-2 rounded-full bg-surface hover:bg-gold-50 text-xs font-medium text-primary border border-border transition-colors"
              >
                Local SEO & Maps →
              </Link>
              <Link
                to="/digital-marketing/geo"
                className="px-4 py-2 rounded-full bg-surface hover:bg-gold-50 text-xs font-medium text-primary border border-border transition-colors"
              >
                Generative Engine Optimization (GEO) →
              </Link>
              <Link
                to="/digital-marketing/google-ads"
                className="px-4 py-2 rounded-full bg-surface hover:bg-gold-50 text-xs font-medium text-primary border border-border transition-colors"
              >
                Google Ads PPC →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white text-center">
        <Container size="sm">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Stop Losing Search Traffic to Competitors
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed">
              Connect with our SEO engineering team in Erode. We will review your current domain, uncover keyword gaps, and build your organic ranking roadmap.
            </p>
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("seo-page-bottom-cta")}
              className="cursor-pointer"
            >
              Book Search Strategy Session
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SEOPage;
