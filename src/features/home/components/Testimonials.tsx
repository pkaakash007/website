
import React from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Deploying Real Result's regional language AI telecalling bots transformed our renewal campaigns. We automated over 250,000 monthly calls in Hindi and Tamil with natural conversational flow and saw an immediate 43% boost in renewals.",
    author: "Rajesh Varma",
    role: "VP of Operations",
    company: "Apex Financial Group",
    metric: "43% Increase in Campaign Renewals",
    division: "AI Communication",
  },
  {
    quote:
      "Having our custom Next.js portal, SEO infrastructure, and performance advertising handled by one unified team eliminated months of cross-agency back-and-forth. Our pipeline expanded 3.8x in two quarters.",
    author: "Elena Rostova",
    role: "Chief Growth Officer",
    company: "Vertex Cloud Systems",
    metric: "3.8x Inbound Pipeline Growth",
    division: "Tech & Marketing",
  },
  {
    quote:
      "When we needed to scale our technical team while simultaneously launching a major DOOH and digital acquisition push, Real Result placed 12 top-tier engineers within 3 weeks and orchestrated the launch seamlessly.",
    author: "Marcus Chen",
    role: "Head of Engineering",
    company: "NovaTech Solutions",
    metric: "12 Key Roles Placed in 3 Weeks",
    division: "HR & Talent",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-border relative">
      <Container size="wide">
        <SectionHeader
          badge="CLIENT SUCCESS"
          title="Trusted by leaders who value execution speed."
          subtitle="Real testimonials and verified operational gains from enterprise leaders using our integrated solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-canvas border border-border hover:border-border-strong hover:bg-white hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-border text-muted">
                    {item.division}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="text-xs font-bold text-primary">
                  {item.author}
                </div>
                <div className="text-[11px] text-secondary">
                  {item.role}, <span className="text-primary font-medium">{item.company}</span>
                </div>
                <div className="mt-3 text-[11px] font-semibold text-brand-teal-dark bg-brand-teal-light/70 px-2.5 py-1 rounded-md inline-block">
                  ★ {item.metric}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
