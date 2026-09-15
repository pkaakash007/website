import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do we get started working together?",
    answer:
      "We begin with a free strategy consultation to understand your business goals, target audience, and current marketing efforts. Within 2 to 3 days, we share a customized growth roadmap and budget plan for your approval.",
  },
  {
    question: "How do you measure and report campaign results?",
    answer:
      "We provide transparent weekly reports and real-time dashboards tracking actual phone calls, WhatsApp inquiries, lead quality, and sales conversions — not just superficial likes or impressions.",
  },
  {
    question: "What are your contract terms and monthly retainers?",
    answer:
      "We work on flexible monthly retainers without locking you into long-term contracts. You retain 100% complete ownership of your ad accounts, creative assets, and lead databases at all times.",
  },
  {
    question: "What monthly budget do I need to run ads?",
    answer:
      "We tailor your ad spend to your business scale and goals. For local businesses and clinics, campaigns can start effectively from ₹20,000 to ₹50,000 per month, while scaling e-commerce brands and multi-location companies typically deploy ₹1,00,000 to ₹5,00,000+ monthly.",
  },
  {
    question: "Who creates the ad designs, videos, and copywriting?",
    answer:
      "Our in-house creative team handles everything from scriptwriting, video editing, and graphic design to landing page creation and ad copy. All creatives are sent for your review and approval before going live.",
  },
  {
    question: "How fast can our campaigns go live?",
    answer:
      "Once we finalize the strategy and receive access to your accounts, our team creates your ad creatives, sets up tracking pixels, and launches your first live campaign within 5 to 7 business days.",
  },
];

export const MarketingFAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-neutral-200/80 scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl">
          <div className="space-y-3 mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2036] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-neutral-600 font-normal leading-relaxed">
              Direct, transparent answers regarding ad tracking, monthly retainers, ROI reporting, and timelines.
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
