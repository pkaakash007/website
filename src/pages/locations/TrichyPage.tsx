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

export const TrichyPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.trichy;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing & Software Development in Trichy | Real Result"
        description="Search Engine Optimization (SEO), Google Ads, and custom software engineering for Tiruchirappalli (Trichy) fabrication, engineering, and education enterprises."
        canonicalPath="/locations/trichy"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Trichy Operations",
          url: "https://realresult.in/locations/trichy",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Tiruchirappalli",
            addressRegion: "Tamil Nadu",
            postalCode: "620001",
            addressCountry: "IN",
          },
          telephone: "+919842012345",
          areaServed: "Tiruchirappalli, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Trichy Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Central Tamil Nadu Engineering Hub · Trichy</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing & Software in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Trichy
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Accelerating growth for Tiruchirappalli heavy engineering fabricators, educational institutions, healthcare centers, and regional retailers with data-backed search ranking and custom software systems.
            </p>

            <DirectAnswerBox
              question="What specialized solutions does Real Result provide in Trichy?"
              summary="We assist Trichy engineering ancillaries in capturing global B2B procurement searches, build student admission acquisition funnels for colleges, and develop custom production and database software for fabrication units."
              takeaways={[
                "B2B search rankings for heavy fabrication and boiler ancillary suppliers",
                "Higher education student lead generation and admission funnels",
                "Google Maps optimization across Trichy commercial corridors",
                "Custom web and database software development",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("trichy-inquiry")}
                className="cursor-pointer"
              >
                Schedule Trichy Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TrichyPage;
