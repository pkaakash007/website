import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const contactFaqs: FAQItem[] = [
  {
    question: "What happens after I submit an inquiry?",
    answer:
      "Within 24 business hours, an executive director (not an aggressive sales rep) will review your requirements, conduct preliminary technical/search reconnaissance, and reach out to schedule a focused 30-minute discovery session.",
  },
  {
    question: "Can we sign a mutual Non-Disclosure Agreement (NDA) before sharing proprietary details?",
    answer:
      "Yes, absolutely. We routinely sign standard bilateral NDAs before reviewing proprietary source code, internal databases, product roadmaps, or confidential sales telemetry.",
  },
  {
    question: "Can we visit your headquarters in Erode for an in-person meeting?",
    answer:
      "Yes. We welcome prospective clients and partners to our Erode engineering headquarters. We also arrange in-person briefings in Coimbatore, Chennai, Tiruppur, or Salem upon prior appointment.",
  },
  {
    question: "What is your typical project engagement structure?",
    answer:
      "For Application Development, we offer fixed-milestone architectural deliverables or dedicated dedicated sprint squads. For Digital Marketing, we operate on performance retainer models with clear commercial KPIs and monthly ROI reporting.",
  },
];

export const ContactFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="gold">COMMON INQUIRIES</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary text-sm">
              Answers regarding our consultation process, NDAs, and engagement timelines.
            </p>
          </div>

          <div className="space-y-4">
            {contactFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-white overflow-hidden shadow-subtle"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-primary">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-700 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-secondary leading-relaxed border-t border-border/70">
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

export default ContactFAQ;
