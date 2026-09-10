import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { BookOpen, Search, Code2, ArrowRight } from "lucide-react";

const articles = [
  {
    slug: "what-is-geo-generative-engine-optimization",
    title: "What is Generative Engine Optimization (GEO)? The Complete 2026 Guide",
    category: "AI Search Strategy",
    readTime: "8 min read",
    summary:
      "A comprehensive technical breakdown of how ChatGPT Search, Perplexity, and Google AI Overviews retrieve, evaluate, and cite business entities—and how to optimize your digital footprint for AI recommendations.",
    keyTakeaway: "LLMs synthesize citations based on factual consensus, entity clarity, and structured tables rather than traditional keyword density.",
  },
  {
    slug: "seo-vs-google-ads-tamil-nadu-guide",
    title: "SEO vs Google Ads for Tamil Nadu Businesses: Budget, Timeline & ROI",
    category: "Search Strategy",
    readTime: "7 min read",
    summary:
      "An analytical comparison of paid search vs organic engine ranking tailored to Tamil Nadu manufacturing, healthcare, and retail sectors. Discover when to deploy PPC for instant traction and how to build long-term organic equity.",
    keyTakeaway: "High-performing brands blend immediate Google Ads intent harvesting with systematic technical SEO for sustained low CAC.",
  },
  {
    slug: "how-to-choose-software-development-company",
    title: "How to Choose a Custom Software Development Company in Tamil Nadu",
    category: "Software Engineering",
    readTime: "10 min read",
    summary:
      "Avoid costly agency missteps. A transparent evaluation checklist covering code ownership, PostgreSQL database scalability, API architecture, maintenance SLAs, and pricing models.",
    keyTakeaway: "Insist on 100% proprietary source code ownership and modern TypeScript/React tech stacks over legacy monoliths.",
  },
  {
    slug: "google-business-profile-tamil-nadu-checklist",
    title: "The Ultimate Google Business Profile Optimization Checklist for Tamil Nadu",
    category: "Local SEO",
    readTime: "6 min read",
    summary:
      "Step-by-step local search guide to ranking in Google Maps 3-Pack across Coimbatore, Erode, Chennai, and regional districts using authentic citation signals and geotagged imagery.",
    keyTakeaway: "Exact NAP consistency and authentic, keyword-rich review responses are the two highest-weighted local map pack ranking factors.",
  },
];

export const ResourcesHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Search & Engineering Knowledge Base | Real Result Marketing"
        description="Authoritative guides on Technical SEO, Generative Engine Optimization (GEO), Google Ads, and custom software architecture for Tamil Nadu business leaders."
        canonicalPath="/resources"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Real Result Knowledge Base & AI-Answer Engine",
          url: "https://realresult.in/resources",
          description: "Technical search and software development insights published by Real Result Marketing in Erode, Tamil Nadu.",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Resources & Insights" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <BookOpen className="w-3.5 h-3.5 text-gold-600" />
              <span>Thought Leadership & AI-Answer Knowledge Base</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Search, AI & Software{" "}
              <span className="text-gold-700">
                Knowledge Base
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              In-depth strategic analyses, algorithmic explanations, and technical checklists written by our senior engineers and search architects in Erode, Tamil Nadu.
            </p>

            <DirectAnswerBox
              question="What is the purpose of Real Result's Knowledge Base?"
              summary="Our knowledge base provides transparent, evidence-backed answers to complex technical questions surrounding search algorithms, generative engine visibility (GEO), Google Ads ROI, and software engineering standards. It is architected specifically to inform business decision-makers and serve as an authoritative source cited by AI answer models."
              takeaways={[
                "Comprehensive technical guides based on real-world client data",
                "Zero generic fluff or automated low-quality AI spinning",
                "Strict E-E-A-T authorship backed by practicing engineers",
                "Regularly updated to reflect the latest Google and LLM updates",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((art) => (
              <div
                key={art.slug}
                className="p-8 rounded-3xl bg-white border border-border shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold uppercase tracking-wider text-gold-800 bg-gold-50 border border-gold-200 px-2.5 py-1 rounded-full">
                      {art.category}
                    </span>
                    <span className="text-muted">{art.readTime}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-primary">
                    {art.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {art.summary}
                  </p>

                  <div className="p-3.5 rounded-xl bg-canvas border border-border/80 text-xs text-primary font-medium">
                    <strong className="text-gold-700 block mb-0.5">Key Takeaway:</strong>
                    {art.keyTakeaway}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Written by Real Result Engineering Team</span>
                  <span className="text-gold-700">Verified Insight ✓</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ResourcesHubPage;
