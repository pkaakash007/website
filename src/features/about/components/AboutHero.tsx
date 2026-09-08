import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import { ShieldCheck, Award, ArrowRight, Sparkles } from "lucide-react";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-canvas via-white to-canvas border-b border-border overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Container size="wide">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        <div className="max-w-4xl space-y-6 mt-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
            <Award className="w-3.5 h-3.5 text-gold-600" />
            <span>Corporate Philosophy · Erode Headquarters, Tamil Nadu</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-[1.08]">
            Engineered to Replace{" "}
            <span className="font-serif italic font-normal text-gold-700">
              Vendor Fragmentation
            </span>
            .
          </h1>

          <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal max-w-3xl">
            Growing enterprises waste momentum coordinating disconnected agencies for web development, SEO, media buying, and software operations. Real Result unifies engineering rigor and high-velocity digital marketing into one synchronized execution partner.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("about-hero")}
              className="cursor-pointer shadow-gold-subtle font-bold"
            >
              Schedule Executive Briefing
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#leadership"
              className="border-border text-primary hover:bg-surface"
            >
              Meet Our Leadership
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
