import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";

// Lazy-load global interactive overlays to keep critical render path minimal
const LeadModal = React.lazy(() =>
  import("@/components/common/LeadModal").then((m) => ({ default: m.LeadModal }))
);
const ScrollToTopButton = React.lazy(() =>
  import("@/components/common/ScrollToTopButton").then((m) => ({ default: m.ScrollToTopButton }))
);

const RouteFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center" aria-busy="true" aria-label="Loading page content">
    <div className="w-8 h-8 border-2 border-neutral-200 border-t-[#C5A059] rounded-full animate-spin" />
  </div>
);

export const RootLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen text-[#0F0F0E] bg-white font-sans overflow-x-clip">
      <Header />
      <main className="flex-grow">
        <ErrorBoundary>
          <React.Suspense fallback={<RouteFallback />}>
            <Outlet />
          </React.Suspense>
        </ErrorBoundary>
      </main>
      <Footer />

      {/* Global Interactive Overlays & Floating Actions */}
      <React.Suspense fallback={null}>
        <LeadModal />
        <ScrollToTopButton />
      </React.Suspense>
    </div>
  );
};

export default RootLayout;

