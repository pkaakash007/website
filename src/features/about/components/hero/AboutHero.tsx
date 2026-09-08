import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import { Award } from "lucide-react";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-border">
      <Container size="wide">
        <Breadcrumbs items={[{ label: "About Us" }]} />

        <div className="max-w-4xl space-y-6 mt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#FBF7EE] border border-[#E8D298] text-[#8E6D2E] text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-gold-600 shrink-0" />
            <span>Corporate Philosophy · Erode Headquarters, Tamil Nadu</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
            Engineered to Replace Vendor Fragmentation.
          </h1>

          <p className="text-base sm:text-lg text-secondary leading-relaxed font-normal max-w-3xl">
            Growing enterprises waste momentum coordinating disconnected agencies for web development, SEO, media buying, and software operations. Real Result unifies engineering rigor and high-velocity digital marketing into one synchronized execution partner.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("about-hero")}
              className="cursor-pointer font-bold"
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
