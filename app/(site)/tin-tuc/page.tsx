import type { Metadata } from "next";
import { Suspense } from "react";
import { getNewsArticles } from "@/features/news/news.api";
import { buildNewsPageSchema } from "@/lib/news-schema";
import { NewsHero } from "@/components/news/NewsHero";
import { NewsFilterPanel } from "@/components/news/NewsFilterPanel";
import { FeaturedNews } from "@/components/news/FeaturedNews";
import { NewsContentSection } from "./NewsContentSection";
import { NewsletterStrip } from "@/components/news/NewsletterStrip";
import { NewsBenefits } from "@/components/news/NewsBenefits";
import { NewsConsultationCTA } from "@/components/news/NewsConsultationCTA";

export const metadata: Metadata = {
  title:
    "Tin tức Vinhomes | Thị trường bất động sản, dự án và chính sách mới nhất",
  description:
    "Cập nhật tin tức Vinhomes mới nhất về thị trường bất động sản, dự án, chính sách bán hàng, phân tích đầu tư và phong cách sống đô thị cao cấp.",
  keywords: [
    "tin tức Vinhomes",
    "thị trường bất động sản",
    "dự án Vinhomes",
    "chính sách bán hàng Vinhomes",
    "bảng giá Vinhomes",
    "đầu tư bất động sản",
    "Vinhomes Ocean Park",
    "Vinhomes Smart City",
    "Vinhomes Royal Island",
    "Vinhomes Grand Park",
  ],
  alternates: {
    canonical: "/tin-tuc",
  },
  openGraph: {
    title: "Tin tức Vinhomes | Cập nhật thị trường, dự án và chính sách",
    description:
      "Theo dõi tin tức mới nhất từ Vinhomes: thị trường, dự án, chính sách bán hàng, xu hướng đầu tư và phong cách sống.",
    url: "/tin-tuc",
    type: "website",
    locale: "vi_VN",
    images: ["/images/news/news-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin tức Vinhomes",
    description:
      "Cập nhật tin tức thị trường bất động sản, dự án và chính sách Vinhomes.",
    images: ["/images/news/news-og.jpg"],
  },
};

export default async function TinTucPage() {
  const newsData = await getNewsArticles({ limit: 12 });
  const allArticles = newsData.data;
  const schema = buildNewsPageSchema(allArticles);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <NewsHero />

      <Suspense>
        <NewsFilterPanel />
      </Suspense>

      <section className="mx-auto max-w-[1240px] px-4 py-10 sm:px-6 sm:py-14">
        <FeaturedNews articles={allArticles} />
      </section>

      <Suspense>
        <NewsContentSection initialData={newsData} />
      </Suspense>

      <NewsletterStrip />

      <NewsBenefits />

      <NewsConsultationCTA />
    </main>
  );
}

