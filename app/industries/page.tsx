import React from "react";
import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Badge from "@/components/shared/Badge";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import LeadCTA from "@/components/home/LeadCTA";

export const metadata: Metadata = {
  title: "Industries Served | Real Result",
  description:
    "Specialized business solutions for Fintech, Healthcare, E-Commerce, SaaS, Real Estate, and Logistics enterprises.",
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="outline">VERTICAL EXPERTISE</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Industry-Specific{" "}
              <span className="font-serif italic font-normal text-primary">Execution Architecture</span>.
            </h1>
            <p className="text-base sm:text-lg text-secondary">
              Discover how leading organizations across high-growth verticals deploy our AI voice telephony, engineering, marketing, and talent frameworks.
            </p>
          </div>
        </Container>
      </section>

      <IndustriesGrid />
      <LeadCTA />
    </div>
  );
}
