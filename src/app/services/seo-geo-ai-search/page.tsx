import ServiceDetailPage from "@/views/services/ServiceDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";
import { DETAILED_SERVICES_MAP } from "@/features/services/data/servicesDetailsData";

const route = getRoute("/services/seo-geo-ai-search/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route, (DETAILED_SERVICES_MAP["seo-geo-ai-search"]?.faqs ?? []).map((f) => ({ question: f.q, answer: f.a })))} />
      <ServiceDetailPage slug="seo-geo-ai-search" />
    </>
  );
}
