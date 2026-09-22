import React from "react";
import { Container } from "@/components/layout/Container";
import { Clock, Users, Code, Activity } from "lucide-react";

export const AboutMilestonesStats: React.FC = () => {
  const stats = [
    {
      value: "5+ Years",
      label: "Commercial Experience",
      desc: "Delivering custom software, websites, and performance marketing campaigns.",
      icon: Clock,
      status: "Proven Track Record",
      statusColor: "text-[#0071E3] bg-[#0071E3]/10",
    },
    {
      value: "50+",
      label: "Businesses Served",
      desc: "Delivered across manufacturing, export, healthcare, retail, and service sectors.",
      icon: Users,
      status: "Regional Scale",
      statusColor: "text-[#AF52DE] bg-[#AF52DE]/10",
    },
    {
      value: "100%",
      label: "Full Source Code Ownership",
      desc: "Complete IP handover with zero vendor lock-in and zero hidden recurring licensing fees.",
      icon: Code,
      status: "Zero Lock-In",
      statusColor: "text-[#FF9500] bg-[#FF9500]/10",
    },
    {
      value: "99.9%",
      label: "Server Uptime Standard",
      desc: "Reliable AWS & Google Cloud infrastructure with automated daily backups.",
      icon: Activity,
      status: "Live & Resilient",
      statusColor: "text-[#34C759] bg-[#34C759]/10",
      isLive: true,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F5F5F7] border-b border-black/[0.06]">
      <Container size="wide">
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-black/[0.05] text-[#86868B]">
            Telemetry &amp; Scale
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold tracking-[-0.025em] text-[#1D1D1F] leading-tight">
            Track Record &amp; Scale
          </h2>
          <p className="text-base text-[#86868B] leading-relaxed">
            Real Result provides dependable engineering and digital marketing solutions designed for businesses where performance directly impacts revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.07] shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* macOS Telemetry Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-black/[0.04] text-neutral-400">
                      0{idx + 1}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full ${item.statusColor}`}>
                      {item.isLive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34C759] animate-pulse" />
                      )}
                      {item.status}
                    </span>
                  </div>

                  {/* Value */}
                  <div className="text-3xl sm:text-4xl font-bold text-[#1D1D1F] tracking-[-0.03em] mb-1 font-sans">
                    {item.value}
                  </div>

                  {/* Label */}
                  <h3 className="text-sm font-semibold text-[#1D1D1F]">
                    {item.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-[#86868B] leading-relaxed mt-4 pt-3 border-t border-black/[0.04]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AboutMilestonesStats;


