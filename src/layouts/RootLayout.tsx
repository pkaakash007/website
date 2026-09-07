import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadModal } from "@/components/common/LeadModal";
import { WhatsAppButton } from "@/components/feedback/WhatsAppButton";
import { AIAssistant } from "@/components/feedback/AIAssistant";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export const RootLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen bg-canvas text-primary">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

      {/* Global Interactive Overlays & Drawers */}
      <LeadModal />
      <WhatsAppButton />
      <AIAssistant />
    </div>
  );
};

export default RootLayout;
