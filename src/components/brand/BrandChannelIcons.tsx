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
 * Official Real Result WhatsApp Icon
 * The authentic WhatsApp speech bubble & handset symbol
 */
export const BrandWhatsAppIcon: React.FC<BrandIconProps> = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
