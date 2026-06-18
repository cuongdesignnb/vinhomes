import { cn } from "@/lib/cn";
import { ADMIN_STATUS_COLORS, STATUS_LABELS } from "@/lib/utils/chart-colors";

interface Props {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: Props) {
  const colors = ADMIN_STATUS_COLORS[status] || { bg: "bg-gray-100", text: "text-gray-600", dot: "bg-gray-400" };
  const label = STATUS_LABELS[status] || status;

  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold", colors.bg, colors.text, className)}>
      <span className={cn("size-1.5 rounded-full", colors.dot)} />
      {label}
    </span>
  );
}
