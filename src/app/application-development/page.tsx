import ApplicationDevelopmentPage from "@/views/ApplicationDevelopmentPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";

const route = getRoute("/application-development/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route)} />
      <ApplicationDevelopmentPage />
    </>
  );
}
