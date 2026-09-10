import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const HomeLeadBanner: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#FFFFFF]">
      <Container size="wide">
        {/* Aeren CTA block — full-width, dark fill, minimal */}
        <div
          className="relative overflow-hidden rounded-3xl px-10 py-16 lg:px-20 lg:py-24 text-center"
          style={{ background: "#0F0F0E" }}
        >
          {/* Large watermark behind content */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            aria-hidden
          >
            <span
              className="text-[clamp(6rem,20vw,18rem)] font-black tracking-[-0.06em] leading-none"
              style={{ color: "rgba(255,255,255,0.025)" }}
            >
              GROW
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[rgba(255,255,255,0.35)]">
              Ready to Get Started?
            </p>

            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold text-white tracking-[-0.04em] leading-[1.06]">
              Ready to Outperform<br />Your Competition?
            </h2>

            <p className="text-[17px] text-[rgba(255,255,255,0.50)] leading-[1.60] max-w-lg mx-auto font-normal">
              Talk to our team in Erode. Whether you need Google Ads, SEO, or a custom app — we'll create a clear plan that works for your business and budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => openLeadModal("home-lead-banner")}
                className="flex items-center gap-2.5 px-10 py-4 rounded-full bg-white text-[#0F0F0E] text-[15px] font-bold cursor-pointer transition-opacity hover:opacity-90 group"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <a
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.70)] text-[14px] font-semibold hover:border-[rgba(255,255,255,0.30)] hover:text-white transition-all"
              >
                Contact Erode HQ
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 text-[12px] text-[rgba(255,255,255,0.38)]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Strict Mutual NDA</span>
              </div>
              <div className="flex items-center gap-2 text-[12px] text-[rgba(255,255,255,0.38)]">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{SEO_CONFIG.displayPhone}</span>
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.38)]">
                Reply within 24 hours
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeLeadBanner;
