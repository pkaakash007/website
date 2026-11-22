import React from "react";
import { Link } from "@/utils/router-adapter";
import { Container } from "@/components/layout/Container";
import { GOOGLE_MAPS_URL, PRIMARY_LOCATIONS, SEO_CONFIG, type LocationMeta } from "@/config/seo";
import { Building2, Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";

const SERVICE_LINKS = [
  { label: "SEO", href: "/digital-marketing/seo/" },
  { label: "Local SEO & Google Maps", href: "/digital-marketing/local-seo/" },
  { label: "Google Ads", href: "/digital-marketing/google-ads/" },
  { label: "Social Media Marketing", href: "/digital-marketing/social-media-marketing/" },
  { label: "GEO & AI Search", href: "/digital-marketing/geo/" },
  { label: "Website Design", href: "/services/website-design/" },
];

/**
 * Shared, crawlable local-relevance blocks for city landing pages:
 * industries, areas covered, the (single, verified) office NAP, and
 * internal links to sibling markets and core services.
 */
export const LocalMarketSections: React.FC<{ loc: LocationMeta }> = ({ loc }) => {
  const siblings = PRIMARY_LOCATIONS.filter((l) => l.slug !== loc.slug);
  const isOffice = loc.slug === "paramathi-velur";

  return (
    <>
      {/* Industries + areas */}
      <section className="py-16 bg-white border-t border-neutral-200" aria-labelledby={`${loc.slug}-industries`}>
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 id={`${loc.slug}-industries`} className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Industries We Work With in {loc.city}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">{loc.localContext}</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loc.industries.map((industry) => (
                  <li
                    key={industry}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-sm text-neutral-800"
                  >
                    <Building2 className="w-4 h-4 text-[#0071E3] mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{industry}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Areas We Cover Around {loc.city}</h2>
              <p className="text-sm sm:text-base text-neutral-600 mt-3 leading-relaxed">
                {isOffice
                  ? "Our office is right here, so local businesses can drop in. We also cover the surrounding villages and towns:"
                  : `${loc.city} is ${loc.distanceFromOffice} from our Paramathi Velur office. We meet clients in person across:`}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {loc.areas.map((area) => (
                  <li
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-neutral-300 text-sm text-neutral-800"
                  >
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Office NAP card + internal links */}
      <section className="py-16 bg-neutral-50 border-y border-neutral-200">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 p-7 rounded-3xl bg-white border border-neutral-200 shadow-xs">
              <h2 className="text-xl font-bold text-neutral-900">
                {isOffice ? "Visit Our Office" : `Contact Our Team for ${loc.city}`}
              </h2>
              <address className="not-italic mt-5 space-y-4 text-sm text-neutral-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0071E3] shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="block text-neutral-900">{SEO_CONFIG.siteName}</strong>
                    {SEO_CONFIG.displayAddress}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0071E3] shrink-0" aria-hidden="true" />
                  <a href={`tel:${SEO_CONFIG.telephone}`} className="font-semibold text-neutral-900 hover:underline">
                    {SEO_CONFIG.displayPhone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <a
                    href={`https://wa.me/${SEO_CONFIG.telephone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-neutral-900 hover:underline"
                  >
                    WhatsApp us
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#0071E3] shrink-0" aria-hidden="true" />
                  <span>Monday – Saturday, 9:00 am – 6:30 pm</span>
                </p>
              </address>
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 text-sm font-semibold text-neutral-800 hover:bg-neutral-100 transition-colors"
              >
                <Navigation className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                Get directions on Google Maps
              </a>
            </div>

            <div className="lg:col-span-7 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-neutral-900">Our Services in {loc.city}</h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICE_LINKS.map((s) => (
                    <li key={s.href}>
                      <Link
                        to={s.href}
                        className="block p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#0071E3] text-sm font-semibold text-neutral-900 transition-colors"
                      >
                        {s.label} <span className="text-neutral-500 font-normal">for {loc.city} businesses</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-900">Nearby Areas We Serve</h2>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/locations/${s.slug}/`}
                        className="inline-flex px-4 py-2.5 rounded-full bg-white border border-neutral-300 hover:border-[#0071E3] text-sm font-semibold text-neutral-900 transition-colors"
                      >
                        Digital marketing in {s.city}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/locations/tamil-nadu/"
                      className="inline-flex px-4 py-2.5 rounded-full bg-white border border-neutral-300 hover:border-[#0071E3] text-sm font-semibold text-neutral-900 transition-colors"
                    >
                      All areas we serve
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LocalMarketSections;
