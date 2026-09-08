import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import MarketingPillarCard from "./MarketingPillarCard";
import AppDevPillarCard from "./AppDevPillarCard";

export const HomePillarsDualShowcase: React.FC = () => {
  return (
    <section id="pillars" className="py-20 lg:py-28 bg-canvas border-b border-border scroll-mt-20">
      <Container size="wide">
        <div className="max-w-3xl mb-16 space-y-4">
          <Badge variant="gold">TWO CORE POWERHOUSES</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary tracking-tight">
            Our Two Flagship Divisions
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Instead of hiring separate agencies that point fingers at each other, Real Result unifies high-performance digital marketing with enterprise application engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <MarketingPillarCard />
          <AppDevPillarCard />
        </div>
      </Container>
    </section>
  );
};

export default HomePillarsDualShowcase;
