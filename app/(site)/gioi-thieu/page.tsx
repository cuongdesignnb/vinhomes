import type { Metadata } from "next";
import { AboutConsultationCTA } from "@/components/about/AboutConsultationCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { AchievementStats } from "@/components/about/AchievementStats";
import { BrandStory } from "@/components/about/BrandStory";
import { DevelopmentTimeline } from "@/components/about/DevelopmentTimeline";
import { LivingEcosystem } from "@/components/about/LivingEcosystem";
import { PartnersTrust } from "@/components/about/PartnersTrust";
import { SustainabilityCommitment } from "@/components/about/SustainabilityCommitment";
import { VisionMissionValues } from "@/components/about/VisionMissionValues";
import { WhyChooseVinhomes } from "@/components/about/WhyChooseVinhomes";
import { buildAboutPageSchema } from "@/lib/about-schema";

export const metadata: Metadata = {
  title: "Giới thiệu Vinhomes | Thương hiệu bất động sản cao cấp hàng đầu Việt Nam",
  description:
    "Tìm hiểu về Vinhomes - thương hiệu bất động sản cao cấp hàng đầu Việt Nam, tiên phong kiến tạo đô thị hiện đại, cộng đồng văn minh và giá trị sống bền vững.",
  keywords: [
    "giới thiệu Vinhomes",
    "Vinhomes",
    "thương hiệu Vinhomes",
    "bất động sản Vinhomes",
    "đại đô thị Vinhomes",
    "Vinhomes Ocean Park",
    "Vinhomes Smart City",
    "Vinhomes Grand Park",
  ],
  alternates: {
    canonical: "/gioi-thieu",
  },
  openGraph: {
    title: "Giới thiệu Vinhomes | Thương hiệu bất động sản cao cấp",
    description:
      "Khám phá câu chuyện thương hiệu, tầm nhìn, sứ mệnh và hệ sinh thái sống chuẩn Vinhomes.",
    url: "/gioi-thieu",
    type: "website",
    locale: "vi_VN",
    images: ["/images/about/about-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Giới thiệu Vinhomes",
    description: "Tìm hiểu thương hiệu Vinhomes và hệ sinh thái bất động sản cao cấp.",
    images: ["/images/about/about-og.jpg"],
  },
};

export default function AboutPage() {
  const schema = buildAboutPageSchema();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutHero />
      <BrandStory />
      <VisionMissionValues />
      <AchievementStats />
      <DevelopmentTimeline />
      <LivingEcosystem />
      <WhyChooseVinhomes />
      <SustainabilityCommitment />
      <PartnersTrust />
      <AboutConsultationCTA />
    </main>
  );
}
