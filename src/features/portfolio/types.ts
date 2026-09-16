export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  headline: string;
  subtitle: string;
  category: string;
  categoryTag: string;
  client: string;
  location: string;
  year: string;
  templateLabel: string;
  accentColor: string;
  glowColor: string;
  cardGradient: string;
  image: string;
  imageAlt: string;
  metrics: {
    value: string;
    label: string;
  }[];
  deliverables: string[];
  techStack: string[];
  overview: string;
  challenge: string;
  solution: string;
  impactQuote: string;
  quoteAuthor: string;
  quoteRole: string;
}
