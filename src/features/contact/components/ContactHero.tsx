import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PhoneCall, ShieldCheck, Clock } from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-20 sm:pb-20 bg-gradient-to-b from-canvas via-white to-canvas border-b border-border overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container size="wide">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        <div className="max-w-4xl space-y-5 mt-6">
          <Badge variant="gold">DIRECT EXECUTIVE ACCESS</Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.08]">
            Connect Directly With Our{" "}
            <span className="font-serif italic font-normal text-gold-700">
              Strategists & Architects
            </span>
            .
          </h1>

          <p className="text-base sm:text-xl text-secondary leading-relaxed max-w-3xl">
            No gatekeepers, junior account reps, or automated runarounds. Speak directly with senior directors in Erode to evaluate your digital marketing expansion or custom software architecture.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-primary">
            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full border border-border">
              <Clock className="w-4 h-4 text-gold-700" />
              <span>Response SLA: Under 24 Business Hours</span>
            </div>
            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-full border border-border">
              <ShieldCheck className="w-4 h-4 text-gold-700" />
              <span>Strict Mutual Non-Disclosure Protection</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
