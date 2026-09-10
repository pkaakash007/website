import React from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import ApplicationDevelopmentPage from "@/pages/ApplicationDevelopmentPage";

export const SoftwareHubPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Websites, Apps & Software Development | Real Result"
        description="Support your customer journey with Real Result’s website, app, software, CRM, integration, and automation services."
        canonicalPath="/services/development/"
      />
      <ApplicationDevelopmentPage />
    </>
  );
};

export default SoftwareHubPage;
