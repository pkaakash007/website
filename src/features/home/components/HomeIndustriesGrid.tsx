import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { ArrowRight } from "lucide-react";
import { openLeadModal } from "@/components/common/LeadModal";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";

const INDUSTRY_PHOTOS: Record<string, string> = {
  healthcare: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  b2b: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  "b2b-services": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  finance: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  "bfsi-fintech": "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
  "real-estate": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "real-estate-construction": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  education: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  "education-edtech": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
  fmcg: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  "food-beverage-fmcg": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  ecommerce: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  "ecommerce-retail": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  skincare: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
  "beauty-wellness": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=1200&q=80",
  "home-decor": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  "home-decor-interior": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  ev: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
  "ev-clean-energy": "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80",
  automotive: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  "automotive-dealerships": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  travel: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  "travel-hospitality": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
  saas: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  "saas-software": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
};

export const HomeIndustriesGrid: React.FC = () => {
  const industriesList = Object.values(INDUSTRIES_DATA);

  return (
    <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 bg-[#FBFBFA] border-t border-b border-neutral-200 font-sans relative">
      <Container size="wide">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-tight">
              12 Specialized Industries
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              We never apply one-size-fits-all marketing templates. Every vertical operates with tailored customer acquisition funnels, digital branding, and custom software.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-neutral-600 transition-colors group"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* ── Apple-Style Smooth Stacking Cards Deck (Pure CSS Sticky Stacking) ── */}
        <div className="relative pb-12 sm:pb-16">
          {industriesList.map((ind, index) => {
            const detailUrl =
              ind.slug === "healthcare" ? "/industries/healthcare" : `/industries/${ind.slug}`;
            const photoUrl =
              INDUSTRY_PHOTOS[ind.slug] ||
              "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=75";

            const isLast = index === industriesList.length - 1;

            return (
              <div
                key={ind.slug}
                className={`sticky top-24 sm:top-28 md:top-32 ${
                  isLast ? "mb-0" : "mb-16 sm:mb-24 lg:mb-32"
                }`}
                style={{
                  zIndex: index + 10,
                }}
              >
                {/* Solid Opaque 2-Column Card with Top Shadow to Cleanly Cover Previous Card */}
                <div className="relative rounded-[28px] sm:rounded-[36px] bg-white border border-neutral-200/90 shadow-[0_-8px_32px_rgba(0,0,0,0.06),0_12px_36px_rgba(0,0,0,0.04)] overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[460px] sm:min-h-[480px]">
                    
                    {/* Left-side Main Editorial Content */}
                    <div className="lg:col-span-7 xl:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        {/* Industry Name */}
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0E2036] tracking-tight leading-tight">
                          {ind.name}
                        </h3>

                        {/* Tagline (WCAG AA Compliant accessible gold) */}
                        <p className="text-sm sm:text-base font-medium text-[#8E6D2E]">
                          {ind.tagline}
                        </p>

                        {/* Plain English Narrative */}
                        <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed pt-1">
                          {ind.heroSubheadline || ind.overview}
                        </p>

                        {/* Key Deliverables */}
                        {ind.pillars && ind.pillars.length > 0 && (
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-2 text-xs sm:text-sm font-medium text-neutral-700">
                            {ind.pillars.slice(0, 3).map((pil, pIdx) => (
                              <React.Fragment key={pIdx}>
                                {pIdx > 0 && <span className="text-neutral-300">•</span>}
                                <span>{pil.title}</span>
                              </React.Fragment>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Action Links */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Link
                          to={detailUrl}
                          className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 transition-all duration-200 shadow-sm group"
                        >
                          <span>Explore {ind.shortName} Practice</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <button
                          type="button"
                          onClick={() => openLeadModal(`${ind.name} Strategy Discussion`)}
                          className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-neutral-800 bg-white hover:bg-neutral-50 border border-neutral-300 hover:border-neutral-400 transition-all duration-200 cursor-pointer shadow-xs"
                        >
                          Book a Free Call
                        </button>
                      </div>
                    </div>

                    {/* Right-side Authentic Sector Image with Explicit Dimensions */}
                    <div className="lg:col-span-5 xl:col-span-5 relative min-h-[240px] sm:min-h-[300px] lg:min-h-full aspect-[4/3] lg:aspect-auto bg-neutral-100 overflow-hidden">
                      <img
                        src={photoUrl}
                        alt={ind.name}
                        width={600}
                        height={480}
                        className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Clean Consultation Banner */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
              Need marketing or software for your specific business?
            </h3>
            <p className="text-sm text-neutral-600 font-normal">
              We engineer custom customer acquisition funnels, brand identities, and software platforms for businesses across Tamil Nadu.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() => openLeadModal("homepage-industry-grid")}
            className="shrink-0"
          >
            Book a Free Call
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default HomeIndustriesGrid;

