import { dashboardMockData } from './dashboard.mock';
import type { DashboardOverview } from './dashboard.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getDashboardOverview(): Promise<DashboardOverview> {
  if (!API_BASE_URL) return dashboardMockData;

  const res = await fetch(`${API_BASE_URL}/admin/dashboard`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Không thể tải tổng quan hệ thống');

  return res.json();
}
