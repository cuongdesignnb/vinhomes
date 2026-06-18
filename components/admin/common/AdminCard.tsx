import { cn } from "@/lib/cn";

interface Props {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function AdminCard({ children, className, noPadding }: Props) {
  return (
    <div className={cn(
      "rounded-[18px] border border-[#E5EAF2] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)]",
      !noPadding && "p-5",
      className
    )}>
      {children}
    </div>
  );
}
