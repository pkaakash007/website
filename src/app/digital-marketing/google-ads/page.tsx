import GoogleAdsPage from "@/views/digital-marketing/GoogleAdsPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { getRoute } from "@/config/routes";
import { buildMetadata, pageSchema } from "@/lib/seo";

const route = getRoute("/digital-marketing/google-ads/");

export const metadata = buildMetadata(route);

export default function Page() {
  return (
    <>
      <JsonLd data={pageSchema(route)} />
      <GoogleAdsPage />
    </>
  );
}
