import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";

// The Core Pages
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import DigitalMarketingHubPage from "@/pages/digital-marketing/DigitalMarketingHubPage";
import ApplicationDevelopmentPage from "@/pages/ApplicationDevelopmentPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 1. Home Page
      {
        index: true,
        element: <HomePage />,
      },

      // 2. All Services Page (12 Core Offerings)
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/*",
        element: <ServicesPage />,
      },

      // 3. Digital Marketing Page & Aliases
      {
        path: "digital-marketing",
        element: <DigitalMarketingHubPage />,
      },
      {
        path: "digital-marketing/*",
        element: <DigitalMarketingHubPage />,
      },
      {
        path: "marketing",
        element: <Navigate to="/digital-marketing" replace />,
      },

      // 3. Application Development Page & Aliases
      {
        path: "application-development",
        element: <ApplicationDevelopmentPage />,
      },
      {
        path: "application-development/*",
        element: <ApplicationDevelopmentPage />,
      },
      {
        path: "software-development",
        element: <Navigate to="/application-development" replace />,
      },
      {
        path: "software-development/*",
        element: <Navigate to="/application-development" replace />,
      },
      {
        path: "technology",
        element: <Navigate to="/application-development" replace />,
      },

      // 4. About Page
      {
        path: "about",
        element: <AboutPage />,
      },

      // 5. Contact Page
      {
        path: "contact",
        element: <ContactPage />,
      },

      // Redirects for legacy routes back to the 5 major pages
      {
        path: "case-studies",
        element: <Navigate to="/#pillars" replace />,
      },
      {
        path: "locations/*",
        element: <Navigate to="/contact" replace />,
      },
      {
        path: "faq",
        element: <Navigate to="/digital-marketing#faq" replace />,
      },
      {
        path: "industries",
        element: <Navigate to="/#pillars" replace />,
      },
      {
        path: "solutions",
        element: <Navigate to="/#pillars" replace />,
      },
      {
        path: "resources",
        element: <Navigate to="/digital-marketing" replace />,
      },
      {
        path: "ai-communication",
        element: <Navigate to="/application-development" replace />,
      },
      {
        path: "human-resources",
        element: <Navigate to="/about" replace />,
      },
      {
        path: "review",
        element: <Navigate to="/about" replace />,
      },
      {
        path: "reviews",
        element: <Navigate to="/about" replace />,
      },

      // 404 Catch-All
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
