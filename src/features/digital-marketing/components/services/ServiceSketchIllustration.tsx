import React from "react";

// --- 1. Creative & Digital Strategy (Freestanding Hand Drawing) ---
const StrategySketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(30, 25)">
      <path d="M50 85C32 85 20 72 20 52C20 35 34 18 55 18C76 18 90 35 90 52C90 72 78 85 60 85" stroke="#0E2036" strokeWidth="2.5" strokeLinecap="round" fill="#FEF3C7" />
      <path d="M42 85H68V100C68 104 64 108 58 108H52C46 108 42 104 42 100V85Z" stroke="#0E2036" strokeWidth="2" fill="white" />
      <path d="M46 95H64" stroke="#0E2036" strokeWidth="2" strokeLinecap="round" />
      <path d="M48 58L55 42L62 58" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 2V10M15 22L22 29M95 22L88 29M5 52H12M98 52H105" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    </g>

    <path d="M150 75C185 55 215 48 260 32" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 3" />
    <path d="M250 28L268 30L258 44" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

    <g transform="translate(210, 80)">
      <circle cx="50" cy="50" r="40" stroke="#0E2036" strokeWidth="2.5" fill="white" />
      <circle cx="50" cy="50" r="28" stroke="#1d4ed8" strokeWidth="2" fill="#EFF6FF" />
      <circle cx="50" cy="50" r="12" fill="#1d4ed8" />
      <text x="5" y="112" fontSize="13" fontFamily="sans-serif" fontWeight="bold" fill="#0E2036">+4.8x ROAS Scale</text>
    </g>

    <path d="M40 170L43 178L52 181L45 187L47 196L40 191L33 196L35 187L28 181L37 178Z" fill="#F59E0B" opacity="0.8" />
  </svg>
);

// --- 2. Media Planning & Performance Buying ---
const MediaSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(30, 40)">
      <path d="M25 60L75 35V110L25 85H5V60H25Z" stroke="#0E2036" strokeWidth="2.5" fill="#E0F2FE" strokeLinejoin="round" />
      <path d="M75 35C95 48 95 97 75 110" stroke="#0E2036" strokeWidth="2.5" fill="#DBEAFE" />
      <path d="M45 85V130C45 134 38 138 32 138" stroke="#0E2036" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M102 50C115 62 115 88 102 100" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M120 38C140 57 140 93 120 112" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    <g transform="translate(200, 45)">
      <circle cx="35" cy="30" r="20" stroke="#0E2036" strokeWidth="2" fill="#FEF3C7" />
      <path d="M10 68C10 54 22 48 35 48C48 48 60 54 60 68" stroke="#0E2036" strokeWidth="2" fill="white" />
      
      <circle cx="90" cy="40" r="22" stroke="#0E2036" strokeWidth="2" fill="#FEE2E2" />
      <path d="M64 82C64 68 76 60 90 60C104 60 116 68 116 82" stroke="#0E2036" strokeWidth="2" fill="white" />

      <rect x="15" y="90" width="100" height="36" rx="18" fill="#EFF6FF" stroke="#1d4ed8" strokeWidth="2" />
      <text x="28" y="113" fontSize="13" fontWeight="bold" fill="#1d4ed8">💬 Leads</text>
    </g>

    <path d="M175 30L178 36L185 38L179 42L181 48L175 44L169 48L171 42L165 38L172 36Z" fill="#F59E0B" />
  </svg>
);

// --- 3. SEO & AI GEO ---
const SeoSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(30, 25)">
      <rect x="0" y="0" width="280" height="175" rx="16" fill="white" stroke="#0E2036" strokeWidth="2.5" />
      <line x1="0" y1="36" x2="280" y2="36" stroke="#0E2036" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="4" fill="#EF4444" />
      <circle cx="32" cy="18" r="4" fill="#F59E0B" />
      <circle cx="46" cy="18" r="4" fill="#9CA3AF" />
      
      <rect x="68" y="10" width="150" height="16" rx="8" fill="#F3F4F6" />
      <text x="76" y="22" fontSize="9" fontFamily="monospace" fill="#6B7280">🔍 best agency Erode</text>

      <rect x="20" y="55" width="170" height="12" rx="4" fill="#E0F2FE" />
      <rect x="20" y="74" width="220" height="7" rx="3" fill="#E5E7EB" />
      <rect x="20" y="86" width="160" height="7" rx="3" fill="#E5E7EB" />

      <g transform="translate(205, 50)">
        <circle cx="24" cy="24" r="22" fill="#F59E0B" stroke="#0E2036" strokeWidth="2" />
        <text x="15" y="31" fontSize="16" fontWeight="black" fill="white">#1</text>
      </g>
    </g>

    <g transform="translate(240, 140)">
      <path d="M30 6C17 6 6 17 6 30C6 46 30 66 30 66C30 66 54 46 54 30C54 17 43 6 30 6Z" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.5" />
      <circle cx="30" cy="28" r="9" fill="#DC2626" />
    </g>

    <path d="M40 220C90 200 140 190 200 170" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 3" />
    <path d="M190 166L206 168L196 182" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <text x="45" y="240" fontSize="13" fontWeight="extrabold" fill="#0E2036">+310% Organic Growth</text>
  </svg>
);

// --- 4. Branding & Marketing Communications ---
const BrandingSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(30, 30)">
      <path d="M35 160L80 45L105 22L130 45L155 160" stroke="#0E2036" strokeWidth="2.5" fill="white" />
      <path d="M80 45H130" stroke="#0E2036" strokeWidth="2" />
      <circle cx="105" cy="80" r="6" fill="#0E2036" />
      <line x1="105" y1="86" x2="105" y2="135" stroke="#0E2036" strokeWidth="2" />
      <polygon points="105,160 98,172 112,172" fill="#D97706" />
    </g>

    <g transform="translate(180, 35)">
      <rect x="0" y="0" width="140" height="110" rx="14" fill="white" stroke="#0E2036" strokeWidth="2" />
      <circle cx="30" cy="35" r="16" fill="#0E2036" />
      <circle cx="70" cy="35" r="16" fill="#C5A059" />
      <circle cx="110" cy="35" r="16" fill="#1d4ed8" />
      <text x="20" y="78" fontSize="12" fontWeight="bold" fill="#0E2036">Brand Identity</text>
      <text x="20" y="96" fontSize="10" fill="#6B7280">&amp; Packaging Dielines</text>
    </g>

    <g transform="translate(195, 155)">
      <path d="M24 24L60 6L108 6L72 24Z" fill="#FEF3C7" stroke="#0E2036" strokeWidth="2" />
      <path d="M24 24V72L72 72V24Z" fill="#FDE68A" stroke="#0E2036" strokeWidth="2" />
      <path d="M72 24L108 6V54L72 72Z" fill="#FEF3C7" stroke="#0E2036" strokeWidth="2" />
    </g>

    <text x="30" y="230" fontSize="13" fontWeight="bold" fill="#0E2036">100% Brand IP Handover ✨</text>
  </svg>
);

// --- 5. Mobile & Website UI/UX Design ---
const UiUxSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(45, 20)">
      <rect x="0" y="0" width="105" height="205" rx="20" fill="white" stroke="#0E2036" strokeWidth="2.5" />
      <rect x="35" y="7" width="35" height="7" rx="3.5" fill="#0E2036" />
      <rect x="12" y="28" width="81" height="42" rx="7" fill="#E0F2FE" />
      <rect x="12" y="80" width="37" height="37" rx="7" fill="#F3F4F6" />
      <rect x="56" y="80" width="37" height="37" rx="7" fill="#F3F4F6" />
      <rect x="12" y="130" width="81" height="24" rx="12" fill="#0891B2" />
      <circle cx="52" cy="142" r="14" stroke="#F59E0B" strokeWidth="2" strokeDasharray="3 2" />
    </g>

    <g transform="translate(170, 40)">
      <rect x="0" y="0" width="140" height="110" rx="10" fill="white" stroke="#0E2036" strokeWidth="2" />
      <line x1="0" y1="22" x2="140" y2="22" stroke="#0E2036" strokeWidth="1" />
      <rect x="12" y="32" width="116" height="30" rx="5" fill="#ECFEFF" />
      <rect x="12" y="70" width="34" height="28" rx="4" fill="#F3F4F6" />
      <rect x="53" y="70" width="34" height="28" rx="4" fill="#F3F4F6" />
      <rect x="94" y="70" width="34" height="28" rx="4" fill="#F3F4F6" />
    </g>

    <path d="M150 130C170 150 195 155 220 160" stroke="#0891B2" strokeWidth="2.5" strokeDasharray="4 2" strokeLinecap="round" />
    <text x="175" y="200" fontSize="13" fontWeight="bold" fill="#0E2036">Frictionless UX Flow</text>
  </svg>
);

// --- 6. Custom Web & Software Engineering ---
const SoftwareSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(30, 25)">
      <rect x="0" y="0" width="175" height="145" rx="12" fill="#0F172A" stroke="#0E2036" strokeWidth="2" />
      <line x1="0" y1="24" x2="175" y2="24" stroke="#334155" strokeWidth="1" />
      <circle cx="12" cy="12" r="3" fill="#EF4444" />
      <circle cx="22" cy="12" r="3" fill="#F59E0B" />
      <circle cx="32" cy="12" r="3" fill="#94A3B8" />
      
      <text x="14" y="50" fontSize="10" fontFamily="monospace" fill="#38BDF8">&lt;NextEngine /&gt;</text>
      <text x="14" y="72" fontSize="10" fontFamily="monospace" fill="#38BDF8"> speed="&lt; 1s"</text>
      <text x="14" y="94" fontSize="10" fontFamily="monospace" fill="#FACC15"> upi="Instant"</text>
      <text x="14" y="116" fontSize="10" fontFamily="monospace" fill="#F472B6"> stack="React19"</text>
    </g>

    <g transform="translate(225, 30)">
      <ellipse cx="40" cy="18" rx="35" ry="12" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
      <path d="M5 18V45C5 52 20 57 40 57C60 57 75 52 75 45V18" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
      <path d="M5 45V72C5 79 20 84 40 84C60 84 75 79 75 72V45" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
      <text x="18" y="40" fontSize="10" fontWeight="bold" fill="#3730A3">Database</text>
    </g>

    <g transform="translate(220, 130)">
      <polygon points="30,0 12,30 26,30 18,54 42,22 26,22" fill="#F59E0B" stroke="#D97706" strokeWidth="1.5" />
      <text x="48" y="34" fontSize="14" fontWeight="black" fill="#0E2036">&lt; 1s Speed</text>
    </g>

    <text x="30" y="225" fontSize="13" fontWeight="bold" fill="#0E2036">Enterprise Software &amp; UPI</text>
  </svg>
);

// --- 7. Native Mobile Apps ---
const AppsSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(45, 25)">
      <rect x="0" y="0" width="100" height="185" rx="18" fill="white" stroke="#0E2036" strokeWidth="2.5" />
      <rect x="32" y="7" width="36" height="7" rx="3.5" fill="#0E2036" />
      <rect x="10" y="28" width="80" height="46" rx="7" fill="#FFE4E6" />
      <text x="16" y="56" fontSize="11" fontWeight="extrabold" fill="#9F1239">iOS App</text>
      
      <rect x="10" y="84" width="80" height="35" rx="7" fill="#FFF1F2" stroke="#F43F5E" strokeWidth="1.5" />
      <text x="14" y="105" fontSize="10" fontWeight="bold" fill="#881337">🔔 Push Alert</text>
    </g>

    <g transform="translate(175, 35)">
      <rect x="0" y="0" width="100" height="175" rx="16" fill="white" stroke="#0E2036" strokeWidth="2.5" />
      <circle cx="50" cy="9" r="3.5" fill="#0E2036" />
      <rect x="10" y="25" width="80" height="46" rx="7" fill="#F1F5F9" />
      <text x="16" y="53" fontSize="11" fontWeight="extrabold" fill="#0E2036">Android</text>

      <rect x="10" y="81" width="80" height="35" rx="7" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
      <text x="14" y="102" fontSize="10" fontWeight="bold" fill="#0369A1">📦 100% Code</text>
    </g>

    <text x="55" y="235" fontSize="13" fontWeight="bold" fill="#0E2036">App Store Live Delivery 🚀</text>
  </svg>
);

// --- 8. Commercial Video Production & Reels ---
const VideoSketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(30, 25)">
      <rect x="0" y="0" width="145" height="110" rx="10" fill="white" stroke="#0E2036" strokeWidth="2.5" />
      <rect x="0" y="0" width="145" height="24" rx="5" fill="#0E2036" />
      <polygon points="18,0 32,0 14,24 0,24" fill="white" />
      <polygon points="46,0 60,0 42,24 28,24" fill="white" />
      <polygon points="74,0 88,0 70,24 56,24" fill="white" />
      <polygon points="102,0 116,0 98,24 84,24" fill="white" />
      
      <text x="14" y="48" fontSize="11" fontWeight="extrabold" fill="#DC2626">REC ● 4K</text>
      <text x="14" y="68" fontSize="11" fontWeight="bold" fill="#0E2036">Commercial Reels</text>
      <text x="14" y="88" fontSize="10" fill="#6B7280">Tamil &amp; English</text>
    </g>

    <g transform="translate(195, 20)">
      <rect x="0" y="0" width="105" height="190" rx="16" fill="#18181B" stroke="#0E2036" strokeWidth="2.5" />
      <rect x="7" y="18" width="91" height="155" rx="10" fill="#27272A" />
      <polygon points="44,80 60,92 44,104" fill="white" fillOpacity="0.9" />
      <text x="14" y="150" fontSize="9" fontWeight="bold" fill="#FACC15">"Viral Story 🚀"</text>
    </g>

    <text x="30" y="225" fontSize="13" fontWeight="bold" fill="#0E2036">+140% View Retention 📈</text>
  </svg>
);

// --- 9. Cloud Infrastructure & Cyber Security ---
const SecuritySketch: React.FC = () => (
  <svg className="w-full h-auto max-h-[300px]" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(35, 25)">
      <path d="M40 80C18 80 0 63 0 43C0 27 14 14 34 14C43 5 62 0 80 9C93 0 116 5 125 18C138 18 148 30 148 43C148 63 134 80 108 80Z" fill="#F1F5F9" stroke="#0E2036" strokeWidth="2.5" />
      <text x="36" y="50" fontSize="12" fontWeight="extrabold" fill="#0E2036">☁️ CLOUD</text>
    </g>

    <g transform="translate(180, 45)">
      <rect x="0" y="0" width="110" height="115" rx="14" fill="white" stroke="#0E2036" strokeWidth="2.5" />
      <path d="M37 40V25C37 14 46 7 57 7C68 7 77 14 77 25V40" stroke="#0E2036" strokeWidth="2.5" fill="none" />
      <rect x="25" y="37" width="64" height="55" rx="9" fill="#334155" />
      <circle cx="57" cy="60" r="7" fill="#FACC15" />
      <path d="M57 65V76" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" />
    </g>

    <text x="40" y="220" fontSize="13" fontWeight="bold" fill="#0E2036">99.98% Uptime &amp; SSL Security 🛡️</text>
  </svg>
);

export interface ServiceSketchIllustrationProps {
  serviceId: string;
  className?: string;
}

export const ServiceSketchIllustration: React.FC<ServiceSketchIllustrationProps> = ({
  serviceId,
  className,
}) => {
  return (
    <div className={className || "w-full flex items-center justify-center p-4 sm:p-8 select-none transition-transform duration-300 hover:scale-[1.02]"}>
      {serviceId.includes("strategy") && <StrategySketch />}
      {serviceId.includes("media") && <MediaSketch />}
      {serviceId.includes("seo") && <SeoSketch />}
      {serviceId.includes("branding") && <BrandingSketch />}
      {serviceId.includes("uiux") && <UiUxSketch />}
      {serviceId.includes("software") && <SoftwareSketch />}
      {serviceId.includes("mobile") && <AppsSketch />}
      {serviceId.includes("video") && <VideoSketch />}
      {serviceId.includes("security") && <SecuritySketch />}
    </div>
  );
};

export default ServiceSketchIllustration;
