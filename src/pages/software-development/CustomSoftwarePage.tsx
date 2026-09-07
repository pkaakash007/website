import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Server, Database, Cog, ShieldCheck, CheckCircle2 } from "lucide-react";

export const CustomSoftwarePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Custom Software Development Company in Tamil Nadu | Real Result"
        description="Bespoke business software, factory ERPs, billing systems, and workflow automation engineered specifically for Tamil Nadu manufacturing and commercial enterprises."
        canonicalPath="/software-development/custom-software-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Enterprise Software Development",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Custom Business Software Engineering",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Software Development", href: "/software-development" },
              { label: "Custom Software Development" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Server className="w-3.5 h-3.5 text-gold-600" />
              <span>Bespoke Enterprise Systems & Automation</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Custom Software Development in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Generic off-the-shelf software forces businesses to change their workflows. We design and build custom software that mirrors your exact operational rules, eliminates manual spreadsheet data entry, and gives leadership real-time visibility.
            </p>

            <DirectAnswerBox
              question="When should a Tamil Nadu business invest in custom software?"
              summary="Custom software becomes essential when commercial off-the-shelf packages (like SAP or standard tally add-ons) are too rigid, costly, or incompatible with your unique manufacturing, export, or distribution flows. Real Result builds proprietary web-based ERPs, automated order tracking systems, and client portals that your company owns completely with zero recurring per-user licensing penalties."
              takeaways={[
                "Tailored specifically to Tamil Nadu textile, foundry, agro, and retail processes",
                "100% proprietary code ownership with zero restrictive vendor lock-in",
                "Automated integrations with GST e-invoicing, WhatsApp alerts, and banking APIs",
                "Scalable PostgreSQL database clustering and role-based security permissions",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("custom-software-inquiry")}
                className="cursor-pointer"
              >
                Request Software Architecture Review
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default CustomSoftwarePage;
