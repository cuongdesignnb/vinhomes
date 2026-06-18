import type { ContactPageData } from "./contact.types";
import { contactMockData } from "@/data/contact.mock";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getContactPageData(): Promise<ContactPageData> {
  if (!API_BASE_URL) return contactMockData;

  const res = await fetch(`${API_BASE_URL}/contact`, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Khong the tai thong tin lien he");
  return res.json();
}
