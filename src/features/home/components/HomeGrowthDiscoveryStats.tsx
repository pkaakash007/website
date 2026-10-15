import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";

interface StatItem {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

const STATS: StatItem[] = [
  {
    target: 50,
    suffix: "+",
    label: "Active Business Clients",
  },
  {
    target: 65,
    suffix: "%",
    label: "Average Business Growth",
  },
  {
    target: 3.4,
    prefix: "+",
    suffix: "×",
    decimals: 1,
    label: "Organic Search Growth",
  },
  {
    target: 100,
    suffix: "%",
    label: "Client Satisfaction & Code IP",
  },
];

const StatCard: React.FC<{ stat: StatItem; isVisible: boolean; delayMs: number }> = ({
  stat,
  isVisible,
  delayMs,
}) => {
  const [displayValue, setDisplayValue] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    let rafId: number;
    let startTime: number | null = null;
    const duration = 1500; // 1.5s smooth duration

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Exponential ease-out for snappy start and gentle settle
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplayValue(stat.target * eased);

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        } else {
          setDisplayValue(stat.target);
        }
      };

      rafId = requestAnimationFrame(animate);
    }, delayMs);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible, stat.target, delayMs]);

  const formattedNumber =
    stat.decimals === 1 ? displayValue.toFixed(1) : Math.round(displayValue);

  return (
    <div
      className={`flex flex-col items-center justify-center py-2 px-3 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{
        transitionDelay: `${delayMs}ms`,
      }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0E2036] leading-none mb-2 tabular-nums">
        {stat.prefix || ""}
        {formattedNumber}
        {stat.suffix || ""}
      </div>
      <div className="text-xs sm:text-sm font-medium text-neutral-600 tracking-tight">
        {stat.label}
      </div>
    </div>
  );
};

export const HomeGrowthDiscoveryStats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger once on visit
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="growth-stats"
      ref={containerRef}
      className="py-10 sm:py-12 bg-[#FBFBFA] border-y border-neutral-200/80 font-sans"
    >
      <Container size="wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center justify-center text-center">
          {STATS.map((stat, idx) => (
            <StatCard
              key={idx}
              stat={stat}
              isVisible={isVisible}
              delayMs={idx * 120}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HomeGrowthDiscoveryStats;
