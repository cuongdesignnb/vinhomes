"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fadeUp, revealTransition } from "@/lib/motion";
import type { ChartPoint } from "@/features/admin/dashboard/dashboard.types";

interface RevenueChartProps {
  data: ChartPoint[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value?: string | number;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length || payload[0]?.value === undefined) return null;
  return (
    <div className="rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 shadow-lg">
      <p className="mb-1 text-xs font-medium text-[#65758B]">{label}</p>
      <p className="text-sm font-bold text-[#10233F]">
        {Number(payload[0].value).toLocaleString("vi-VN")} VND
      </p>
    </div>
  );
}

export default function RevenueChart({ data }: RevenueChartProps) {
  const [range] = useState("7 ngày qua");

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={revealTransition}
      className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5 min-w-0"
    >
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-base font-bold text-[#10233F]">
          Báo cáo doanh thu
        </h3>
        <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5EAF2] px-3 py-1.5 text-xs font-medium text-[#65758B] hover:bg-slate-50 transition-colors">
          {range}
          <ChevronDown className="size-3.5" />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <defs>
            <linearGradient id="revenueBarGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0C2D57" stopOpacity={1} />
              <stop offset="100%" stopColor="#061B3A" stopOpacity={0.7} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5EAF2" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#65758B" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#65758B" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="revenue"
            fill="url(#revenueBarGrad)"
            radius={[6, 6, 0, 0]}
            barSize={32}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
