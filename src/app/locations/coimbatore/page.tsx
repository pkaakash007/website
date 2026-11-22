import CoimbatorePage from "@/views/locations/CoimbatorePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";
import { LOCATION_FAQS } from "@/content/locationFaqs";

const route = getRoute("/locations/coimbatore/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route, LOCATION_FAQS["coimbatore"] ?? [])} />
      <CoimbatorePage />
    </>
  );
}
