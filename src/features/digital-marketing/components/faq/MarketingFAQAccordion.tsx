import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What does a digital marketing company do?",
    answer:
      "A digital marketing company helps businesses increase online visibility, generate qualified leads, and grow revenue through internet channels. Core services include Search Engine Optimization (SEO), Pay-Per-Click advertising (Google Ads and Meta Ads), social media management, content creation, conversion rate optimization (CRO), and automated lead management. Real Result manages end-to-end strategy, execution, and closed-loop ROI tracking.",
  },
  {
    question: "Why is digital marketing important for business growth?",
    answer:
      "Digital marketing connects your business directly with customers actively searching for your products and services. Unlike traditional broad advertising, digital marketing allows precise audience targeting, real-time campaign adjustments, measurable conversion tracking, and predictable customer acquisition costs.",
  },
  {
    question: "What is the difference between SEO and Google Ads (PPC)?",
    answer:
      "SEO (Search Engine Optimization) earns organic, non-paid rankings on search engines over time through technical site improvements, quality content, and backlinks. Google Ads (Pay-Per-Click) provides immediate placement at the top of search results by paying for each ad click. An effective growth strategy pairs Google Ads for immediate leads with SEO for compounding long-term traffic.",
  },
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Paid advertising campaigns (Google Ads and Meta Ads) typically generate inquiries and sales within 48 to 72 hours of launch. Organic SEO, content marketing, and brand building generally require 3 to 6 months to achieve top search rankings and steady organic inbound traffic.",
  },
  {
    question: "How much does digital marketing cost per month?",
    answer:
      "Digital marketing costs vary based on business size, competition, and goals. Most growing businesses invest 5% to 15% of gross revenue into marketing. Local campaigns typically start between ₹20,000 and ₹50,000 per month, while scaling multi-location brands and e-commerce companies deploy ₹1,00,000 to ₹5,00,000+ monthly.",
  },
  {
    question: "How do you track and calculate digital marketing ROI?",
    answer:
      "Digital marketing ROI is calculated by dividing net profit generated from campaigns by the total marketing cost, multiplied by 100: [(Revenue - Marketing Cost) / Marketing Cost] × 100. We track return through dynamic call tracking, Google Analytics 4 (GA4), CRM integration, and conversion pixels to measure exact cost per lead (CPL) and return on ad spend (ROAS).",
  },
  {
    question: "Which digital marketing channel delivers the highest ROI?",
    answer:
      "Search Engine Optimization (SEO) and Google Search Ads consistently deliver the highest ROI for high-intent B2B and service businesses because they capture active search demand. For visual consumer products and local retail, Meta Ads (Instagram and Facebook) and short-form video generate rapid customer acquisition and strong brand affinity.",
  },
];

export const MarketingFAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-neutral-200/80 scroll-mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Container size="wide">
        <div className="max-w-3xl">
          <div className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2036] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              Clear, search-optimized answers to the most searched questions about digital marketing, SEO, Google Ads, and campaign ROI.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-neutral-200/80 py-3 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 py-2 cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#0E2036]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#C5A059] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
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
