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

export const ChennaiPage: React.FC = () => {
  const loc = TAMIL_NADU_LOCATIONS.chennai;

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Digital Marketing & Software Development Company in Chennai | Real Result"
        description="Enterprise digital marketing, SEO, Google Ads, and custom cloud software development for Chennai enterprises, automotive OEMs, and SaaS scale-ups."
        canonicalPath="/locations/chennai"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Real Result Marketing - Chennai Operations",
          url: "https://realresult.in/locations/chennai",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600001",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: loc.geo.latitude,
            longitude: loc.geo.longitude,
          },
          telephone: "+919842012345",
          areaServed: "Chennai, Tamil Nadu",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Locations", href: "/locations/tamil-nadu" },
              { label: "Chennai Operations" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <MapPin className="w-3.5 h-3.5 text-gold-600" />
              <span>Metropolitan Capital · Chennai, Tamil Nadu</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Digital Marketing & Software Development in{" "}
              <span className="text-gold-700">
                Chennai
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Enterprise search architectures, full-funnel digital performance, and scalable cloud application development for Chennai's automotive, SaaS, logistics, and healthcare leaders.
            </p>

            <DirectAnswerBox
              question="What solutions does Real Result deliver for Chennai enterprises?"
              summary="We provide enterprise-grade technical SEO, Google Ads management, Generative Engine Optimization (GEO), and bespoke cloud software engineering for Chennai companies. We bridge the gap between complex software systems and customer acquisition funnels, helping Chennai businesses outrank competitors nationally and internationally."
              takeaways={[
                "Advanced technical and programmatic SEO for large-scale websites",
                "High-performance cloud SaaS and React web application engineering",
                "Full-funnel B2B lead generation across LinkedIn and Google Search",
                "SOC2 and enterprise security standard adherence",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("chennai-inquiry")}
                className="cursor-pointer"
              >
                Schedule Chennai Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ChennaiPage;
