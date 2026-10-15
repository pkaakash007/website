import React from "react";
import { Container } from "@/components/layout/Container";
import ValueItemCard from "./ValueItemCard";

export const AboutCoreValues: React.FC = () => {
  const values = [
    {
      number: "01",
      category: "Accountability",
      title: "Singular Accountability",
      desc: "We take full responsibility for your project from website development to lead generation and growth, with one dedicated team owner.",
      commitment: "Single point of contact",
    },
    {
      number: "02",
      category: "Engineering",
      title: "Technical Quality First",
      desc: "We write clean, secure code and build fast, reliable websites. No page-builder bloat, no fragile templates, and no shortcuts.",
      commitment: "Sub-second speed SLA",
    },
    {
      number: "03",
      category: "Governance",
      title: "Data Security & Ownership",
      desc: "Strict confidentiality and mutual non-disclosure. You retain 100% full ownership of your source code, domain name, and client data.",
      commitment: "100% source code ownership",
    },
    {
      number: "04",
      category: "Partnership",
      title: "Long-Term Partnerships",
      desc: "We build long-term relationships with businesses across Tamil Nadu, treating your marketing and software budget with the same care as our own.",
      commitment: "Transparent regional terms",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFAFC] border-b border-black/[0.06]">
      <Container size="wide">
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-400">
            Operating Principles
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D1D1F] tracking-tight leading-tight">
            How We Work With Every Business
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed font-normal">
            Four operating standards that guide how we engineer software, manage marketing budgets, and protect our client partners.
          </p>
        </div>

        {/* 4-Column Architectural Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rounded-2xl border border-black/[0.08] divide-y md:divide-y-0 md:divide-x divide-black/[0.08] bg-white overflow-hidden shadow-xs">
          {values.map((val) => (
            <ValueItemCard
              key={val.number}
              number={val.number}
              category={val.category}
              title={val.title}
              desc={val.desc}
              commitment={val.commitment}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutCoreValues;
