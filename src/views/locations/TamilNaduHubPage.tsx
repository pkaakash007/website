"use client";

import React from "react";
import { Link } from "@/utils/router-adapter";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { MapPin, ArrowRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const TamilNaduHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Locations", href: "/locations/tamil-nadu" }, { label: "Tamil Nadu Network" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Target Districts · Salem, Erode, Namakkal, Paramathi Velur, Coimbatore
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Best Digital Marketing Agency & Company in{" "}
              <span className="text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              From our office in Paramathi Velur we serve businesses across Namakkal, Karur, Salem, Erode and Coimbatore with SEO, Google Maps ranking, Google Ads, websites and custom software.
            </p>

            <DirectAnswerBox
              question="Where does Real Result operate in Tamil Nadu?"
              summary="Real Result Marketing has one office, in Paramathi Velur (Namakkal district, Tamil Nadu 638182). From there we serve Namakkal, Karur and Paramathi Velur as our core markets, and Salem, Erode and Coimbatore as wider service areas, meeting clients in person across the Kongu region."
              takeaways={[
                "Office: Padamudipalayam, Paramathi Velur, Namakkal District 638182",
                "Core markets: Namakkal, Karur and Paramathi Velur",
                "Strict NAP consistency across Google Maps and regional directories",
                "One verified Google Business Profile, no virtual offices",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("tamil-nadu-hub-inquiry")}
                className="cursor-pointer"
              >
                Connect with Tamil Nadu Team
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* City Hub Cards */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Areas We Serve
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Choose your city to see the local industries we work with, the areas we cover and answers to common questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.values(TAMIL_NADU_LOCATIONS).map((loc) => (
              <Link
                key={loc.slug}
                to={`/locations/${loc.slug}`}
                className="group p-6 rounded-3xl bg-white border border-border hover:border-gold/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gold-700">
                      📍 {loc.city}
                    </span>
                    {loc.slug === "paramathi-velur" && (
                      <span className="text-xs font-bold text-gold-700 uppercase tracking-wider">
                        Office
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-primary group-hover:text-gold-700 transition-colors">
                    {loc.city}
                  </h3>

                  <p className="text-xs text-secondary leading-relaxed line-clamp-3">
                    {loc.description}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-1">
                    {loc.industries.slice(0, 2).map((ind, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-surface border border-border text-muted"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/70 flex items-center justify-between text-xs font-semibold text-primary group-hover:text-gold-700">
                  <span>View City Hub</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TamilNaduHubPage;
