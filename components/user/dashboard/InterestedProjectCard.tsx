"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { UserProject } from "@/features/user/dashboard/user-dashboard.types";
import { UserCard } from "@/components/user/common/UserCard";
import { cn } from "@/lib/cn";

interface InterestedProjectCardProps {
  project: UserProject;
}

const statusBadgeStyles: Record<UserProject["statusType"], string> = {
  interested: "bg-emerald-50 text-emerald-700 border-emerald-100",
  surveying: "bg-blue-50 text-blue-700 border-blue-100",
  visited: "bg-purple-50 text-purple-700 border-purple-100",
  reserved: "bg-[#FDF8EE] text-[#C89B3C] border-[#E8DDC8]/60",
};

export function InterestedProjectCard({ project }: InterestedProjectCardProps) {
  const [saved, setSaved] = useState(project.isSaved);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSaved(!saved);
  };

  return (
    <Link href={project.href} className="block no-underline">
      <UserCard className="h-full p-0 flex flex-col group overflow-hidden border border-[#E5EAF2]">
        {/* Project Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 rounded-t-[18px]">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority={false}
          />
          
          {/* Background overlay gradient for better text/badge visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Status Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide border uppercase shadow-sm",
                statusBadgeStyles[project.statusType] || statusBadgeStyles.interested
              )}
            >
              {project.statusLabel}
            </span>
          </div>

          {/* Heart Button */}
          <button
            onClick={handleHeartClick}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label={saved ? "Bỏ lưu dự án" : "Lưu dự án"}
          >
            <Heart
              className={cn(
                "w-4.5 h-4.5 transition-colors duration-200",
                saved ? "fill-[#EF4444] text-[#EF4444]" : "text-[#C89B3C]"
              )}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col flex-1">
          <h4 className="text-[#10233F] font-bold text-sm lg:text-base line-clamp-1 leading-snug group-hover:text-[#C89B3C] transition-colors duration-150">
            {project.name}
          </h4>
          
          <p className="text-[#65758B] text-xs mt-1.5 line-clamp-1 flex items-center gap-1">
            <span>{project.location}</span>
          </p>

          <div className="mt-auto pt-4 flex items-center justify-between border-t border-[#F0F4FA]">
            <span className="text-[#C89B3C] font-semibold text-xs uppercase tracking-wider">
              {project.priceText}
            </span>
            
            <span className="text-xs text-[#061B3A] font-bold hover:underline flex items-center gap-1 transition-all duration-150">
              Xem chi tiết
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </UserCard>
    </Link>
  );
}
