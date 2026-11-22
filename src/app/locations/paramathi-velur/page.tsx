import ParamathiVelurPage from "@/views/locations/ParamathiVelurPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";
import { LOCATION_FAQS } from "@/content/locationFaqs";

const route = getRoute("/locations/paramathi-velur/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route, LOCATION_FAQS["paramathi-velur"] ?? [])} />
      <ParamathiVelurPage />
    </>
  );
}
