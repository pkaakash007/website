import React from "react";
import { Container } from "@/components/layout/Container";

export interface ServiceCategoryTab {
  id: string;
  label: string;
}

export const SERVICE_FILTER_TABS: ServiceCategoryTab[] = [
  { id: "all", label: "All Services (13)" },
  { id: "web-apps", label: "Web & Apps" },
  { id: "marketing-seo", label: "Marketing & SEO" },
  { id: "branding-media", label: "Branding & Media" },
  { id: "security-cloud", label: "Security & Cloud" },
];

export const ServicesTopIntroHeader: React.FC = () => {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 bg-white text-center">
      <Container size="wide">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.1] text-neutral-950"
            style={{ letterSpacing: "-0.035em" }}
          >
            All your digital operations.
            <br />
            <span className="text-[#8E8E93] font-extrabold">
              Engineered to perfection.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm lg:text-[15px] text-[#6E6E73] max-w-lg mx-auto leading-relaxed font-normal">
            From fast websites and mobile apps to digital marketing that brings real customers and sales.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServicesTopIntroHeader;
