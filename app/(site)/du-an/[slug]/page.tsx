import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectDetailBySlug,
  getAllProjectSlugs,
} from "@/features/projects/project-detail.api";
import { buildProjectDetailSchema } from "@/lib/project-detail-schema";

import { ProjectHero } from "@/components/project-detail/ProjectHero";
import { ProjectAnchorNav } from "@/components/project-detail/ProjectAnchorNav";
import { ProjectOverview } from "@/components/project-detail/ProjectOverview";
import { ProjectHighlights } from "@/components/project-detail/ProjectHighlights";
import { ProjectLocation } from "@/components/project-detail/ProjectLocation";
import { ProjectMasterplan } from "@/components/project-detail/ProjectMasterplan";
import { ProjectProducts } from "@/components/project-detail/ProjectProducts";
import { ProjectAmenities } from "@/components/project-detail/ProjectAmenities";
import { ProjectPolicyInvestment } from "@/components/project-detail/ProjectPolicyInvestment";
import { ProjectGallery } from "@/components/project-detail/ProjectGallery";
import { ProjectFAQ } from "@/components/project-detail/ProjectFAQ";
import { ProjectConsultationCTA } from "@/components/project-detail/ProjectConsultationCTA";
import { ProjectStickyCTA } from "@/components/project-detail/ProjectStickyCTA";

export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectDetailBySlug(slug);

  if (!project) {
    return {
      title: "Không tìm thấy dự án | Vinhomes",
      description: "Dự án không tồn tại hoặc đã được cập nhật.",
    };
  }

  return {
    title:
      project.seoTitle ||
      `${project.name} | Bảng giá, vị trí, mặt bằng và chính sách mới nhất`,
    description:
      project.seoDescription ||
      `${project.name} tại ${project.location}: cập nhật tổng quan, vị trí, mặt bằng, tiện ích, bảng giá, chính sách bán hàng và tư vấn đầu tư mới nhất.`,
    keywords: [
      project.name,
      "dự án Vinhomes",
      "bảng giá Vinhomes",
      "chính sách bán hàng Vinhomes",
      "căn hộ Vinhomes",
      "biệt thự Vinhomes",
      "shophouse Vinhomes",
      `bất động sản ${project.location}`,
      "đầu tư bất động sản",
    ],
    alternates: {
      canonical: project.canonical || `/du-an/${project.slug}`,
    },
    openGraph: {
      title:
        project.seoTitle ||
        `${project.name} | Bảng giá và chính sách mới nhất`,
      description: project.seoDescription || project.description,
      url: `/du-an/${project.slug}`,
      type: "website",
      locale: "vi_VN",
      images: [project.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle || `${project.name} | Vinhomes`,
      description: project.seoDescription || project.description,
      images: [project.heroImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectDetailBySlug(slug);

  if (!project) notFound();

  const schemas = buildProjectDetailSchema(project);

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <ProjectHero project={project} />
      <ProjectAnchorNav />
      <ProjectOverview project={project} />
      <ProjectHighlights highlights={project.highlights} />
      <ProjectLocation project={project} />
      <ProjectMasterplan project={project} />
      <ProjectProducts products={project.products} />
      <ProjectAmenities amenities={project.amenities} />
      <ProjectPolicyInvestment
        policies={project.policies}
        investmentReasons={project.investmentReasons}
      />
      <ProjectGallery gallery={project.gallery} />
      <ProjectFAQ faqs={project.faqs} />
      <ProjectConsultationCTA />
      <ProjectStickyCTA />
    </>
  );
}
