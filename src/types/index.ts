export interface NavItem {
  name: string;
  href: string;
  badge?: string;
  isPrimary?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  badge?: string;
  metrics?: string;
}

export interface CaseStudy {
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  description: string;
}

export interface InsightArticle {
  title: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  summary: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  message?: string;
}
