export type ArticleCategory =
  | "market"
  | "project"
  | "policy"
  | "investment"
  | "lifestyle"
  | "legal";

export interface ArticleAuthor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  verified?: boolean;
  socials?: {
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface ArticleSection {
  id: string;
  heading: string;
  content: string[];
  bullets?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  quote?: string;
}

export interface ArticleStat {
  id: string;
  label: string;
  value: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: ArticleCategory;
  categoryLabel: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  viewCount: number;
  image: string;
  imageAlt: string;
  heroImage: string;
  heroImageAlt: string;
  author: ArticleAuthor;
  lead: string;
  sections: ArticleSection[];
  quote?: string;
  stats?: ArticleStat[];
  tags: string[];
  relatedIds?: string[];
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
}

export interface RelatedArticle {
  id: string;
  title: string;
  slug: string;
  category: ArticleCategory;
  categoryLabel: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  href: string;
}
