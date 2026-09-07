import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import DivisionsOverview from "@/features/home/components/DivisionsOverview";
import AICommunicationFocus from "@/features/home/components/AICommunicationFocus";
import LeadCTA from "@/features/home/components/LeadCTA";


export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal">SOLUTIONS PORTFOLIO</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Four High-Performance{" "}
              <span className="font-serif italic font-normal text-primary">Business Divisions</span>.
            </h1>
            <p className="text-base sm:text-lg text-secondary">
              Explore our comprehensive capabilities across software engineering, customer acquisition, regional AI voice telephony, and workforce strategy.
            </p>
          </div>
        </Container>
      </section>

      <DivisionsOverview />
      <AICommunicationFocus />
      <LeadCTA />
    </div>
  );
}
