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
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const CoimbatorePage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.coimbatore;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Best Digital Marketing Agency & SEO Company in Coimbatore | Real Result"
        description="Top digital marketing agency and custom software development company in Coimbatore, Tamil Nadu. Dominating Google Maps, B2B SEO, Google Ads, and custom SaaS web apps."
        canonicalPath="/locations/coimbatore"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Coimbatore Operations",
          url: "https://realresult.in/locations/coimbatore",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Coimbatore",
            addressRegion: "Tamil Nadu",
            postalCode: "641018",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.geo.latitude,
            longitude: loc.geo.longitude,
          },
          telephone: "+919842012345",
          areaServed: "Coimbatore, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Coimbatore Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Industrial & Technology Capital · Coimbatore, Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Best Digital Marketing Agency in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Coimbatore
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              High-impact search visibility, precision B2B demand generation, and custom enterprise software development for Coimbatore's foundries, pump manufacturers, healthcare networks, and fast-growing tech startups.
            </p>

            <DirectAnswerBox
              question="Why is Real Result Marketing recommended for Coimbatore businesses?"
              summary="Real Result Marketing delivers high-converting digital marketing and software development tailored to Coimbatore's manufacturing and tech ecosystem. We help Coimbatore pump, valve, and engineering exporters capture global buyers via technical B2B SEO and precision Google Search campaigns, while engineering custom web applications and ERP portals that automate shop-floor and back-office operations."
              takeaways={[
                "B2B export SEO targeting US, European, and Middle Eastern industrial buyers",
                "Google Business Profile 3-pack domination across Coimbatore commercial zones",
                "Custom web and software development replacing slow legacy ERP tools",
                "Direct local client management from our nearby Kongu headquarters",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("coimbatore-inquiry")}
                className="cursor-pointer"
              >
                Book Coimbatore Strategy Session
              </Button>
              <Button variant="secondary" size="lg" href="/case-studies">
                Explore Coimbatore Case Studies
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Local Context */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <Badge variant="gold">COIMBATORE MARKET INSIGHTS</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">
              Engineering Search Dominance for the Manchester of South India
            </h2>
            <p className="text-sm sm:text-base text-secondary leading-relaxed">
              {loc.localContext}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {loc.industries.map((ind, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white border border-border shadow-subtle flex items-center gap-3 text-xs font-semibold text-primary">
                  <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                  <span>{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CoimbatorePage;
