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

export const TiruppurPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.tiruppur;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing & Apparel ERP Software in Tiruppur | Real Result"
        description="Specialized export SEO, global Google Ads, and custom garment ERP software development for Tiruppur knitwear, textile, and apparel export houses."
        canonicalPath="/locations/tiruppur"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Tiruppur Operations",
          url: "https://realresult.in/locations/tiruppur",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruppur",
            addressRegion: "Tamil Nadu",
            postalCode: "641604",
            addressCountry: "IN",
          },
          telephone: "+919842012345",
          areaServed: "Tiruppur, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Tiruppur Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>India's Knitwear Capital · Tiruppur, Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing & Apparel Software in{" "}
              <span className="text-gold-700">
                Tiruppur
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Empowering Tiruppur garment manufacturers and knitwear exporters with global B2B search dominance, international Google Ads targeting European and US buyers, and custom factory production tracking software.
            </p>

            <DirectAnswerBox
              question="How does Real Result support Tiruppur apparel exporters?"
              summary="Tiruppur exports billions of dollars in knitwear annually. We help garment houses establish global search presence to connect directly with international fashion buyers, retail brands, and sourcing agents. Simultaneously, our software team builds custom production tracking, fabric inventory, and order fulfillment systems tailored to garment manufacturing workflows."
              takeaways={[
                "International export SEO targeting European, US, and Middle East buyers",
                "Custom web-based production and sampling tracking software",
                "Google Maps local dominance for regional packaging and trim suppliers",
                "Direct on-site consulting from our neighboring Erode headquarters",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("tiruppur-inquiry")}
                className="cursor-pointer"
              >
                Schedule Tiruppur Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TiruppurPage;
