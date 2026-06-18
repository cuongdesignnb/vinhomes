"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, CalendarDays, Headphones, FileText } from "lucide-react";
import { UserCard } from "./UserCard";
import { cn } from "@/lib/cn";

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  iconName: string;
  href?: string;
}

const iconMap = {
  Heart,
  CalendarDays,
  Headphones,
  FileText,
} as const;

interface IconStyle {
  bgClass: string;
  iconClass: string;
}

const iconStyleMap: Record<string, IconStyle> = {
  Heart: {
    bgClass: "bg-[#FDF8EE]",
    iconClass: "text-[#C89B3C]",
  },
  CalendarDays: {
    bgClass: "bg-[#F0F4FA]",
    iconClass: "text-[#061B3A]",
  },
  Headphones: {
    bgClass: "bg-[#FDF8EE]",
    iconClass: "text-[#C89B3C]",
  },
  FileText: {
    bgClass: "bg-[#F0F4FA]",
    iconClass: "text-[#061B3A]",
  },
};

export function MetricCard({
  title,
  value,
  description,
  iconName,
  href,
}: MetricCardProps) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || FileText;
  const style = iconStyleMap[iconName] || {
    bgClass: "bg-[#F0F4FA]",
    iconClass: "text-[#061B3A]",
  };

  const cardContent = (
    <UserCard className="h-full">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <span className="text-xs font-semibold text-[#65758B] block uppercase tracking-wider mb-1">
            {title}
          </span>
          <span className="text-3xl font-black text-[#10233F] tracking-tight block mb-1">
            {value}
          </span>
          <p className="text-xs text-[#65758B]/80 line-clamp-1 leading-relaxed">
            {description}
          </p>
        </div>
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-transform duration-350",
            style.bgClass
          )}
        >
          <IconComponent className={cn("w-5 h-5", style.iconClass)} />
        </div>
      </div>
    </UserCard>
  );

  const wrapperVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

  if (href) {
    return (
      <motion.div variants={wrapperVariants} initial="hidden" animate="visible" className="h-full">
        <Link href={href} className="block no-underline h-full">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div variants={wrapperVariants} initial="hidden" animate="visible" className="h-full">
      {cardContent}
    </motion.div>
  );
}
