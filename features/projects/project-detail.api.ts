import type { ProjectDetail } from "./project-detail.types";
import {
  getMockProjectDetailBySlug,
  getAllMockProjectSlugs,
} from "@/data/projects-detail.mock";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProjectDetailBySlug(
  slug: string
): Promise<ProjectDetail | null> {
  if (!API_BASE_URL) {
    return getMockProjectDetailBySlug(slug);
  }

  const res = await fetch(`${API_BASE_URL}/projects/${slug}`, {
    next: { revalidate: 60 },
  });

  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Khong the tai thong tin du an");

  return res.json();
}

export async function getAllProjectSlugs(): Promise<{ slug: string }[]> {
  if (!API_BASE_URL) {
    return getAllMockProjectSlugs();
  }

  const res = await fetch(`${API_BASE_URL}/projects/slugs`);
  if (!res.ok) return [];
  return res.json();
}
