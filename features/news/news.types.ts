export type NewsCategory =
  | "market"
  | "project"
  | "policy"
  | "investment"
  | "lifestyle"
  | "legal";

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  category: NewsCategory;
  categoryLabel: string;
  region?: string;
  topic?: string;
  image: string;
  imageAlt: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  href: string;
  isFeatured?: boolean;
  isPopular?: boolean;
  viewCount?: number;
}

export interface NewsFilters {
  keyword?: string;
  category?: string;
  region?: string;
  topic?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

export interface NewsListResponse {
  data: NewsArticle[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
