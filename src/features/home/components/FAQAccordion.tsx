
import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "How does Real Result coordinate marketing across both broadcast media and digital channels?",
    a: "We operate as a single unified media planner and buyer. Your campaign narrative, flight dates, audience demographics, and conversion tracking are coordinated across linear television, digital OOH billboards, radio, paid search, and social feeds so audiences encounter a consistent, high-impact brand presence.",
  },
  {
    q: "Can we engage Real Result specifically for Marketing & Media without other services?",
    a: "Yes. Marketing & Media is our primary growth division. Many clients work with us exclusively for full-service media buying, search and social performance, outdoor DOOH campaigns, or brand strategy, and choose to add AI communication or custom technology as their operations scale.",
  },
  {
    q: "How does your Closed-Loop Attribution track phone inquiries and foot traffic?",
    a: "Through Dynamic Number Insertion (DNI), server-side conversion tracking, and geo-targeted billboard triggers, we tie inbound telephone inquiries and digital leads directly to the specific television slot, billboard location, or search keyword that prompted the action.",
  },
  {
    q: "How does Regional Language AI Telecalling support marketing campaigns?",
    a: "When paid media produces incoming inquiries, our conversational voice agents engage prospects in regional languages within seconds. They qualify requirements, answer FAQs, and schedule sales appointments directly into your CRM before leads go cold.",
  },
  {
    q: "Are your bulk IVR and automated communication systems compliant with telecom regulations?",
    a: "Yes. All outbound calls adhere to TRAI, FCC, and regional telecom regulatory frameworks. We maintain automated DND (Do-Not-Disturb) scrubbing, calling-hour restrictions, frequency caps, and explicit opt-in/opt-out logging.",
  },
  {
    q: "How quickly can a new campaign be planned and launched?",
    a: "Digital performance search and social campaigns typically launch within 3 to 5 business days following creative and tracking setup. Large-scale broadcast media, transit wraps, and outdoor billboard networks are scheduled according to media owner inventory windows, typically within 7 to 14 days.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 sm:py-28 bg-canvas relative border-b border-border">
      <Container size="wide">
        <SectionHeader
          badge="FREQUENTLY ASKED QUESTIONS"
          title={
            <>
              Everything you need to know about our{" "}
              <span className="font-serif italic font-normal text-primary">campaign model</span>.
            </>
          }
          subtitle="Clear answers on media planning, attribution, regional communication, and campaign timelines."
        />

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-border overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-primary text-sm sm:text-base hover:text-gold-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-secondary leading-relaxed border-t border-border/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
