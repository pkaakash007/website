import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { ContactForm } from "@/components/common/ContactForm";
import { Mail, PhoneCall, MapPin, Clock, ShieldCheck, Sparkles } from "lucide-react";


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl space-y-4">
            <Badge variant="teal">DIRECT CONSULTATION</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Speak With Our{" "}
              <span className="font-serif italic font-normal text-primary">Division Directors</span>.
            </h1>
            <p className="text-base sm:text-lg text-secondary">
              Connect with senior architects and strategists to discuss your technical, growth, telephony, or human resources requirements.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-canvas">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-6">
                <h2 className="text-xl font-bold text-primary">
                  Enterprise Contact Channels
                </h2>

                <div className="space-y-4 text-sm text-secondary">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-brand-teal shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Email Division Leads</div>
                      <div className="text-xs text-secondary mt-0.5">solutions@realresult.com</div>
                      <div className="text-xs text-secondary">support@realresult.com</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-brand-teal shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Direct Telephony Support</div>
                      <div className="text-xs text-secondary mt-0.5">+1 (800) 450-RESULT / Toll-Free</div>
                      <div className="text-xs text-secondary">+91 (80) 4600-REAL / India Telephony Desk</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-brand-teal shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Global Presence</div>
                      <div className="text-xs text-secondary mt-0.5">San Francisco • New York • London • Bengaluru • Singapore</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-brand-teal shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Response Standard</div>
                      <div className="text-xs text-secondary mt-0.5">Under 24 business hours for enterprise inquiries</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-border space-y-3 text-xs text-secondary">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <ShieldCheck className="w-4 h-4 text-brand-teal" />
                  <span>Enterprise Security & NDA Assurance</span>
                </div>
                <p className="leading-relaxed">
                  Every discussion is protected under mutual non-disclosure terms. Your technical architecture and market data remain strictly confidential.
                </p>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-7">
              <ContactForm defaultDivision="Multiple Solutions" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
