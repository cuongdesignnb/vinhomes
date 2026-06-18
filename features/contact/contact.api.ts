import type { ContactPageData } from "./contact.types";
import { contactMockData } from "@/data/contact.mock";
import { unwrapApiResponse } from "@/lib/api/http-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getContactPageData(): Promise<ContactPageData> {
  if (!API_BASE_URL) return contactMockData;

  try {
    const res = await fetch(`${API_BASE_URL}/contact`, { next: { revalidate: 60 } });
    if (!res.ok) return contactMockData;
    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn("API base URL is configured but contact endpoint is not reachable. Falling back to mock data.", error);
    return contactMockData;
  }
}
