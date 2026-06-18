import { siteSeo } from "@/data/seo";

export function buildAboutPageSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vinhomes",
      url: siteSeo.url,
      logo: `${siteSeo.url}/images/about/about-og.jpg`,
      telephone: "1900 1234 56",
      email: "info@vinhomes.vn",
      address: {
        "@type": "PostalAddress",
        addressLocality: "TP. Hồ Chí Minh",
        addressCountry: "VN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Giới thiệu Vinhomes",
      url: `${siteSeo.url}/gioi-thieu`,
      description:
        "Tìm hiểu về Vinhomes - thương hiệu bất động sản cao cấp hàng đầu Việt Nam, tiên phong kiến tạo đô thị hiện đại và cộng đồng văn minh.",
      mainEntity: {
        "@type": "Organization",
        name: "Vinhomes",
      },
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
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: siteSeo.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Giới thiệu",
          item: `${siteSeo.url}/gioi-thieu`,
        },
      ],
    },
  ];
}
