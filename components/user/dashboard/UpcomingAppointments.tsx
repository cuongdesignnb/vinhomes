"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { UserAppointment } from "@/features/user/dashboard/user-dashboard.types";
import { UserCard } from "@/components/user/common/UserCard";
import { AppointmentTimeline } from "./AppointmentTimeline";
import { EmptyState } from "@/components/user/common/EmptyState";

interface UpcomingAppointmentsProps {
  appointments: UserAppointment[];
}

export function UpcomingAppointments({ appointments }: UpcomingAppointmentsProps) {
  if (!appointments || appointments.length === 0) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-[#10233F]">Lịch hẹn sắp tới</h3>
          <Link 
            href="/user/appointments" 
            className="text-xs text-[#C89B3C] hover:underline font-semibold transition-colors"
          >
            Xem lịch đầy đủ
          </Link>
        </div>
        <EmptyState 
          title="Chưa có lịch hẹn sắp tới"
          description="Bạn chưa có lịch hẹn tham quan dự án hay tư vấn trực tuyến nào sắp diễn ra."
        />
      </div>
    );
  }

  return (
    <UserCard className="flex flex-col h-full border border-[#E5EAF2]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-[#10233F]">Lịch hẹn sắp tới</h3>
        <Link 
          href="/user/appointments" 
          className="text-xs text-[#C89B3C] hover:underline font-semibold transition-colors duration-150"
        >
          Xem lịch đầy đủ
        </Link>
      </div>

      {/* Timeline List */}
      <div className="flex-1 flex flex-col justify-start">
        {appointments.map((appointment, index) => (
          <AppointmentTimeline
            key={appointment.id}
            appointment={appointment}
            isLast={index === appointments.length - 1}
          />
        ))}
      </div>

      {/* Action Button */}
      <Link href="/user/appointments/new" className="block mt-4 w-full">
        <button className="w-full border border-[#C89B3C] text-[#C89B3C] hover:bg-[#C89B3C]/5 font-semibold text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-[0.98]">
          <Plus className="w-4 h-4" />
          Đặt lịch hẹn mới
        </button>
      </Link>
    </UserCard>
  );
}
