import React from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import { SEO_CONFIG } from "@/config/seo";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-14 bg-white border-b border-neutral-200">
      <Container size="wide">
        <div className="mb-4">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
        </div>

        <div className="max-w-3xl space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-tight">
            Contact Us
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
            Let's talk about your business ideas. Our team is ready to help you grow. Reach out directly or send us a message below.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => openLeadModal()}
              className="px-6 py-3 rounded-xl bg-black text-white font-semibold text-sm hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Schedule a Call
            </button>

            <a
              href={`tel:${SEO_CONFIG.telephone}`}
              className="px-6 py-3 rounded-xl border border-neutral-300 text-black font-semibold text-sm hover:bg-neutral-50 transition-colors cursor-pointer"
            >
              Call {SEO_CONFIG.displayPhone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;








