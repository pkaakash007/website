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

/**
 * Official Google Ads vector logo
 */
export const GoogleAdsLogo: React.FC<LogoProps> = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid meet"
    aria-label="Google Ads"
  >
    <path
      d="M5.888 166.405L90.88 20.9C101.676 27.256 156.116 57.384 164.908 63.114L79.916 208.627C70.621 220.907 -5.888 185.04 5.888 166.396V166.405Z"
      fill="#FBBC04"
    />
    <path
      d="M250.084 166.402L165.092 20.906C153.21 1.132 127.619 -6.054 106.601 5.625C85.582 17.304 79.182 42.462 91.064 63.119L176.056 208.633C187.938 228.398 213.529 235.584 234.548 223.905C254.648 212.226 261.966 186.176 250.084 166.419V166.402Z"
      fill="#4285F4"
    />
    <ellipse cx="42.664" cy="187.924" rx="42.664" ry="41.604" fill="#34A853" />
  </svg>
);

