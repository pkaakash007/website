import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";
import { ShieldCheck, Phone, ArrowUpRight } from "lucide-react";

export const HomeLeadBanner: React.FC = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-white relative">
      <Container size="wide">
        {/* Dark Luxury Rounded Card */}
        <div
          className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] px-6 py-14 sm:px-12 sm:py-20 lg:px-16 lg:py-24 text-center shadow-2xl"
          style={{ background: "#0E1013" }}
        >
          {/* Subtle Faint Background Watermark "GROW" */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span
              className="text-[clamp(6rem,22vw,17rem)] font-black tracking-[-0.05em] leading-none select-none"
              style={{ color: "rgba(255, 255, 255, 0.025)" }}
            >
              GROW
            </span>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Eyebrow Label */}
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              READY TO GET STARTED?
            </p>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white tracking-tight leading-[1.08]">
              Ready to Outperform<br className="hidden sm:inline" /> Your Competition?
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mx-auto font-normal">
              Talk to our team in Erode. Whether you need Google Ads, SEO, or a custom app — we&apos;ll create a clear plan that works for your business and budget.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => openLeadModal("home-cta-outperform")}
                className="group cursor-pointer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#0E2036] via-[#142B47] to-[#0E2036] border border-[#C5A059]/50 hover:border-[#E5B456] text-white font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(197,160,89,0.3)] hover:shadow-[0_6px_28px_rgba(197,160,89,0.35)] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Request Free Consultation</span>
                <div className="flex items-center gap-1 shrink-0 ml-1">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E5B456] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <img
                    src="/brand/realresult-mark-transparent.png"
                    alt="Real Result"
                    width={16}
                    height={16}
                    loading="lazy"
                    decoding="async"
                    className="w-4 h-4 object-contain filter drop-shadow-[0_0_4px_rgba(229,180,86,0.5)]"
                  />
                </div>
              </button>

              <Link
                to="/contact"
                className="cursor-pointer inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-transparent border border-white/20 hover:border-white/40 hover:bg-white/[0.05] text-white/90 hover:text-white font-bold text-sm sm:text-base transition-all duration-200 active:scale-[0.98]"
              >
                <span>Contact Erode HQ</span>
              </Link>
            </div>

            {/* Trust Signals Footer Strip */}
            <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
                <span>Strict Mutual NDA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-neutral-400" />
                <a href="tel:+918111033390" className="hover:text-white transition-colors">
                  +91 81110 33390
                </a>
              </div>
              <div>
                <span>Reply within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeLeadBanner;
