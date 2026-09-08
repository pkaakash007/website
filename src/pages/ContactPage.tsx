import React from "react";
import { Container } from "@/components/layout/Container";
import { SEOHead } from "@/components/seo/SEOHead";
import { SEO_CONFIG } from "@/config/seo";
import { ContactForm } from "@/components/common/ContactForm";
import ContactHero from "@/features/contact/components/ContactHero";
import ContactDirectChannels from "@/features/contact/components/ContactDirectChannels";
import ContactHQLocationCard from "@/features/contact/components/ContactHQLocationCard";
import ContactFAQ from "@/features/contact/components/ContactFAQ";

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
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

      {/* 2. Direct Channels & Form Section */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Direct Channels Information */}
            <div className="lg:col-span-5">
              <ContactDirectChannels />
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-border shadow-card">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary">
                    Initiate Project Scoping
                  </h3>
                  <p className="text-sm text-secondary mt-1">
                    Select your primary division requirement and outline your objectives.
                  </p>
                </div>
                <ContactForm defaultDivision="Digital Marketing" />
              </div>
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
