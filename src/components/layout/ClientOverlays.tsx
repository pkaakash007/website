"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LeadModal = dynamic(
  () => import("@/components/common/LeadModal").then((m) => ({ default: m.LeadModal })),
  { ssr: false }
);

const ScrollToTopButton = dynamic(
  () => import("@/components/common/ScrollToTopButton").then((m) => ({ default: m.ScrollToTopButton })),
  { ssr: false }
);

export const ClientOverlays: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <LeadModal />
      <ScrollToTopButton />
    </>
  );
};

export default ClientOverlays;
