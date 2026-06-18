'use client';

import { useQuery } from '@tanstack/react-query';
import { getDashboardOverview } from './dashboard.api';

export function useDashboardOverview() {
  return useQuery({
    queryKey: ['admin-dashboard-overview'],
    queryFn: getDashboardOverview,
  });
}
