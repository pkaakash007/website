import React from "react";

export const AboutHeroSketch: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center p-2 sm:p-6 select-none">
      <svg
        className="w-full h-auto max-w-[460px] max-h-[360px]"
        viewBox="0 0 460 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── 1. Strategy Whiteboard Frame ── */}
        <g transform="translate(20, 20)">
          <rect
            x="0"
            y="0"
            width="300"
            height="200"
            rx="16"
            fill="white"
            stroke="#111111"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Top Marker Strip */}
          <line x1="0" y1="36" x2="300" y2="36" stroke="#111111" strokeWidth="1.5" />
          <circle cx="20" cy="18" r="4" fill="#EF4444" />
          <circle cx="34" cy="18" r="4" fill="#F59E0B" />
          <circle cx="48" cy="18" r="4" fill="#10B981" />
          <text x="70" y="22" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#111111">
            Real Result — Engineering &amp; Strategy
          </text>

          {/* Whiteboard Content Lines */}
          <path d="M25 70 Q70 50 110 85 T210 60" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 3" fill="none" />
          <path d="M200 52L214 62L198 72" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Key Metric Box */}
          <rect x="25" y="105" width="110" height="42" rx="8" fill="#FEF3C7" stroke="#111111" strokeWidth="2" />
          <text x="35" y="124" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#111111">
            Measurable ROI
          </text>
          <text x="35" y="139" fontSize="10" fontFamily="Arial, sans-serif" fill="#D97706">
            ✦ Direct Growth
          </text>

          {/* Tech Stack Pills */}
          <rect x="150" y="105" width="125" height="20" rx="10" fill="#F3F4F6" stroke="#111111" strokeWidth="1.5" />
          <text x="160" y="119" fontSize="10" fontFamily="monospace" fill="#111111">
            &lt;Custom Web &amp; App/&gt;
          </text>
          
          <rect x="150" y="130" width="125" height="20" rx="10" fill="#E0F2FE" stroke="#111111" strokeWidth="1.5" />
          <text x="160" y="144" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#0369A1">
            Targeted Ads &amp; SEO
          </text>
        </g>

        {/* ── 2. Erode HQ Location Badge (Hand drawn) ── */}
        <g transform="translate(260, 160)">
          <rect
            x="0"
            y="0"
            width="170"
            height="85"
            rx="14"
            fill="white"
            stroke="#111111"
            strokeWidth="2.5"
          />
          <path
            d="M25 22C17 22 10 29 10 37C10 49 25 62 25 62C25 62 40 49 40 37C40 29 33 22 25 22Z"
            fill="#FEE2E2"
            stroke="#DC2626"
            strokeWidth="2"
          />
          <circle cx="25" cy="35" r="5" fill="#DC2626" />
          <text x="50" y="34" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#111111">
            Erode HQ
          </text>
          <text x="50" y="49" fontSize="10" fontFamily="Arial, sans-serif" fill="#6B7280">
            Tamil Nadu, India
          </text>
          <text x="15" y="74" fontSize="10" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#059669">
            ✓ In-House Engineering
          </text>
        </g>

        {/* ── 3. Team Collaboration Symbol ── */}
        <g transform="translate(40, 235)">
          <rect x="0" y="0" width="190" height="75" rx="12" fill="#F9FAFB" stroke="#111111" strokeWidth="2" />
          <circle cx="30" cy="30" r="14" fill="#E0E7FF" stroke="#111111" strokeWidth="1.5" />
          <path d="M16 56C16 46 22 42 30 42C38 42 44 46 44 56" fill="white" stroke="#111111" strokeWidth="1.5" />
          
          <circle cx="65" cy="30" r="14" fill="#FEF3C7" stroke="#111111" strokeWidth="1.5" />
          <path d="M51 56C51 46 57 42 65 42C73 42 79 46 79 56" fill="white" stroke="#111111" strokeWidth="1.5" />

          <text x="92" y="33" fontSize="11" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#111111">
            Dedicated Team
          </text>
          <text x="92" y="48" fontSize="10" fontFamily="Arial, sans-serif" fill="#6B7280">
            No standard templates
          </text>
        </g>

        {/* Decorative hand-drawn accent spark */}
        <path d="M360 40L364 50L375 52L366 60L369 70L360 63L351 70L354 60L345 52L356 50Z" fill="#F59E0B" />
      </svg>
    </div>
  );
};

export default AboutHeroSketch;
