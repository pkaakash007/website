import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What makes Real Result Marketing different from typical marketing agencies in Tamil Nadu?",
    answer:
      "Most agencies sell vanity impressions and social media posts. Real Result combines technical software engineering with search science. We build custom entity graphs for AI discovery (GEO), optimize Core Web Vitals for instant loading, and deploy negative-keyword gated Google Ads that target commercial purchase intent, directly driving booked orders and verifiable revenue.",
  },
  {
    question: "How does Generative Engine Optimization (GEO) help my business get recommended by AI?",
    answer:
      "Generative Engine Optimization (GEO) prepares your digital presence for the shift from traditional search engines to AI synthesis (ChatGPT, Perplexity, Google AI Overviews). We organize your case studies, factual credentials, pricing tables, and schema citations so that LLMs recognize your brand as the leading authority in your industry and cite you in their generative answers.",
  },
  {
    question: "How soon can we expect measurable business inquiries from SEO and Google Ads?",
    answer:
      "For Google Ads PPC and Local Google Maps (3-pack) optimization, clients typically see phone inquiries and form submissions within the first 14 to 30 days. Comprehensive organic search engine optimization and programmatic cluster ranking generally deliver compounding market dominance within 3 to 6 months.",
  },
  {
    question: "Do you handle bilingual or regional Tamil language marketing campaigns?",
    answer:
      "Yes. A significant percentage of commercial search in Tamil Nadu uses conversational Tamil or Tanglish (Tamil written in English characters). We build bilingual campaign funnels that capture both regional trade buyers and national/international corporate buyers.",
  },
  {
    question: "How is campaign attribution and reporting handled?",
    answer:
      "We provide transparent real-time dashboards using Google Looker Studio and Search Console. You receive weekly automated performance summaries and monthly executive strategy calls with our senior directors in Erode, reviewing your exact cost-per-lead and revenue attribution.",
  },
];

export const MarketingFAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-14">
            <Badge variant="gold">FREQUENTLY ASKED QUESTIONS</Badge>
            <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
              Direct Answers to Key Questions
            </h2>
            <p className="text-base text-secondary">
              Everything you need to know about our digital marketing framework and revenue expectations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-canvas overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-secondary leading-relaxed border-t border-border/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingFAQAccordion;
