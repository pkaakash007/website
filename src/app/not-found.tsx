import type { Metadata } from "next";
import { NotFoundPage } from "@/views/NotFoundPage";

export const metadata: Metadata = {
  title: "Page Not Found | Real Result",
  description: "Find your way to services, contact details, or the homepage of Real Result.",
  alternates: {
    canonical: null,
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFound() {
  return <NotFoundPage />;
}
