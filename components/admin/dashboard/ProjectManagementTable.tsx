import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ManagedProject } from "@/features/admin/dashboard/dashboard.types";

interface ProjectManagementTableProps {
  projects: ManagedProject[];
}

const statusConfig: Record<
  ManagedProject["status"],
  { label: string; bg: string; text: string }
> = {
  open: {
    label: "Đang mở bán",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  upcoming: {
    label: "Sắp mở bán",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  handover: {
    label: "Bàn giao",
    bg: "bg-[#061B3A]/5",
    text: "text-[#061B3A]",
  },
  draft: { label: "Nháp", bg: "bg-slate-100", text: "text-slate-500" },
};

export default function ProjectManagementTable({
  projects,
}: ProjectManagementTableProps) {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#10233F]">Quản lý dự án</h3>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-xs font-medium text-[#2563EB] hover:underline"
        >
          Xem tất cả
          <ArrowRight className="size-3.5" />
        </a>
      </div>

      <div className="overflow-x-auto -mx-5 px-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[#E5EAF2] text-left">
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                Dự án
              </th>
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                Tổng SP
              </th>
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                Đã bán
              </th>
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                Tỉ lệ (%)
              </th>
              <th className="pb-2.5 text-xs font-semibold text-[#65758B]">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              const status = statusConfig[project.status];
              return (
                <tr
                  key={project.id}
                  className="border-b border-[#E5EAF2] last:border-0"
                >
                  <td className="py-2.5 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="size-9 flex-shrink-0 overflow-hidden rounded-lg border border-[#E5EAF2]">
                        <Image
                          src={project.thumbnail}
                          alt={project.name}
                          width={36}
                          height={36}
                          className="size-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-[#10233F] whitespace-nowrap">
                        {project.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-2.5 pr-4 text-[#65758B]">
                    {project.totalProducts}
                  </td>
                  <td className="py-2.5 pr-4 text-[#65758B]">
                    {project.soldProducts}
                  </td>
                  <td className="py-2.5 pr-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#E5EAF2]">
                        <div
                          className="h-full rounded-full bg-[#2563EB]"
                          style={{ width: `${project.absorptionRate}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-[#10233F]">
                        {project.absorptionRate}%
                      </span>
                    </div>
                  </td>
                  <td className="py-2.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold whitespace-nowrap ${status.bg} ${status.text}`}
                    >
                      {status.label}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
