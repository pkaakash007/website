import PrivacyPolicyPage from "@/views/PrivacyPolicyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";

const route = getRoute("/privacy-policy/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route)} />
      <PrivacyPolicyPage />
    </>
  );
}
