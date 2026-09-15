import React from "react";
import { Container } from "@/components/layout/Container";

export const AboutMilestonesStats: React.FC = () => {
  const stats = [
    {
      value: "5+ Years",
      label: "Commercial Experience",
      desc: "Delivering custom software, websites, and performance marketing campaigns.",
    },
    {
      value: "50+",
      label: "Businesses Served",
      desc: "Delivered across manufacturing, export, healthcare, retail, and service sectors.",
    },
    {
      value: "100%",
      label: "Full Source Code Ownership",
      desc: "Complete IP handover with zero vendor lock-in and zero hidden recurring licensing fees.",
    },
    {
      value: "99.9%",
      label: "Server Uptime Standard",
      desc: "Reliable AWS & Google Cloud infrastructure with automated daily backups.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Track Record &amp; Scale
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Real Result provides dependable engineering and digital marketing solutions designed for businesses where performance directly impacts revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="py-2 flex flex-col justify-between border-b border-neutral-200 pb-6"
            >
              <div>
                <span className="text-xs font-semibold text-neutral-400 block mb-2 tracking-wide">
                  0{idx + 1}
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">
                  {item.value}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-1">
                  {item.label}
                </h3>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mt-3 pt-3 border-t border-neutral-100">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutMilestonesStats;


