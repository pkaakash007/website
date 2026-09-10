
import React from "react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/common/ContactForm";
import { ShieldCheck, Clock, Headphones } from "lucide-react";

export default function LeadCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-border relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-teal-light/60 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Value props */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Direct Consultation
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary leading-[1.15]">
              Ready to accelerate your business growth?
            </h2>

            <p className="text-base text-secondary leading-relaxed">
              Schedule a dedicated consultation with our division leads to discuss your technology architecture, performance marketing, AI telecalling, or human capital roadmap.
            </p>

            <div className="space-y-4 pt-4 border-t border-border text-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Rapid 24-Hour Review</div>
                  <div className="text-xs text-secondary">
                    Your inquiry is routed directly to a senior division director.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Strict NDA & Privacy</div>
                  <div className="text-xs text-secondary">
                    All conversations and technical scopes are protected by enterprise confidentiality.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center text-brand-teal shrink-0 mt-0.5">
                  <Headphones className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Direct Technical Architecture</div>
                  <div className="text-xs text-secondary">
                    No aggressive sales pitches — speak directly with practicing engineers and strategists.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <ContactForm defaultDivision="Multiple Solutions" />
          </div>
        </div>
      </Container>
    </section>
  );
}
