import React from "react";

export interface LogoProps {
  className?: string;
}

/**
 * Official Apple vector logo (silhouette with leaf & bite mark)
 */
export const AppleLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Apple"
  >
    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
  </svg>
);

export const IOSLogo = AppleLogo;
export const IosLogo = AppleLogo;

/**
 * Official Apple / iOS Image logo with transparent background
 */
export const AppleImageLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <img
    src="/brand/apple-logo.png"
    alt="Apple iOS"
    className={`object-contain inline-block shrink-0 ${className}`}
    loading="lazy"
    width="181"
    height="206"
  />
);

export const IOSImageLogo = AppleImageLogo;

/**
 * Official Android 3D Head vector logo (from developer.android.com/static/images/brand/android-head_3D.svg)
 */
export const AndroidLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <img
    src="/brand/android-head_3D.svg"
    alt="Android"
    className={`object-contain inline-block shrink-0 ${className}`}
    loading="lazy"
    width="430"
    height="252"
  />
);

export const Android3DLogo = AndroidLogo;

/**
 * Official Google Play vector logo
 */
export const GooglePlayLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google Play"
  >
    <path
      d="M3.609 1.814L13.793 12 3.61 22.186A2.298 2.298 0 0 1 3 20.612V3.388c0-.626.23-1.2.609-1.574z"
      fill="#00D3FE"
    />
    <path
      d="M17.18 8.614l-3.387 3.386L3.61 1.814c.338-.337.828-.544 1.39-.544.512 0 1.054.17 1.704.544l10.476 6.8z"
      fill="#00F076"
    />
    <path
      d="M13.793 12l3.387 3.386-10.476 6.8c-.65.374-1.192.544-1.704.544-.562 0-1.052-.207-1.39-.544L13.793 12z"
      fill="#FF3A44"
    />
    <path
      d="M20.57 10.814l-3.39-2.2-3.387 3.386 3.387 3.386 3.39-2.2c1.173-.76 1.173-1.612 0-2.372z"
      fill="#FFC400"
    />
  </svg>
);

/**
 * Official Instagram vector logo with rich gradient
 */
export const InstagramLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Instagram"
  >
    <defs>
      <radialGradient id="platform-ig-grad" cx="20%" cy="105%" r="120%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="15%" stopColor="#fdf497" />
        <stop offset="35%" stopColor="#fd5949" />
        <stop offset="50%" stopColor="#d6249f" />
        <stop offset="85%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#platform-ig-grad)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" fill="none" />
    <circle cx="15.8" cy="8.2" r="0.8" fill="white" />
  </svg>
);

/**
 * Official YouTube vector logo
 */
export const YouTubeLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="YouTube"
  >
    <rect width="24" height="24" rx="6" fill="#FF0000" />
    <path d="M16 12L10 8.5V15.5L16 12Z" fill="white" />
  </svg>
);
