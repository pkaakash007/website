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
import { MapPin, CheckCircle2 } from "lucide-react";

export const TirunelveliPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.tirunelveli;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing Agency & Software in Tirunelveli | Real Result"
        description="Empowering Tirunelveli, Thoothukudi, and South Tamil Nadu businesses with professional SEO, Google Ads, social media marketing, and custom web applications."
        canonicalPath="/locations/tirunelveli"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Tirunelveli Operations",
          url: "https://realresult.in/locations/tirunelveli",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tirunelveli",
            addressRegion: "Tamil Nadu",
            postalCode: "627001",
            addressCountry: "IN",
          },
          telephone: "+919842012345",
          areaServed: "Tirunelveli, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Tirunelveli Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Deep South Commercial Corridor · Tirunelveli</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing & Software in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tirunelveli
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Bringing tier-1 technical SEO, performance advertising, and custom web development to Tirunelveli, Thoothukudi port corridors, and expanding southern enterprises.
            </p>

            <DirectAnswerBox
              question="What services does Real Result provide in Tirunelveli?"
              summary="We deliver high-intent search engine optimization, Google Maps ranking, paid social funnels, and custom business management software for Tirunelveli agro-businesses, renewable energy firms, port logistics operators, and retail chains."
              takeaways={[
                "Local search and Google Maps optimization across Tirunelveli & Thoothukudi",
                "Logistics, port operations, and industrial B2B search visibility",
                "Custom mobile and web applications built for distributed teams",
                "Regional Tamil language advertising campaigns with high ROI",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("tirunelveli-inquiry")}
                className="cursor-pointer"
              >
                Connect with Tirunelveli Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TirunelveliPage;
