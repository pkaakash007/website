import React from "react";
import { openLeadModal } from "@/components/common/LeadModal";
import { AppleLogo, AndroidLogo } from "@/components/common/PlatformLogos";

export interface ServiceMarqueeItem {
  name: string;
  icon: React.ReactNode;
}

const SERVICES: ServiceMarqueeItem[] = [
  {
    name: "iOS Development",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-black text-white flex items-center justify-center shrink-0 shadow-sm">
        <AppleLogo className="w-3.5 h-3.5 fill-current" />
      </div>
    ),
  },
  {
    name: "Android Development",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-[#3DDC84] text-white flex items-center justify-center shrink-0 shadow-sm">
        <AndroidLogo className="w-3.5 h-3.5 fill-current" />
      </div>
    ),
  },
  {
    name: "Google Ads",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-white border border-black/[0.08] flex items-center justify-center shrink-0 shadow-sm p-0.5">
        <svg className="w-full h-full" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid meet">
          <path d="M5.888 166.405L90.88 20.9C101.676 27.256 156.116 57.384 164.908 63.114L79.916 208.627C70.621 220.907 -5.888 185.04 5.888 166.396V166.405Z" fill="#FBBC04" />
          <path d="M250.084 166.402L165.092 20.906C153.21 1.132 127.619 -6.054 106.601 5.625C85.582 17.304 79.182 42.462 91.064 63.119L176.056 208.633C187.938 228.398 213.529 235.584 234.548 223.905C254.648 212.226 261.966 186.176 250.084 166.419V166.402Z" fill="#4285F4" />
          <ellipse cx="42.664" cy="187.924" rx="42.664" ry="41.604" fill="#34A853" />
        </svg>
      </div>
    ),
  },
  {
    name: "Meta Ads",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-gradient-to-tr from-[#0081FB] to-[#0064E0] text-white flex items-center justify-center shrink-0 shadow-sm">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 7.027c1.378-2.073 3.322-3.327 5.753-3.327 3.992 0 6.247 2.924 6.247 7.094 0 4.606-2.909 7.706-6.621 7.706-2.181 0-3.99-1.002-5.379-2.73-1.389 1.728-3.198 2.73-5.379 2.73-3.712 0-6.621-3.1-6.621-7.706C0 6.624 2.255 3.7 6.247 3.7c2.431 0 4.375 1.254 5.753 3.327zm-5.753-.527C3.593 6.5 2.1 8.54 2.1 10.794c0 3.256 1.847 5.506 4.417 5.506 1.879 0 3.473-1.284 4.542-3.414-1.025-2.046-2.585-6.386-4.812-6.386zm11.506 0c-2.227 0-3.787 4.34-4.812 6.386 1.069 2.13 2.663 3.414 4.542 3.414 2.57 0 4.417-2.25 4.417-5.506 0-2.254-1.493-4.294-4.147-4.294z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Web Development",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-[#0F172A] text-[#00D8FF] flex items-center justify-center shrink-0 shadow-sm">
        <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="1.6" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
          <g stroke="currentColor">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      </div>
    ),
  },
  {
    name: "SEO & GEO",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-white border border-black/[0.08] flex items-center justify-center shrink-0 shadow-sm p-1">
        <svg className="w-full h-full" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "YouTube Ads",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-[#FF0000] text-white flex items-center justify-center shrink-0 shadow-sm">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
    ),
  },
  {
    name: "AI Automation",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-[#10A37F] text-white flex items-center justify-center shrink-0 shadow-sm">
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M22.28 9.29c-.19-.66-.54-1.26-1.02-1.74-.47-.48-1.07-.82-1.72-1.01V5.5c0-.93-.37-1.82-1.03-2.47C17.85 2.37 16.96 2 16.03 2h-1.04C14.8.72 13.5 0 12 0s-2.8.72-2.99 2H7.97c-.93 0-1.82.37-2.47 1.03C4.84 3.68 4.47 4.57 4.47 5.5v1.04c-.66.19-1.25.53-1.73 1.01-.48.48-.82 1.08-1.01 1.74C.72 9.48 0 10.78 0 12.28c0 1.5.72 2.8 1.73 2.99.19.66.53 1.26 1.01 1.74.48.48 1.07.82 1.73 1.01v1.04c0 .93.37 1.82 1.03 2.47.65.66 1.54 1.03 2.47 1.03h1.04c.19 1.28 1.49 2 2.99 2s2.8-.72 2.99-2h1.04c.93 0 1.82-.37 2.48-1.03.65-.65 1.02-1.54 1.02-2.47v-1.04c.65-.19 1.25-.53 1.72-1.01.48-.48.83-1.08 1.02-1.74 1.01-.19 1.73-1.49 1.73-2.99 0-1.5-.72-2.8-1.73-2.99z" />
        </svg>
      </div>
    ),
  },
  {
    name: "Custom ERP",
    icon: (
      <div className="w-6 h-6 rounded-[7px] bg-[#5856D6] text-white flex items-center justify-center shrink-0 shadow-sm">
        <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      </div>
    ),
  },
];

export default function HorizontalMarquee() {
  const renderItem = (svc: ServiceMarqueeItem, idx: number) => (
    <div
      key={idx}
      onClick={() => openLeadModal(svc.name)}
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-black/[0.18] transition-all duration-200 cursor-pointer shrink-0 select-none group"
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif",
      }}
    >
      {/* Official Brand Logo */}
      {svc.icon}

      {/* Single Service Name */}
      <span className="text-[13px] font-semibold text-black tracking-tight whitespace-nowrap group-hover:text-[#007AFF] transition-colors">
        {svc.name}
      </span>
    </div>
  );

  return (
    <section
      className="py-3 border-y border-black/[0.06] overflow-hidden select-none relative"
      style={{
        background: "#FBFBFD",
      }}
    >
      {/* Left/Right Subtle Apple Edge Fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#FBFBFD] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#FBFBFD] to-transparent z-10" />

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full flex overflow-x-hidden group">
        <div className="flex shrink-0 items-center gap-3 animate-ticker group-hover:[animation-play-state:paused] whitespace-nowrap">
          {SERVICES.map((svc, idx) => renderItem(svc, idx))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 items-center gap-3 animate-ticker group-hover:[animation-play-state:paused] whitespace-nowrap ml-3"
        >
          {SERVICES.map((svc, idx) => renderItem(svc, idx + 100))}
        </div>
      </div>
    </section>
  );
}
