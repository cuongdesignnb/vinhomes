import { userDashboardMockData } from "./user-dashboard.mock";
import type { UserDashboardOverview } from "./user-dashboard.types";
import { unwrapApiResponse } from "@/lib/api/http-client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getUserDashboardOverview(): Promise<UserDashboardOverview> {
  if (!API_BASE_URL) {
    // Return mock data after a small simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return userDashboardMockData;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/dashboard`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.warn("API request failed. Falling back to mock data.");
      return userDashboardMockData;
    }

    return unwrapApiResponse(await res.json());
  } catch (error) {
    console.warn("API request failed. Falling back to mock data.", error);
    return userDashboardMockData;
  }
}
