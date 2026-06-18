"use client";

import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { fadeUp, revealTransition } from "@/lib/motion";
import type { LeadSource } from "@/features/admin/dashboard/dashboard.types";

interface ProjectStatusDonutProps {
  data: LeadSource[];
  totalProjects: number;
}

export default function ProjectStatusDonut({
  data,
  totalProjects,
}: ProjectStatusDonutProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={revealTransition}
      className="bg-white border border-[#E5EAF2] rounded-[18px] shadow-[0_4px_20px_rgba(15,23,42,0.04)] p-5"
    >
      <h3 className="mb-4 text-base font-bold text-[#10233F]">
        Tình trạng dự án
      </h3>

      <div className="flex flex-col items-center gap-4">
        <div className="relative w-[160px] h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={48}
                outerRadius={72}
                paddingAngle={3}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-xl font-black text-[#10233F]">
              {totalProjects}
            </span>
            <span className="text-[11px] text-[#65758B]">Tổng dự án</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-[#10233F]">{item.name}</span>
              </div>
              <span className="text-xs font-semibold text-[#10233F]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
