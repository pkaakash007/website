import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";

export const AppDevQuotationCTA: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-neutral-900 border-t border-black/[0.08] relative">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0E2036] tracking-tight leading-tight">
            Have a Project in Mind? Let's Build It.
          </h2>

          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Tell us about your project. We will share a clear plan, timeline, and fixed price estimate for your business.
          </p>

          <div className="pt-3 flex flex-wrap justify-center items-center gap-4">
            <button
              type="button"
              onClick={() => openLeadModal("app-dev-cta")}
              className="px-8 py-3.5 rounded-full bg-[#0E2036] hover:bg-[#183457] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Get a Free Quote
            </button>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-[#0E2036] border border-neutral-300 font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95 cursor-pointer"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevQuotationCTA;
