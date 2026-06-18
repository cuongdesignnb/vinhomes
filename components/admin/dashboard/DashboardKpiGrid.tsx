"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  CalendarDays,
  TrendingUp,
  Newspaper,
  PhoneCall,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
} from "lucide-react";
import { staggerContainer, fadeUp, revealTransition } from "@/lib/motion";
import type { DashboardKpi } from "@/features/admin/dashboard/dashboard.types";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Users,
  CalendarDays,
  TrendingUp,
  Newspaper,
  PhoneCall,
};

const iconColorMap: Record<string, string> = {
  Building2: "#2563EB",
  Users: "#0F9F6E",
  CalendarDays: "#F59E0B",
  TrendingUp: "#7C3AED",
  Newspaper: "#C89B3C",
  PhoneCall: "#EF4444",
};

interface DashboardKpiGridProps {
  kpis: DashboardKpi[];
}

function TrendBadge({
  changeText,
  changeType,
}: {
  changeText: string;
  changeType: "increase" | "decrease" | "neutral";
}) {
  const config = {
    increase: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      Icon: ArrowUpRight,
    },
    decrease: {
      bg: "bg-red-50",
      text: "text-red-600",
      Icon: ArrowDownRight,
    },
    neutral: {
      bg: "bg-slate-100",
      text: "text-slate-500",
      Icon: Minus,
    },
  };

  const { bg, text, Icon } = config[changeType];

  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${bg} ${text}`}
    >
      <Icon className="size-3" />
      {changeText}
    </span>
  );
}

export default function DashboardKpiGrid({ kpis }: DashboardKpiGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {kpis.map((kpi) => {
        const IconComp = iconMap[kpi.icon] ?? Building2;
        const color = iconColorMap[kpi.icon] ?? "#2563EB";

        return (
          <motion.div
            key={kpi.id}
            variants={fadeUp}
            transition={revealTransition}
            className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5 flex flex-col gap-3"
          >
            <div
              className="size-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${color}14` }}
            >
              <IconComp className="size-5" style={{ color }} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-2xl font-black text-[#10233F] leading-tight">
                {kpi.value}
              </span>
              <span className="text-sm text-[#65758B]">{kpi.title}</span>
            </div>

            <TrendBadge
              changeText={kpi.changeText}
              changeType={kpi.changeType}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
