import React, { useState } from "react";
import { Container } from "@/components/layout/Container";
import {
  Globe,
  Smartphone,
  Server,
  Database,
  Cloud,
  CheckCircle2,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { AppleLogo } from "@/components/common/PlatformLogos";

// ─── Official Vector Brand Logos ─────────────────────────────────────────────

export const TechLogo: React.FC<{ id: string; className?: string }> = ({ id, className = "w-full h-full" }) => {
  switch (id) {
    // ── Frontend ──
    case "react":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path
            fill="#FFFFFF"
            d="M52.3 84.8c-.8 6.5-5.5 9.7-12.7 9.7-8.4 0-14.8-4.8-15.7-14.7h9.5c.6 4.9 3.2 7.1 6.8 7.1 3.2 0 5-1.7 5-4.1 0-2.8-2.6-4.2-7.5-5.8l-4.1-1.3c-7.9-2.6-11.8-6.9-11.8-13.6 0-8.4 6.7-14 16.5-14 9.1 0 14.8 5 15.6 13.4H45c-.6-4-2.8-5.9-6.3-5.9-3.2 0-4.9 1.6-4.9 3.8 0 2.3 2.1 3.5 6.7 5l4.3 1.4c8.4 2.8 12.5 6.9 12.5 14zm44-35.4v9.1H81.2v35.3H70.7V58.5H55.6v-9.1h40.7z"
          />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 180 180" className={className}>
          <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
            <circle cx="90" cy="90" r="90" fill="black" />
          </mask>
          <g mask="url(#mask-next)">
            <circle cx="90" cy="90" r="90" fill="black" />
            <path
              d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
              fill="url(#paint0_linear_next)"
            />
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
          </g>
          <defs>
            <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_next" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );
    case "tailwind":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path
            fill="#38BDF8"
            d="M24 9.6c-5.6 0-9.2 2.8-10.8 8.4 2.4-2.8 5.2-3.8 8.4-3 1.8.4 3.1 1.7 4.5 3.1C28.4 20.4 31.2 23.2 37.6 23.2c5.6 0 9.2-2.8 10.8-8.4-2.4 2.8-5.2 3.8-8.4 3-1.8-.4-3.1-1.7-4.5-3.1C33.2 12.4 30.4 9.6 24 9.6zm-13.6 14c-5.6 0-9.2 2.8-10.8 8.4 2.4-2.8 5.2-3.8 8.4-3 1.8.4 3.1 1.7 4.5 3.1 2.3 2.3 5.1 5.1 11.5 5.1 5.6 0 9.2-2.8 10.8-8.4-2.4 2.8-5.2 3.8-8.4 3-1.8-.4-3.1-1.7-4.5-3.1-2.3-2.3-5.1-5.1-11.5-5.1z"
          />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <path fill="#0055FF" d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      );
    case "vite":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path
            fill="#BD34FE"
            d="M29.8 4.4L16.7 28.5c-.3.5-.9.5-1.2 0L2.2 4.4c-.4-.6.1-1.4.8-1.2l13 3.6 13-3.6c.7-.2 1.2.6.8 1.2z"
          />
          <path
            fill="#FFD62E"
            d="M19.8 2.6l-8.6 11.8h4.5l-3.2 8.7 9.8-12.7h-4.8l2.3-7.8z"
          />
        </svg>
      );

    // ── Mobile ──
    case "swift":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="28" fill="#F05138" />
          <path
            fill="#FFFFFF"
            d="M103.5 101.4c-1.3 1.5-2.8 3-4.5 4.3C80.2 120.3 54.7 114 36.6 98.7c20 8.2 41.5 4.3 52.8-4.2-18.4-1.3-33.8-13.6-40.4-31.5 7.6 2.3 15.6 2 22.4-1.3-16.7-6.2-27.9-22-27.9-40.5 0-.8.1-1.6.1-2.4 12.1 14.6 29.5 24.2 49 26-1.5-7.5-.5-15.6 3.4-22.5 5.8-10.4 17.5-15.8 28.9-13.3-4.6 6.3-7.2 13.9-7.2 21.8 0 2.2.2 4.4.7 6.5 10.7-3.9 19.3-12 24-22.2-2.9 8.2-8.3 15.1-15.3 19.8 8.8-.9 17.1-4 24.2-8.9-5.4 7.6-12.6 13.8-21 17.9 3.5 19.6 14.8 36.3 31.2 47.7z"
          />
        </svg>
      );
    case "kotlin":
      return (
        <svg viewBox="0 0 24 24" className={className}>
          <defs>
            <linearGradient id="kotlin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C757BC" />
              <stop offset="50%" stopColor="#D04B8C" />
              <stop offset="100%" stopColor="#E96645" />
            </linearGradient>
          </defs>
          <path fill="url(#kotlin-grad)" d="M24 24H0V0h24L12 12z" />
        </svg>
      );
    case "flutter":
      return (
        <svg viewBox="0 0 166 202" className={className}>
          <path fill="#42A5F5" d="M102.3 0L0 102.3l31.8 31.8L166 0z" />
          <path fill="#02569B" d="M102.3 124.7l-38.2 38.2L102.3 201l63.7-63.7z" />
          <path fill="#0175C2" d="M64.1 162.9l38.2-38.2 38.2 38.2-38.2 38.2z" />
        </svg>
      );
    case "reactnative":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <circle cx="64" cy="64" r="11" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="5.5" fill="none">
            <ellipse rx="58" ry="22" cx="64" cy="64" />
            <ellipse rx="58" ry="22" cx="64" cy="64" transform="rotate(60 64 64)" />
            <ellipse rx="58" ry="22" cx="64" cy="64" transform="rotate(120 64 64)" />
          </g>
        </svg>
      );
    case "apple":
      return <AppleLogo className={className} />;
    case "android":
      return (
        <img
          src="/brand/android-head_3D.svg"
          alt="Android"
          className={`object-contain ${className}`}
          loading="lazy"
        />
      );

    // ── Backend ──
    case "nodejs":
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path
            fill="#5FA04E"
            d="M16 2.3l12.4 7.2v14.3L16 31 3.6 23.8V9.5L16 2.3z"
          />
          <path
            fill="#FFFFFF"
            d="M16 8.5l7 4.1v8.1l-7 4.1-7-4.1v-8.1l7-4.1z"
          />
        </svg>
      );
    case "python":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path
            fill="#3776AB"
            d="M63.5 8c-26.6 0-25 11.5-25 11.5l.1 11.9h25.4v3.6H28.6S8 32.7 8 59.3s18 25.8 18 25.8h10.7v-15s-.6-18 17.7-18h24.8s17.1.3 17.1-16.6V20.8S108.5 8 63.5 8zm-13.8 8.1c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.3-5 5-5z"
          />
          <path
            fill="#FFD438"
            d="M64.5 120c26.6 0 25-11.5 25-11.5l-.1-11.9H64v-3.6h35.4s20.6 2.3 20.6-24.3-18-25.8-18-25.8H111.3v15s.6 18-17.7 18H68.8s-17.1-.3-17.1 16.6v14.7S19.5 120 64.5 120zm13.8-8.1c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
          />
        </svg>
      );
    case "golang":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <rect width="128" height="128" rx="28" fill="#00ADD8" />
          <path
            fill="#FFFFFF"
            d="M26 64c0-14.4 10.3-25 25-25 12.8 0 21.2 7.7 23.4 18.5H62.9c-1.8-4.8-6.1-8.5-11.9-8.5-8.8 0-14.5 6.9-14.5 15s5.7 15 14.5 15c6.5 0 11.1-4.2 12.3-9.8H49.5v-9.5H75v20.8c-5.7 6.2-14.2 9.5-24 9.5-14.7 0-25-11.6-25-26zm52 0c0-14.4 10.9-25 25-25s25 10.6 25 25-10.9 25-25 25-25-10.6-25-25zm39.5 0c0-8.8-6.1-15-14.5-15s-14.5 6.2-14.5 15 6.1 15 14.5 15 14.5-6.2 14.5-15z"
          />
        </svg>
      );
    case "graphql":
      return (
        <svg viewBox="0 0 100 100" className={className}>
          <path
            fill="#E10098"
            d="M50 7.5L13.2 28.8v42.4L50 92.5l36.8-21.3V28.8L50 7.5zm0 8.7l29.3 17-29.3 50.8L20.7 33.2 50 16.2zm-31 20l25.8 44.8H19V36.2zm62 0v44.8H55.2L81 36.2z"
          />
        </svg>
      );

    // ── Database ──
    case "postgresql":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path
            fill="#336791"
            d="M64 8c-30.9 0-56 25.1-56 56 0 24.8 16.2 45.9 38.6 53.2 2.8.5 3.8-1.2 3.8-2.7v-9.5c-15.6 3.4-18.9-7.5-18.9-7.5-2.6-6.5-6.2-8.2-6.2-8.2-5.1-3.5.4-3.4.4-3.4 5.6.4 8.6 5.8 8.6 5.8 5 8.6 13.1 6.1 16.3 4.7.5-3.6 2-6.1 3.6-7.5-12.4-1.4-25.5-6.2-25.5-27.7 0-6.1 2.2-11.1 5.8-15-0.6-1.4-2.5-7.1.6-14.8 0 0 4.7-1.5 15.4 5.7 4.5-1.2 9.2-1.9 14-1.9s9.5.6 14 1.9c10.7-7.3 15.4-5.7 15.4-5.7 3.1 7.7 1.2 13.4.6 14.8 3.6 3.9 5.8 8.9 5.8 15 0 21.6-13.1 26.2-25.6 27.6 2 1.8 3.9 5.3 3.9 10.6v15.7c0 1.5 1 3.3 3.9 2.7C103.8 109.9 120 88.8 120 64c0-30.9-25.1-56-56-56z"
          />
        </svg>
      );
    case "redis":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path
            fill="#DC382D"
            d="M117.8 81.3L67.1 106.9c-2 1-4.3 1-6.2 0L10.2 81.3c-2.3-1.2-3.7-3.6-3.7-6.2V41.9c0-2.6 1.4-5 3.7-6.2L60.9 10.1c2-1 4.3-1 6.2 0l50.7 25.6c2.3 1.2 3.7 3.6 3.7 6.2v33.2c0 2.6-1.4 5-3.7 6.2z"
          />
          <path
            fill="#FFFFFF"
            d="M64 36.5l29.8 15-29.8 15-29.8-15L64 36.5zm-33.8 28.5L60.5 80v20.4L30.2 85.4V65zm37.6 35.4V80l30.3-15v20.4L67.8 100.4z"
          />
        </svg>
      );
    case "mongodb":
      return (
        <svg viewBox="0 0 64 64" className={className}>
          <path
            fill="#47A248"
            d="M32 2C30 8 18 20 18 36c0 10 6 18 13 24 1 1 2 2 2 2s1-1 2-2c7-6 13-14 13-24C48 20 34 8 32 2z"
          />
          <path
            fill="#3FA037"
            d="M32 2v60c1-1 2-2 2-2 7-6 13-14 13-24C47 20 34 8 32 2z"
          />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 109 113" className={className}>
          <path
            fill="#3ECF8E"
            d="M63.7 110.2c-2.8 3.8-9 1.8-9-3L54.3 69H6.8c-4.8 0-7.7-5.3-5-9.3L50.4 2.8c2.8-3.8 9-1.8 9 3l.4 38.2h47.5c4.8 0 7.7 5.3 5 9.3l-48.6 56.9z"
          />
        </svg>
      );

    // ── Cloud & DevOps ──
    case "aws":
      return (
        <svg viewBox="0 0 64 64" className={className}>
          <rect width="64" height="64" rx="14" fill="#232F3E" />
          <path
            fill="#FF9900"
            d="M17.4 38.6c6.2 3.6 14 5.5 21.8 5.5 3.5 0 7.2-.5 10.6-1.5.7-.2 1.3.4.8 1-3.6 4-9.3 6.4-15.6 6.4-8 0-15.6-3.2-20.2-8.3-.4-.5 0-1.1.6-.9l2-.2v-.1z"
          />
          <path
            fill="#FFFFFF"
            d="M26.2 32.7c-2.7 0-4.8-1-6-2.9v2.5h-3.4V19.4h3.4v5.4c1.2-1.9 3.3-2.9 6-2.9 4.3 0 7.4 3.4 7.4 8.1 0 4.8-3.1 8.2-7.4 8.2zm-.9-2.9c2.8 0 4.7-2.2 4.7-5.3s-1.9-5.3-4.7-5.3c-2.8 0-4.7 2.2-4.7 5.3s1.9 5.3 4.7 5.3zm19.7 2.9h-3.4l-4.1-12.9h3.6l2.3 8.8 2.3-8.8h3.4l-4.1 12.9z"
          />
        </svg>
      );
    case "gcp":
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <path fill="#4285F4" d="M35 19h-1.5c-.8-4.6-4.8-8-9.5-8-3.7 0-7 2.2-8.4 5.5-4.2.5-7.6 4.1-7.6 8.5 0 4.7 3.8 8.5 8.5 8.5H35c3.9 0 7-3.1 7-7s-3.1-7-7-7z" />
          <path fill="#EA4335" d="M19 14.5c1.5-1.5 3.5-2.5 5.8-2.5 4.7 0 8.7 3.4 9.5 8H35c2.2 0 4.1 1 5.3 2.6L29 11.5l-10 3z" />
          <path fill="#FBBC04" d="M35 33.5c3.9 0 7-3.1 7-7 0-1.6-.5-3.1-1.5-4.2l-9 9.2H35z" />
          <path fill="#34A853" d="M16 33.5h18.5l-6-6H16.5c-4.7 0-8.5-3.8-8.5-8.5 0-1.6.4-3.1 1.2-4.3L4.5 19C4.2 20.4 4 21.9 4 23.5c0 5.5 4.5 10 10 10h2z" />
        </svg>
      );
    case "cloudflare":
      return (
        <svg viewBox="0 0 128 128" className={className}>
          <path
            fill="#F38020"
            d="M93.3 54.4c-2.4-14.7-15.1-25.9-30.5-25.9-12.7 0-23.7 7.7-28.5 18.7-2.3-.9-4.8-1.5-7.5-1.5-11.4 0-20.7 9.3-20.7 20.7 0 1.2.1 2.3.3 3.5C2.7 72.3 0 76.8 0 81.9c0 7.8 6.3 14.1 14.1 14.1h79.2c19.2 0 34.7-15.5 34.7-34.7 0-18.4-14.3-33.4-32.4-34.6-.7-2.4-1.4-4.6-2.3-6.9z"
          />
          <path
            fill="#FAAE40"
            d="M98.6 62.1c1.5-4.3 2.3-8.8 2.3-13.6 0-18.4-14.3-33.4-32.4-34.6-.7-2.4-1.4-4.6-2.3-6.9C63.8 2.3 61 0 57.9 0c-1.8 0-3.5.7-4.7 2-1.2 1.3-1.8 3-1.6 4.8l2.2 18.2c.2 1.8 1.4 3.3 3.1 3.8 12.7 3.8 21.9 15.5 21.9 29.4 0 2.5-.3 5-.9 7.3-.4 1.7.3 3.4 1.7 4.4 1.4 1 3.3 1 4.7.1l11.7-6.9c1.6-.9 2.5-2.6 2.6-4.5v-1.5z"
          />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 64 64" className={className}>
          <rect width="64" height="64" rx="14" fill="#2496ED" />
          <path
            fill="#FFFFFF"
            d="M52.3 27.5c-.8-.6-2.5-.8-3.9-.3-.5-3.3-2.7-5.9-6.3-7.2-.6-.2-1.2-.4-1.9-.5-.4 1.5-.2 3.4.6 4.7-2.1 1.2-4.6 1.1-6.6 0l-.3-.2H5.5c-.8 2.8-.4 7.6 1.8 11.5 3.3 5.9 9.5 9.4 17.6 9.4 17.2 0 26.6-11.4 27.4-17.7zM18.8 20.3h5.4v5.2h-5.4zm-6.8 0h5.4v5.2H12zm0 6.6h5.4v5.2H12zm6.8 0h5.4v5.2h-5.4zm6.8-6.6h5.4v5.2h-5.4zm0 6.6h5.4v5.2h-5.4zm6.8 0h5.4v5.2h-5.4zm6.8 0h5.4v5.2h-5.4zm-20.4-6.6h5.4v5.2H12z"
          />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 98 96" className={className}>
          <path
            fill="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
          />
        </svg>
      );
    default:
      return <Cpu className={className} />;
  }
};

// ─── Data Architecture ───────────────────────────────────────────────────────

interface TechItem {
  id: string;
  name: string;
  logoId: string;
  badge: string;
  description: string;
  mention: string;
}

interface TechCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  headline: string;
  description: string;
  technologies: TechItem[];
}

const techCategories: TechCategory[] = [
  {
    id: "frontend",
    name: "Web & Frontend",
    icon: Globe,
    headline: "Web & Frontend Engineering Standards",
    description: "Modern, performant client-side architectures delivering sub-second page loads, strict TypeScript safety, and fluid 60fps physics animations.",
    technologies: [
      {
        id: "react",
        name: "React 19",
        logoId: "react",
        badge: "Core UI Engine",
        description: "Component-driven architectures with Server Components, React Compiler, and concurrent rendering.",
        mention: "React 19 · RSC · Strict Mode",
      },
      {
        id: "typescript",
        name: "TypeScript 5.5",
        logoId: "typescript",
        badge: "Type Safety",
        description: "Strict compile-time verification across frontend and backend models for zero runtime surprises.",
        mention: "Strict Typing · 100% Typed",
      },
      {
        id: "nextjs",
        name: "Next.js 15 & Vite",
        logoId: "nextjs",
        badge: "Production Framework",
        description: "Hybrid SSR, SSG, and sub-100ms hot module replacement (HMR) bundlers for maximum SEO score.",
        mention: "App Router · Edge SSR · Vite 6",
      },
      {
        id: "tailwind",
        name: "Tailwind CSS v4",
        logoId: "tailwind",
        badge: "Design Tokens",
        description: "Utility-first responsive tokens, fluid typography scales, and unified light/dark mode engines.",
        mention: "CSS Variables · Sub-millisecond build",
      },
      {
        id: "framer",
        name: "Framer Motion",
        logoId: "framer",
        badge: "Fluid Animation",
        description: "Spring-physics gestures, smooth scroll-driven effects, and seamless micro-interactions.",
        mention: "Spring Physics · 60fps GPU",
      },
      {
        id: "vite",
        name: "Vite Bundler",
        logoId: "vite",
        badge: "Build Speed",
        description: "Native ES-modules dev server and Rollup-optimized production output with tree-shaking.",
        mention: "ESM · Ultra-Fast HMR",
      },
    ],
  },
  {
    id: "mobile",
    name: "Mobile Platforms",
    icon: AppleLogo,
    headline: "Native & Cross-Platform Mobile Standards",
    description: "App Store & Google Play published apps built for 120Hz ProMotion displays with unified business logic and zero lag.",
    technologies: [
      {
        id: "swift",
        name: "Swift 6 & SwiftUI",
        logoId: "swift",
        badge: "Native Apple iOS",
        description: "Native iPhone & iPad performance, Metal GPU graphics, Face ID biometric auth, and Live Widgets.",
        mention: "SwiftUI · Metal · iOS 18 Ready",
      },
      {
        id: "kotlin",
        name: "Kotlin & Jetpack",
        logoId: "kotlin",
        badge: "Native Android",
        description: "Modern Android UI with Jetpack Compose, Kotlin Coroutines, and Google Play Integrity API.",
        mention: "Compose · Android 15 · Coroutines",
      },
      {
        id: "reactnative",
        name: "React Native",
        logoId: "reactnative",
        badge: "Cross-Platform",
        description: "Unified iOS and Android codebase with direct native thread bridging and over-the-air (OTA) updates.",
        mention: "New Architecture · Fabric · TurboModules",
      },
      {
        id: "flutter",
        name: "Flutter 3 & Dart",
        logoId: "flutter",
        badge: "High Performance",
        description: "Impeller GPU rendering engine delivering identical pixel fidelity and 120fps fluid physics on all phones.",
        mention: "Impeller Engine · Dart 3.4",
      },
      {
        id: "apple",
        name: "Apple App Store",
        logoId: "apple",
        badge: "iOS Distribution",
        description: "End-to-end Apple Developer account setup, App Store review compliance, TestFlight & APNs push.",
        mention: "TestFlight · Apple Developer · APNs",
      },
      {
        id: "android",
        name: "Google Play Console",
        logoId: "android",
        badge: "Android Distribution",
        description: "AAB bundle signing, Play Asset Delivery, Firebase App Distribution, and automated release tracks.",
        mention: "AAB · Play Console · Crashlytics",
      },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: Server,
    headline: "High-Throughput Microservices & Scalable APIs",
    description: "Low-latency API architecture engineered to process millions of concurrent requests with sub-50ms p99 response times.",
    technologies: [
      {
        id: "nodejs",
        name: "Node.js & Express",
        logoId: "nodejs",
        badge: "Event-Driven Core",
        description: "Non-blocking asynchronous I/O with high concurrency, enterprise middleware, and cluster scaling.",
        mention: "Node 22 LTS · V8 Engine · Fastify",
      },
      {
        id: "python",
        name: "Python & FastAPI",
        logoId: "python",
        badge: "AI & Data APIs",
        description: "Asynchronous REST endpoints for AI/ML inference, automatic OpenAPI documentation, and background jobs.",
        mention: "FastAPI · Pydantic v2 · AsyncIO",
      },
      {
        id: "golang",
        name: "Go (Golang)",
        logoId: "golang",
        badge: "Ultra-Low Latency",
        description: "Compiled binary microservices with lightweight Goroutines for high-frequency telemetry and payment queues.",
        mention: "Go 1.23 · Goroutines · Microsecond P99",
      },
      {
        id: "graphql",
        name: "GraphQL & Apollo",
        logoId: "graphql",
        badge: "Unified Query Layer",
        description: "Strongly typed client-driven schema contracts with zero over-fetching and instant WebSocket subscriptions.",
        mention: "TypeGraphQL · Apollo · Subscriptions",
      },
    ],
  },
  {
    id: "database",
    name: "Database & Cache",
    icon: Database,
    headline: "ACID-Compliant Relational & High-Speed In-Memory Layers",
    description: "Fault-tolerant transactional data storage with sub-millisecond caching, automated failover, and zero data loss.",
    technologies: [
      {
        id: "postgresql",
        name: "PostgreSQL 16",
        logoId: "postgresql",
        badge: "Relational Foundation",
        description: "ACID compliance, JSONB document capabilities, full-text search, and pgvector for AI embeddings.",
        mention: "PostgreSQL 16 · JSONB · pgvector",
      },
      {
        id: "redis",
        name: "Redis 7 In-Memory",
        logoId: "redis",
        badge: "Microsecond Cache",
        description: "In-memory caching, distributed mutex locking, user session stores, and rate-limiting gateways.",
        mention: "Redis 7 · Pub/Sub · Distributed Locks",
      },
      {
        id: "supabase",
        name: "Supabase & Postgres",
        logoId: "supabase",
        badge: "Real-Time Backend",
        description: "Row-Level Security (RLS), real-time database listeners, edge functions, and automated storage.",
        mention: "Row Level Security · Real-Time Sync",
      },
      {
        id: "mongodb",
        name: "MongoDB Atlas",
        logoId: "mongodb",
        badge: "NoSQL Scale",
        description: "Flexible document databases with automatic horizontal sharding for catalogs, blogs, and audit logs.",
        mention: "MongoDB 7 · Change Streams · Atlas",
      },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    headline: "Edge-First Infrastructure & Automated CI/CD Pipelines",
    description: "Global cloud platforms with automated zero-downtime releases, containerized orchestration, and DDoS protection.",
    technologies: [
      {
        id: "aws",
        name: "Amazon Web Services",
        logoId: "aws",
        badge: "Enterprise Cloud",
        description: "AWS ECS container clusters, S3 asset buckets, RDS Aurora databases, and CloudFront global CDN.",
        mention: "ECS · S3 · CloudFront · RDS Aurora",
      },
      {
        id: "gcp",
        name: "Google Cloud (GCP)",
        logoId: "gcp",
        badge: "Cloud Infrastructure",
        description: "Google Kubernetes Engine (GKE), Cloud Run serverless, BigQuery data pipelines, and Vertex AI.",
        mention: "Cloud Run · GKE · BigQuery · Vertex AI",
      },
      {
        id: "cloudflare",
        name: "Cloudflare Edge",
        logoId: "cloudflare",
        badge: "Serverless Edge",
        description: "Global 300+ city edge network, instant SSL, zero cold-start edge workers, and DDoS shielding.",
        mention: "Workers · Edge CDN · WAF Security",
      },
      {
        id: "docker",
        name: "Docker Containers",
        logoId: "docker",
        badge: "Containerization",
        description: "Hermetic containerized environments ensuring complete parity between local development and production.",
        mention: "Docker Compose · Multi-Stage Builds",
      },
      {
        id: "github",
        name: "GitHub Actions CI/CD",
        logoId: "github",
        badge: "Automated Pipeline",
        description: "Automated linting, automated unit & integration testing, dependency scanning, and zero-downtime deploys.",
        mention: "CI/CD · Automated Test Runners · Secrets",
      },
    ],
  },
];

// ─── Main Component ──────────────────────────────────────────────────────────

export const AppDevTechStackInteractive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("frontend");
  const activeCategory = techCategories.find((c) => c.id === activeTab) || techCategories[0];
  const ActiveIcon = activeCategory.icon;

  return (
    <section className="py-20 lg:py-28" style={{ background: "#F2F2F7" }}>
      <Container size="wide">

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 style={{
            fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700,
            letterSpacing: "-0.025em", color: "#1d1d1f", lineHeight: 1.15,
            marginBottom: "10px",
          }}>
            Technologies We Use
          </h2>
          <p style={{ fontSize: "15px", color: "#86868b", maxWidth: "560px", margin: "0 auto", lineHeight: 1.55, fontWeight: 400 }}>
            We build your apps and websites using the world's most trusted, secure, and modern technologies—so your business runs fast, smooth, and reliably.
          </p>
        </div>

        {/* ── Apple Segmented Control Tabs ── */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-black/[0.06] border border-black/[0.06] gap-1 shadow-sm max-w-full">
            {techCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13.5px] font-bold transition-all duration-200 cursor-pointer select-none"
                  style={{
                    background: isSelected ? "#FFFFFF" : "transparent",
                    color: isSelected ? "#000000" : "rgba(60,60,67,0.65)",
                    boxShadow: isSelected ? "0 2px 10px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)" : "none",
                  }}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#007AFF]" : "opacity-60"}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Tab Panel (Apple Frosted White Card) ── */}
        <div
          className="rounded-[28px] bg-white border border-black/[0.08] p-6 sm:p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] space-y-8"
        >
          {/* Category Banner */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-[14px] bg-[#007AFF]/10 border border-[#007AFF]/15 text-[#007AFF] flex items-center justify-center shrink-0 shadow-sm">
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                  {activeCategory.headline}
                </h3>
                <p className="text-sm text-neutral-500 mt-1 max-w-2xl leading-relaxed font-normal">
                  {activeCategory.description}
                </p>
              </div>
            </div>
          </div>

          {/* ── Technologies Grid (Featuring Official Logos & Details) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCategory.technologies.map((tech) => (
              <div
                key={tech.id}
                style={{ fontFamily: "var(--font-karla), 'Karla', sans-serif" }}
                className="group flex flex-col justify-between p-6 rounded-[22px] bg-[#F8F8FA] hover:bg-white border border-black/[0.05] hover:border-black/[0.12] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 card-karla font-karla"
              >
                <div>
                  {/* Top Row: Official Logo Squircle + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-[14px] bg-white border border-black/[0.08] shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-2.5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      <TechLogo id={tech.logoId} />
                    </div>

                    <span className="px-2.5 py-1 rounded-full bg-black/[0.05] text-[11px] font-bold text-neutral-700 tracking-tight">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Tech Name */}
                  <h4 className="text-[17px] font-bold text-black tracking-tight leading-snug">
                    {tech.name}
                  </h4>

                  {/* Description */}
                  <p className="text-[13px] text-neutral-600 leading-relaxed mt-2 font-normal">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom Mention Pill */}
                <div className="pt-4 border-t border-black/[0.05] mt-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-medium text-neutral-500">
                    {tech.mention}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
};

export default AppDevTechStackInteractive;
