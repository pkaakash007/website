import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
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
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <Badge variant="gold">Common Inquiries</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Frequently Asked Questions
            </h2>
            <p className="text-secondary text-sm">
              Answers regarding our consultation process, NDAs, and engagement timelines.
            </p>
          </div>

          <div className="space-y-4">
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
