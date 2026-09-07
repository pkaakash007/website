import React from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { DirectAnswerBox } from "@/components/seo/DirectAnswerBox";
import { openLeadModal } from "@/components/common/LeadModal";
import { Smartphone, Apple, Play, Cpu, ShieldCheck } from "lucide-react";

export const MobileAppPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="Mobile App Development Company in Tamil Nadu | iOS & Android | Real Result"
        description="Cross-platform React Native and Flutter mobile app development in Tamil Nadu. Native performance, offline sync, secure payment gateways, and intuitive UX."
        canonicalPath="/software-development/mobile-app-development"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Mobile Application Development Services",
          provider: {
            "@type": "Organization",
            name: "Real Result Marketing",
            url: "https://realresult.in",
          },
          serviceType: "iOS & Android Mobile App Engineering",
          areaServed: "Tamil Nadu, India & Global",
        }}
      />

      <section className="pt-12 pb-16 sm:pt-20 sm:pb-24 bg-white border-b border-border">
        <Container size="wide">
          <Breadcrumbs
            items={[
              { label: "Software Development", href: "/software-development" },
              { label: "Mobile App Development" },
            ]}
          />

          <div className="max-w-4xl space-y-6 mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-900 text-xs font-mono uppercase tracking-widest font-bold">
              <Smartphone className="w-3.5 h-3.5 text-gold-600" />
              <span>Cross-Platform iOS & Android Engineering</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary leading-[1.1]">
              Mobile App Development in{" "}
              <span className="font-serif italic font-normal text-gold-700">
                Tamil Nadu
              </span>
              .
            </h1>

            <p className="text-base sm:text-xl text-secondary leading-relaxed font-normal">
              High-performance mobile applications that deliver native fluidity on iOS and Android. Built with React Native and Flutter for maximum speed-to-market, unified codebases, and robust enterprise backend integrations.
            </p>

            <DirectAnswerBox
              question="What mobile app development solutions does Real Result build?"
              summary="We develop enterprise, B2B, and consumer mobile apps for Tamil Nadu businesses—including field force tracking, inventory and logistics scanners, telehealth platforms, customer loyalty apps, and e-commerce portals. Our mobile apps feature biometric authentication, offline data sync, push notification automation, and native payment gateway integrations."
              takeaways={[
                "Unified single codebase targeting both iOS and Android stores",
                "Offline-first SQLite and local caching architecture",
                "Seamless integration with enterprise ERP and cloud databases",
                "Full App Store and Google Play Store deployment and compliance",
              ]}
            />

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("mobile-app-inquiry")}
                className="cursor-pointer"
              >
                Discuss Mobile App Idea
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default MobileAppPage;
