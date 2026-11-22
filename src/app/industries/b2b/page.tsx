import IndustryDetailPage from "@/views/industries/IndustryDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";

const route = getRoute("/industries/b2b/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route)} />
      <IndustryDetailPage slug="b2b" />
    </>
  );
}
