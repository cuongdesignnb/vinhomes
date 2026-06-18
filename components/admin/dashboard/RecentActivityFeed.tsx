import {
  ArrowRight,
  Users,
  CalendarDays,
  Newspaper,
  ClipboardList,
  UserRound,
} from "lucide-react";
import type { ActivityItem } from "@/features/admin/dashboard/dashboard.types";

interface RecentActivityFeedProps {
  activities: ActivityItem[];
}

const typeConfig: Record<
  ActivityItem["type"],
  { Icon: React.ElementType; color: string }
> = {
  lead: { Icon: Users, color: "#2563EB" },
  appointment: { Icon: CalendarDays, color: "#0F9F6E" },
  post: { Icon: Newspaper, color: "#C89B3C" },
  form: { Icon: ClipboardList, color: "#7C3AED" },
  user: { Icon: UserRound, color: "#65758B" },
};

export default function RecentActivityFeed({
  activities,
}: RecentActivityFeedProps) {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#10233F]">
          Hoạt động gần đây
        </h3>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:underline"
        >
          Xem tất cả
          <ArrowRight className="size-3.5" />
        </a>
      </div>

      <div className="flex flex-col">
        {activities.map((activity, index) => {
          const { Icon, color } = typeConfig[activity.type];
          const isLast = index === activities.length - 1;

          return (
            <div key={activity.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <div
                  className="flex size-8 flex-shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${color}14` }}
                >
                  <Icon className="size-4" style={{ color }} />
                </div>
                {!isLast && (
                  <div className="w-px flex-1 bg-[#E5EAF2] my-1" />
                )}
              </div>

              <div
                className={`flex flex-1 items-start justify-between gap-2 pb-4 ${
                  isLast ? "" : ""
                }`}
              >
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-medium text-[#10233F]">
                    {activity.title}
                  </span>
                  {activity.description && (
                    <span className="text-xs text-[#65758B] truncate">
                      {activity.description}
                    </span>
                  )}
                </div>
                <span className="flex-shrink-0 text-[11px] text-[#65758B]">
                  {activity.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
