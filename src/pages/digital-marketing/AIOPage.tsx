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
  Bot,
  Search,
  CheckCircle2,
  Table,
  HelpCircle,
  BarChart3,
  Layers,
} from "lucide-react";

export const AIOPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="AI Search Optimization (AIO) | Google AI Overviews | Real Result"
        description="Optimize your web assets for Google AI Overviews, AI Mode, and generative answer modules. Real Result Marketing builds structured microdata and direct-answer architectures."
        canonicalPath="/digital-marketing/aio"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Search Optimization (AIO) Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "AIO and Generative Answer Optimization",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "AI Search Optimization (AIO)" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Google AI Overviews & Algorithmic Synthesis
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              AI Search Optimization{" "}
              <span className="text-gold-700">
                (AIO)
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Google search results are increasingly dominated by AI Overviews and synthesized answers. We optimize your website's content layout, schema microdata, and answer structures to secure prominent inclusion in Google's generative answer panels.
            </p>

            <DirectAnswerBox
              question="What is the difference between AIO and Traditional Search?"
              summary="AI Search Optimization (AIO) focuses specifically on engineering web pages to be selected by Google's multi-step Gemini reasoning models for AI Overviews. Unlike traditional SERPs that display 10 links, AI Overviews synthesize answers from 2–4 authoritative, highly structured sources that provide succinct definitions, tabular comparisons, and verified microdata."
              takeaways={[
                "Engineered specifically for Google AI Overviews and AI Mode",
                "Schema.org microdata (FAQPage, HowTo, Table, ItemList) implementation",
                "Concise definition modules answering high-volume transactional questions",
                "E-E-A-T trust signals embedded directly into every page",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("aio-consultation")}
                className="cursor-pointer"
              >
                Plan AI Overview Strategy
              </Button>
              <Button variant="secondary" size="lg" href="/digital-marketing/geo">
                Compare with GEO
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Components */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">AIO ARCHITECTURE</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Elements That Trigger AI Overview Citations
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Google AI synthesizers look for specific semantic patterns in source content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-gold-700">
                <Table className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Tabular Data & Comparisons</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Clean HTML comparison tables with clear column headers allow AI systems to extract feature-by-feature insights cleanly.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-gold-700">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Question-Targeted H2 & H3s</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Heading structures mirroring exact natural language search queries followed immediately by direct, factual answers.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-gold-700">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary">Nested Schema Microdata</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                JSON-LD graphs linking author credentials, organization identity, and service specifications for unambiguous entity attribution.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AIOPage;
