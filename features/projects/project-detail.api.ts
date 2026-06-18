import type { ProjectDetail } from "./project-detail.types";
import {
  getMockProjectDetailBySlug,
  getAllMockProjectSlugs,
} from "@/data/projects-detail.mock";
import { unwrapApiResponse } from "@/lib/api/http-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getProjectDetailBySlug(
  slug: string
): Promise<ProjectDetail | null> {
  if (!API_BASE_URL) {
    return getMockProjectDetailBySlug(slug);
  }

  try {
    const res = await fetch(`${API_BASE_URL}/projects/${slug}`, {
      next: { revalidate: 60 },
    });

    if (res.status === 404) return null;
    if (!res.ok) return getMockProjectDetailBySlug(slug);

    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn(`API base URL configured but project detail for ${slug} not reachable. Falling back to mock data.`, error);
    return getMockProjectDetailBySlug(slug);
  }
}

export async function getAllProjectSlugs(): Promise<{ slug: string }[]> {
  if (!API_BASE_URL) {
    return getAllMockProjectSlugs();
  }

  try {
    const res = await fetch(`${API_BASE_URL}/projects/slugs`);
    if (!res.ok) return getAllMockProjectSlugs();
    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn("API base URL configured but project slugs not reachable. Falling back to mock data.", error);
    return getAllMockProjectSlugs();
  }
}
