import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Badge from "@/components/shared/Badge";
import Button from "@/components/shared/Button";
import DivisionsOverview from "@/components/home/DivisionsOverview";
import AICommunicationFocus from "@/components/home/AICommunicationFocus";
import LeadCTA from "@/components/home/LeadCTA";

export const metadata: Metadata = {
  title: "Enterprise Solutions & Divisions | Real Result",
  description:
    "Explore Real Result's 4 core divisions: Technology & Software, Marketing & Media, AI Communication & Telephony, and Human Resources.",
};

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
