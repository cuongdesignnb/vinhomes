export type ProjectStatus = "open" | "upcoming" | "developing" | "sold";

export interface ProjectFact {
  id: string;
  label: string;
  value: string;
  icon?: string;
}

export interface ProjectHighlight {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ProjectConnection {
  id: string;
  place: string;
  time: string;
}

export interface ProjectProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ProjectAmenity {
  id: string;
  title: string;
  image: string;
  icon?: string;
}

export interface ProjectPolicy {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface ProjectInvestmentReason {
  id: string;
  title: string;
  value: string;
  description: string;
}

export interface ProjectGalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface ProjectFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProjectDetail {
  id: string;
  name: string;
  slug: string;
  status: ProjectStatus;
  statusLabel: string;
  subtitle: string;
  location: string;
  priceText: string;
  typeText: string;
  heroImage: string;
  heroImageAlt: string;
  overviewImage: string;
  overviewImageAlt: string;
  overviewVideoThumbnail?: string;
  description: string;
  facts: ProjectFact[];
  highlights: ProjectHighlight[];
  connections: ProjectConnection[];
  locationImage: string;
  locationImageAlt: string;
  masterplanImage: string;
  masterplanImageAlt: string;
  masterplanLegend: string[];
  typicalLayoutImage: string;
  typicalLayoutAlt: string;
  products: ProjectProduct[];
  amenities: ProjectAmenity[];
  policies: ProjectPolicy[];
  investmentReasons: ProjectInvestmentReason[];
  gallery: ProjectGalleryImage[];
  faqs: ProjectFAQItem[];
  seoTitle?: string;
  seoDescription?: string;
  canonical?: string;
}
