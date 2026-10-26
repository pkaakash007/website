"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS, SEO_CONFIG, GOOGLE_MAPS_URL } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
  Navigation,
  Truck,
  Egg,
  TrendingUp,
  Phone,
  Mail,
  Clock,
  Award,
  Search,
  Target,
  BarChart3,
  Code2,
  HelpCircle,
  ChevronDown,
  Star,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const ParamathiVelurPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS["paramathi-velur"];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Which is the best digital marketing company in Paramathi Velur?",
      answer:
        "Real Result Marketing is the top-rated digital marketing company in Paramathi Velur. As our registered office location, we provide high-ROI Search Engine Optimization (SEO), high-converting Google Ads, local Google Maps 3-pack dominance, and custom web applications for poultry farms, transport operators, and local businesses in Paramathi Velur and Namakkal district.",
    },
    {
      question: "How can local SEO help my business in Paramathi Velur?",
      answer:
        "Local SEO optimizes your Google Business Profile and local citations so that when customers search for 'best service near me', 'poultry feed supplier', 'lorry booking', or local retail services, your business appears at the very top of Google Maps with direct 1-tap call and WhatsApp buttons.",
    },
    {
      question: "Where is Real Result located in Paramathi Velur?",
      answer:
        "Our verified registered office is located in Paramathi Velur, Namakkal District, Tamil Nadu 638182. You can visit us directly or verify our official listing on Google Maps.",
    },
    {
      question: "What digital marketing services do you offer in Paramathi Velur?",
      answer:
        "We offer complete full-funnel digital services including Google Ads management, Google Maps local ranking, website and mobile app design, social media marketing, and custom billing/inventory software.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SEOHead
        title={loc.title}
        description={loc.description}
        canonicalPath="/locations/paramathi-velur"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "ProfessionalService"],
            "@id": "https://realresult.in/locations/paramathi-velur#business",
            name: "Real Result - Best Digital Marketing Company in Paramathi Velur",
            alternateName: "Real Result Marketing Paramathi Velur",
            url: "https://realresult.in/locations/paramathi-velur",
            logo: SEO_CONFIG.logo,
            image: SEO_CONFIG.logo,
            telephone: SEO_CONFIG.telephone,
            email: SEO_CONFIG.email,
            hasMap: GOOGLE_MAPS_URL,
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "128",
              bestRating: "5",
              worstRating: "1",
            },
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
              latitude: loc.geo.latitude,
              longitude: loc.geo.longitude,
            },
            openingHours: "Mo-Sa 09:00-18:30",
            areaServed: [
              { "@type": "City", name: "Paramathi Velur" },
              { "@type": "AdministrativeArea", name: "Namakkal District" },
              { "@type": "City", name: "Karur" },
              { "@type": "State", name: "Tamil Nadu" },
            ],
          },
        ]}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-gradient-to-b from-neutral-50 via-white to-white border-b border-neutral-200">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Tamil Nadu", href: "/locations/tamil-nadu" },
              { label: "Paramathi Velur" },
            ]}
          />

          <div className="max-w-4xl mx-auto text-center space-y-6 mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Official Registered Office · Paramathi Velur</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
              Best Digital Marketing Company in{" "}
              <span className="text-[#0071E3]">Paramathi Velur</span>
            </h1>

            <p className="text-base sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Real Result Marketing delivers top Google Search rankings, targeted Google Ads, and local Google Maps dominance for businesses in Paramathi Velur, Namakkal district, and the Cauvery belt.
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
            question="Why choose Real Result as your marketing agency in Paramathi Velur?"
            summary="Real Result Marketing combines local on-ground presence in Paramathi Velur with high-standard technical SEO, precision Google Ads, and custom software engineering. We help poultry businesses, logistics operators, clinics, and showrooms gain steady customer calls every week."
            takeaways={[
              "Registered office right in Paramathi Velur, Namakkal District",
              "Top 3 rank on Google Maps for high-intent local customer searches",
              "Direct 1-tap call and WhatsApp lead capture funnels",
              "Transparent weekly reports with zero hidden marketing fees",
            ]}
          />
        </Container>
      </section>

      {/* Core Services Section */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <Container size="wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900">
              High-ROI Marketing for Paramathi Velur Businesses
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Tested strategies designed to deliver customer calls and verified leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs">
              <Search className="w-8 h-8 text-[#0071E3] mb-4" />
              <h3 className="text-lg font-bold text-neutral-900">Google Maps &amp; Local SEO</h3>
              <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                Rank in the top 3 on Google Maps when buyers in Paramathi Velur and nearby areas search for your services.
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <Container size="wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-200 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-semibold text-neutral-900 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-500 transition-transform ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 bg-neutral-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ParamathiVelurPage;
