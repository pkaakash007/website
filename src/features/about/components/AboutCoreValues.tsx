import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
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
    <section className="py-20 lg:py-28 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold">OPERATIONAL ETHOS</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Our Core Operating Principles
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            The fundamental beliefs that guide how we code, how we optimize campaigns, and how we treat our client partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-border hover:border-gold/60 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-gold-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutCoreValues;
