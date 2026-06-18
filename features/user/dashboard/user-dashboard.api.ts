import { userDashboardMockData } from "./user-dashboard.mock";
import type { UserDashboardOverview } from "./user-dashboard.types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUserDashboardOverview(): Promise<UserDashboardOverview> {
  if (!API_BASE_URL) {
    // Return mock data after a small simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return userDashboardMockData;
  }

  const res = await fetch(`${API_BASE_URL}/user/dashboard`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Không thể tải cổng thông tin khách hàng");
  }

  return res.json();
}
