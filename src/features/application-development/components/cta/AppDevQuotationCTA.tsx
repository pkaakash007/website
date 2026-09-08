import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { ShieldCheck, PhoneCall, Terminal } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const AppDevQuotationCTA: React.FC = () => {
  return (
    <section className="py-20 bg-charcoal text-white relative">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="gold">Build Your Software</Badge>

          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Have an Application in Mind? Let's Architect It.
          </h2>

          <p className="text-charcoal-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Get an in-depth technical scoping document, system architecture outline, and fixed-cost milestone estimate from our lead software architects in Erode.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("app-dev-cta")}
              className="cursor-pointer font-bold"
            >
              Request Architecture & Quotation
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Speak With Engineering Team
            </Button>
          </div>

          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-charcoal-muted border-t border-charcoal-border">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Full IP & Source Code Ownership Handover</span>
            </div>
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-gold" />
              <span>Free 30-Day Post-Launch SLA Warranty</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-gold" />
              <span>Direct Phone: {SEO_CONFIG.displayPhone}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AppDevQuotationCTA;
