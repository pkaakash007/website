"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import type { FaqItem } from "@/lib/seo";

/**
 * Accessible FAQ accordion. Every answer is rendered into the HTML (closed
 * ones use the `hidden` attribute), so crawlers and AI engines can read all
 * of them while the page still behaves like a normal accordion.
 */
export const FaqSection: React.FC<{ faqs: FaqItem[]; title?: string; id?: string }> = ({
  faqs,
  title = "Frequently Asked Questions",
  id = "faq",
}) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className="py-16 bg-white scroll-mt-20" aria-labelledby={`${id}-title`}>
      <Container size="wide">
        <div className="max-w-3xl mx-auto">
          <h2 id={`${id}-title`} className="text-2xl sm:text-3xl font-bold text-neutral-900 text-center mb-10">
            {title}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = open === idx;
              const panelId = `${id}-panel-${idx}`;
              return (
                <div key={faq.question} className="rounded-xl border border-neutral-200 overflow-hidden">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-semibold text-neutral-900 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        aria-hidden="true"
                        className={`w-4 h-4 shrink-0 text-neutral-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    hidden={!isOpen}
                    className="p-5 pt-0 text-sm sm:text-base text-neutral-600 leading-relaxed bg-neutral-50/50"
                  >
                    {faq.answer}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
