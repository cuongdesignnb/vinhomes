"use client";

import React from "react";
import Link from "next/link";
import { UserProject } from "@/features/user/dashboard/user-dashboard.types";
import { InterestedProjectCard } from "./InterestedProjectCard";
import { EmptyState } from "@/components/user/common/EmptyState";

interface InterestedProjectsProps {
  projects: UserProject[];
}

export function InterestedProjects({ projects }: InterestedProjectsProps) {
  if (!projects || projects.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#10233F]">Dự án quan tâm</h3>
        </div>
        <EmptyState 
          title="Chưa có dự án quan tâm"
          description="Danh sách các dự án Vinhomes mà bạn đã lưu hoặc đăng ký khảo sát sẽ xuất hiện tại đây."
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-[#10233F]">Dự án quan tâm</h3>
        <Link 
          href="/user/projects" 
          className="text-xs font-semibold text-[#C89B3C] hover:underline transition-colors duration-150"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <InterestedProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
