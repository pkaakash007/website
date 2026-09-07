
import React from "react";

const MARQUEE_ITEMS = [
  "CREATIVE",
  "MEDIA",
  "DIGITAL",
  "PERFORMANCE",
  "SOCIAL",
  "CONTENT",
  "INFLUENCE",
  "PR",
  "SEO",
  "OOH",
  "TV",
  "CINEMA",
];

export default function HorizontalMarquee() {
  return (
    <section className="py-6 sm:py-8 bg-canvas border-b border-border overflow-hidden select-none">
      <div className="relative w-full flex overflow-x-hidden group">
        {/* Animated Marquee Strip (2 duplicates for infinite loop) */}
        <div className="flex shrink-0 items-center gap-8 sm:gap-12 animate-ticker group-hover:[animation-play-state:paused] whitespace-nowrap">
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-primary uppercase transition-colors hover:text-gold-700">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            </div>
          ))}
        </div>

        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-8 sm:gap-12 animate-ticker group-hover:[animation-play-state:paused] whitespace-nowrap ml-8 sm:ml-12"
        >
          {MARQUEE_ITEMS.map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-8 sm:gap-12">
              <span className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-primary uppercase transition-colors hover:text-gold-700">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
