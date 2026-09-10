import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { BrandButton } from "@/components/common/BrandButton";

export const AppDevQuotationCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-t border-black/[0.08] relative">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight">
            Have an Application in Mind? Let's Architect It.
          </h2>

          <p className="text-neutral-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Get an in-depth technical scoping document, system architecture outline, and fixed-cost milestone estimate from our lead software architects in Erode.
          </p>

          <div className="pt-3 flex flex-wrap justify-center items-center gap-4">
            <BrandButton
              variant="brand-dark"
              size="lg"
              onClick={() => openLeadModal("app-dev-cta")}
              showWatermark={true}
              showEmblem={false}
            >
              Request Architecture &amp; Quotation
            </BrandButton>
            <BrandButton
              variant="brand-glass"
              size="lg"
              href="/contact"
              showWatermark={false}
              showEmblem={false}
            >
              Speak With Engineering Team
            </BrandButton>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevQuotationCTA;
