import Link from "next/link";
import { cn } from "@/lib/cn";

interface Props {
  title: string;
  action?: { label: string; href: string };
  className?: string;
}

export function AdminSectionHeader({ title, action, className }: Props) {
  return (
    <div className={cn("mb-5 flex items-center justify-between", className)}>
      <h2 className="text-lg font-bold text-[#10233F]">{title}</h2>
      {action && (
        <Link href={action.href} className="text-sm font-medium text-[#C89B3C] transition hover:text-[#061B3A]">
          {action.label}
        </Link>
      )}
    </div>
  );
}
