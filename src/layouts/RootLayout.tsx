import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModal } from "@/components/common/LeadModal";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export const RootLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen text-[#0F0F0E] bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Global Interactive Overlays & Floating Actions */}
      <LeadModal />
      <ScrollToTopButton />
    </div>
  );
};

export default RootLayout;

