"use client";

import React from "react";
import Link from "next/link";
import { Bell, Calendar, Headphones, FileText, Tag } from "lucide-react";
import { UserNotification } from "@/features/user/dashboard/user-dashboard.types";
import { UserCard } from "@/components/user/common/UserCard";
import { EmptyState } from "@/components/user/common/EmptyState";
import { cn } from "@/lib/cn";

interface RecentNotificationsProps {
  notifications: UserNotification[];
}

const iconMap = {
  appointment: Calendar,
  support: Headphones,
  document: FileText,
  promotion: Tag,
};

const iconStyleMap: Record<UserNotification["type"], { bg: string; icon: string }> = {
  appointment: {
    bg: "bg-[#F0F4FA] border-[#061B3A]/10",
    icon: "text-[#061B3A]",
  },
  support: {
    bg: "bg-[#FDF8EE] border-[#C89B3C]/10",
    icon: "text-[#C89B3C]",
  },
  document: {
    bg: "bg-[#F4FBF7] border-emerald-500/10",
    icon: "text-emerald-600",
  },
  promotion: {
    bg: "bg-rose-50 border-rose-500/10",
    icon: "text-rose-500",
  },
};

export function RecentNotifications({ notifications }: RecentNotificationsProps) {
  if (!notifications || notifications.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#10233F]">
            Thông báo & hoạt động gần đây
          </h3>
          <Link 
            href="/user/notifications" 
            className="text-xs text-[#C89B3C] font-semibold hover:underline"
          >
            Xem tất cả
          </Link>
        </div>
        <EmptyState 
          title="Không có thông báo mới"
          description="Bạn đã đọc hết các thông báo và cập nhật hoạt động gần đây."
        />
      </div>
    );
  }

  return (
    <UserCard className="w-full border border-[#E5EAF2]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#F0F4FA] pb-4 mb-3">
        <h3 className="text-base font-bold text-[#10233F]">
          Thông báo & hoạt động gần đây
        </h3>
        <Link 
          href="/user/notifications" 
          className="text-xs text-[#C89B3C] font-semibold hover:underline transition-colors"
        >
          Xem tất cả
        </Link>
      </div>

      {/* Notifications List */}
      <div className="flex flex-col">
        {notifications.map((noti) => {
          const IconComponent = iconMap[noti.type] || Bell;
          const styles = iconStyleMap[noti.type] || {
            bg: "bg-[#F6F8FB] border-[#E5EAF2]",
            icon: "text-[#65758B]",
          };

          return (
            <div
              key={noti.id}
              className={cn(
                "relative flex items-start justify-between gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-[#F6F8FB]/50 border-b border-[#F0F4FA]/60 last:border-0",
                noti.isUnread && "bg-white"
              )}
            >
              {/* Left Side: Icon & Details */}
              <div className="flex items-start gap-3 min-w-0 flex-1">
                {/* Icon wrapper */}
                <div 
                  className={cn(
                    "w-9 h-9 rounded-full flex items-center justify-center border shrink-0 mt-0.5",
                    styles.bg
                  )}
                >
                  <IconComponent className={cn("w-4 h-4", styles.icon)} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col min-w-0">
                  <span className={cn(
                    "text-xs text-[#10233F] line-clamp-1",
                    noti.isUnread ? "font-bold" : "font-semibold text-opacity-95"
                  )}>
                    {noti.title}
                  </span>
                  <p className="text-[11px] text-[#65758B] mt-0.5 line-clamp-2 leading-relaxed">
                    {noti.description}
                  </p>
                </div>
              </div>

              {/* Right Side: Timestamp & Status Dot */}
              <div className="flex flex-col items-end shrink-0 gap-1.5 pt-1">
                <span className="text-[10px] text-[#65758B]/60 font-medium whitespace-nowrap">
                  {noti.time}
                </span>
                
                {noti.isUnread && (
                  <span 
                    className="size-2 rounded-full bg-[#EF4444] animate-pulse" 
                    title="Chưa đọc"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </UserCard>
  );
}
