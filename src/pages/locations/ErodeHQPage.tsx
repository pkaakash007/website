import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { TAMIL_NADU_LOCATIONS, SEO_CONFIG } from "@/config/seo";
import { openLeadModal } from "@/components/common/LeadModal";
import { MapPin, Phone, Mail, Clock, Building2, CheckCircle2 } from "lucide-react";

export const ErodeHQPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.erode;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing Agency & Software Company in Erode | Real Result HQ"
        description="Official Headquarters of Real Result Marketing in Erode, Tamil Nadu. Expert SEO, Google Ads, custom ERP, web development, and AI software for Kongu businesses."
        canonicalPath="/locations/erode"
        schema={{
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "Real Result Marketing - Headquarters",
          url: "https://realresult.in/locations/erode",
          logo: SEO_CONFIG.logo,
          telephone: SEO_CONFIG.telephone,
          email: SEO_CONFIG.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: SEO_CONFIG.headquarters.streetAddress,
            addressLocality: "Erode",
            addressRegion: "Tamil Nadu",
            postalCode: "638011",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.geo.latitude,
            longitude: loc.geo.longitude,
          },
          openingHours: "Mo-Sa 09:00-18:30",
          priceRange: "$$",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Erode Headquarters" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Building2 className="w-3.5 h-3.5 text-gold-600" />
              <span>Corporate Headquarters & Engineering Lab · Erode, TN</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing Agency & Software Company in{" "}
              <span className="text-gold-700">
                Erode
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Direct, on-ground strategic consulting and technical development from our official Erode headquarters. Powering regional market leaders across textiles, agro-commodities, manufacturing, and retail with proven search dominance and custom business software.
            </p>

            <DirectAnswerBox
              question="What services does Real Result provide from its Erode headquarters?"
              summary="As our corporate headquarters, our Erode facility houses our senior SEO strategists, Google Ads practitioners, and full-stack software engineers. We provide comprehensive digital marketing (local SEO, Google Maps 3-pack rankings, performance paid search) and custom software development (factory ERP, billing/inventory portals, custom web applications) to enterprises across Erode, Bhavani, Perundurai, and the wider Kongu corridor."
              takeaways={[
                "Physical Office: 148/2, Perundurai Road, Near Collectorate, Erode 638011",
                "Direct in-person strategic meetings and quarterly business reviews",
                "Deep specialization in textile, turmeric, food processing, and healthcare industries",
                "Dedicated regional phone and WhatsApp support desk",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("erode-hq-inquiry")}
                className="cursor-pointer"
              >
                Schedule Erode Office Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Office Details & Local Industries */}
      <section className="py-20 bg-canvas border-b border-border">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Erode Headquarters Information
              </h3>
              <div className="space-y-4 text-sm text-secondary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary block">Official Address:</strong>
                    148/2, Perundurai Road, Near Collectorate, Erode, Tamil Nadu 638011, India
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold-700 shrink-0" />
                  <div>
                    <strong className="text-primary block">Direct Telephone:</strong>
                    +91 98420 12345
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-700 shrink-0" />
                  <div>
                    <strong className="text-primary block">Email Desk:</strong>
                    hello@realresult.in
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-700 shrink-0" />
                  <div>
                    <strong className="text-primary block">Business Hours:</strong>
                    Monday – Saturday: 09:00 AM – 06:30 PM IST
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-8 rounded-3xl bg-white border border-border shadow-card space-y-6">
              <h3 className="text-2xl font-bold text-primary">
                Local Erode Industries We Specialize In
              </h3>
              <p className="text-sm text-secondary leading-relaxed">
                We craft search and software architectures adapted to Erode's unique business ecosystem:
              </p>
              <div className="space-y-3">
                {loc.industries.map((ind, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-canvas border border-border text-xs font-semibold text-primary">
                    <CheckCircle2 className="w-4 h-4 text-gold-700 shrink-0" />
                    <span>{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ErodeHQPage;
