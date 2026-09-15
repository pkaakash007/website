import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { openLeadModal } from "@/components/common/LeadModal";
import { getWhatsAppUrl } from "@/config";
import {
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";
import HealthcareIndustryPage from "./HealthcareIndustryPage";

// Verified high-resolution photography matching each industry slug
const INDUSTRY_PHOTOS: Record<string, { image: string; alt: string }> = {
  healthcare: {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    alt: "Healthcare clinic patient consultation",
  },
  b2b: {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "B2B enterprise corporate strategy meeting",
  },
  "b2b-services": {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "B2B enterprise corporate strategy meeting",
  },
  finance: {
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    alt: "Fintech mobile payment and banking analytics",
  },
  "bfsi-fintech": {
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    alt: "Fintech mobile payment and banking analytics",
  },
  "real-estate": {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern luxury real estate architecture",
  },
  "real-estate-construction": {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern luxury real estate architecture",
  },
  education: {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "University education campus students",
  },
  "education-edtech": {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "University education campus students",
  },
  fmcg: {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Food and beverage retail product showcase",
  },
  "food-beverage-fmcg": {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Food and beverage retail product showcase",
  },
  ecommerce: {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern retail store and customer shopping experience",
  },
  "ecommerce-retail": {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern retail store and customer shopping experience",
  },
  "skincare-beauty": {
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1600&q=80",
    alt: "Luxury aesthetic skincare cosmetic bottles and organic beauty products",
  },
  "home-decor": {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern interior design and living space",
  },
  ev: {
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Electric vehicle charging technology",
  },
  "automotive-ev": {
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Electric vehicle charging technology",
  },
  automotive: {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    alt: "Automotive vehicle showroom",
  },
  "travel-tourism": {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury resort and travel destination",
  },
  "hospitality-travel": {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury resort and travel destination",
  },
  "textile-manufacturing": {
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial textile and garment manufacturing",
  },
  "logistics-supply-chain": {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Automated logistics warehouse distribution center",
  },
  "saas-software": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "SaaS software product analytics interface",
  },
};

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // If healthcare, render dedicated healthcare page
  if (slug === "healthcare") {
    return <HealthcareIndustryPage />;
  }

  const industry = slug ? INDUSTRIES_DATA[slug] : null;

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const photoData = (slug && INDUSTRY_PHOTOS[slug]) || {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: industry.name,
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-neutral-900">
      <SEOHead
        title={`${industry.name} Digital Strategy & Growth | Real Result`}
        description={industry.heroSubheadline}
        canonicalPath={`/industries/${industry.slug}`}
      />

      {/* ── 1. Hero Section (White Editorial Layout with Right Image Blend) ── */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-neutral-200 bg-white text-neutral-900 overflow-hidden">
        {/* Right side visible image with smooth white gradient fade to the left */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full">
            <img
              src={photoData.image}
              alt={photoData.alt}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src !== "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80") {
                  target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80";
                }
              }}
              className="w-full h-full object-cover object-center lg:object-right opacity-90 sm:opacity-100"
            />
            {/* Smooth white gradient fading the image into the left white text area */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 lg:via-white/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent lg:hidden" />
          </div>
          {/* Solid white shading on the left to guarantee crystal clear text readability */}
          <div className="absolute left-0 top-0 bottom-0 w-full lg:w-1/2 bg-gradient-to-r from-white via-white to-transparent" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl font-normal text-[#0E2036] leading-tight">
              {industry.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              {industry.heroSubheadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                onClick={() => openLeadModal(`Industry: ${industry.name}`)}
                className="bg-black hover:bg-neutral-800 text-white px-6 py-3 text-sm font-medium"
              >
                Book a Free Call
              </Button>
            </div>

            {/* Verified Key Benchmarks (Clean Open Inline Metrics) */}
            <div className="pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {industry.keyMetrics.map((metric, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="text-xl sm:text-2xl font-normal text-[#0E2036]">
                      {metric.value}
                    </div>
                    <div className="text-xs text-neutral-500 font-normal">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Core Competencies */}
            {industry.services && industry.services.length > 0 && (
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-600 font-normal">
                <span className="text-neutral-500">Core Services:</span>
                {industry.services.map((service, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-neutral-100/90 text-neutral-800 border border-neutral-200/60 font-normal"
                  >
                    {service}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ── 2. Strategic Pillars (Execution Framework) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
        <Container size="wide">
          <div className="max-w-3xl mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-normal text-[#0E2036] leading-tight">
              Strategic Growth Framework for {industry.shortName}
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed font-normal">
              {industry.overview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industry.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="border-t border-neutral-200 pt-5 space-y-2.5"
              >
                <span className="text-xs text-neutral-400 font-medium tracking-wide block">
                  {pillar.number}
                </span>
                <h3 className="text-lg font-medium text-[#0E2036] leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 3. Market Sub-Sectors ── */}
      {industry.subVerticals && industry.subVerticals.length > 0 && (
        <section className="py-16 sm:py-24 bg-neutral-50/50 border-b border-neutral-200">
          <Container size="wide">
            <div className="max-w-3xl mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0E2036]">
                {industry.shortName} Sub-Sectors We Scale
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal">
                Specialized execution models tailored to unique buyer journeys and product economics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.subVerticals.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200 rounded-xl p-6 space-y-2"
                >
                  <h3 className="text-base font-medium text-[#0E2036]">{sub.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">{sub.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── 4. Frequently Asked Questions ── */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
          <Container size="default">
            <div className="max-w-2xl mx-auto text-center mb-10 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-normal text-[#0E2036]">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-normal">
                Everything you need to know about our {industry.shortName} growth engagements.
              </p>
            </div>

            <div className="max-w-3xl mx-auto divide-y divide-neutral-200 border-y border-neutral-200">
              {industry.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex items-center justify-between gap-4 font-medium text-[#0E2036] text-sm sm:text-base hover:text-black transition-colors cursor-pointer py-1"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pt-2.5 pb-2 text-sm text-neutral-600 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>
      )}

      {/* ── 5. Bottom Consultation CTA ── */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <Container size="default">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#0E2036]">
              Ready to Grow Your {industry.shortName} Business?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Schedule a strategy briefing with our industry team. We'll evaluate your unit economics, acquisition funnels, and current market positioning.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <Button
                variant="primary"
                onClick={() => openLeadModal(`Industry CTA: ${industry.name}`)}
                className="bg-black hover:bg-neutral-800 text-white px-7 py-3 text-sm font-medium"
              >
                Book a Free Call
              </Button>
              <Link to="/industries">
                <Button
                  variant="outline"
                  className="border-neutral-300 text-neutral-800 hover:bg-white px-5 py-3 text-sm font-medium"
                >
                  View All Industries
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default IndustryDetailPage;
