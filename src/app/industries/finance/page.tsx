import IndustryDetailPage from "@/views/industries/IndustryDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";
import { INDUSTRIES_DATA } from "@/features/industries/data/industriesData";

const route = getRoute("/industries/finance/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route, INDUSTRIES_DATA["finance"]?.faqs ?? [])} />
      <IndustryDetailPage slug="finance" />
    </>
  );
}
