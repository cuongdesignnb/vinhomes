"use client";

import { useDashboardOverview } from "@/features/admin/dashboard/dashboard.query";
import { LoadingSkeleton } from "@/components/admin/common/LoadingSkeleton";
import { ErrorState } from "@/components/admin/common/ErrorState";
import DashboardKpiGrid from "@/components/admin/dashboard/DashboardKpiGrid";
import LeadPerformanceChart from "@/components/admin/dashboard/LeadPerformanceChart";
import SeoPerformanceChart from "@/components/admin/dashboard/SeoPerformanceChart";
import LeadSourceDonut from "@/components/admin/dashboard/LeadSourceDonut";
import ApprovalTasks from "@/components/admin/dashboard/ApprovalTasks";
import RecentLeadsTable from "@/components/admin/dashboard/RecentLeadsTable";
import ProjectManagementTable from "@/components/admin/dashboard/ProjectManagementTable";
import RecentActivityFeed from "@/components/admin/dashboard/RecentActivityFeed";
import SeoContentSection from "@/components/admin/dashboard/SeoContentSection";
import BusinessAnalyticsSection from "@/components/admin/dashboard/BusinessAnalyticsSection";


export default function DashboardPage() {
  const { data, isLoading, isError, refetch } = useDashboardOverview();

  if (isLoading) return <LoadingSkeleton />;
  if (isError || !data) return <ErrorState onRetry={() => refetch()} />;

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-black text-[#10233F]">
          Tổng quan hệ thống
        </h1>
        <p className="mt-1 text-sm text-[#65758B]">
          Chào mừng trở lại, Admin. Dưới đây là tổng quan hoạt động của hệ thống ngày hôm nay.
        </p>
      </div>

      {/* KPI Cards */}
      <DashboardKpiGrid kpis={data.kpis} />

      {/* Charts Row: Lead + SEO */}
      <div className="grid gap-6 lg:grid-cols-2">
        <LeadPerformanceChart data={data.leadPerformance} />
        <SeoPerformanceChart data={data.seoPerformance} />
      </div>

      {/* Donut + Tasks Row */}
      <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <LeadSourceDonut sources={data.leadSources} />
        <ApprovalTasks tasks={data.approvalTasks} />
      </div>

      {/* Tables + Activity Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <RecentLeadsTable leads={data.recentLeads} />
        <ProjectManagementTable projects={data.managedProjects} />
        <RecentActivityFeed activities={data.activities} />
      </div>

      {/* SEO & Content Section */}
      <SeoContentSection
        seoKeywords={data.seoKeywords}
        popularPosts={data.popularPosts}
        optimizationPages={data.optimizationPages}
        scheduledPosts={data.scheduledPosts}
      />

      {/* Business Analytics */}
      <BusinessAnalyticsSection
        businessMetrics={data.businessMetrics}
        revenueChart={data.revenueChart}
        projectStatus={data.projectStatus}
        productSales={data.productSales}
      />

      {/* Footer */}
      <div className="border-t border-[#E5EAF2] pt-4 text-center">
        <p className="text-xs text-[#65758B]">
          Vinhomes. Tất cả quyền được bảo lưu.
        </p>
        <p className="text-[10px] text-[#65758B]/60">Phiên bản 2.1.0</p>
      </div>
    </div>
  );
}
