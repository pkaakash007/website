import React from "react";
import { Container } from "@/components/layout/Container";
import ValueItemCard from "./ValueItemCard";
import { Target, Zap, ShieldCheck, HeartHandshake } from "lucide-react";

export const AboutCoreValues: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: "Singular Accountability",
      desc: "We eliminate the blame game between marketing and engineering. Your dedicated account director owns the entire pipeline outcome from system architecture to lead generation.",
    },
    {
      icon: Zap,
      title: "Technical Rigor First",
      desc: "We write clean, typed TypeScript and deploy scalable cloud infrastructure. No temporary hacks, no bloated drag-and-drop builders, and no technical debt.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Data Security",
      desc: "Every partnership operates under strict mutual NDAs. Client data, commercial trade secrets, and source code remain 100% confidential and secured.",
    },
    {
      icon: HeartHandshake,
      title: "Long-Term Client Stewardship",
      desc: "Over 88% of our clients have been with us for over two years. We treat client capital with the same discipline and prudence as our own.",
    },
  ];

  return (
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-14 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            Our Core Operating Principles
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            The fundamental beliefs that guide how we code, how we optimize campaigns, and how we treat our client partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <ValueItemCard key={idx} {...val} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutCoreValues;
