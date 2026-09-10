import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";

// Core Pages
import HomePage from "@/pages/HomePage";
import ServicesPage from "@/pages/ServicesPage";
import DigitalMarketingPage from "@/pages/services/DigitalMarketingPage";
import CallingMessagingPage from "@/pages/services/CallingMessagingPage";
import DevelopmentPage from "@/pages/services/DevelopmentPage";
import ServiceDetailPage from "@/pages/services/ServiceDetailPage";
import SolutionsPage from "@/pages/SolutionsPage";
import AboutPage from "@/pages/AboutPage";
import HowWeWorkPage from "@/pages/HowWeWorkPage";
import IndustriesPage from "@/pages/IndustriesPage";
import WorkPage from "@/pages/WorkPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import EngagementPage from "@/pages/EngagementPage";
import FaqPage from "@/pages/faq/FaqPage";
import ContactPage from "@/pages/ContactPage";
import InsightsPage from "@/pages/InsightsPage";
import InsightDetailPage from "@/pages/InsightDetailPage";
import ThankYouPage from "@/pages/ThankYouPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import NotFoundPage from "@/pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // 1. Home
      {
        index: true,
        element: <HomePage />,
      },

      // 2. Services Hubs & Dedicated Pages
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/digital-marketing",
        element: <DigitalMarketingPage />,
      },
      {
        path: "services/calling-messaging",
        element: <CallingMessagingPage />,
      },
      {
        path: "services/development",
        element: <DevelopmentPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetailPage />,
      },

      // 3. Solutions
      {
        path: "solutions",
        element: <SolutionsPage />,
      },

      // 4. Company & Process
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "how-we-work",
        element: <HowWeWorkPage />,
      },
      {
        path: "industries",
        element: <IndustriesPage />,
      },
      {
        path: "engagement",
        element: <EngagementPage />,
      },

      // 5. Work & Case Studies
      {
        path: "work",
        element: <WorkPage />,
      },
      {
        path: "work/:slug",
        element: <CaseStudyPage />,
      },

      // 6. Insights & Articles
      {
        path: "insights",
        element: <InsightsPage />,
      },
      {
        path: "insights/:slug",
        element: <InsightDetailPage />,
      },

      // 7. FAQs & Contact
      {
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "thank-you",
        element: <ThankYouPage />,
      },

      // 8. Policies
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicyPage />,
      },

      // 9. Legacy Route Redirects
      {
        path: "digital-marketing",
        element: <Navigate to="/services/digital-marketing" replace />,
      },
      {
        path: "digital-marketing/seo",
        element: <Navigate to="/services/seo" replace />,
      },
      {
        path: "digital-marketing/local-seo",
        element: <Navigate to="/services/local-seo" replace />,
      },
      {
        path: "digital-marketing/google-ads",
        element: <Navigate to="/services/paid-search" replace />,
      },
      {
        path: "digital-marketing/social-media-marketing",
        element: <Navigate to="/services/social-media" replace />,
      },
      {
        path: "digital-marketing/content-marketing",
        element: <Navigate to="/services/content-marketing" replace />,
      },
      {
        path: "digital-marketing/conversion-rate-optimization",
        element: <Navigate to="/services/conversion-optimization" replace />,
      },
      {
        path: "digital-marketing/geo",
        element: <Navigate to="/services/ai-search-optimization" replace />,
      },
      {
        path: "digital-marketing/aio",
        element: <Navigate to="/services/ai-search-optimization" replace />,
      },
      {
        path: "digital-marketing/*",
        element: <Navigate to="/services/digital-marketing" replace />,
      },
      {
        path: "marketing",
        element: <Navigate to="/services/digital-marketing" replace />,
      },
      {
        path: "application-development",
        element: <Navigate to="/services/development" replace />,
      },
      {
        path: "application-development/*",
        element: <Navigate to="/services/development" replace />,
      },
      {
        path: "software-development",
        element: <Navigate to="/services/development" replace />,
      },
      {
        path: "software-development/*",
        element: <Navigate to="/services/development" replace />,
      },
      {
        path: "technology",
        element: <Navigate to="/services/development" replace />,
      },
      {
        path: "ai-communication",
        element: <Navigate to="/services/calling-messaging" replace />,
      },
      {
        path: "case-studies",
        element: <Navigate to="/work" replace />,
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
      {
        path: "locations/*",
        element: <Navigate to="/contact" replace />,
      },
      {
        path: "404",
        element: <NotFoundPage />,
      },

      // Catch-all
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
