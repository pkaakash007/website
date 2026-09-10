import React from "react";

export interface BrandIconProps {
  className?: string;
  size?: number;
}

/**
 * Bespoke Real Result Corporate Headquarters Icon
 * Custom architectural monolith with gold location pin & upward arrow
 */
export const BrandHQIcon: React.FC<BrandIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="hq-gold" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5D061" />
        <stop offset="0.5" stopColor="#D4A038" />
        <stop offset="1" stopColor="#A3751D" />
      </linearGradient>
      <linearGradient id="hq-white" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>
    {/* Base Foundation Platform */}
    <path
      d="M3 20.5H21M6 20.5V10.5L12 5.5L18 10.5V20.5"
      stroke="url(#hq-white)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Center Gateway Arch */}
    <path
      d="M10 20.5V14.5C10 13.9477 10.4477 13.5 11 13.5H13C13.5523 13.5 14 13.9477 14 14.5V20.5"
      stroke="url(#hq-white)"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    {/* Real Result Brand Upward Arrow Monolith inside roof */}
    <path
      d="M12 4L8.5 7.5H10.5V10.5H13.5V7.5H15.5L12 4Z"
      fill="url(#hq-gold)"
    />
    {/* Coordinate Pin Accent */}
    <circle cx="12" cy="10" r="1.5" fill="#FFFFFF" />
  </svg>
);

/**
 * Bespoke Real Result Direct Telephone Icon
 * Modern communication receiver with radiating gold soundwaves
 */
export const BrandPhoneIcon: React.FC<BrandIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="phone-gold" x1="12" y1="3" x2="22" y2="13" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5D061" />
        <stop offset="1" stopColor="#C59328" />
      </linearGradient>
      <linearGradient id="phone-body" x1="3" y1="5" x2="19" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#CBD5E1" />
      </linearGradient>
    </defs>
    {/* Modern Handset Contour */}
    <path
      d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
      fill="url(#phone-body)"
    />
    {/* Radiant Acoustic Wave 1 */}
    <path
      d="M14 3.5C16.8 4.5 18.5 6.2 19.5 9"
      stroke="url(#phone-gold)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Radiant Acoustic Wave 2 */}
    <path
      d="M16.5 1C20.5 2.5 22.5 4.5 23.5 8.5"
      stroke="url(#phone-gold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="1 1"
    />
    {/* Dynamic Connection Pulse Dot */}
    <circle cx="12" cy="5" r="1.5" fill="#F5D061" />
  </svg>
);

/**
 * Bespoke Real Result Priority Email Icon
 * Secured correspondence envelope featuring Real Result upward chevron seal
 */
export const BrandEmailIcon: React.FC<BrandIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="mail-gold" x1="6" y1="4" x2="18" y2="16" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5D061" />
        <stop offset="1" stopColor="#C59328" />
      </linearGradient>
      <linearGradient id="mail-white" x1="2" y1="5" x2="22" y2="19" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>
    {/* Outer Envelope Casing */}
    <rect
      x="2.5"
      y="5"
      width="19"
      height="14"
      rx="2.5"
      stroke="url(#mail-white)"
      strokeWidth="1.6"
    />
    {/* Envelope Flap Crease */}
    <path
      d="M3 6.5L10.6 12.2C11.43 12.82 12.57 12.82 13.4 12.2L21 6.5"
      stroke="url(#mail-white)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Real Result Brand Chevron / Gold Seal */}
    <path
      d="M12 9.5L9.5 12H11V15H13V12H14.5L12 9.5Z"
      fill="url(#mail-gold)"
    />
  </svg>
);

/**
 * Bespoke Real Result WhatsApp Desk Icon
 * Emerald liquid glass speech node with active connectivity indicator
 */
export const BrandWhatsAppIcon: React.FC<BrandIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="wa-emerald" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#25D366" />
        <stop offset="1" stopColor="#128C7E" />
      </linearGradient>
    </defs>
    {/* Chat Bubble Body */}
    <path
      d="M20.5 11.5C20.5 16.47 16.47 20.5 11.5 20.5C9.94 20.5 8.47 20.1 7.19 19.4L3.5 20.5L4.63 16.91C3.91 15.31 3.5 13.46 3.5 11.5C3.5 6.53 7.53 2.5 12.5 2.5C17.47 2.5 21.5 6.53 21.5 11.5H20.5Z"
      fill="url(#wa-emerald)"
    />
    {/* Inside Chat Wave Lines */}
    <path
      d="M8.5 10H15.5M8.5 13H13"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Active Live Pulse Ping */}
    <circle cx="18" cy="6" r="3" fill="#3DDC84" stroke="#0A192F" strokeWidth="1.5" />
  </svg>
);

/**
 * Bespoke Real Result Enterprise Turnaround Icon
 * High-precision SLA chronometer with rotating speed indicator & gold ticks
 */
export const BrandTurnaroundIcon: React.FC<BrandIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="clock-gold" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F5D061" />
        <stop offset="0.6" stopColor="#D4A038" />
        <stop offset="1" stopColor="#A3751D" />
      </linearGradient>
      <linearGradient id="clock-white" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E2E8F0" />
      </linearGradient>
    </defs>
    {/* Outer Gauge Rim */}
    <circle
      cx="12"
      cy="12"
      r="9"
      stroke="url(#clock-white)"
      strokeWidth="1.6"
      strokeDasharray="50 5"
    />
    {/* Top Stopwatch Push Trigger */}
    <path d="M10 2H14M12 2V4" stroke="url(#clock-gold)" strokeWidth="1.6" strokeLinecap="round" />
    {/* Precision Fast-Forward Dial Hands (indicating 24-48h rapid turnaround) */}
    <path
      d="M12 12L15.5 8.5M12 12V7"
      stroke="url(#clock-gold)"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Center Pivot Jewel */}
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
  </svg>
);
