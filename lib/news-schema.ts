import type { NewsArticle } from "@/features/news/news.types";
import { siteSeo } from "@/data/seo";

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteSeo.url}${path}`;

export function buildNewsPageSchema(articles: NewsArticle[]) {
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
      "@type": "WebSite",
      name: "Vinhomes",
      url: siteSeo.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteSeo.url}/tin-tuc?keyword={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Tin tức Vinhomes",
      description:
        "Cập nhật tin tức Vinhomes mới nhất về thị trường bất động sản, dự án, chính sách bán hàng, phân tích đầu tư và phong cách sống đô thị cao cấp.",
      url: absoluteUrl("/tin-tuc"),
    },
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Tin tức Vinhomes",
      url: absoluteUrl("/tin-tuc"),
      publisher: {
        "@type": "Organization",
        name: "Vinhomes",
        logo: absoluteUrl("/images/og-vinhomes.jpg"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Danh sách bài viết Vinhomes",
      itemListElement: articles.slice(0, 12).map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(article.href),
        item: {
          "@type": "Article",
          headline: article.title,
          image: absoluteUrl(article.image),
          author: {
            "@type": "Person",
            name: article.author,
          },
          datePublished: article.publishedAt,
        },
      })),
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
      ],
    },
  ];
}
