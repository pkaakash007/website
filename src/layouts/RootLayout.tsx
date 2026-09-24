import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModal } from "@/components/common/LeadModal";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const RouteFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center" aria-busy="true" aria-label="Loading page content">
    <div className="w-8 h-8 border-2 border-neutral-200 border-t-[#C5A059] rounded-full animate-spin" />
  </div>
);

export const RootLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen text-[#0F0F0E] bg-white font-sans overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <React.Suspense fallback={<RouteFallback />}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />

      {/* Global Interactive Overlays & Floating Actions */}
      <LeadModal />
      <ScrollToTopButton />
    </div>
  );
};

export default RootLayout;

