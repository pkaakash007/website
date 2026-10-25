import React from "react";
import { Link } from "react-router-dom";
import { CLIENT_LOGOS } from "@/features/about/data/clientLogosData";

export const HomeBrandsTrustUs: React.FC = () => {
  const logos = CLIENT_LOGOS;

  return (
    <section 
      id="brands-that-trust-us"
      className="py-12 sm:py-16 bg-white border-b border-black/[0.06] relative select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── 1. Section Header (Zoho Style) ── */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.2em] text-[#444446]">
            Brands That Trust Us
          </h2>
          {/* Zoho signature red accent dash */}
          <div className="w-8 h-[2.5px] bg-[#E42525] mx-auto mt-2.5 rounded-full" />
        </div>

        {/* ── 2. Infinite Scrolling Client Logos Strip (Pure Transparent Logos, No Boxes) ── */}
        <div className="relative w-full overflow-hidden group">
          {/* Marquee Track (Smooth Infinite CSS Ticker) */}
          <div className="flex w-max items-center animate-ticker group-hover:[animation-play-state:paused]">
            {/* First track */}
            <div className="flex items-center shrink-0">
              {logos.map((client) => {
                const webpUrl = client.logoUrl.replace(/\.png$/, ".webp");
                return (
                  <Link
                    key={`track1-${client.id}`}
                    to="/about#clients"
                    className="flex items-center justify-center px-6 sm:px-9 py-2 shrink-0 group/item transition-transform duration-200 cursor-pointer"
                    title={`${client.name} — ${client.category}`}
                  >
                    <picture>
                      <source type="image/webp" srcSet={webpUrl} />
                      <img
                        src={client.logoUrl}
                        alt={`${client.name} logo`}
                        width={150}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain mix-blend-multiply group-hover/item:scale-105 transition-all duration-200"
                      />
                    </picture>
                  </Link>
                );
              })}
            </div>

            {/* Second track for seamless infinite looping */}
            <div aria-hidden className="flex items-center shrink-0">
              {logos.map((client) => {
                const webpUrl = client.logoUrl.replace(/\.png$/, ".webp");
                return (
                  <Link
                    key={`track2-${client.id}`}
                    to="/about#clients"
                    tabIndex={-1}
                    className="flex items-center justify-center px-6 sm:px-9 py-2 shrink-0 group/item transition-transform duration-200 cursor-pointer"
                    title={`${client.name} — ${client.category}`}
                  >
                    <picture>
                      <source type="image/webp" srcSet={webpUrl} />
                      <img
                        src={client.logoUrl}
                        alt=""
                        width={150}
                        height={40}
                        loading="lazy"
                        decoding="async"
                        className="h-8 sm:h-10 w-auto max-w-[120px] sm:max-w-[150px] object-contain mix-blend-multiply group-hover/item:scale-105 transition-all duration-200"
                      />
                    </picture>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeBrandsTrustUs;
