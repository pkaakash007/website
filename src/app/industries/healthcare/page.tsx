import HealthcareIndustryPage from "@/views/industries/HealthcareIndustryPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";

const route = getRoute("/industries/healthcare/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route, INDUSTRIES_DATA["healthcare"]?.faqs ?? [])} />
      <HealthcareIndustryPage />
    </>
  );
}
