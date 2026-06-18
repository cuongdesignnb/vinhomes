import { ArrowRight, Clock } from "lucide-react";
import type { ApprovalTask } from "@/features/admin/dashboard/dashboard.types";

interface ApprovalTasksProps {
  tasks: ApprovalTask[];
}

const statusConfig: Record<
  ApprovalTask["status"],
  { label: string; bg: string; text: string }
> = {
  pending: { label: "Chờ duyệt", bg: "bg-amber-50", text: "text-amber-600" },
  processing: {
    label: "Đang xử lý",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  approved: {
    label: "Đã duyệt",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
};

export default function ApprovalTasks({ tasks }: ApprovalTasksProps) {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#10233F]">
          Công việc & Phê duyệt
        </h3>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:underline"
        >
          Xem tất cả
          <ArrowRight className="size-3.5" />
        </a>
      </div>

      <div className="flex flex-col divide-y divide-[#E5EAF2]">
        {tasks.map((task) => {
          const status = statusConfig[task.status];
          return (
            <div
              key={task.id}
              className="flex items-center justify-between gap-3 py-3 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-sm font-medium text-[#10233F] truncate">
                  {task.title}
                </span>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-[#F6F8FB] px-2 py-0.5 text-[11px] font-medium text-[#65758B]">
                    {task.type}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-[#65758B]">
                    <Clock className="size-3" />
                    {task.time}
                  </span>
                </div>
              </div>
              <span
                className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${status.bg} ${status.text}`}
              >
                {status.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
