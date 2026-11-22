"use client";

import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { FaqSection } from "@/components/seo/FaqSection";
import { LocalMarketSections } from "@/components/seo/LocalMarketSections";
import { TAMIL_NADU_LOCATIONS, SEO_CONFIG, GOOGLE_MAPS_URL } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { MapPin, Navigation, Search, Target, Code2 } from "lucide-react";
import { LOCATION_FAQS } from "@/content/locationFaqs";

export const ParamathiVelurPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS["paramathi-velur"];

  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-neutral-50 via-white to-white border-b border-neutral-200">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Areas We Serve", href: "/locations/tamil-nadu/" },
              { label: "Paramathi Velur" },
            ]}
          />

          <div className="max-w-4xl mx-auto text-center space-y-6 mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Our office · Padamudipalayam, Paramathi Velur</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
              Best Digital Marketing Agency in{" "}
              <span className="text-[#0071E3]">Paramathi Velur</span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Real Result Marketing is based right here in Paramathi Velur. We help local businesses, and clients across Namakkal and Karur, get found on Google Search, Google Maps and AI assistants, and turn that attention into calls and WhatsApp enquiries.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                withArrow
                onClick={() => openLeadModal("paramathi-velur-hero")}
              >
                Get Free Growth Audit
              </Button>
              <a
                href={`tel:${SEO_CONFIG.telephone}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-100 transition-all"
              >
                Call {SEO_CONFIG.displayPhone}
              </a>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-800 text-sm font-semibold hover:bg-neutral-100 transition-all"
              >
                <Navigation className="w-4 h-4 text-emerald-600" />
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Answer Box */}
      <section className="py-12 bg-white">
        <Container size="wide">
          <DirectAnswerBox
            question="Is there a digital marketing agency in Paramathi Velur?"
            summary="Yes. Real Result Marketing has its office at High School Building, 12/32, Padamudipalayam, Paramathi Velur, Namakkal District, Tamil Nadu 638182. The team provides SEO, Google Ads, Google Maps (local SEO), social media marketing, AI search optimisation, websites and custom software for poultry businesses, transport operators, clinics, showrooms and other local firms."
            takeaways={[
              "Office in Padamudipalayam, Paramathi Velur 638182",
              "Open Monday–Saturday, 9:00 am – 6:30 pm",
              "Call and WhatsApp lead capture on every campaign",
              "Transparent weekly reports, no hidden fees",
            ]}
          />
        </Container>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900">
              Digital Marketing Services in Paramathi Velur
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Planned around the calls, visits and orders you want.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
              <Search className="w-8 h-8 text-[#0071E3] mb-4" />
              <h3 className="text-lg font-bold text-neutral-900">Google Maps &amp; Local SEO</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Show up in Google Maps results when people in Paramathi Velur and nearby villages search for what you sell.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
              <Target className="w-8 h-8 text-[#0071E3] mb-4" />
              <h3 className="text-lg font-bold text-neutral-900">Google &amp; Social Media Ads</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Reach targeted buyers on Google Search and Instagram Reels with direct 1-tap WhatsApp lead buttons.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
              <Code2 className="w-8 h-8 text-[#0071E3] mb-4" />
              <h3 className="text-lg font-bold text-neutral-900">Web Design &amp; Software</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Fast, mobile-friendly websites and custom business management software built specifically for your operations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <LocalMarketSections loc={loc} />

      <FaqSection faqs={LOCATION_FAQS["paramathi-velur"]} title="Paramathi Velur Digital Marketing FAQs" />
    </div>
  );
};

export default ParamathiVelurPage;
