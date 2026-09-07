import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { HelpCircle, Sparkles, CheckCircle2 } from "lucide-react";

const allFaqs = [
  {
    category: "Digital Marketing & SEO",
    items: [
      {
        q: "What makes Real Result Marketing the best digital marketing agency in Tamil Nadu?",
        a: "We blend technical software engineering with commercial search strategy. We do not just run ads or build links; we engineer sub-second site architectures, dominate Google Maps 3-packs across Tamil Nadu, optimize for AI answers (ChatGPT, Perplexity, Google AI Overviews), and tie every rupee spent directly to verified business inquiries and revenue.",
      },
      {
        q: "How long does it take for SEO to generate qualified leads in Tamil Nadu?",
        a: "Local SEO and Google Maps optimization typically yield measurable local inquiries within 30 to 60 days. Broad organic search rankings for competitive regional and export keywords generally achieve substantial authority and consistent commercial leads within 3 to 6 months.",
      },
      {
        q: "Do you guarantee #1 ranking on Google?",
        a: "No ethical agency can guarantee a #1 position on Google, as search algorithms continuously evolve based on hundreds of factors. What Real Result guarantees is strict adherence to white-hat technical search guidelines, elimination of crawl barriers, creation of superior topical authority, and continuous optimization designed to give your company the highest possible legitimate probability of market dominance.",
      },
    ],
  },
  {
    category: "Generative Engine Optimization (GEO & AIO)",
    items: [
      {
        q: "What is Generative Engine Optimization (GEO)?",
        a: "GEO is the discipline of structuring your company's online entity signals, factual proof, structured data, and digital PR so that AI models (like ChatGPT Search, Perplexity, Google Gemini, and Claude) accurately identify, synthesize, and recommend your business when users ask for recommendations.",
      },
      {
        q: "How does AIO (AI Search Optimization) relate to Google AI Overviews?",
        a: "AIO specifically focuses on Google's AI Overview panels. We format on-page content with concise direct definitions, comparison tables, and structured JSON-LD microdata that Google's Gemini models easily extract for top-of-page AI answer boxes.",
      },
    ],
  },
  {
    category: "Software & Web Development",
    items: [
      {
        q: "What technologies does Real Result use for custom web and software development?",
        a: "We engineer using modern, enterprise-grade technology stacks: React, Vite, Next.js, and TypeScript on the frontend, combined with Node.js, Python, PostgreSQL, Redis, and AWS/GCP cloud backends. We avoid bloated generic templates to deliver sub-second speeds and bank-grade security.",
      },
      {
        q: "Do we own the software and source code after development?",
        a: "Yes, 100%. Upon completion and final handover, all intellectual property, source code repositories, databases, and deployment credentials belong exclusively to your company with zero recurring per-user licensing fees or vendor lock-in.",
      },
      {
        q: "Can you integrate custom software with our existing accounting and WhatsApp systems?",
        a: "Yes. We regularly build automated integrations connecting custom ERP and web platforms with Tally, SAP, GST e-invoicing APIs, Razorpay/Stripe, and the official WhatsApp Business API for automated dispatch, billing, and customer notifications.",
      },
    ],
  },
  {
    category: "Locations & Engagement",
    items: [
      {
        q: "Where is Real Result located, and can we meet in person?",
        a: "Our corporate headquarters is located at 148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu. We welcome client visits at our Erode office and our leadership team regularly conducts on-site strategy sessions across Coimbatore, Chennai, Tiruppur, Salem, and statewide.",
      },
      {
        q: "How do we get started with an audit or consultation?",
        a: "You can click 'Request Consultation' on any page, reach us directly by phone at +91 98420 12345, or message our WhatsApp desk for an immediate response from a senior strategist.",
      },
    ],
  },
];

export const FAQHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Frequently Asked Questions (FAQ) | Real Result Marketing"
        description="Comprehensive answers to common questions about SEO, Local SEO, Generative Engine Optimization (GEO), Google Ads, and custom software development in Tamil Nadu."
        canonicalPath="/faq"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.flatMap((category) =>
            category.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            }))
          ),
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Frequently Asked Questions" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-gold-600" />
              <span>Central Knowledge Repository</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Frequently Asked{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Questions
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Transparent, definitive answers regarding our digital marketing methodologies, Generative Engine Optimization (GEO), custom software engineering standards, pricing, and Tamil Nadu regional operations.
            </p>

            <DirectAnswerBox
              question="What is Real Result's customer transparency standard?"
              summary="We believe in absolute operational clarity. We do not make deceptive ranking promises, hide behind vanity metrics, or lock clients into proprietary monoliths. Our team provides verified analytics access, clear sprint deliverables, and dedicated direct communication via our Erode and regional desks."
              takeaways={[
                "Transparent monthly reporting via Google Analytics 4 and Search Console",
                "100% white-hat search and AI optimization practices",
                "Full source code and data ownership for all software deliverables",
                "Direct senior strategist access without account manager layers",
              ]}
            />
          </div>
        </Container>
      </section>

      {/* FAQs Categorized */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-16">
            {allFaqs.map((cat, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-3">
                  <span className="text-xs font-mono font-bold text-gold-700">
                    CATEGORY {idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-primary">
                    {cat.category}
                  </h2>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-6 rounded-2xl bg-white border border-border shadow-subtle space-y-3"
                    >
                      <h3 className="text-lg font-bold text-primary">
                        {item.q}
                      </h3>
                      <p className="text-sm text-secondary leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQHubPage;
