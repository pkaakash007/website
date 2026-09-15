import React from "react";
import { Container } from "@/components/layout/Container";
import ValueItemCard from "./ValueItemCard";

export const AboutCoreValues: React.FC = () => {
  const values = [
    {
      title: "Singular Accountability",
      desc: "We take full responsibility for your project from website development to lead generation and growth, with one dedicated team owner.",
    },
    {
      title: "Technical Quality First",
      desc: "We write clean, secure code and build fast, reliable websites. No page-builder bloat, no fragile templates, and no shortcuts.",
    },
    {
      title: "Data Security & Ownership",
      desc: "Strict confidentiality and mutual non-disclosure. You retain 100% full ownership of your source code, domain name, and client data.",
    },
    {
      title: "Long-Term Client Partnerships",
      desc: "We build long-term relationships with businesses across Tamil Nadu, treating your marketing and software budget with the same care as our own.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            Our Core Operating Principles
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            The standards that guide how we build software, manage marketing campaigns, and support our client partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <ValueItemCard
              key={idx}
              title={val.title}
              desc={val.desc}
              number={String(idx + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutCoreValues;

