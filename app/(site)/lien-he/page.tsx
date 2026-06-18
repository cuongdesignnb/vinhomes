import type { Metadata } from "next";
import { getContactPageData } from "@/features/contact/contact.api";
import { buildContactSchema } from "@/lib/contact-schema";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactAnchorNav } from "@/components/contact/ContactAnchorNav";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { OfficeLocations } from "@/components/contact/OfficeLocations";
import { ContactMapSection } from "@/components/contact/ContactMapSection";
import { ContactBenefits } from "@/components/contact/ContactBenefits";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactConsultationCTA } from "@/components/contact/ContactConsultationCTA";
import { ContactStickyCTA } from "@/components/contact/ContactStickyCTA";

export const metadata: Metadata = {
  title: "Liên hệ Vinhomes | Tư vấn dự án, bảng giá và chính sách mới nhất",
  description:
    "Liên hệ Vinhomes để nhận tư vấn dự án, bảng giá, chính sách bán hàng, hỗ trợ tham quan thực tế và thông tin đầu tư bất động sản cao cấp.",
  keywords: [
    "liên hệ Vinhomes",
    "tư vấn Vinhomes",
    "hotline Vinhomes",
    "bảng giá Vinhomes",
    "chính sách bán hàng Vinhomes",
    "đăng ký tư vấn Vinhomes",
    "tham quan dự án Vinhomes",
    "dự án Vinhomes",
  ],
  alternates: { canonical: "/lien-he" },
  openGraph: {
    title: "Liên hệ Vinhomes | Tư vấn dự án và bảng giá mới nhất",
    description: "Kết nối với đội ngũ chuyên viên Vinhomes để được tư vấn dự án, bảng giá, chính sách và lịch tham quan thực tế.",
    url: "/lien-he",
    type: "website",
    locale: "vi_VN",
    images: ["/images/contact/contact-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liên hệ Vinhomes",
    description: "Nhận tư vấn dự án, bảng giá và chính sách mới nhất từ Vinhomes.",
    images: ["/images/contact/contact-og.jpg"],
  },
};

export default async function ContactPage() {
  const data = await getContactPageData();
  const schemas = buildContactSchema(data);

  return (
    <>
      {schemas.map((schema, idx) => (
        <script key={idx} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <ContactHero heroImage={data.heroImage} heroImageAlt={data.heroImageAlt} />
      <ContactAnchorNav />
      <ContactInfoSection data={data} />
      <OfficeLocations offices={data.offices} />
      <ContactMapSection mapImage={data.mapImage} mapImageAlt={data.mapImageAlt} nearbyPlaces={data.nearbyPlaces} />
      <ContactBenefits benefits={data.benefits} />
      <ContactFAQ faqs={data.faqs} />
      <ContactConsultationCTA ctaImage={data.ctaImage} ctaImageAlt={data.ctaImageAlt} />
      <ContactStickyCTA />
    </>
  );
}
