import { projects } from "@/data/projects";
import { siteSeo } from "@/data/seo";

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteSeo.url}${path}`;

export function buildHomeSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vinhomes",
      url: siteSeo.url,
      logo: absoluteUrl("/images/og-vinhomes.jpg"),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "1900 1234 56",
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: ["Vietnamese"],
      },
      sameAs: ["https://www.facebook.com/vinhomes", "https://www.youtube.com/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Tổng hợp dự án Vinhomes",
      url: siteSeo.url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteSeo.url}/tim-kiem?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      name: "Vinhomes",
      url: siteSeo.url,
      image: absoluteUrl(siteSeo.image),
      telephone: "1900 1234 56",
      email: "contact@vinhomes.vn",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Tòa nhà Vinhomes, Long Biên",
        addressLocality: "Hà Nội",
        addressCountry: "VN",
      },
      priceRange: "$$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Dự án Vinhomes nổi bật",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(project.href),
        item: {
          "@type": "Residence",
          name: project.name,
          image: absoluteUrl(project.image),
          address: project.location,
          offers: {
            "@type": "Offer",
            priceSpecification: project.price,
            availability:
              project.status === "Đang mở bán"
                ? "https://schema.org/InStock"
                : "https://schema.org/PreOrder",
          },
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
      ],
    },
  ];
}
