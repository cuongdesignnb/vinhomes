"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { fadeUp, revealTransition } from "@/lib/motion";
import type { ChartPoint } from "@/features/admin/dashboard/dashboard.types";

interface SeoPerformanceChartProps {
  data: ChartPoint[];
}

const seoMetrics = [
  { label: "Tổng lượt xem", value: "128.9K" },
  { label: "Lượt nhấp", value: "9.284" },
  { label: "CTR trung bình", value: "7,19%" },
  { label: "Thứ hạng TB", value: "18,6" },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    dataKey?: string | number;
    color?: string;
    name?: string;
    value?: string | number;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-[#E5EAF2] bg-white px-4 py-3 shadow-lg">
      <p className="mb-2 text-xs font-medium text-[#65758B]">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center gap-2 text-sm">
          <span
            className="size-2.5 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-[#65758B]">{entry.name}:</span>
          <span className="font-semibold text-[#10233F]">{entry.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function SeoPerformanceChart({
  data,
}: SeoPerformanceChartProps) {
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
          Hiệu quả SEO (Google)
        </h3>
        <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5EAF2] px-3 py-1.5 text-xs font-medium text-[#65758B] hover:bg-slate-50 transition-colors">
          {range}
          <ChevronDown className="size-3.5" />
        </button>
      </div>

      <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {seoMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-xl border border-[#E5EAF2] bg-[#F6F8FB] px-3 py-2.5"
          >
            <p className="text-xs text-[#65758B]">{metric.label}</p>
            <p className="text-lg font-bold text-[#10233F]">{metric.value}</p>
          </div>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="seoGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity={0.18} />
              <stop offset="100%" stopColor="#2563EB" stopOpacity={0.02} />
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
          <Area
            type="monotone"
            dataKey="views"
            name="Lượt xem"
            stroke="#2563EB"
            strokeWidth={2.5}
            fill="url(#seoGradient)"
          />
          <Area
            type="monotone"
            dataKey="clicks"
            name="Lượt nhấp"
            stroke="#60A5FA"
            strokeWidth={2}
            fill="none"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
