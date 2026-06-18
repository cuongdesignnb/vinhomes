import type { Metadata } from "next";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { ProjectBenefits } from "@/components/projects/ProjectBenefits";
import { ProjectListingClient } from "@/components/projects/ProjectListingClient";
import { projectList } from "@/data/project-list";
import { buildProjectsPageSchema } from "@/lib/projects-schema";

export const metadata: Metadata = {
  title: "Danh sách dự án Vinhomes | Cập nhật bảng giá & chính sách mới nhất",
  description:
    "Khám phá danh sách dự án Vinhomes đang mở bán, sắp ra mắt và đang triển khai tại Hà Nội, TP.HCM, Hải Phòng, Quảng Ninh cùng bảng giá và tư vấn đầu tư.",
  keywords: [
    "danh sách dự án Vinhomes",
    "dự án Vinhomes đang mở bán",
    "bảng giá Vinhomes",
    "Vinhomes Hà Nội",
    "Vinhomes TP.HCM",
    "Vinhomes Royal Island",
    "Vinhomes Ocean Park",
  ],
  alternates: {
    canonical: "/du-an",
  },
  openGraph: {
    title: "Danh sách dự án Vinhomes | Cập nhật bảng giá & chính sách mới nhất",
    description:
      "Tổng hợp các dự án Vinhomes nổi bật trên toàn quốc với bộ lọc khu vực, loại hình, mức giá và tình trạng bán hàng.",
    url: "/du-an",
    siteName: "Vinhomes",
    images: [
      {
        url: "/images/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Danh sách dự án Vinhomes",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danh sách dự án Vinhomes",
    description: "Cập nhật dự án, bảng giá và chính sách bán hàng Vinhomes mới nhất.",
    images: ["/images/og-projects.jpg"],
  },
};

export default function ProjectsPage() {
  const schema = buildProjectsPageSchema();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectListingClient initialData={{ total: projectList.length, projects: projectList }} />
      <ProjectBenefits />
      <ConsultationCTA />
    </main>
  );
}
