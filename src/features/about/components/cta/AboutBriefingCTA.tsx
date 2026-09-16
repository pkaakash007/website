import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { SEO_CONFIG } from "@/config/seo";
import { ArrowRight } from "lucide-react";

export const AboutBriefingCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              Ready to Discuss Your Next Project?
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
              Schedule a consultation with our team at our Erode office or connect with us directly to review your website, software, or digital marketing requirements.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => openLeadModal("about-briefing-cta")}
                className="px-6 py-3 text-sm font-semibold text-white bg-neutral-900 hover:bg-neutral-800 active:scale-95 rounded-xl transition-all cursor-pointer"
              >
                Get Started
              </button>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-semibold text-[#0071e3] bg-[#0071e3]/10 hover:bg-[#0071e3]/15 active:scale-95 rounded-xl transition-all cursor-pointer"
              >
                <span>View Our Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 text-sm font-semibold text-neutral-700 border border-neutral-300 hover:bg-neutral-100 active:scale-95 rounded-xl transition-all"
              >
                Contact Erode Office
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3 text-xs text-neutral-600 border-t lg:border-t-0 lg:border-l border-neutral-200 pt-6 lg:pt-0 lg:pl-8">
            <div className="font-bold text-neutral-900 text-sm">
              Central Operations
            </div>
            <p className="leading-relaxed">
              {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, India
            </p>
            <div className="pt-2 border-t border-neutral-200 text-neutral-900 font-semibold text-sm">
              Phone: {SEO_CONFIG.displayPhone}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBriefingCTA;

