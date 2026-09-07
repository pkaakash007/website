import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";

// Core Pages
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";
import IndustriesPage from "@/pages/IndustriesPage";
import SolutionsPage from "@/pages/SolutionsPage";
import HumanResourcesPage from "@/pages/HumanResourcesPage";
import AICommunicationPage from "@/pages/AICommunicationPage";

// Digital Marketing Hub & Clusters
import DigitalMarketingHubPage from "@/pages/digital-marketing/DigitalMarketingHubPage";
import SEOPage from "@/pages/digital-marketing/SEOPage";
import LocalSEOPage from "@/pages/digital-marketing/LocalSEOPage";
import GEOPage from "@/pages/digital-marketing/GEOPage";
import AIOPage from "@/pages/digital-marketing/AIOPage";
import GoogleAdsPage from "@/pages/digital-marketing/GoogleAdsPage";
import SocialMediaPage from "@/pages/digital-marketing/SocialMediaPage";
import ContentMarketingPage from "@/pages/digital-marketing/ContentMarketingPage";
import CROPage from "@/pages/digital-marketing/CROPage";

// Software Development Hub & Clusters
import SoftwareHubPage from "@/pages/software-development/SoftwareHubPage";
import WebDevelopmentPage from "@/pages/software-development/WebDevelopmentPage";
import MobileAppPage from "@/pages/software-development/MobileAppPage";
import CustomSoftwarePage from "@/pages/software-development/CustomSoftwarePage";
import SaaSDevelopmentPage from "@/pages/software-development/SaaSDevelopmentPage";
import AIDevelopmentPage from "@/pages/software-development/AIDevelopmentPage";

// Tamil Nadu Location Clusters
import TamilNaduHubPage from "@/pages/locations/TamilNaduHubPage";
import ErodeHQPage from "@/pages/locations/ErodeHQPage";
import CoimbatorePage from "@/pages/locations/CoimbatorePage";
import ChennaiPage from "@/pages/locations/ChennaiPage";
import TiruppurPage from "@/pages/locations/TiruppurPage";
import SalemPage from "@/pages/locations/SalemPage";
import MaduraiPage from "@/pages/locations/MaduraiPage";
import TrichyPage from "@/pages/locations/TrichyPage";
import TirunelveliPage from "@/pages/locations/TirunelveliPage";

// Authority & Resource Pages
import CaseStudiesHubPage from "@/pages/case-studies/CaseStudiesHubPage";
import ResourcesHubPage from "@/pages/resources/ResourcesHubPage";
import FAQHubPage from "@/pages/faq/FAQHubPage";

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
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "solutions",
        element: <SolutionsPage />,
      },
      {
        path: "human-resources",
        element: <HumanResourcesPage />,
      },
      {
        path: "ai-communication",
        element: <AICommunicationPage />,
      },

      // Authority & Hubs
      {
        path: "case-studies",
        element: <CaseStudiesHubPage />,
      },
      {
        path: "resources",
        element: <ResourcesHubPage />,
      },
      {
        path: "faq",
        element: <FAQHubPage />,
      },

      // Digital Marketing Pillar & Clusters
      {
        path: "digital-marketing",
        element: <DigitalMarketingHubPage />,
      },
      {
        path: "digital-marketing/seo",
        element: <SEOPage />,
      },
      {
        path: "digital-marketing/local-seo",
        element: <LocalSEOPage />,
      },
      {
        path: "digital-marketing/geo",
        element: <GEOPage />,
      },
      {
        path: "digital-marketing/aio",
        element: <AIOPage />,
      },
      {
        path: "digital-marketing/google-ads",
        element: <GoogleAdsPage />,
      },
      {
        path: "digital-marketing/social-media-marketing",
        element: <SocialMediaPage />,
      },
      {
        path: "digital-marketing/content-marketing",
        element: <ContentMarketingPage />,
      },
      {
        path: "digital-marketing/conversion-rate-optimization",
        element: <CROPage />,
      },
      // Backward compatibility redirect from /marketing
      {
        path: "marketing",
        element: <Navigate to="/digital-marketing" replace />,
      },

      // Software Development Pillar & Clusters
      {
        path: "software-development",
        element: <SoftwareHubPage />,
      },
      {
        path: "software-development/web-development",
        element: <WebDevelopmentPage />,
      },
      {
        path: "software-development/mobile-app-development",
        element: <MobileAppPage />,
      },
      {
        path: "software-development/custom-software-development",
        element: <CustomSoftwarePage />,
      },
      {
        path: "software-development/saas-development",
        element: <SaaSDevelopmentPage />,
      },
      {
        path: "software-development/ai-development",
        element: <AIDevelopmentPage />,
      },
      // Backward compatibility redirect from /technology
      {
        path: "technology",
        element: <Navigate to="/software-development" replace />,
      },

      // Tamil Nadu Location Footprint
      {
        path: "locations",
        element: <Navigate to="/locations/tamil-nadu" replace />,
      },
      {
        path: "locations/tamil-nadu",
        element: <TamilNaduHubPage />,
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
        path: "locations/salem",
        element: <SalemPage />,
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

      // 404 Catch-all
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
