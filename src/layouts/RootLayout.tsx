import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModal } from "@/components/common/LeadModal";
import { MacOSSpotlightSearch } from "@/components/common/MacOSSpotlightSearch";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export const RootLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen text-[#0F0F0E]" style={{ background: "#F2F2F7", fontFamily: "var(--font-system)" }}>
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Global Interactive Overlays & Drawers */}
      <LeadModal />
      <MacOSSpotlightSearch />
    </div>
  );
};

export default RootLayout;
