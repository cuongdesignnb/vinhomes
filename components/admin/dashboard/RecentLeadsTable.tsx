import { ArrowRight } from "lucide-react";
import type { RecentLead } from "@/features/admin/dashboard/dashboard.types";

interface RecentLeadsTableProps {
  leads: RecentLead[];
}

const statusConfig: Record<
  RecentLead["status"],
  { label: string; bg: string; text: string }
> = {
  new: { label: "Mới", bg: "bg-blue-50", text: "text-blue-600" },
  contacted: {
    label: "Đã liên hệ",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  qualified: {
    label: "Đủ điều kiện",
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
};

export default function RecentLeadsTable({ leads }: RecentLeadsTableProps) {
  return (
    <div className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#10233F]">Lead mới nhất</h3>
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
                Họ tên
              </th>
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                SĐT
              </th>
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                Nguồn
              </th>
              <th className="pb-2.5 pr-4 text-xs font-semibold text-[#65758B]">
                Thời gian
              </th>
              <th className="pb-2.5 text-xs font-semibold text-[#65758B]">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => {
              const status = statusConfig[lead.status];
              return (
                <tr
                  key={lead.id}
                  className="border-b border-[#E5EAF2] last:border-0"
                >
                  <td className="py-2.5 pr-4 font-medium text-[#10233F] whitespace-nowrap">
                    {lead.name}
                  </td>
                  <td className="py-2.5 pr-4 text-[#65758B] whitespace-nowrap">
                    {lead.phone}
                  </td>
                  <td className="py-2.5 pr-4 text-[#65758B] whitespace-nowrap">
                    {lead.source}
                  </td>
                  <td className="py-2.5 pr-4 text-[#65758B] whitespace-nowrap">
                    {lead.time}
                  </td>
                  <td className="py-2.5">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${status.bg} ${status.text}`}
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
