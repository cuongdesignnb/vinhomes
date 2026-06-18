import { projectList } from "@/data/project-list";
import { siteSeo } from "@/data/seo";

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteSeo.url}${path}`;

export function buildProjectsPageSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Danh sách dự án Vinhomes",
      url: `${siteSeo.url}/du-an`,
      description:
        "Danh sách các dự án Vinhomes đang mở bán, sắp ra mắt và đang triển khai trên toàn quốc.",
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Danh sách dự án Vinhomes",
      itemListElement: projectList.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(project.href),
        item: {
          "@type": "Residence",
          name: project.name,
          image: absoluteUrl(project.image),
          address: project.location,
          description: project.description,
          offers: {
            "@type": "Offer",
            priceSpecification: project.priceLabel,
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
        {
          "@type": "ListItem",
          position: 2,
          name: "Dự án",
          item: `${siteSeo.url}/du-an`,
        },
      ],
    },
  ];
}
