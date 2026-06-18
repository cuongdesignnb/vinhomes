import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

interface Props {
  text: string;
  type: "increase" | "decrease" | "neutral";
  className?: string;
}

export function TrendBadge({ text, type, className }: Props) {
  const Icon = type === "increase" ? ArrowUp : type === "decrease" ? ArrowDown : Minus;
  const color = type === "increase" ? "text-[#0F9F6E]" : type === "decrease" ? "text-[#EF4444]" : "text-[#65758B]";

  return (
    <span className={cn("inline-flex items-center gap-1 text-xs font-medium", color, className)}>
      <Icon className="size-3" aria-hidden />
      {text}
    </span>
  );
}
