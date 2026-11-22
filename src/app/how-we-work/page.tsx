import HowWeWorkPage from "@/views/HowWeWorkPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";

const route = getRoute("/how-we-work/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route)} />
      <HowWeWorkPage />
    </>
  );
}
