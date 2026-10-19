import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "@/layouts/RootLayout";

// ─── 1. Core Active Pages ──────────────────────────────────────────────────
import HomePage from "@/pages/HomePage";

const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("@/pages/services/ServiceDetailPage"));
const DigitalMarketingHubPage = lazy(() => import("@/pages/digital-marketing/DigitalMarketingHubPage"));
const ApplicationDevelopmentPage = lazy(() => import("@/pages/ApplicationDevelopmentPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));

// ─── 2. Digital Marketing Specialized Pillars ──────────────────────────────
const SEOPage = lazy(() => import("@/pages/digital-marketing/SEOPage"));
const LocalSEOPage = lazy(() => import("@/pages/digital-marketing/LocalSEOPage"));
const GEOPage = lazy(() => import("@/pages/digital-marketing/GEOPage"));
const AIOPage = lazy(() => import("@/pages/digital-marketing/AIOPage"));
const GoogleAdsPage = lazy(() => import("@/pages/digital-marketing/GoogleAdsPage"));
const SocialMediaPage = lazy(() => import("@/pages/digital-marketing/SocialMediaPage"));
const ContentMarketingPage = lazy(() => import("@/pages/digital-marketing/ContentMarketingPage"));
const CROPage = lazy(() => import("@/pages/digital-marketing/CROPage"));

// ─── 3. Industries Hub & Detail Pages ──────────────────────────────────────
const IndustriesPage = lazy(() => import("@/pages/IndustriesPage"));
const HealthcareIndustryPage = lazy(() => import("@/pages/industries/HealthcareIndustryPage"));
const IndustryDetailPage = lazy(() => import("@/pages/industries/IndustryDetailPage"));

// ─── 4. Regional Location Hubs & Active Corridors ──────────────────────────
const TamilNaduHubPage = lazy(() => import("@/pages/locations/TamilNaduHubPage"));
const ErodeHQPage = lazy(() => import("@/pages/locations/ErodeHQPage"));
const SalemPage = lazy(() => import("@/pages/locations/SalemPage"));
const NamakkalPage = lazy(() => import("@/pages/locations/NamakkalPage"));
const CoimbatorePage = lazy(() => import("@/pages/locations/CoimbatorePage"));
const ParamathiVelurPage = lazy(() => import("@/pages/locations/ParamathiVelurPage"));
const DigitalMarketingAgencyNamakkalPage = lazy(() => import("@/pages/locations/DigitalMarketingAgencyNamakkalPage"));

// ─── 5. Insights & Editorial Dispatches ────────────────────────────────────
const InsightsPage = lazy(() => import("@/pages/InsightsPage"));
const InsightDetailPage = lazy(() => import("@/pages/InsightDetailPage"));

// ─── 6. Legal, Compliance & Acknowledgements ───────────────────────────────
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const CookiePolicyPage = lazy(() => import("@/pages/CookiePolicyPage"));
const ThankYouPage = lazy(() => import("@/pages/ThankYouPage"));

// ─── 7. 404 Catch-All ──────────────────────────────────────────────────────
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

      // 2. All Services & Detail Pages
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "services/:slug",
        element: <ServiceDetailPage />,
      },

      // 3. Digital Marketing Hub & Specialized Pillars
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
      {
        path: "digital-marketing/cro",
        element: <Navigate to="/digital-marketing/conversion-rate-optimization" replace />,
      },
      {
        path: "marketing",
        element: <Navigate to="/digital-marketing" replace />,
      },
      {
        path: "marketing/*",
        element: <Navigate to="/digital-marketing" replace />,
      },

      // 4. Application & Software Development
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
      {
        path: "technology/*",
        element: <Navigate to="/application-development" replace />,
      },

      // 5. About
      {
        path: "about",
        element: <AboutPage />,
      },

      // 6. Contact
      {
        path: "contact",
        element: <ContactPage />,
      },

      // 7. Portfolio & Case Studies
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "our-portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "case-studies",
        element: <Navigate to="/portfolio" replace />,
      },
      {
        path: "case-studies/*",
        element: <Navigate to="/portfolio" replace />,
      },
      {
        path: "work",
        element: <Navigate to="/portfolio" replace />,
      },
      {
        path: "work/*",
        element: <Navigate to="/portfolio" replace />,
      },

      // 8. Industries Hub & Detail Pages
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

      // 9. Regional Location Hubs & Top Ranking Target Pages
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
        path: "locations/namakkal",
        element: <NamakkalPage />,
      },
      {
        path: "digital-marketing-agency-namakkal",
        element: <DigitalMarketingAgencyNamakkalPage />,
      },
      {
        path: "locations/salem",
        element: <SalemPage />,
      },
      {
        path: "locations/coimbatore",
        element: <CoimbatorePage />,
      },
      {
        path: "locations/paramathi-velur",
        element: <ParamathiVelurPage />,
      },

      // Regional City Shortcuts & Fast SEO Aliases
      {
        path: "erode",
        element: <Navigate to="/locations/erode" replace />,
      },
      {
        path: "namakkal",
        element: <Navigate to="/locations/namakkal" replace />,
      },
      {
        path: "salem",
        element: <Navigate to="/locations/salem" replace />,
      },
      {
        path: "coimbatore",
        element: <Navigate to="/locations/coimbatore" replace />,
      },
      {
        path: "paramathi-velur",
        element: <Navigate to="/locations/paramathi-velur" replace />,
      },
      {
        path: "digital-marketing/namakkal",
        element: <Navigate to="/digital-marketing-agency-namakkal" replace />,
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

      // 10. Insights & Editorial
      {
        path: "insights",
        element: <InsightsPage />,
      },
      {
        path: "insights/:slug",
        element: <InsightDetailPage />,
      },

      // 11. Legal & Compliance
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "privacy",
        element: <Navigate to="/privacy-policy" replace />,
      },
      {
        path: "terms",
        element: <TermsPage />,
      },
      {
        path: "terms-of-service",
        element: <Navigate to="/terms" replace />,
      },
      {
        path: "cookie-policy",
        element: <CookiePolicyPage />,
      },
      {
        path: "cookies",
        element: <Navigate to="/cookie-policy" replace />,
      },
      {
        path: "thank-you",
        element: <ThankYouPage />,
      },

      // 12. Safe Redirects for Legacy Endpoints
      {
        path: "faq",
        element: <Navigate to="/digital-marketing#faq" replace />,
      },
      {
        path: "faq/*",
        element: <Navigate to="/digital-marketing#faq" replace />,
      },
      {
        path: "solutions",
        element: <Navigate to="/#pillars" replace />,
      },
      {
        path: "solutions/*",
        element: <Navigate to="/#pillars" replace />,
      },
      {
        path: "resources",
        element: <Navigate to="/digital-marketing" replace />,
      },
      {
        path: "resources/*",
        element: <Navigate to="/digital-marketing" replace />,
      },
      {
        path: "ai-communication",
        element: <Navigate to="/application-development" replace />,
      },
      {
        path: "ai-communication/*",
        element: <Navigate to="/application-development" replace />,
      },
      {
        path: "human-resources",
        element: <Navigate to="/about" replace />,
      },
      {
        path: "human-resources/*",
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

      // 13. 404 Catch-All
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default router;
