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

// Digital Marketing Sub-Pages (SEO critical pages)
const SEOPage = lazy(() => import("@/pages/digital-marketing/SEOPage"));
const GoogleAdsPage = lazy(() => import("@/pages/digital-marketing/GoogleAdsPage"));
const SocialMediaPage = lazy(() => import("@/pages/digital-marketing/SocialMediaPage"));
const ContentMarketingPage = lazy(() => import("@/pages/digital-marketing/ContentMarketingPage"));
const LocalSEOPage = lazy(() => import("@/pages/digital-marketing/LocalSEOPage"));
const AIOPage = lazy(() => import("@/pages/digital-marketing/AIOPage"));
const GEOPage = lazy(() => import("@/pages/digital-marketing/GEOPage"));
const CROPage = lazy(() => import("@/pages/digital-marketing/CROPage"));

// Regional Location Hubs & City Pages
const TamilNaduHubPage = lazy(() => import("@/pages/locations/TamilNaduHubPage"));
const NamakkalPage = lazy(() => import("@/pages/locations/NamakkalPage"));
const SalemPage = lazy(() => import("@/pages/locations/SalemPage"));
const ErodeHQPage = lazy(() => import("@/pages/locations/ErodeHQPage"));
const CoimbatorePage = lazy(() => import("@/pages/locations/CoimbatorePage"));
const ParamathiVelurPage = lazy(() => import("@/pages/locations/ParamathiVelurPage"));

// Legal & Utility Pages
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const CookiePolicyPage = lazy(() => import("@/pages/CookiePolicyPage"));
const ThankYouPage = lazy(() => import("@/pages/ThankYouPage"));
const WorkPage = lazy(() => import("@/pages/WorkPage"));
const HowWeWorkPage = lazy(() => import("@/pages/HowWeWorkPage"));

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

      // 3. Digital Marketing Hub Page & Sub-Pages (SEO)
      {
        path: "digital-marketing",
        element: <DigitalMarketingHubPage />,
      },
      {
        path: "digital-marketing/seo",
        element: <SEOPage />,
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
        path: "digital-marketing/local-seo",
        element: <LocalSEOPage />,
      },
      {
        path: "digital-marketing/aio",
        element: <AIOPage />,
      },
      {
        path: "digital-marketing/geo",
        element: <GEOPage />,
      },
      {
        path: "digital-marketing/conversion-rate-optimization",
        element: <CROPage />,
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
        path: "locations/paramathi-velur",
        element: <ParamathiVelurPage />,
      },

      // Legacy city redirects -> Tamil Nadu Hub
      {
        path: "locations/chennai",
        element: <Navigate to="/locations/tamil-nadu" replace />,
      },
      {
        path: "locations/tiruppur",
        element: <Navigate to="/locations/tamil-nadu" replace />,
      },
      {
        path: "locations/madurai",
        element: <Navigate to="/locations/tamil-nadu" replace />,
      },
      {
        path: "locations/trichy",
        element: <Navigate to="/locations/tamil-nadu" replace />,
      },
      {
        path: "locations/tirunelveli",
        element: <Navigate to="/locations/tamil-nadu" replace />,
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
        path: "paramathi-velur",
        element: <Navigate to="/locations/paramathi-velur" replace />,
      },
      {
        path: "coimbatore",
        element: <Navigate to="/locations/coimbatore" replace />,
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
      {
        path: "digital-marketing/paramathi-velur",
        element: <Navigate to="/locations/paramathi-velur" replace />,
      },
      {
        path: "digital-marketing/coimbatore",
        element: <Navigate to="/locations/coimbatore" replace />,
      },

      // 9. Portfolio & Work Pages
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "our-portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "work",
        element: <WorkPage />,
      },

      // 10. How We Work Page
      {
        path: "how-we-work",
        element: <HowWeWorkPage />,
      },

      // 11. Legal Pages
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

      // 12. Thank You Page
      {
        path: "thank-you",
        element: <ThankYouPage />,
      },

      // 13. Legacy redirects
      {
        path: "insights",
        element: <Navigate to="/digital-marketing" replace />,
      },
      {
        path: "insights/*",
        element: <Navigate to="/digital-marketing" replace />,
      },
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
