import { dashboardMockData } from './dashboard.mock';
import type { DashboardOverview } from './dashboard.types';
import { unwrapApiResponse } from '@/lib/api/http-client';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getDashboardOverview(): Promise<DashboardOverview> {
  if (!API_BASE_URL) return dashboardMockData;

  try {
    const res = await fetch(`${API_BASE_URL}/admin/dashboard`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn("API request failed. Falling back to mock data.");
      return dashboardMockData;
    }

    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn("API request failed. Falling back to mock data.", error);
    return dashboardMockData;
  }
}
