import React from "react";
import { Container } from "@/components/layout/Container";
import { openLeadModal } from "@/components/common/LeadModal";

export const MarketingProcessSimple: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Audit & Strategy Plan",
      desc: "We analyze your past campaigns, customer searches, competitor positioning, and build a clear growth plan tailored to your budget.",
      deliverable: "Custom growth strategy & competitor audit",
    },
    {
      num: "02",
      title: "Creative & Landing Pages",
      desc: "We write direct-response copy, design clean video & image ads, and set up fast pages optimized for calls and WhatsApp inquiries.",
      deliverable: "Ad creatives & conversion pages",
    },
    {
      num: "03",
      title: "Targeted Launch & Bidding",
      desc: "We launch your ads across Google, Meta, and local maps, actively managing bids to keep your cost per qualified lead low.",
      deliverable: "Live campaign launch & bid management",
    },
    {
      num: "04",
      title: "Weekly Tracking & Scaling",
      desc: "We send transparent weekly reports tracking calls and inquiries, continually optimizing and scaling what brings real revenue.",
      deliverable: "Weekly performance report & scaling",
    },
  ];

  return (
    <section className="bg-neutral-50/50 py-20 sm:py-28 border-b border-neutral-200">
      <Container size="wide">
        {/* ── 4-Stage Growth Engine ── */}
        <div>
          <div className="max-w-2xl mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-tight">
              Our 4-Stage Growth Process
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              How we systematically turn searchers and social media users into genuine customer inquiries for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-bold text-[#C5A059] mb-3 uppercase tracking-wider">
                    Step {step.num}
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingProcessSimple;


