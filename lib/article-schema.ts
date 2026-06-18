import type { Article } from "@/features/articles/article.types";
import { siteSeo } from "@/data/seo";

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteSeo.url}${path}`;

export function buildArticleSchema(article: Article) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vinhomes",
      url: siteSeo.url,
      logo: absoluteUrl("/images/og-vinhomes.jpg"),
      telephone: "1900 1234 56",
      email: "cskh@vinhomes.vn",
      address: {
        "@type": "PostalAddress",
        addressLocality: "TP. Hồ Chí Minh",
        addressCountry: "VN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      headline: article.title,
      description: article.seoDescription || article.excerpt,
      image: absoluteUrl(article.heroImage),
      datePublished: article.publishedAt,
      dateModified: article.updatedAt || article.publishedAt,
      author: {
        "@type": "Organization",
        name: article.author.name,
        url: siteSeo.url,
      },
      publisher: {
        "@type": "Organization",
        name: "Vinhomes",
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/og-vinhomes.jpg"),
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": absoluteUrl(`/tin-tuc/${article.slug}`),
      },
      articleSection: article.categoryLabel,
      keywords: article.tags.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: siteSeo.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tin tức",
          item: absoluteUrl("/tin-tuc"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: article.title,
          item: absoluteUrl(`/tin-tuc/${article.slug}`),
        },
      ],
    },
  ];
}
