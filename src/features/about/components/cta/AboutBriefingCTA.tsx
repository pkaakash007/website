import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { PhoneCall, Building2 } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const AboutBriefingCTA: React.FC = () => {
  return (
    <section className="py-20 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="p-8 lg:p-12 rounded-2xl bg-white border border-border shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="gold">Explore a Strategic Partnership</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
                Ready to Experience Unified Execution?
              </h2>
              <p className="text-base text-secondary leading-relaxed max-w-2xl">
                Schedule a confidential consultation with our executive leadership team at our Erode headquarters or via secure video conference.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() => openLeadModal("about-briefing-cta")}
                  className="cursor-pointer font-bold"
                >
                  Book Executive Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  className="border-border text-primary hover:bg-surface"
                >
                  Contact Erode Headquarters
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-xl bg-canvas border border-border space-y-3 text-xs text-secondary">
              <div className="flex items-center gap-2 font-bold text-primary text-sm">
                <Building2 className="w-4 h-4 text-gold-700" />
                <span>Central Operations</span>
              </div>
              <p className="leading-relaxed">
                {SEO_CONFIG.headquarters.streetAddress}, {SEO_CONFIG.headquarters.addressLocality}, {SEO_CONFIG.headquarters.addressRegion} {SEO_CONFIG.headquarters.postalCode}, India
              </p>
              <div className="pt-2 border-t border-border flex items-center gap-2 text-primary font-semibold">
                <PhoneCall className="w-4 h-4 text-gold-700" />
                <span>{SEO_CONFIG.displayPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutBriefingCTA;
