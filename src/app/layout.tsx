import type { Metadata, Viewport } from "next";
import "@/styles/index.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientOverlays } from "@/components/layout/ClientOverlays";
import { JsonLd } from "@/components/seo/JsonLd";
import { SEO_CONFIG, SITE_URL } from "@/config/seo";
import { siteSchema } from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#0F0F0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Best Digital Marketing Agency in Namakkal & Karur | Real Result",
    template: "%s",
  },
  description: SEO_CONFIG.description,
  applicationName: SEO_CONFIG.siteName,
  authors: [{ name: SEO_CONFIG.siteName, url: `${SITE_URL}/` }],
  creator: SEO_CONFIG.siteName,
  publisher: SEO_CONFIG.siteName,
  formatDetection: { telephone: true, email: true, address: true },
  icons: {
    icon: [{ url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: SEO_CONFIG.locale,
    siteName: SEO_CONFIG.siteName,
    images: [{ url: SEO_CONFIG.ogImage, width: 1200, height: 630, alt: SEO_CONFIG.siteName }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@RealResult_in",
    creator: "@RealResult_in",
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
  alternates: {
    types: { "text/plain": "/llms.txt" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="flex flex-col min-h-screen text-[#0F0F0E] bg-white font-sans overflow-x-clip antialiased">
        <JsonLd data={siteSchema()} />
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <ClientOverlays />
      </body>
    </html>
  );
}
