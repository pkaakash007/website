import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";

// Verified high-resolution real photography mapping matching each industry slug
const INDUSTRY_PHOTOS: Record<string, { image: string; alt: string }> = {
  healthcare: {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    alt: "Doctor with stethoscope consulting patient in modern healthcare clinic",
  },
  b2b: {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "B2B enterprise technology strategy team analyzing corporate data",
  },
  "b2b-services": {
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "B2B enterprise technology strategy team analyzing corporate data",
  },
  finance: {
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital banking analytics and mobile fintech payments",
  },
  "bfsi-fintech": {
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital banking analytics and mobile fintech payments",
  },
  "real-estate": {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury architectural modern residential villa property",
  },
  "real-estate-construction": {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury architectural modern residential villa property",
  },
  education: {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Students learning together in modern university library campus",
  },
  "education-edtech": {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    alt: "Students learning together in modern university library campus",
  },
  fmcg: {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan food product packaging and retail shelf",
  },
  "food-beverage-fmcg": {
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    alt: "Artisan food product packaging and retail shelf",
  },
  ecommerce: {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern retail storefront and customer shopping",
  },
  "ecommerce-retail": {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern retail storefront and customer shopping",
  },
  "skincare-beauty": {
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1600&q=80",
    alt: "Aesthetic luxury skincare bottles, cosmetic jars, and clean beauty serums",
  },
  "home-decor": {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    alt: "Aesthetic modern living room interior design with luxury furniture",
  },
  ev: {
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern electric vehicle charging at power station",
  },
  "automotive-ev": {
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern electric vehicle charging at power station",
  },
  automotive: {
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury sports vehicle in modern automotive showroom",
  },
  "travel-tourism": {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury tropical resort swimming pool and hotel suite",
  },
  "hospitality-travel": {
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury tropical resort swimming pool and hotel suite",
  },
  "textile-manufacturing": {
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    alt: "Industrial textile rolls and garment manufacturing studio",
  },
  "logistics-supply-chain": {
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern automated logistics warehouse and freight distribution center",
  },
  "saas-software": {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Cloud SaaS web application analytics dashboard on laptop screen",
  },
};

export default function IndustriesPage() {
  const industriesList = Object.values(INDUSTRIES_DATA);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-neutral-900">
      <SEOHead
        title="Industries We Transform | Real Result Growth Agency"
        description="Category-specific digital strategy and software engineering across 12 sectors: Healthcare, B2B, Ecommerce, Real Estate, Manufacturing, Financial Services, and EV."
        canonicalPath="/industries"
      />

      {/* ── 1. Page Header (Open Editorial Layout) ── */}
      <section className="pt-24 pb-14 sm:pt-32 sm:pb-16 bg-white border-b border-neutral-200">
        <Container size="wide">
          <div className="max-w-4xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-normal text-[#DCC195] leading-tight">
              Industries We Transform
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-3xl pt-1">
              We build customer acquisition funnels, digital branding, and custom software tailored directly to the real-world unit economics of your business sector.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 2. Open Alternating Editorial Showcase (Clean Human Layout) ── */}
      <section className="bg-white">
        <Container size="wide">
          <div className="divide-y divide-neutral-200">
            {industriesList.map((ind, index) => {
              const isEven = index % 2 === 0;
              const photoData = INDUSTRY_PHOTOS[ind.slug] || {
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
                alt: ind.name,
              };

              return (
                <div
                  key={ind.slug}
                  id={ind.slug}
                  className="py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
                >
                  {/* REAL PHOTOGRAPHY COLUMN */}
                  <div
                    className={`${
                      isEven ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-7"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={photoData.image}
                        alt={photoData.alt}
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80") {
                            target.src = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80";
                          }
                        }}
                        className="w-full h-[300px] sm:h-[400px] object-cover object-center rounded-2xl hover:scale-[1.02] transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  {/* OPEN EDITORIAL CONTENT COLUMN */}
                  <div
                    className={`space-y-4 ${
                      isEven ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-1 lg:row-start-1"
                    }`}
                  >
                    <div className="space-y-1.5">
                      <h2 className="text-2xl sm:text-3xl font-normal text-[#DCC195] leading-snug">
                        {ind.name}
                      </h2>
                      <p className="text-base text-neutral-700 font-medium leading-snug">
                        {ind.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {ind.heroSubheadline || ind.overview}
                    </p>

                    {/* Key Results Inline Highlights (Clean Open Text, No Boxes) */}
                    <div className="pt-1 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-neutral-600 font-normal">
                      {ind.keyMetrics.map((m, mIdx) => (
                        <div key={mIdx} className="flex items-center gap-1">
                          <span>{m.label}:</span>
                          <span className="font-medium text-[#0E2036]">{m.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Clean Action Link */}
                    <div className="pt-3 border-t border-neutral-100">
                      <Link
                        to={`/industries/${ind.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0E2036] hover:underline cursor-pointer group"
                      >
                        <span>Explore {ind.shortName} Playbook</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 3. Consultation Section ── */}
      <section className="py-16 sm:py-20 bg-neutral-50 border-t border-neutral-200">
        <Container size="default">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-normal text-[#DCC195]">
              Operating in a Niche or Emerging Sector?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              We frequently architect custom acquisition channels and software solutions for specialized industries across Tamil Nadu, India, and global markets.
            </p>
            <div className="pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openLeadModal("custom-industry-consultation")}
              >
                Book a Free Call
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

