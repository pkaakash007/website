import React from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-18 bg-white border-b border-border">
      <Container size="wide">
        <Breadcrumbs items={[{ label: "Contact Us" }]} />

        <div className="max-w-4xl space-y-5 mt-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
            Connect Directly With Our Strategists & Architects.
          </h1>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
