import { useQuery } from "@tanstack/react-query";
import { getUserDashboardOverview } from "./user-dashboard.api";

export function useUserDashboardOverview() {
  return useQuery({
    queryKey: ["user-dashboard-overview"],
    queryFn: getUserDashboardOverview,
    staleTime: 60 * 1000, // 1 minute
  });
}
