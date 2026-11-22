import TamilNaduHubPage from "@/views/locations/TamilNaduHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";

const route = getRoute("/locations/tamil-nadu/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route)} />
      <TamilNaduHubPage />
    </>
  );
}
