import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Percent, MousePointer, Activity, TrendingUp } from "lucide-react";

export const CROPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Conversion Rate Optimization (CRO) Agency in Tamil Nadu | Real Result"
        description="Double your organic and paid lead conversion rates. We audit user friction, heatmaps, and landing page psychology to turn existing traffic into qualified sales inquiries."
        canonicalPath="/digital-marketing/conversion-rate-optimization"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Conversion Rate Optimization (CRO) Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "CRO and Funnel Optimization",
          areaServed: "Tamil Nadu, India",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Digital Marketing", href: "/digital-marketing" },
              { label: "Conversion Rate Optimization (CRO)" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Percent className="w-3.5 h-3.5 text-gold-600" />
              <span>Revenue Multiplier · Funnel Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Conversion Rate Optimization in{" "}
              <span className="text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              More traffic is useless if your landing pages fail to convert. We systematically identify user drop-off points, streamline contact touchpoints, and increase conversion rates without increasing your ad budget.
            </p>

            <DirectAnswerBox
              question="How does CRO impact customer acquisition costs?"
              summary="Conversion Rate Optimization (CRO) directly lowers Customer Acquisition Cost (CAC). By increasing a website's conversion rate from 1.5% to 3.0%, a business doubles its qualified lead volume from the exact same search traffic and advertising spend. Our data-backed CRO process utilizes session recordings, split testing, and persuasive copywriting to maximize bottom-line profit."
              takeaways={[
                "Comprehensive quantitative heatmap and drop-off analysis",
                "Mobile user journey optimization for Tamil Nadu search users",
                "Frictionless WhatsApp and direct telephone contact integrations",
                "A/B split testing backed by statistical significance",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("cro-funnel-audit")}
                className="cursor-pointer"
              >
                Request Funnel Audit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CROPage;
