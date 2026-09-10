import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do you collaborate across US time zones and asynchronous workflows?",
    answer:
      "We structure our workflow for seamless collaboration across US Eastern (EST), Central (CST), and Pacific (PST) time zones. You get a dedicated Slack Connect channel for real-time team communication, bi-weekly Zoom sprint calls with your senior growth strategist, and 24/7 access to live Looker Studio executive dashboards.",
  },
  {
    question: "How do you track and verify revenue attribution inside our CRM?",
    answer:
      "We implement HIPAA/SOC2-compliant server-side Google Tag Manager (sGTM) and first-party conversion API pipelines directly into Salesforce or HubSpot. Every paid touchpoint is tied to actual closed-won revenue, lifecycle pipeline stages, and CAC payback periods rather than superficial platform-reported vanity metrics.",
  },
  {
    question: "What are your typical contract lengths and engagement terms?",
    answer:
      "We believe partnerships should be earned on measurable performance, not legal lock-ins. We operate on transparent monthly retainers with a standard 30-day cancellation notice — zero predatory multi-year contracts. You retain 100% ownership of your ad accounts, pixel data, creative assets, and tracking infrastructure.",
  },
  {
    question: "What minimum monthly ad spend do you recommend?",
    answer:
      "Our algorithmic bidding architectures and multivariate creative sprints are optimized for growth-stage and enterprise brands deploying between $5,000 and $250,000+ per month in media spend across Google Search, LinkedIn ABM, Meta Performance Max, and Programmatic channels.",
  },
  {
    question: "What is Generative Engine Optimization (GEO) and why does it matter?",
    answer:
      "Modern enterprise buyers and consumers frequently use ChatGPT Search, Perplexity AI, Claude, and Google Gemini to research software and vendors. GEO structures your entity schema, technical documentation, and authoritative digital PR so AI models actively cite and recommend your brand as the top solution in conversational answers.",
  },
  {
    question: "How quickly can your growth engineering team onboard and launch?",
    answer:
      "Our onboarding sprint is complete within 7 to 10 business days. During this period, we audit your tracking infrastructure, deploy server-side GTM, construct negative keyword shields, and deliver initial high-velocity creative variations for your approval before spending any ad capital.",
  },
];

export const MarketingFAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 bg-white border-b border-black/[0.06] scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 shadow-2xs">
              <HelpCircle className="w-3.5 h-3.5 text-[#007AFF]" />
              <span>Executive Briefing Q&amp;A</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-600 font-normal">
              Direct, transparent answers regarding timelines, CRM attribution, time zone collaboration, and SLAs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[20px] border border-black/[0.08] bg-[#F8F9FA] hover:bg-white transition-all overflow-hidden shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full bg-white border border-black/[0.08] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-neutral-900 text-white" : "text-neutral-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm sm:text-[15px] text-neutral-600 leading-relaxed border-t border-black/[0.06]">
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
