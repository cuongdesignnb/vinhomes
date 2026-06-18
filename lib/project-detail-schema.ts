import type { ProjectDetail } from "@/features/projects/project-detail.types";
import { siteSeo } from "@/data/seo";

const abs = (p: string) => (p.startsWith("http") ? p : `${siteSeo.url}${p}`);

export function buildProjectDetailSchema(project: ProjectDetail) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vinhomes",
      url: siteSeo.url,
      logo: abs("/images/og-vinhomes.jpg"),
      telephone: "1900 1234 56",
      email: "cskh@vinhomes.vn",
      address: { "@type": "PostalAddress", addressLocality: "TP. Ha Noi", addressCountry: "VN" },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Vinhomes",
      url: siteSeo.url,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chu", item: siteSeo.url },
        { "@type": "ListItem", position: 2, name: "Du an", item: abs("/du-an") },
        { "@type": "ListItem", position: 3, name: project.name, item: abs(`/du-an/${project.slug}`) },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "RealEstateListing",
      name: project.name,
      description: project.description,
      image: abs(project.heroImage),
      url: abs(`/du-an/${project.slug}`),
      address: {
        "@type": "PostalAddress",
        addressLocality: project.location,
        addressCountry: "VN",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "VND",
        price: project.priceText,
        availability: "https://schema.org/InStock",
      },
      brand: { "@type": "Brand", name: "Vinhomes" },
      category: project.typeText,
      areaServed: project.location,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: project.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ];
}
