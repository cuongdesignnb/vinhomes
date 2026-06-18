import { Database } from "lucide-react";

interface Props {
  title?: string;
  description?: string;
}

export function EmptyState({ title, description }: Props) {
  return (
    <div className="flex min-h-[200px] items-center justify-center rounded-[18px] border border-dashed border-[#E5EAF2] bg-[#F6F8FB] p-8">
      <div className="text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-[#E5EAF2] text-[#65758B]">
          <Database className="size-5" />
        </div>
        <p className="mt-3 text-sm font-bold text-[#10233F]">{title || "Chưa có dữ liệu"}</p>
        <p className="mt-1 text-xs text-[#65758B]">{description || "Dữ liệu sẽ hiển thị tại đây sau khi hệ thống được kết nối."}</p>
      </div>
    </div>
  );
}
