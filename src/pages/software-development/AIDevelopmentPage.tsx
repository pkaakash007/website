import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Cpu, Bot, Brain, Database, ShieldCheck } from "lucide-react";

export const AIDevelopmentPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="AI Development Company in Tamil Nadu | LLM & Automation | Real Result"
        description="Pioneering enterprise AI software development in Tamil Nadu. Custom Retrieval-Augmented Generation (RAG), voice AI agents, OCR, and intelligent process automation."
        canonicalPath="/software-development/ai-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Artificial Intelligence & LLM Software Development",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Enterprise AI Development",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Software Development", href: "/software-development" },
              { label: "AI & LLM Application Development" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Cpu className="w-3.5 h-3.5 text-gold-600" />
              <span>Applied Machine Learning & Generative AI</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              AI Development Company in{" "}
              <span className="text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Bridge the gap between theoretical AI and production enterprise systems. We build bespoke RAG pipelines, fine-tune open-source models on your proprietary company data, and automate complex business operations.
            </p>

            <DirectAnswerBox
              question="How can Tamil Nadu businesses deploy practical AI solutions today?"
              summary="Instead of relying on generic public chatbots with data privacy risks, Real Result builds private, secure AI software connected directly to your internal company documents, databases, and customer records. From automated multilingual Tamil-English customer service voice bots to AI document extraction for logistics, our solutions eliminate manual overhead while safeguarding enterprise IP."
              takeaways={[
                "Private RAG architectures with zero customer data leakage to public AI models",
                "Regional Tamil and Indian English conversational voice and text bot models",
                "Computer vision and intelligent OCR for invoice and quality inspection",
                "Automated integrations with existing PostgreSQL, SAP, and custom databases",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("ai-development-inquiry")}
                className="cursor-pointer"
              >
                Explore AI Automation Scope
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AIDevelopmentPage;
