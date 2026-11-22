"use client";

/**
 * Small navigation helpers kept from the Vite → Next.js migration so the
 * view components keep a familiar `to=` API. Backed entirely by next/link
 * and next/navigation.
 */
import React, { useEffect } from "react";
import NextLink from "next/link";
import { useRouter, usePathname, useParams as useNextParams } from "next/navigation";

type LinkProps = Omit<React.ComponentProps<typeof NextLink>, "href"> & { to?: string; href?: string };

/** `<Link to="/x">` or `<Link href="/x">` — both render a crawlable <a href>. */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(({ to, href, children, ...props }, ref) => (
  <NextLink ref={ref} href={to || href || "/"} {...props}>
    {children}
  </NextLink>
));
Link.displayName = "Link";

/** Current pathname only (search params are deliberately not read to keep pages statically renderable). */
export function useLocation() {
  return { pathname: usePathname() || "/" };
}

/** Route params, falling back to the last path segment as `slug`. */
export function useParams<T extends Record<string, string | string[]>>(): T {
  const params: Record<string, string | string[]> = { ...(useNextParams() ?? {}) };
  const pathname = usePathname();
  if (pathname && !params.slug) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length) params.slug = segments[segments.length - 1];
  }
  return params as T;
}

/** Client-side redirect component. */
export const Navigate: React.FC<{ to: string; replace?: boolean }> = ({ to, replace = true }) => {
  const router = useRouter();
  useEffect(() => {
    if (replace) router.replace(to);
    else router.push(to);
  }, [router, to, replace]);
  return null;
};
