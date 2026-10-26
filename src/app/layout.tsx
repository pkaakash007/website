import type { Metadata, Viewport } from "next";
import "@/styles/index.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ClientOverlays } from "@/components/layout/ClientOverlays";

export const viewport: Viewport = {
  themeColor: "#0F0F0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://realresult.in"),
  title: {
    default: "Real Result | Best Digital Marketing Agency in Tamil Nadu",
    template: "%s",
  },
  description: "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://realresult.in/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://realresult.in/",
    siteName: "Real Result Marketing",
    title: "Real Result | Best Digital Marketing Agency in Tamil Nadu",
    description: "Real Result is Tamil Nadu's premier digital marketing, SEO, Google Ads, and custom enterprise software development agency.",
    images: [
      {
        url: "https://realresult.in/brand/real-result-marketing-logo-tamil-nadu.png",
        width: 1200,
        height: 630,
        alt: "Real Result Marketing Tamil Nadu",
      },
    ],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen text-[#0F0F0E] bg-white font-sans overflow-x-clip antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ClientOverlays />
      </body>
    </html>
  );
}
