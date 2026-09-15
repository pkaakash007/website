import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { ArrowRight, Check } from "lucide-react";
import { openLeadModal } from "@/components/common/LeadModal";

interface IndustryItem {
  id: string;
  name: string;
  category: string;
  summary: string;
  image: string;
  slug: string;
  points: string[];
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: "b2b",
    name: "B2B & Manufacturing",
    category: "Industrial & Exporters",
    summary: "Reach corporate buyers, factory owners, and bulk distributors who are actively looking for suppliers.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    slug: "b2b",
    points: [
      "Google Search ads for bulk commercial inquiries",
      "LinkedIn outreach to corporate decision-makers",
      "Direct WhatsApp inquiries for your sales team",
    ],
  },
  {
    id: "ecommerce",
    name: "Retail & E-Commerce",
    category: "Online & Retail Brands",
    summary: "Get more daily orders, higher order values, and repeat buyers through high-performing ads.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    slug: "ecommerce",
    points: [
      "Instagram and Meta video ads that drive direct sales",
      "Google Shopping campaigns for high-intent shoppers",
      "WhatsApp cart recovery and repeat order reminders",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare & Clinics",
    category: "Doctors & Hospitals",
    summary: "Help local patients easily find your clinic, trust your specialists, and book appointments.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    slug: "healthcare",
    points: [
      "Google Maps ranking so nearby patients find you first",
      "Direct click-to-call ads for urgent appointments",
      "Doctor video profiles that build trust in your care",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate & Builders",
    category: "Developers & Promoters",
    summary: "Attract genuine, budget-verified homebuyers and book confirmed site visits for your projects.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    slug: "real-estate",
    points: [
      "Qualified lead forms to filter out casual callers",
      "Project walkthrough videos on Instagram and YouTube",
      "Instant lead delivery straight to your sales team",
    ],
  },
  {
    id: "education",
    name: "Education & Colleges",
    category: "Institutions & Academies",
    summary: "Fill student admission seats and build institutional reputation during peak admission seasons.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    slug: "education",
    points: [
      "Targeted course search ads across South India",
      "Campus life reels and alumni success stories",
      "WhatsApp counseling buttons for instant admissions",
    ],
  },
  {
    id: "automotive",
    name: "Automotive & EV",
    category: "Dealerships & Showrooms",
    summary: "Drive local showroom footfall, book test drives, and sell more vehicles every month.",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1200&q=80",
    slug: "automotive",
    points: [
      "Local ads targeted around your dealership area",
      "Easy 1-tap test drive booking on WhatsApp",
      "Google search visibility for price and model queries",
    ],
  },
];

export const MarketingIndustriesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("b2b");
  const activeIndustry = INDUSTRIES_LIST.find((i) => i.id === activeId) || INDUSTRIES_LIST[0];

  return (
    <section id="industries" className="py-16 sm:py-24 bg-[#FBFBFA] border-b border-neutral-200 font-sans">
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl space-y-2.5">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-tight">
              Industries We Help Grow
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Every business needs a different marketing strategy. Select your industry below to see how we help.
            </p>
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-[#C5A059] transition-colors group shrink-0"
          >
            <span>View all 12 industries</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Interactive Split Showcase UI ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT: Clean Industry Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <div className="space-y-2">
              {INDUSTRIES_LIST.map((ind) => {
                const isActive = ind.id === activeId;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveId(ind.id)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                      isActive
                        ? "bg-white border-neutral-300 shadow-sm ring-1 ring-black/[0.04]"
                        : "bg-white/60 border-neutral-200/80 hover:bg-white hover:border-neutral-300"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-[11px] font-semibold uppercase tracking-wider block ${isActive ? "text-[#C5A059]" : "text-neutral-400"}`}>
                        {ind.category}
                      </span>
                      <h3 className={`text-base sm:text-lg font-bold ${isActive ? "text-[#0E2036]" : "text-neutral-700"}`}>
                        {ind.name}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? "bg-[#0E2036] text-white" : "text-neutral-400"
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Clean Human Card */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white rounded-3xl border border-neutral-200/90 overflow-hidden shadow-sm flex flex-col justify-between h-full">
              
              {/* Top Sector Photo */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-100">
                <img
                  src={activeIndustry.image}
                  alt={activeIndustry.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                
                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#DCC195] block mb-1">
                    {activeIndustry.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeIndustry.name}
                  </h3>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-base sm:text-lg font-medium text-[#0E2036] leading-snug">
                    {activeIndustry.summary}
                  </p>

                  {/* 3 Simple What We Do Points */}
                  <div className="space-y-2.5 pt-2 border-t border-neutral-100">
                    <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                      What We Deliver:
                    </span>
                    <div className="space-y-2">
                      {activeIndustry.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <span className="w-5 h-5 rounded-full bg-neutral-100 text-[#0E2036] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-[#0E2036]" />
                          </span>
                          <span className="leading-snug pt-0.5">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Row */}
                <div className="pt-5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    to={`/industries/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E2036] hover:text-[#C5A059] transition-colors"
                  >
                    <span>View {activeIndustry.name} Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => openLeadModal(`${activeIndustry.name} Strategy Discussion`)}
                    className="px-6 py-2.5 rounded-full bg-[#0E2036] text-white text-xs sm:text-sm font-semibold hover:bg-neutral-800 transition-colors cursor-pointer text-center shadow-xs"
                  >
                    Discuss Your Business
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default MarketingIndustriesSection;



