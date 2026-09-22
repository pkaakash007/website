import React from "react";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { openLeadModal } from "@/components/common/LeadModal";
import { SEO_CONFIG } from "@/config/seo";
import { Phone, Calendar } from "lucide-react";

export const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 bg-[#F5F5F7] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="mb-4">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />
        </div>

        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-black/[0.05] text-[#86868B]">
            Consultation &amp; Executive Access
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-tight">
            Contact Real Result
          </h1>

          <p className="text-base sm:text-lg text-[#86868B] leading-relaxed max-w-2xl">
            Connect directly with senior digital marketing strategists and software engineering directors. Headquarters in Erode with regional operations desks across Tamil Nadu.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => openLeadModal("contact-hero")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0071E3] hover:bg-[#0077ED] active:scale-95 text-white font-semibold text-sm shadow-xs transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Consultation</span>
            </button>

            <a
              href={`tel:${SEO_CONFIG.telephone}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/90 hover:bg-white text-[#1D1D1F] font-semibold text-sm border border-black/[0.08] shadow-xs active:scale-95 transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#0071E3]" />
              <span>Call {SEO_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;
