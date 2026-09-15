import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How long does it take to build a custom website or mobile app?",
    answer:
      "Most web and mobile application projects take between 4 to 8 weeks from initial requirements design to live deployment, depending on feature complexity and database integrations.",
  },
  {
    question: "Do I get 100% full source code ownership?",
    answer:
      "Yes. You retain 100% ownership of all source code, design assets, database schemas, and intellectual property upon completion with zero recurring vendor lock-in or royalty fees.",
  },
  {
    question: "Will my app work on both iPhone (iOS) and Android devices?",
    answer:
      "Yes. We build responsive web applications as well as cross-platform native mobile apps that run smoothly on iOS iPhones, Android smartphones, tablets, and desktop browsers.",
  },
  {
    question: "Do you handle publishing to Google Play Store & Apple App Store?",
    answer:
      "Yes. We manage the entire store submission process, app store developer account configurations, guideline compliance checks, and final live store approvals for both platforms.",
  },
  {
    question: "How is project payment structured?",
    answer:
      "Payment is divided into transparent, milestone-based phases (e.g., 30% initial deposit, 40% staging preview demo, and 30% final live launch & full source code transfer).",
  },
  {
    question: "Do you provide post-launch maintenance and technical support?",
    answer:
      "Yes. Every project includes post-launch monitoring, security updates, server backups, and dedicated WhatsApp engineering support.",
  },
];

export const AppDevFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-neutral-200/80">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] tracking-wider uppercase">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2036] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-neutral-600 font-normal leading-relaxed pt-1">
            Simple, transparent answers about custom website engineering, mobile app development, and source code ownership.
          </p>
        </div>

        <div className="max-w-3xl space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-neutral-200/80 py-3 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
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
      </Container>
    </section>
  );
};

export default AppDevFAQ;
