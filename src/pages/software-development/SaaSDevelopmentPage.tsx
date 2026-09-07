import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Cloud, Layers, Lock, Zap } from "lucide-react";

export const SaaSDevelopmentPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="SaaS Development Company in Tamil Nadu | Cloud Architecture | Real Result"
        description="Build and scale multi-tenant Software-as-a-Service (SaaS) platforms. Multi-tenant database design, automated subscription billing, and AWS/GCP cloud scaling."
        canonicalPath="/software-development/saas-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "SaaS Application Development Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Cloud SaaS Platform Engineering",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Software Development", href: "/software-development" },
              { label: "SaaS Platform Engineering" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Cloud className="w-3.5 h-3.5 text-gold-600" />
              <span>Multi-Tenant Cloud Platforms</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              SaaS Development in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Turn software products into recurring subscription revenue. We engineer secure, multi-tenant cloud SaaS platforms capable of onboarding thousands of global accounts with automated provisioning, usage-based billing, and 99.98% uptime SLAs.
            </p>

            <DirectAnswerBox
              question="What architecture does Real Result use for scalable SaaS platforms?"
              summary="We architect SaaS platforms using domain-driven micro-services or modular monoliths, multi-tenant PostgreSQL schemas, Redis caching layers, and automated Stripe/Razorpay subscription billing. This enables Indian SaaS founders to launch fast, maintain bank-grade tenant isolation, and scale internationally with minimal DevOps overhead."
              takeaways={[
                "Robust multi-tenant data isolation and tenant lifecycle management",
                "Automated recurring subscription billing with localized payment methods",
                "Role-based access control (RBAC), audit logging, and SOC2 compliance readiness",
                "Serverless and containerized deployment on AWS / Google Cloud",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("saas-development-inquiry")}
                className="cursor-pointer"
              >
                Plan SaaS Architecture
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SaaSDevelopmentPage;
