import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { PhoneCall, ShieldCheck, Clock } from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-18 bg-white border-b border-border">
      <Container size="wide">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        <div className="max-w-4xl space-y-5 mt-6">
          <Badge variant="gold">Direct Executive Access</Badge>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
            Connect Directly With Our Strategists & Architects.
          </h1>

          <p className="text-base sm:text-lg text-secondary leading-relaxed max-w-3xl">
            No gatekeepers, junior account reps, or automated runarounds. Speak directly with senior directors in Erode to evaluate your digital marketing expansion or custom software architecture.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-primary">
            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-md border border-border">
              <Clock className="w-4 h-4 text-gold-700" />
              <span>Response SLA: Under 24 Business Hours</span>
            </div>
            <div className="flex items-center gap-2 bg-surface px-3 py-1.5 rounded-md border border-border">
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
