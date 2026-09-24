import React, { useState, useEffect } from "react";
import { openLeadModal } from "@/components/common/LeadModal";
import { ArrowRight } from "lucide-react";

const TypewriterText: React.FC = () => {
  const [displayText, setDisplayText] = useState("Get Real Results.");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const words = [
    "Get Real Results.",
    "Get More Customers.",
    "Scale Your Revenue.",
    "Build Custom Apps.",
  ];

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Delay start until after first paint and idle settle
    let idleId: number | NodeJS.Timeout;
    const startTimeout = setTimeout(() => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        idleId = (window as any).requestIdleCallback(() => setIsStarted(true), { timeout: 3000 });
      } else {
        setIsStarted(true);
      }
    }, 2500);

    return () => {
      clearTimeout(startTimeout);
      if (typeof window !== "undefined" && "cancelIdleCallback" in window && typeof idleId === "number") {
        (window as any).cancelIdleCallback(idleId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isStarted) return;
    const currentWord = words[wordIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, 90);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, 45);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, isStarted]);

  return (
    <span className="inline-block min-h-[1.2em] min-w-[12ch]">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] via-[#D4AF37] to-[#A67C1E]">
        {displayText}
      </span>
    </span>
  );
};

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ── UPPER HERO: Crisp White Canvas with Elegant #C5A059 Gold Ambient Touches ── */}
      <div className="relative bg-gradient-to-b from-[#FAF8F5] via-white to-white text-neutral-900 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 overflow-hidden">
        
        {/* ── Sweeping Fluid Ribbon Curves & Star Sparkles ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          {/* Ambient Warm Gold Radial Glows */}
          <div
            className="absolute -top-10 right-1/4 w-[650px] h-[650px] rounded-full opacity-60"
            style={{
              background: "radial-gradient(circle, rgba(197,160,89,0.15) 0%, rgba(197,160,89,0.04) 50%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute top-1/3 left-[-6%] w-[520px] h-[520px] rounded-full opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(197,160,89,0.12) 0%, transparent 70%)",
              filter: "blur(50px)",
            }}
          />

          {/* Sweeping Luminous Fluid Ribbon in Brand Gold */}
          <svg
            viewBox="0 0 1440 650"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full object-cover opacity-35 preserve-3d"
          >
            <path
              d="M-80 420C220 560 520 180 920 360C1220 500 1420 260 1560 300V700H-80V420Z"
              fill="url(#goldFluidGrad)"
            />
            <defs>
              <linearGradient id="goldFluidGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#C5A059" stopOpacity="0.22" />
                <stop offset="60%" stopColor="#DFC58E" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>

          {/* Golden Star Sparkles (#C5A059) */}
          <span className="absolute top-20 left-[18%] text-[#C5A059] text-xl animate-pulse select-none">✦</span>
          <span className="absolute top-36 left-[38%] text-[#C5A059]/70 text-sm animate-ping select-none">★</span>
          <span className="absolute top-24 right-[46%] text-[#C5A059] text-lg animate-pulse select-none">✦</span>
          <span className="absolute top-48 right-[12%] text-[#C5A059]/80 text-sm animate-ping select-none">★</span>
          <span className="absolute bottom-40 left-[8%] text-[#C5A059]/60 text-lg select-none">✦</span>
          <span className="absolute bottom-32 right-[42%] text-[#C5A059]/80 text-sm animate-pulse select-none">✦</span>
        </div>

        {/* ── Hero Main Content Grid ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
            
            {/* ── LEFT COLUMN: High-Contrast Typography & Pill CTA ── */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left z-20">

              {/* Main Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-[52px] xl:text-[58px] font-black tracking-tight text-neutral-950 leading-[1.08] mb-4"
                style={{ letterSpacing: "-0.035em" }}
              >
                Grow Your Business.<br />
                <TypewriterText />
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl mb-8 font-normal">
                Tamil Nadu&apos;s premier agency unifying high-converting digital marketing campaigns with scalable custom web &amp; mobile application engineering.
              </p>

              {/* Reference-Matched Pill CTAs */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-5">
                <button
                  type="button"
                  onClick={() => openLeadModal("home-hero-white-gold")}
                  className="group cursor-pointer inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#876326] hover:bg-[#785820] text-white font-bold text-sm sm:text-base shadow-[0_12px_26px_-6px_rgba(135,99,38,0.45)] hover:shadow-[0_16px_32px_-6px_rgba(135,99,38,0.55)] transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <a
                  href="#pillars"
                  className="cursor-pointer inline-flex items-center justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50 text-neutral-800 font-bold text-sm sm:text-base shadow-sm transition-all duration-200 active:scale-[0.98]"
                >
                  <span>Explore Services</span>
                </a>
              </div>

            </div>

            {/* ── RIGHT COLUMN: The 3D Isometric Centerpiece (Seamless on White Canvas) ── */}
            <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center">
              {/* Subtle Warm Gold Radial Base Glow */}
              <div
                className="absolute -bottom-6 inset-x-8 h-[220px] rounded-full pointer-events-none opacity-60"
                style={{
                  background: "radial-gradient(ellipse at center, rgba(197,160,89,0.22) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div className="relative z-10 w-full max-w-[640px] transition-transform duration-500 hover:scale-102">
                <picture>
                  <source
                    type="image/avif"
                    srcSet="
                      /images/hero/hero-rocket-480.avif 480w,
                      /images/hero/hero-rocket-768.avif 768w,
                      /images/hero/hero-rocket-1200.avif 1200w
                    "
                    sizes="(max-width: 1023px) 100vw, 58vw"
                  />
                  <source
                    type="image/webp"
                    srcSet="
                      /images/hero/hero-rocket-480.webp 480w,
                      /images/hero/hero-rocket-768.webp 768w,
                      /images/hero/hero-rocket-1200.webp 1200w
                    "
                    sizes="(max-width: 1023px) 100vw, 58vw"
                  />
                  <img
                    src="/images/hero/hero-rocket-1200.webp"
                    width={1200}
                    height={896}
                    alt="3D Space Rocket Launching from Laptop with Gold Coins and Analytics Charts"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="w-full h-auto object-contain pointer-events-none filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.06)]"
                  />
                </picture>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeHero;
