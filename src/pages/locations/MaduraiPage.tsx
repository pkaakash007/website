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

export const MaduraiPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.madurai;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing Agency & Software in Madurai | Real Result"
        description="Top digital marketing agency and custom software development in Madurai. Serving Southern Tamil Nadu with high-converting SEO, Google Ads, and web applications."
        canonicalPath="/locations/madurai"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Madurai Operations",
          url: "https://realresult.in/locations/madurai",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madurai",
            addressRegion: "Tamil Nadu",
            postalCode: "625001",
            addressCountry: "IN",
          },
          telephone: "+919842012345",
          areaServed: "Madurai, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Madurai Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Southern Tamil Nadu Commercial Hub · Madurai</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing Agency in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Madurai
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Expanding business reach for Madurai and South Tamil Nadu enterprises. Full-spectrum SEO, localized Google Maps optimization, performance paid social, and custom web software solutions.
            </p>

            <DirectAnswerBox
              question="How does Real Result empower Madurai businesses?"
              summary="We help Madurai's diverse businesses—from traditional food brands and textile wholesalers to modern multispecialty hospitals and educational groups—establish commanding digital search presence and capture customers searching in both English and Tamil."
              takeaways={[
                "Bilingual Tamil-English search optimization and localized Google Ads",
                "Google Maps 3-pack dominance for Madurai retail, healthcare, and services",
                "Custom web and billing applications built for multi-branch distribution",
                "Comprehensive digital marketing audits and ongoing management",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("madurai-inquiry")}
                className="cursor-pointer"
              >
                Schedule Madurai Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MaduraiPage;
