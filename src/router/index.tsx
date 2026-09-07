import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";

// Route Pages
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import MarketingPage from "@/pages/MarketingPage";
import TechnologyPage from "@/pages/TechnologyPage";
import AICommunicationPage from "@/pages/AICommunicationPage";
import HumanResourcesPage from "@/pages/HumanResourcesPage";
import IndustriesPage from "@/pages/IndustriesPage";
import InsightsPage from "@/pages/InsightsPage";
import SolutionsPage from "@/pages/SolutionsPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "marketing",
        element: <MarketingPage />,
      },
      {
        path: "technology",
        element: <TechnologyPage />,
      },
      {
        path: "ai-communication",
        element: <AICommunicationPage />,
      },
      {
        path: "human-resources",
        element: <HumanResourcesPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "insights",
        element: <InsightsPage />,
      },
      {
        path: "solutions",
        element: <SolutionsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
