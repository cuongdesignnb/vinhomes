"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserKpi } from "@/features/user/dashboard/user-dashboard.types";
import { MetricCard } from "@/components/user/common/MetricCard";

interface UserKpiGridProps {
  kpis: UserKpi[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export function UserKpiGrid({ kpis }: UserKpiGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      {kpis.map((kpi) => (
        <div key={kpi.id} className="h-full">
          <MetricCard
            title={kpi.title}
            value={kpi.value}
            description={kpi.description}
            iconName={kpi.icon}
            href={kpi.href}
          />
        </div>
      ))}
    </motion.div>
  );
}
