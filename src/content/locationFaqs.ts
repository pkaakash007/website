/**
 * FAQ copy for the city landing pages. Shared by the visible FAQ section
 * (client component) and the FAQPage JSON-LD (server page), so the markup
 * always matches what users see — a Google structured-data requirement.
 *
 * Answers are written answer-first and self-contained so Google AI
 * Overviews, ChatGPT and Perplexity can quote a single answer verbatim.
 * Plain module (no "use client") so server components can import it.
 */
import type { FaqItem } from "../config/seo";

const PHONE = "+91 81110 33390";
const OFFICE =
  "High School Building, 12/32, Padamudipalayam, Paramathi Velur, Namakkal District, Tamil Nadu 638182";

export const LOCATION_FAQS: Record<string, FaqItem[]> = {
  namakkal: [
    {
      question: "Which is the best digital marketing agency in Namakkal?",
      answer:
        "Real Result Marketing is a Namakkal district digital marketing agency based in Paramathi Velur, about 25 km from Namakkal town. We handle SEO, Google Ads, Google Maps (local SEO), social media marketing, AI search optimisation and websites, with industry experience in poultry, lorry body building, transport, education and healthcare.",
    },
    {
      question: "How much does digital marketing cost in Namakkal?",
      answer:
        "It depends on your goals and how many channels you need. Most Namakkal businesses start with Google Maps and local SEO, or a Google Ads campaign, on a monthly plan, then add SEO, social media or a new website as results come in. Call " +
        PHONE +
        " for a free audit and a fixed quote before any work starts.",
    },
    {
      question: "How does SEO help poultry and transport businesses in Namakkal?",
      answer:
        "For poultry farms, hatcheries and egg traders, SEO puts you in front of wholesale buyers and distributors searching Google across India. For transport operators and lorry body builders, local and B2B SEO brings freight, tanker and trailer-body enquiries from fleet owners actively looking for a supplier.",
    },
    {
      question: "Can you get my Namakkal business into the Google Maps top 3?",
      answer:
        "Yes, that is our most requested service. We optimise your Google Business Profile, fix your name, address and phone details across directories, add geotagged photos, set up a review process and build local pages. Most businesses see more calls from Maps within two to three months; no honest agency can guarantee a position.",
    },
    {
      question: "Do you build websites and software for Namakkal companies?",
      answer:
        "Yes. We build fast, mobile-friendly websites, e-commerce stores and mobile apps, plus custom software such as poultry batch and feed tracking, transport trip and LR management, and distributor billing systems.",
    },
    {
      question: "Where is Real Result's office for Namakkal clients?",
      answer:
        "Our office is at " +
        OFFICE +
        ". Namakkal clients can meet us in person, or we visit you. We also work by phone and WhatsApp on " +
        PHONE +
        ".",
    },
  ],

  karur: [
    {
      question: "Which is the best digital marketing agency in Karur?",
      answer:
        "Real Result Marketing serves Karur from our Paramathi Velur office, about 20 km away across the Cauvery. We do SEO, Google Ads, Google Maps ranking, social media, AI search optimisation and websites, with experience in home-textile exports, bus body building, retail and healthcare.",
    },
    {
      question: "How can Karur textile exporters get more international enquiries online?",
      answer:
        "Buyers find suppliers on Google, LinkedIn and, more and more, by asking ChatGPT or Perplexity. We build an export-ready website with product and certification pages, run B2B SEO for searches like 'home textile manufacturer India', publish buyer-focused content and set up LinkedIn and Google Ads campaigns aimed at importers in your target countries.",
    },
    {
      question: "Can you help Karur shops and clinics rank on Google Maps?",
      answer:
        "Yes. We optimise your Google Business Profile, keep your address and phone details consistent across directories, add photos and posts, and set up a simple review process, so you show up when people in Karur search for services near them.",
    },
    {
      question: "How much does digital marketing cost in Karur?",
      answer:
        "Pricing depends on the channels and competition. Local Google Maps work and small Google Ads campaigns suit most shops and clinics; exporters usually need SEO, content and a stronger website. We share a written, fixed monthly quote after a free audit. Call " +
        PHONE +
        ".",
    },
    {
      question: "Do you meet clients in Karur?",
      answer:
        "Yes. Karur is a short drive from our office at " +
        OFFICE +
        ". We meet clients in person in Karur, at our office, or by phone, video and WhatsApp.",
    },
  ],

  "paramathi-velur": [
    {
      question: "Is there a digital marketing agency in Paramathi Velur?",
      answer:
        "Yes. Real Result Marketing's office is in Paramathi Velur at " +
        OFFICE +
        ". We provide SEO, Google Ads, Google Maps ranking, social media marketing, AI search optimisation and website development for local businesses and for clients across Namakkal and Karur.",
    },
    {
      question: "How can local SEO help my business in Paramathi Velur?",
      answer:
        "Local SEO puts your business in the Google Maps results when nearby customers search for what you sell, such as a poultry feed supplier, lorry booking, clinic or showroom. It covers your Google Business Profile, local directory listings, reviews and a fast website with call and WhatsApp buttons.",
    },
    {
      question: "What are Real Result's office hours?",
      answer:
        "We are open Monday to Saturday, 9:00 am to 6:30 pm. Call or WhatsApp " + PHONE + " before visiting so the right person is available.",
    },
    {
      question: "What digital marketing services do you offer in Paramathi Velur?",
      answer:
        "Google Ads, Google Maps and local SEO, search engine optimisation, Instagram and Facebook marketing, website and mobile app development, branding, video and product photography, and custom billing or inventory software.",
    },
  ],

  salem: [
    {
      question: "Do you provide digital marketing services in Salem?",
      answer:
        "Yes. Real Result serves Salem businesses from our Paramathi Velur office with SEO, Google Ads, Google Maps ranking, social media marketing and website development.",
    },
    {
      question: "How can SEO help manufacturing and retail businesses in Salem?",
      answer:
        "Steel, sago and textile manufacturers win B2B enquiries by ranking for the product searches buyers make, while jewellery and retail showrooms gain footfall from Google Maps. We plan SEO around the searches that bring the customers you want.",
    },
    {
      question: "How long does it take to rank on Google Maps in Salem?",
      answer:
        "Most businesses see more profile views and calls within two to three months of Google Business Profile optimisation, review building and citation clean-up. Competitive categories take longer, and no one can guarantee a fixed position.",
    },
  ],

  erode: [
    {
      question: "Do you provide digital marketing services in Erode?",
      answer:
        "Yes. Real Result serves Erode from our Paramathi Velur office with SEO, Google Ads, Google Maps ranking, social media marketing and website development for textile, turmeric, automotive and healthcare businesses.",
    },
    {
      question: "How can Erode textile and turmeric businesses grow online?",
      answer:
        "B2B buyers search Google and B2B platforms for suppliers. An export-ready website, product SEO, Google Ads for high-intent searches and a complete Google Business Profile help Erode traders and manufacturers get direct enquiries instead of relying only on brokers.",
    },
    {
      question: "Can you meet Erode clients in person?",
      answer:
        "Yes. Erode is about 45 km from our Paramathi Velur office, and we meet clients in Erode, at our office, or by phone, video and WhatsApp on " + PHONE + ".",
    },
  ],
};
