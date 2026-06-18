"use client";

import { useUserDashboardOverview } from "@/features/user/dashboard/user-dashboard.query";
import LoadingSkeleton from "@/components/user/common/LoadingSkeleton";
import { ErrorState } from "@/components/user/common/ErrorState";
import { UserWelcomeHero } from "@/components/user/dashboard/UserWelcomeHero";
import { UserKpiGrid } from "@/components/user/dashboard/UserKpiGrid";
import { InterestedProjects } from "@/components/user/dashboard/InterestedProjects";
import { UpcomingAppointments } from "@/components/user/dashboard/UpcomingAppointments";
import { ProfilePaymentProgress } from "@/components/user/dashboard/ProfilePaymentProgress";
import { UserDocuments } from "@/components/user/dashboard/UserDocuments";
import { RecentNotifications } from "@/components/user/dashboard/RecentNotifications";
import { SupportContactStrip } from "@/components/user/dashboard/SupportContactStrip";

export default function UserDashboardPage() {
  const { data, isLoading, isError, refetch } = useUserDashboardOverview();

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (isError || !data) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header / Title */}
      <div className="hidden sm:block">
        <h1 className="text-xl font-bold text-[#10233F]">Cổng thông tin khách hàng</h1>
      </div>

      {/* Welcome Hero */}
      <UserWelcomeHero profile={data.profile} />

      {/* KPI Stats */}
      <UserKpiGrid kpis={data.kpis} />

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        {/* Left Side: Projects, Progress, Documents */}
        <div className="space-y-6">
          <InterestedProjects projects={data.interestedProjects} />
          
          <ProfilePaymentProgress
            projectName={data.progressProjectName}
            steps={data.progressSteps}
          />
          
          <UserDocuments documents={data.documents} />
        </div>

        {/* Right Side: Appointments, Notifications */}
        <div className="space-y-6">
          <UpcomingAppointments appointments={data.appointments} />
          
          <RecentNotifications notifications={data.notifications} />
        </div>
      </div>

      {/* Bottom Full-width Support Strip */}
      <SupportContactStrip contacts={data.supportContacts} />
    </div>
  );
}
