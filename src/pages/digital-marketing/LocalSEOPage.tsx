import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import {
  MapPin,
  CheckCircle2,
  PhoneCall,
  Star,
  Navigation,
  Building2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export const LocalSEOPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Local SEO Company in Tamil Nadu | Google Maps 3-Pack | Real Result"
        description="Dominate local search and Google Maps across Coimbatore, Erode, Chennai, and Tamil Nadu. Real Result Marketing optimizes Google Business Profiles, citations, and local reviews."
        canonicalPath="/digital-marketing/local-seo"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Local SEO & Google Business Profile Optimization",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Local SEO Services",
          areaServed: ["Tamil Nadu", "Erode", "Coimbatore", "Chennai", "Salem", "Tiruppur"],
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Local SEO & Google Maps" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              Google Maps & Proximity Dominance
            </p>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Local SEO Company in{" "}
              <span className="text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Capture nearby buyers when they search for services in your city. We optimize your Google Business Profile (GBP), geo-relevance, local citation signals, and reputation to secure consistent top-3 Google Map pack placement.
            </p>

            <DirectAnswerBox
              question="How does Local SEO drive measurable inquiries in Tamil Nadu?"
              summary="Local SEO focuses on capturing geographically constrained searches (e.g., 'digital marketing agency in Coimbatore' or 'best eye hospital in Erode'). By standardizing Name, Address, and Phone (NAP) across verified business directories, managing genuine customer reviews, building local landing pages with LocalBusiness Schema, and optimizing Google Business Profiles, businesses capture high-converting phone calls and walk-in inquiries without paying recurring ad clicks."
              takeaways={[
                "Google Maps 3-Pack placement across target Tamil Nadu pin codes",
                "Strict NAP consistency across Google, Apple Maps, Bing Places, and local directories",
                "Authentic review acquisition frameworks with zero fake reviews",
                "Location-specific landing pages with verified geo-coordinates",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("local-seo-audit")}
                className="cursor-pointer"
              >
                Get Google Maps Audit
              </Button>
              <Button variant="secondary" size="lg" href="/locations/tamil-nadu">
                Explore Our City Hubs
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Deliverables */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl mb-14 space-y-3">
            <Badge variant="gold">LOCAL DELIVERABLES</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              The Complete Tamil Nadu Local SEO Checklist
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Everything required to establish an unshakeable local presence in your primary target district.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Google Business Profile Mastery",
                desc: "Exact primary category selection, secondary categories, service catalogs, geo-tagged photo uploads, and weekly posts with trackable UTM URLs.",
                icon: Navigation,
              },
              {
                title: "NAP Directory Consistency",
                desc: "Rigorous alignment of your business name, street address, and phone number across IndiaMart, JustDial, Sulekha, YellowPages, and regional portals.",
                icon: Building2,
              },
              {
                title: "Reputation & Review Engine",
                desc: "Automated SMS/WhatsApp review request funnels for delighted clients, structured keyword-rich review responses, and sentiment monitoring.",
                icon: Star,
              },
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-border shadow-card space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-gold-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{col.title}</h3>
                  <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                    {col.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* City Links */}
      <section className="py-16 bg-white border-b border-border">
        <Container size="wide">
          <h3 className="text-xl font-bold text-primary mb-6">
            Active Tamil Nadu Local Search Hubs
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link
              to="/locations/erode"
              className="p-4 rounded-xl bg-canvas hover:bg-surface border border-border transition-colors text-sm font-semibold text-primary"
            >
              📍 Erode Headquarters
            </Link>
            <Link
              to="/locations/coimbatore"
              className="p-4 rounded-xl bg-canvas hover:bg-surface border border-border transition-colors text-sm font-semibold text-primary"
            >
              📍 Coimbatore Hub
            </Link>
            <Link
              to="/locations/chennai"
              className="p-4 rounded-xl bg-canvas hover:bg-surface border border-border transition-colors text-sm font-semibold text-primary"
            >
              📍 Chennai Metro
            </Link>
            <Link
              to="/locations/tiruppur"
              className="p-4 rounded-xl bg-canvas hover:bg-surface border border-border transition-colors text-sm font-semibold text-primary"
            >
              📍 Tiruppur Knitwear Hub
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default LocalSEOPage;
