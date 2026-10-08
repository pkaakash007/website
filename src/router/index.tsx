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

// Regional Location Hubs & City Pages
const TamilNaduHubPage = lazy(() => import("@/pages/locations/TamilNaduHubPage"));
const NamakkalPage = lazy(() => import("@/pages/locations/NamakkalPage"));
const SalemPage = lazy(() => import("@/pages/locations/SalemPage"));
const ErodeHQPage = lazy(() => import("@/pages/locations/ErodeHQPage"));
const CoimbatorePage = lazy(() => import("@/pages/locations/CoimbatorePage"));
const ChennaiPage = lazy(() => import("@/pages/locations/ChennaiPage"));
const TiruppurPage = lazy(() => import("@/pages/locations/TiruppurPage"));
const MaduraiPage = lazy(() => import("@/pages/locations/MaduraiPage"));
const TrichyPage = lazy(() => import("@/pages/locations/TrichyPage"));
const TirunelveliPage = lazy(() => import("@/pages/locations/TirunelveliPage"));

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

      // 3. Digital Marketing Hub Page & Aliases
      {
        path: "digital-marketing",
        element: <DigitalMarketingHubPage />,
      },
      {
        path: "marketing",
        element: <Navigate to="/digital-marketing" replace />,
      },

      // 4. Application Development Page & Aliases
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

      // 5. About Page
      {
        path: "about",
        element: <AboutPage />,
      },

      // 6. Contact Page
      {
        path: "contact",
        element: <ContactPage />,
      },

      // 7. Industries Hub & Vertical Playbooks
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

      // 8. Regional Location Hubs & Top Ranking Target Pages
      {
        path: "locations",
        element: <Navigate to="/locations/tamil-nadu" replace />,
      },
      {
        path: "locations/tamil-nadu",
        element: <TamilNaduHubPage />,
      },
      {
        path: "locations/namakkal",
        element: <NamakkalPage />,
      },
      {
        path: "locations/salem",
        element: <SalemPage />,
      },
      {
        path: "locations/erode",
        element: <ErodeHQPage />,
      },
      {
        path: "locations/coimbatore",
        element: <CoimbatorePage />,
      },
      {
        path: "locations/chennai",
        element: <ChennaiPage />,
      },
      {
        path: "locations/tiruppur",
        element: <TiruppurPage />,
      },
      {
        path: "locations/madurai",
        element: <MaduraiPage />,
      },
      {
        path: "locations/trichy",
        element: <TrichyPage />,
      },
      {
        path: "locations/tirunelveli",
        element: <TirunelveliPage />,
      },

      // Fast location aliases & SEO redirects
      {
        path: "namakkal",
        element: <Navigate to="/locations/namakkal" replace />,
      },
      {
        path: "salem",
        element: <Navigate to="/locations/salem" replace />,
      },
      {
        path: "erode",
        element: <Navigate to="/locations/erode" replace />,
      },
      {
        path: "digital-marketing/namakkal",
        element: <Navigate to="/locations/namakkal" replace />,
      },
      {
        path: "digital-marketing/salem",
        element: <Navigate to="/locations/salem" replace />,
      },
      {
        path: "digital-marketing/erode",
        element: <Navigate to="/locations/erode" replace />,
      },

      // 9. Our Portfolio Page & Aliases
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "our-portfolio",
        element: <PortfolioPage />,
      },

      // 10. Redirects for legacy routes back to the major pages
      {
        path: "case-studies",
        element: <Navigate to="/portfolio" replace />,
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
