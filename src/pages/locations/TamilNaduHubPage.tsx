import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { MapPin, ArrowRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const TamilNaduHubPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing & Software Company in Tamil Nadu | Real Result Network"
        description="Real Result Marketing & Technology operations across Tamil Nadu. Headquartered in Erode with active client partnerships in Coimbatore, Chennai, Tiruppur, and statewide."
        canonicalPath="/locations/tamil-nadu"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Tamil Nadu Headquarters",
          url: "https://realresult.in/locations/tamil-nadu",
          address: {
            "@type": "PostalAddress",
            streetAddress: "148/2, Perundurai Road, Near Collectorate",
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            postalCode: "638011",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 11.341,
            longitude: 77.7172,
          },
          telephone: "+919842012345",
          areaServed: Object.values(TAMIL_NADU_LOCATIONS).map((l) => l.city),
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs items={[{ label: "Locations", href: "/locations/tamil-nadu" }, { label: "Tamil Nadu Network" }]} />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Statewide Regional Presence · Tamil Nadu, India</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing & Software Company in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Serving the dynamic commercial corridors of Tamil Nadu. Headquartered in Erode, we deliver localized search dominance, Google Maps visibility, high-ROI Google Ads, and custom enterprise software for businesses statewide.
            </p>

            <DirectAnswerBox
              question="Where does Real Result operate in Tamil Nadu?"
              summary="Real Result Marketing operates its central headquarters and engineering laboratory in Erode, Tamil Nadu, with dedicated consulting and client management across Coimbatore, Chennai, Tiruppur, Salem, Madurai, Trichy, and Tirunelveli. We combine on-ground local business familiarity with tier-1 international technical SEO and software standards."
              takeaways={[
                "Centralized Headquarters: Perundurai Road, Erode, Tamil Nadu",
                "Direct support for industrial, manufacturing, textile, and SaaS sectors",
                "Strict NAP consistency across Google Maps and regional directories",
                "Zero fake local offices: authentic partnerships across all districts",
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
            <Badge variant="gold">TAMIL NADU SERVICE HUBS</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Explore Our District-Level Operations
            </h2>
            <p className="text-sm sm:text-base text-secondary">
              Click a location to explore industry-specific strategies, local search case studies, and localized services.
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
                    {loc.slug === "erode" && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold text-black font-bold">
                        HQ
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
