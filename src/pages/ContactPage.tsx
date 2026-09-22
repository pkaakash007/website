import React from "react";
import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/seo/SEOHead";
import { SEO_CONFIG } from "@/config/seo";
import { ContactForm } from "@/components/common/ContactForm";
import ContactHero from "@/features/contact/components/hero/ContactHero";
import ContactDirectChannels from "@/features/contact/components/channels/ContactDirectChannels";
import ContactHQLocationCard from "@/features/contact/components/locations/ContactHQLocationCard";
import ContactFAQ from "@/features/contact/components/faq/ContactFAQ";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <SEOHead
        title="Contact Real Result | Erode Headquarters & Tamil Nadu Hubs"
        description="Connect directly with senior digital marketing strategists and software engineering directors. Corporate headquarters in Erode with regional desks across Coimbatore, Chennai, and Tiruppur."
        canonicalPath="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Real Result Marketing & Technology",
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

      {/* 1. Hero Section with Response SLAs */}
      <ContactHero />

      {/* 2. Direct Channels & macOS Form Window Section */}
      <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Direct Channels Information */}
            <div className="lg:col-span-5">
              <ContactDirectChannels />
            </div>

            {/* Inquiry Form Window */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-xl rounded-[24px] border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden p-7 sm:p-9">
              <div className="mb-6 space-y-1.5">
                  <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                    Send Us a Message
                  </h3>
                  <p className="text-sm text-[#86868B]">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </div>
                <ContactForm defaultDivision="Digital Marketing" />
              </div>
            </div>
        </Container>
      </section>

      {/* 3. Regional Desks Across Tamil Nadu */}
      <ContactHQLocationCard />

      {/* 4. Consultation & NDA FAQ */}
      <ContactFAQ />
    </div>
  );
};

export default ContactPage;
