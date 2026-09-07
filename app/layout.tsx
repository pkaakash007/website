import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadModal from "@/components/shared/LeadModal";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AIAssistant from "@/components/shared/AIAssistant";
import { REAL_RESULT_CONFIG } from "@/lib/config";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Real Result | Marketing That Moves — Premium Marketing, Media & Growth",
  description:
    "Real Result is a premium modern marketing, media and growth company that also provides technology, AI-powered communication and human-resource solutions.",
  keywords: [
    "Marketing That Moves",
    "Real Result",
    "Performance Marketing",
    "Omnichannel Media Buying",
    "Television Advertising",
    "Outdoor Advertising OOH DOOH",
    "High-Intent SEO",
    "Paid Search Google PPC",
    "Paid Social Advertising",
    "Regional Language AI Telecalling",
    "Automated Bulk IVR",
    "WhatsApp Business API",
    "Custom Software Engineering",
    "Executive Search",
  ],
  authors: [{ name: "Real Result" }],
  creator: "Real Result",
  publisher: "Real Result",
  metadataBase: new URL("https://realresult.framer.website/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://realresult.framer.website/",
    title: "Real Result | Marketing That Moves",
    description:
      "Make your brand impossible to ignore. Strategy, media, performance and intelligent communication built to move businesses forward.",
    siteName: "Real Result",
    images: [
      {
        url: "/brand/realresult-logo.jpeg",
        width: 1038,
        height: 884,
        alt: "Real Result Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Result | Marketing That Moves",
    description:
      "Make your brand impossible to ignore. Strategy, media, performance and intelligent communication built to move businesses forward.",
    images: ["/brand/realresult-logo.jpeg"],
  },
  icons: {
    icon: "/brand/realresult-logo.jpeg",
    apple: "/brand/realresult-logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Real Result",
    tagline: "Marketing That Moves",
    url: "https://realresult.framer.website",
    logo: "https://realresult.framer.website/brand/realresult-logo.jpeg",
    description:
      "A premium modern marketing, media and growth company that also provides technology, AI-powered communication and human-resource solutions.",
    sameAs: [
      "https://www.linkedin.com/company/realresult",
      "https://twitter.com/realresult",
    ],
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing & Media Buying",
          description: "Digital performance, television broadcast, radio, outdoor DOOH, cinema, and omnichannel attribution.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Communication & Regional Voice Telephony",
          description: "AI telecalling in regional languages, automated bulk IVR, WhatsApp API, and cloud telephony.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technology & Software Development",
          description: "Custom software, SaaS architecture, web & mobile applications, AI/ML, and cloud engineering.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Human Resources & Talent Capital",
          description: "Executive search, specialized talent acquisition, and workforce management.",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-primary font-sans antialiased selection:bg-charcoal selection:text-gold">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <LeadModal />
        <WhatsAppButton />
        <AIAssistant />
      </body>
    </html>
  );
}
