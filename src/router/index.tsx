import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";

import HomePage from "@/pages/HomePage";

// Route-level code split pages for secondary routes
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("@/pages/services/ServiceDetailPage"));
const DigitalMarketingHubPage = lazy(() => import("@/pages/digital-marketing/DigitalMarketingHubPage"));
const ApplicationDevelopmentPage = lazy(() => import("@/pages/ApplicationDevelopmentPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const HealthcareIndustryPage = lazy(() => import("@/pages/industries/HealthcareIndustryPage"));
const IndustryDetailPage = lazy(() => import("@/pages/industries/IndustryDetailPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

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

      // 2. All Services Page & Detail Pages
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetailPage />,
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

      // 6. Industries Hub & Vertical Playbooks
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "industries/healthcare",
        element: <HealthcareIndustryPage />,
      },
      {
        path: "industries/:slug",
        element: <IndustryDetailPage />,
      },
      {
        path: "digital-marketing/healthcare",
        element: <HealthcareIndustryPage />,
      },

      // 7. Our Portfolio Page & Aliases
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "our-portfolio",
        element: <PortfolioPage />,
      },

      // Redirects for legacy routes back to the major pages
      {
        path: "case-studies",
        element: <Navigate to="/portfolio" replace />,
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
