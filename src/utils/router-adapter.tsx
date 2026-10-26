"use client";

import React, { useEffect } from "react";
import NextLink from "next/link";
import { useRouter, usePathname, useParams as useNextParams, useSearchParams } from "next/navigation";

// Universal Link component accepting both 'to' and 'href'
export const Link = React.forwardRef<HTMLAnchorElement, any>(
  ({ to, href, children, className, ...props }, ref) => {
    const destination = to || href || "#";
    return (
      <NextLink ref={ref} href={destination} className={className} {...props}>
        {children}
      </NextLink>
    );
  }
);
Link.displayName = "Link";

// useLocation shim
export function useLocation() {
  const pathname = usePathname() || "/";
  let search = "";
  try {
    const searchParams = useSearchParams();
    search = searchParams ? searchParams.toString() : "";
  } catch {
    // searchParams may not be available during static generation
  }
  return {
    pathname,
    search: search ? `?${search}` : "",
    hash: "",
    state: null,
    key: "default",
  };
}

// useNavigate shim
export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to === -1) router.back();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

// useParams shim
export function useParams<T extends Record<string, string | string[]>>() {
  let params: Record<string, any> = {};
  try {
    const nextParams = useNextParams();
    if (nextParams) {
      params = { ...nextParams };
    }
  } catch {
    // ignore
  }

  try {
    const pathname = usePathname();
    if (pathname && !params.slug) {
      const segments = pathname.split("/").filter(Boolean);
      if (segments.length > 0) {
        params.slug = segments[segments.length - 1];
      }
    }
  } catch {
    // ignore
  }

  return params as T;
}

// Navigate component shim
export const Navigate: React.FC<{ to: string; replace?: boolean }> = ({ to, replace = true }) => {
  const router = useRouter();
  useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [router, to, replace]);
  return null;
};

// Outlet dummy shim
export const Outlet: React.FC = () => null;

// Legacy Router shims
export const createBrowserRouter = (...args: any[]) => [] as any;
export const RouterProvider: React.FC<{ router?: any }> = () => null;

export default {
  Link,
  useLocation,
  useNavigate,
  useParams,
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
};
