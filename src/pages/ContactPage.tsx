import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { ContactForm } from "@/components/common/ContactForm";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SEO_CONFIG } from "@/config/seo";
import { Mail, PhoneCall, MapPin, Clock, ShieldCheck, MessageCircle } from "lucide-react";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Contact Real Result Marketing | Erode HQ, Tamil Nadu"
        description="Connect with our senior digital marketing strategists and software engineering team. Headquartered in Erode with direct operations across Coimbatore, Chennai, and Tamil Nadu."
        canonicalPath="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Real Result Marketing",
          url: "https://realresult.in/contact",
          telephone: SEO_CONFIG.telephone,
          email: SEO_CONFIG.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SEO_CONFIG.headquarters.streetAddress,
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            postalCode: "638011",
            addressCountry: "IN",
          },
        }}
      />

      <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Contact Us" }]} />

          <div className="max-w-3xl space-y-4 mt-4">
            <Badge variant="gold">DIRECT CONSULTATION</Badge>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Speak With Our{" "}
              <span className="font-serif italic font-normal text-gold-700">Strategists & Engineers</span>.
            </h1>
            <p className="text-base sm:text-lg text-secondary">
              Connect directly with our senior directors in Erode to discuss your digital marketing, SEO, Google Ads, or custom software development requirements.
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
                  Official Contact Channels
                </h2>

                <div className="space-y-5 text-sm text-secondary">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Corporate Headquarters</div>
                      <div className="text-xs text-secondary mt-0.5">
                        {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
                      <PhoneCall className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Direct Telephone</div>
                      <div className="text-xs text-secondary mt-0.5">{SEO_CONFIG.displayPhone}</div>
                      <div className="text-xs text-muted">Monday – Saturday: 09:00 AM – 06:30 PM IST</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Email Desk</div>
                      <div className="text-xs text-secondary mt-0.5">{SEO_CONFIG.email}</div>
                      <div className="text-xs text-secondary">campaigns@realresult.in</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-emerald-600 shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">WhatsApp Desk</div>
                      <div className="text-xs text-secondary mt-0.5">+91 98420 12345 (Direct Strategist Response)</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-surface flex items-center justify-center text-gold-700 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Response SLA</div>
                      <div className="text-xs text-secondary mt-0.5">Under 24 business hours for enterprise evaluations</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-surface border border-border space-y-3 text-xs text-secondary">
                <div className="flex items-center gap-2 font-semibold text-primary">
                  <ShieldCheck className="w-4 h-4 text-gold-700" />
                  <span>Enterprise Security & NDA Assurance</span>
                </div>
                <p className="leading-relaxed">
                  Every inquiry is protected under standard mutual non-disclosure agreements. Your commercial data and intellectual property remain strictly confidential.
                </p>
              </div>
            </div>

            {/* Lead Form */}
            <div className="lg:col-span-7">
              <ContactForm defaultDivision="Digital Marketing" />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
