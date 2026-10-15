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
        title="Contact Real Result Marketing | Best Digital Marketing Agency & Office in Salem, Erode, Namakkal, Paramathi Velur, Coimbatore"
        description="Connect with Real Result Marketing, the best digital marketing agency and custom software company in Tamil Nadu. Visit our registered office in Paramathi Velur, Namakkal, or our regional hubs in Erode, Salem, and Coimbatore."
        canonicalPath="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Real Result Marketing",
          url: "https://realresult.in/contact",
          telephone: SEO_CONFIG.telephone,
          email: SEO_CONFIG.email,
          hasMap:
            "https://www.google.com/maps/place/Real+Result+Marketing/@11.1112024,78.0010096,17z/data=!3m1!4b1!4m6!3m5!1s0x3babd5a621e9d483:0x7610d4ed000d0c45!8m2!3d11.1111972!4d78.0058805!16s%2Fg%2F11p1gkwbj4",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Paramathi Velur",
            addressLocality: "Paramathi Velur, Namakkal",
            addressRegion: "Tamil Nadu",
            postalCode: "638182",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.1111972,
            longitude: 78.0058805,
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
