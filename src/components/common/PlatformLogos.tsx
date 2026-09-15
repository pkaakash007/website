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
 * Official Apple App Store vector logo
 */
export const AppStoreLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Apple App Store"
  >
    <rect width="24" height="24" rx="5.5" fill="#007AFF" />
    <path
      d="M8.8086 14.9194l6.1107-11.0368c.0837-.1513.1682-.302.2437-.4584.0685-.142.1267-.2854.1646-.4403.0803-.3259.0588-.6656-.066-.9767-.1238-.3095-.3417-.5678-.6201-.7355a1.4175 1.4175 0 0 0-.921-.1924c-.3207.043-.6135.1935-.8443.4288-.1094.1118-.1996.2361-.2832.369-.092.1463-.175.2979-.259.4492l-.3864.6979-.3865-.6979c-.0837-.1515-.1667-.303-.2587-.4492-.0837-.1329-.1739-.2572-.2835-.369-.2305-.2353-.5233-.3857-.844-.429a1.4181 1.4181 0 0 0-.921.1926c-.2784.1677-.4964.426-.6203.7355-.1246.311-.1461.6508-.066.9767.038.155.0962.2984.1648.4403.0753.1564.1598.307.2437.4584l1.248 2.2543-4.8625 8.7825H2.0295c-.1676 0-.3351-.0007-.5026.0092-.1522.009-.3004.0284-.448.0714-.3108.0906-.5822.2798-.7783.548-.195.2665-.3006.5929-.3006.9279 0 .3352.1057.6612.3006.9277.196.2683.4675.4575.7782.548.1477.043.296.0623.4481.0715.1675.01.335.009.5026.009h13.0974c.0171-.0357.059-.1294.1-.2697.415-1.4151-.6156-2.843-2.0347-2.843zM3.113 18.5418l-.7922 1.5008c-.0818.1553-.1644.31-.2384.4705-.067.1458-.124.293-.1611.452-.0785.3346-.0576.6834.0645 1.0029.1212.3175.3346.583.607.7549.2727.172.5891.2416.9013.1975.3139-.044.6005-.1986.8263-.4402.1072-.1148.1954-.2424.2772-.3787.0902-.1503.1714-.3059.2535-.4612L6 19.4636c-.0896-.149-.9473-1.4704-2.887-.9218m20.5861-3.0056a1.4707 1.4707 0 0 0-.779-.5407c-.1476-.0425-.2961-.0616-.4483-.0705-.1678-.0099-.3352-.0091-.503-.0091H18.648l-4.3891-7.817c-.6655.7005-.9632 1.485-1.0773 2.1976-.1655 1.0333.0367 2.0934.546 3.0004l5.2741 9.3933c.084.1494.167.299.2591.4435.0837.131.1739.2537.2836.364.231.2323.5238.3809.8449.4232.3192.0424.643-.0244.9217-.1899.2784-.1653.4968-.4204.621-.7257.1246-.3072.146-.6425.0658-.9641-.0381-.1529-.0962-.2945-.165-.4346-.0753-.1543-.1598-.303-.2438-.4524l-1.216-2.1662h1.596c.1677 0 .3351.0009.5029-.009.1522-.009.3007-.028.4483-.0705a1.4707 1.4707 0 0 0 .779-.5407A1.5386 1.5386 0 0 0 24 16.452a1.539 1.539 0 0 0-.3009-.9158Z"
      fill="#FFFFFF"
    />
  </svg>
);

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
 * Official Android vector logo (Android robot head)
 */
export const AndroidLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Android"
  >
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4111 13.8533 8 12 8s-3.5902.4111-5.1368 1.15l-2.0223-3.503a.416.416 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.2334.3433 14.869.0007 19.1672h23.9986c-.3426-4.2982-2.6882-7.9338-6.1173-9.8458" />
  </svg>
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
 * Official Instagram vector logo with authentic gradient and camera silhouette
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
      <radialGradient id="official-ig-grad" cx="20%" cy="105%" r="120%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="15%" stopColor="#fdf497" />
        <stop offset="35%" stopColor="#fd5949" />
        <stop offset="50%" stopColor="#d6249f" />
        <stop offset="85%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#official-ig-grad)" />
    <rect x="5.5" y="5.5" width="13" height="13" rx="3.8" stroke="white" strokeWidth="1.6" fill="none" />
    <circle cx="12" cy="12" r="3.2" stroke="white" strokeWidth="1.6" fill="none" />
    <circle cx="15.8" cy="8.2" r="0.9" fill="white" />
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
    <rect width="24" height="24" rx="5.5" fill="#FF0000" />
    <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#FFFFFF" />
  </svg>
);

/**
 * Official Google Multi-Color 'G' Logo
 */
export const GoogleLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

/**
 * Official Google Ads vector logo
 */
export const GoogleAdsLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Google Ads"
  >
    <path
      d="M4.2 15.3L9.9 5.4c.8-1.4 2.6-1.9 4-1.1l.3.2c1.4.8 1.9 2.6 1.1 4L9.5 18.4c-.8 1.4-2.6 1.9-4 1.1l-.3-.2c-1.4-.8-1.9-2.6-1-4z"
      fill="#FBBC04"
    />
    <path
      d="M19.8 15.3L14.1 5.4c-.8-1.4-2.6-1.9-4-1.1l-.3.2c-1.4.8-1.9 2.6-1.1 4l5.7 9.9c.8 1.4 2.6 1.9 4 1.1l.3-.2c1.4-.8 1.9-2.6 1.1-4z"
      fill="#4285F4"
    />
    <circle cx="6.8" cy="17.2" r="2.8" fill="#34A853" />
  </svg>
);

/**
 * Official Facebook vector logo
 */
export const FacebookLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Facebook"
  >
    <circle cx="12" cy="12" r="12" fill="#1877F2" />
    <path
      d="M15.5 12h-2.5v8h-3.3v-8H7.5v-2.8h2.2V7.4c0-2.2 1.3-3.4 3.3-3.4 1 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4v1.6h2.5l-.4 2.8z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Official WhatsApp vector logo
 */
export const WhatsAppLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="WhatsApp"
  >
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path
      d="M17.5 14.7c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.95-1.2-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Official LinkedIn vector logo
 */
export const LinkedInLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="LinkedIn"
  >
    <rect width="24" height="24" rx="5" fill="#0A66C2" />
    <path
      d="M7.12 6.5C7.12 7.33 6.45 8 5.62 8C4.8 8 4.13 7.33 4.13 6.5C4.13 5.67 4.8 5 5.62 5C6.45 5 7.12 5.67 7.12 6.5ZM4.25 9.25H7V19H4.25V9.25ZM11.13 9.25H13.77V10.58H13.81C14.18 9.88 15.08 9.14 16.42 9.14C19.22 9.14 19.74 10.98 19.74 13.38V19H17V14.19C17 13.04 16.98 11.57 15.4 11.57C13.8 11.57 13.55 12.82 13.55 14.1V19H10.8V9.25H11.13Z"
      fill="#FFFFFF"
    />
  </svg>
);

/**
 * Official Prime Video / Amazon App Logo (Crisp Vector SVG)
 */
export const PrimeVideoLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Prime Video"
  >
    <rect width="24" height="24" rx="5.5" fill="#0073D1" />
    {/* "prime" */}
    <path
      d="M5.5 7.2h2c.8 0 1.4.2 1.8.6.4.4.6.9.6 1.5s-.2 1.1-.6 1.5c-.4.4-1 .6-1.8.6H6.7V13H5.5V7.2zm1.2 3.2h.7c.4 0 .7-.1.9-.3.2-.2.3-.5.3-.8s-.1-.6-.3-.8c-.2-.2-.5-.3-.9-.3h-.7v2.2zM10.8 9.2h1.1v.6c.2-.2.4-.4.7-.5.3-.1.6-.2.9-.2v1.2c-.3 0-.6.1-.8.2-.2.1-.4.3-.5.6v2h-1.4V9.2zM15 7.8c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.1-.1.3-.2.5-.2s.4.1.5.2c.1.1.2.3.2.5s-.1.4-.2.5c-.1.1-.3.2-.5.2zm-.6 1.4h1.2V13h-1.2V9.2z"
      fill="#FFFFFF"
    />
    {/* "video" */}
    <path
      d="M5.8 14.8l1.1 3.2h1.2l1.1-3.2H8l-.6 2.1-.6-2.1H5.8zm3.9-.8c-.2 0-.3 0-.4-.1-.1-.1-.2-.2-.2-.4s.1-.3.2-.4c.1-.1.2-.1.4-.1s.3 0 .4.1c.1.1.2.2.2.4s-.1.3-.2.4c-.1.1-.2.1-.4.1zm-.6 1h1.1V18H9.1V15zm2.1 0h1.1v.5c.2-.2.4-.3.6-.4.2-.1.5-.2.8-.2.7 0 1.3.3 1.7.8.4.5.6 1.2.6 2s-.2 1.5-.6 2c-.4.5-1 .8-1.7.8-.3 0-.6-.1-.8-.2-.2-.1-.4-.3-.6-.5V20h-1.1V15zm2.2 4c.4 0 .7-.1.9-.4.2-.3.3-.8.3-1.4s-.1-1.1-.3-1.4c-.2-.3-.5-.4-.9-.4s-.7.1-.9.4c-.2.3-.3.8-.3 1.4s.1 1.1.3 1.4c.2.3.5.4.9.4z"
      fill="#FFFFFF"
    />
    {/* Prime Smile curve */}
    <path
      d="M5.2 20.8c3.2 1.8 7.5 2 11.2.6.4-.1.7.3.5.7-.3.5-.7 1-1.2 1.3-.4.2-.8.3-1.1.2-3.4-1.2-7.2-1.1-10.4.3-.3.1-.7 0-.9-.3-.2-.4 0-.7.4-.9l1.5-.9z"
      fill="#FF9900"
    />
  </svg>
);

export const AmazonLogo = PrimeVideoLogo;

/**
 * Official JioHotstar Logo (Exact 8-point silver star on gradient background)
 */
export const JioHotstarLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="JioHotstar"
  >
    <defs>
      <linearGradient id="jiohotstar-bg-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0084FF" />
        <stop offset="45%" stopColor="#7028FF" />
        <stop offset="100%" stopColor="#FF007A" />
      </linearGradient>
      <linearGradient id="jio-star-grad-1" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="50%" stopColor="#EDEDED" />
        <stop offset="100%" stopColor="#D5D5D5" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#jiohotstar-bg-grad)" />
    {/* 8-Point Faceted JioHotstar Star */}
    <path
      d="M12.3 3.8l1.4 4.5 4.8-.8-3.4 3.5 3.9 3.2-4.9-.4-1.6 4.7-1.7-4.6-4.9.2 3.7-3.4-3.5-3.6 4.9.7 1.7-4z"
      fill="url(#jio-star-grad-1)"
      stroke="#FCE074"
      strokeWidth="0.4"
      strokeLinejoin="round"
    />
    <circle cx="12.2" cy="11.8" r="1.4" fill="#FFFFFF" opacity="0.9" />
  </svg>
);

export const HotstarLogo = JioHotstarLogo;

/**
 * Official Spotify Logo (Vibrant Green circle with White waves)
 */
export const SpotifyLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Spotify"
  >
    <circle cx="12" cy="12" r="12" fill="#1ED760" />
    <path
      d="M16.9 15.3c-.2 0-.37-.07-.52-.19-1.92-1.18-4.34-1.45-7.18-.8-.36.08-.72-.14-.81-.5-.08-.36.14-.72.5-.81 3.12-.71 5.81-.4 7.99.94.31.19.41.6.22.91-.12.28-.38.45-.66.45zm1.18-2.61c-.24 0-.47-.09-.65-.24-2.2-1.35-5.56-1.74-8.17-.95-.44.13-.91-.12-1.04-.56-.13-.44.12-.91.56-1.04 2.99-.91 6.72-.47 9.27 1.1.39.24.51.75.27 1.14-.15.34-.48.55-.84.55zm.13-2.73c-.28 0-.56-.11-.77-.29-2.6-1.55-6.9-1.69-9.39-.93-.53.16-1.09-.14-1.25-.66-.16-.53.14-1.09.66-1.25 2.94-.89 7.69-.72 10.7 1.07.47.28.62.89.34 1.36-.18.44-.58.7-.99.7z"
      fill="#FFFFFF"
    />
  </svg>
);
