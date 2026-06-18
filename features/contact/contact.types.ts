export interface ContactInfo {
  hotline: string;
  email: string;
  website: string;
  address: string;
  workingHours: string;
}

export interface ContactSupportItem {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface OfficeLocation {
  id: string;
  title: string;
  address: string;
  hotline: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface NearbyPlace {
  id: string;
  name: string;
  distance: string;
  icon?: string;
}

export interface ContactBenefit {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactPageData {
  heroImage: string;
  heroImageAlt: string;
  contactInfo: ContactInfo;
  supportItems: ContactSupportItem[];
  offices: OfficeLocation[];
  mapImage: string;
  mapImageAlt: string;
  nearbyPlaces: NearbyPlace[];
  benefits: ContactBenefit[];
  faqs: ContactFAQItem[];
  ctaImage: string;
  ctaImageAlt: string;
}
