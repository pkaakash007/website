import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import ContactFAQItem from "./ContactFAQItem";

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
      "For Application Development, we offer fixed-milestone architectural deliverables or dedicated sprint squads. For Digital Marketing, we operate on performance retainer models with clear commercial KPIs and monthly ROI reporting.",
  },
];

export const ContactFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-black/[0.06]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-black/[0.05] text-[#86868B]">
              Operating Policies &amp; FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1D1D1F] tracking-[-0.025em] leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#86868B] max-w-xl mx-auto leading-relaxed">
              Answers regarding our consultation process, NDAs, and engagement timelines.
            </p>
          </div>

          <div className="bg-white rounded-[24px] border border-black/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.03)] divide-y divide-black/[0.06] overflow-hidden p-2 sm:p-3">
            {contactFaqs.map((faq, idx) => (
              <ContactFAQItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === idx}
                onToggle={() => toggle(idx)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactFAQ;
