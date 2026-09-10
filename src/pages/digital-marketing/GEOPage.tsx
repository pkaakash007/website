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
  Layers,
  FileCheck,
  ShieldCheck,
  ArrowRight,
  Database,
  Cpu,
} from "lucide-react";

export const GEOPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Generative Engine Optimization (GEO) Agency | Real Result Marketing"
        description="Optimize your company entity for ChatGPT Search, Perplexity, Claude, and Google AI Overviews. Real Result Marketing pioneers Generative Engine Optimization (GEO) in Tamil Nadu."
        canonicalPath="/digital-marketing/geo"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Generative Engine Optimization (GEO) Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "GEO and AI Search Optimization",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Generative Engine Optimization (GEO)" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              The Next Frontier of Search · AI Model Visibility
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Generative Engine Optimization{" "}
              <span className="text-gold-700">
                (GEO)
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              When prospective clients ask ChatGPT, Perplexity, or Gemini to recommend the top provider in your industry, will your brand be cited? We structure your entity signals, factual datasets, and digital authority to secure AI engine recommendations.
            </p>

            <DirectAnswerBox
              question="What is Generative Engine Optimization (GEO)?"
              summary="Generative Engine Optimization (GEO) is the practice of optimizing digital content and entity signals to be accurately discovered, cited, and recommended by Large Language Models (LLMs) and generative search engines—including ChatGPT Search, Perplexity AI, Google AI Mode, and Claude. GEO relies on concise definitions, authoritative third-party entity corroboration, structured tables, first-party proof, and comprehensive FAQ microdata."
              takeaways={[
                "Guaranteed indexability for AI crawlers including OAI-SearchBot and PerplexityBot",
                "Entity resolution: ensuring AI models clearly know your exact services and locations",
                "Direct answer formatting tailored for LLM Retrieval-Augmented Generation (RAG)",
                "Digital PR designed to generate authentic cross-web AI citations",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("geo-consultation")}
                className="cursor-pointer"
              >
                Schedule GEO Assessment
              </Button>
              <Button variant="secondary" size="lg" href="/resources">
                Read GEO Technical Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* The Pillars of GEO */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">GEO METHODOLOGY</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              How We Make Brands Discoverable to AI
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              LLMs do not rank keywords; they evaluate factual consensus, source reliability, and semantic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Entity Authority & Knowledge Graph",
                desc: "We align your business identity across corporate registries, industry directories, and Knowledge Graph nodes to establish unequivocal entity clarity for LLM training and retrieval.",
                icon: Database,
              },
              {
                title: "RAG-Friendly Direct Answers",
                desc: "Structuring core web pages with immediate 40–80 word direct answer summaries, technical comparison tables, and bulleted workflows that AI retrieval parsers extract effortlessly.",
                icon: Cpu,
              },
              {
                title: "Citable Evidence & Case Studies",
                desc: "Publishing verifiable case studies with quantified metrics, named methodologies, and authentic client outcomes that AI models cite as factual proof in user conversations.",
                icon: FileCheck,
              },
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-gold-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{col.title}</h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default GEOPage;
