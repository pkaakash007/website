
import React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/common/Button";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface CaseStudyPlaceholder {
  id: string;
  industry: string;
  campaignName: string;
  image: string;
}

const CASE_STUDY_LIST: CaseStudyPlaceholder[] = [
  {
    id: "case-1",
    industry: "RETAIL & OMNICHANNEL",
    campaignName: "Metropolitan DOOH & Store Launch Blitz",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "case-2",
    industry: "FINANCIAL SERVICES",
    campaignName: "Closed-Loop Search & Server-Side Attribution",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "case-3",
    industry: "HEALTHCARE & DIAGNOSTICS",
    campaignName: "Prime-Time Broadcast to Regional Voice AI",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-24 sm:py-36 bg-canvas border-b border-border relative overflow-hidden">
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-gold-700">
              PROOF & EXECUTION
            </p>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-primary tracking-tight uppercase leading-[1.03]">
              WORK THAT <span className="text-gold-700">MOVES</span> PEOPLE.
            </h2>
          </div>

          <div>
            <Button
              variant="gold"
              size="md"
              withArrow
              onClick={() => openLeadModal("case-studies-briefing")}
              className="text-xs font-bold uppercase tracking-wider px-6 py-3.5 shadow-gold-subtle"
            >
              Request Campaign Briefings
            </Button>
          </div>
        </div>

        {/* Large Image-Led Case Study Placeholders (Structure: IMAGE -> CLIENT/INDUSTRY -> CAMPAIGN NAME -> [VIEW CASE ->]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDY_LIST.map((cs) => (
            <div
              key={cs.id}
              onClick={() => openLeadModal(`case-${cs.id}`)}
              className="group rounded-3xl overflow-hidden bg-white border border-border cursor-pointer shadow-card transition-all duration-300 hover:border-gold/60"
            >
              {/* IMAGE */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-charcoal">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-70 mix-blend-luminosity"
                  style={{ backgroundImage: `url('${cs.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* CLIENT / INDUSTRY + CAMPAIGN NAME + [VIEW CASE ->] */}
              <div className="p-8 space-y-4">
                <span className="text-[11px] font-mono uppercase font-bold tracking-widest text-gold-700">
                  {cs.industry}
                </span>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary leading-snug group-hover:text-gold-800 transition-colors">
                  {cs.campaignName}
                </h3>

                <div className="pt-2 flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-primary group-hover:text-gold-700 transition-colors">
                  <span>VIEW CASE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
