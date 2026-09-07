import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Globe, Zap, Code, ShieldCheck, CheckCircle2 } from "lucide-react";

export const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Web Development Company in Tamil Nadu | Coimbatore & Erode | Real Result"
        description="High-performance custom web applications built with React, Vite, TypeScript, and modern headless architectures. Fast, secure, and engineered for maximum conversion."
        canonicalPath="/software-development/web-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Custom Web Development Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "Web Application Engineering",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Software Development", href: "/software-development" },
              { label: "Custom Web Development" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Globe className="w-3.5 h-3.5 text-gold-600" />
              <span>High-Performance Web Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Web Development Company in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              Slow websites destroy search rankings and customer trust. We build bespoke, lightning-fast web applications with sub-second page loads, pixel-perfect responsiveness, and automated SEO architectures.
            </p>

            <DirectAnswerBox
              question="Why choose Real Result for custom web development in Tamil Nadu?"
              summary="Unlike agencies that deploy bloated WordPress templates with security vulnerabilities and slow load times, Real Result builds custom web applications using modern React, TypeScript, and optimized API backends. Our sites achieve 95+ Google PageSpeed scores, zero layout shifts, built-in structured data schema, and seamless lead conversion pathways."
              takeaways={[
                "Engineered for sub-second Core Web Vitals and 95+ PageSpeed scores",
                "Strict TypeScript and modular component architecture",
                "Mobile-first responsive UX optimized for Indian 4G/5G connections",
                "Full integration with WhatsApp, CRM, and analytics platforms",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("web-development-inquiry")}
                className="cursor-pointer"
              >
                Start Web Development Project
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
