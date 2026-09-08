import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { Code2, ShieldCheck, PhoneCall, Terminal } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const AppDevQuotationCTA: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-charcoal text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="gold">BUILD YOUR SOFTWARE</Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Have an Application in Mind? Let's Architect It.
          </h2>

          <p className="text-charcoal-muted text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Get an in-depth technical scoping document, system architecture outline, and fixed-cost milestone estimate from our lead software architects in Erode.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <Button
              variant="gold"
              size="lg"
              withArrow
              onClick={() => openLeadModal("app-dev-cta")}
              className="cursor-pointer font-bold shadow-gold-subtle"
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

          <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-charcoal-muted border-t border-charcoal-border/80">
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
