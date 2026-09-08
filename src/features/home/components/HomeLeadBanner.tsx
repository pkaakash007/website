import React from "react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { ShieldCheck, PhoneCall, ArrowRight, Sparkles } from "lucide-react";
import { SEO_CONFIG } from "@/config/seo";

export const HomeLeadBanner: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-canvas border-b border-border">
      <Container size="wide">
        <div className="p-8 lg:p-16 rounded-4xl bg-charcoal text-white relative overflow-hidden shadow-floating">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <Badge variant="gold">INITIATE STRATEGIC PARTNERSHIP</Badge>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Ready to Outperform Your Competition?
            </h2>

            <p className="text-charcoal-muted text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
              Book a strategic consultation with our senior directors in Erode. Whether you require dominant search visibility or custom enterprise application development, we are ready to execute.
            </p>

            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
              <Button
                variant="gold"
                size="lg"
                withArrow
                onClick={() => openLeadModal("home-lead-banner")}
                className="cursor-pointer font-bold shadow-gold-subtle"
              >
                Request Strategic Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/contact"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Contact Erode Headquarters
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap justify-center items-center gap-8 text-xs text-charcoal-muted border-t border-charcoal-border/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>Strict Mutual NDA Safeguard</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-gold" />
                <span>Direct Line: {SEO_CONFIG.displayPhone}</span>
              </div>
              <div>
                <span>Response SLA: Under 24 Business Hours</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeLeadBanner;
