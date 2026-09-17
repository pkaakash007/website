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
    <section className="pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 bg-white text-center">
      <Container size="wide">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1D1D1F] leading-[1.08]"
            style={{
              fontFamily: '"SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif',
              letterSpacing: "-0.03em",
            }}
          >
            All your digital operations.
            <br />
            <span className="text-[#86868B] font-bold">
              Engineered to perfection.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed font-normal">
            From fast websites and mobile apps to digital marketing that brings real customers and sales.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServicesTopIntroHeader;
