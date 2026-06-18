import type { ContactPageData } from "@/features/contact/contact.types";
import { siteSeo } from "@/data/seo";

const abs = (p: string) => (p.startsWith("http") ? p : `${siteSeo.url}${p}`);

export function buildContactSchema(data: ContactPageData) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vinhomes",
      url: siteSeo.url,
      logo: abs("/images/og-vinhomes.jpg"),
      telephone: data.contactInfo.hotline,
      email: data.contactInfo.email,
      address: { "@type": "PostalAddress", streetAddress: data.contactInfo.address, addressCountry: "VN" },
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
        { "@type": "ListItem", position: 2, name: "Lien he", item: abs("/lien-he") },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Lien he Vinhomes",
      url: abs("/lien-he"),
      mainEntity: {
        "@type": "RealEstateAgent",
        name: "Vinhomes",
        telephone: data.contactInfo.hotline,
        email: data.contactInfo.email,
        address: { "@type": "PostalAddress", streetAddress: data.contactInfo.address, addressCountry: "VN" },
        openingHours: "Mo-Su 08:00-20:00",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];
}
