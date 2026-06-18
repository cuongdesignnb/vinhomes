"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { fadeUp, revealTransition } from "@/lib/motion";
import type { ChartPoint } from "@/features/admin/dashboard/dashboard.types";

interface LeadPerformanceChartProps {
  data: ChartPoint[];
}

const lines = [
  { key: "leadNew", label: "Lead mới", color: "#2563EB" },
  { key: "appointments", label: "Lịch hẹn", color: "#C89B3C" },
  { key: "convertedCustomers", label: "Khách chuyển đổi", color: "#0F9F6E" },
] as const;

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

export default function LeadPerformanceChart({
  data,
}: LeadPerformanceChartProps) {
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
          Hiệu suất Lead & Lịch hẹn
        </h3>
        <button className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5EAF2] px-3 py-1.5 text-xs font-medium text-[#65758B] hover:bg-slate-50 transition-colors">
          {range}
          <ChevronDown className="size-3.5" />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
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
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, paddingTop: 12 }}
          />
          {lines.map((line) => (
            <Line
              key={line.key}
              type="monotone"
              dataKey={line.key}
              name={line.label}
              stroke={line.color}
              strokeWidth={2.5}
              dot={{ r: 3, strokeWidth: 2 }}
              activeDot={{ r: 5, strokeWidth: 2 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
