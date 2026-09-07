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

export const SalemPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.salem;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing Agency & Software in Salem | Real Result"
        description="Results-oriented digital marketing, SEO, Google Ads, and custom business software engineering for Salem steel, sago, textile, and retail companies."
        canonicalPath="/locations/salem"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Salem Operations",
          url: "https://realresult.in/locations/salem",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Salem",
            addressRegion: "Tamil Nadu",
            postalCode: "636001",
            addressCountry: "IN",
          },
          telephone: "+919842012345",
          areaServed: "Salem, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Salem Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Steel & Agro-Processing Hub · Salem, Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing & Software in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Salem
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              High-intent B2B search rankings, Google Maps local domination, and custom software systems designed for Salem's steel fabricators, sago producers, silver artisans, and large-scale retail houses.
            </p>

            <DirectAnswerBox
              question="What digital marketing and tech solutions does Real Result offer in Salem?"
              summary="We help Salem enterprises capture qualified business buyers through targeted B2B SEO, Google Ads, and local Google Business Profile optimization. For businesses managing multi-branch retail or manufacturing plants, our software engineering team builds custom billing, inventory, and distributor management platforms."
              takeaways={[
                "B2B search visibility for Salem industrial and agro-processing clusters",
                "Google Maps 3-pack dominance across Salem city commercial zones",
                "Custom web and inventory software replacing manual spreadsheets",
                "Dedicated on-ground consulting from our nearby Kongu headquarters",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("salem-inquiry")}
                className="cursor-pointer"
              >
                Connect with Salem Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SalemPage;
