"use client";

import React from "react";
import { MapPin, Clock } from "lucide-react";
import { UserAppointment } from "@/features/user/dashboard/user-dashboard.types";
import { cn } from "@/lib/cn";

interface AppointmentTimelineProps {
  appointment: UserAppointment;
  isLast?: boolean;
}

const statusBadgeStyles: Record<UserAppointment["status"], string> = {
  confirmed: "bg-emerald-50 text-emerald-600 border-emerald-100",
  pending: "bg-amber-50 text-amber-600 border-amber-100",
  upcoming: "bg-blue-50 text-blue-600 border-blue-100",
};

const statusLabelMap: Record<UserAppointment["status"], string> = {
  confirmed: "Đã xác nhận",
  pending: "Chờ xác nhận",
  upcoming: "Sắp diễn ra",
};

export function AppointmentTimeline({ appointment, isLast = false }: AppointmentTimelineProps) {
  return (
    <div className="flex gap-4 items-start relative group">
      {/* Left Column: Month & Date Display */}
      <div className="bg-[#F6F8FB] border border-[#E5EAF2] rounded-xl w-14 h-14 flex flex-col justify-center items-center shrink-0 shadow-sm transition-colors duration-200 group-hover:bg-[#F0F4FA] group-hover:border-[#C89B3C]/30">
        <span className="text-[10px] text-[#65758B] uppercase font-bold tracking-wider leading-none">
          {appointment.month}
        </span>
        <span className="text-xl font-black text-[#10233F] leading-none mt-1.5">
          {appointment.date}
        </span>
      </div>

      {/* Center Column: Vertical Indicator Line & Dot */}
      <div className="flex flex-col items-center shrink-0 self-stretch relative w-4">
        {/* Vertical Line */}
        <div 
          className={cn(
            "absolute top-0 w-[2px] bg-[#E5EAF2] left-1/2 -translate-x-1/2",
            isLast ? "h-6" : "bottom-0"
          )} 
        />
        {/* Timeline Dot */}
        <div className="size-3.5 rounded-full bg-white border-[3px] border-[#C89B3C] ring-4 ring-[#C89B3C]/10 z-10 mt-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C89B3C]" />
      </div>

      {/* Right Column: Appointment Details */}
      <div className={cn("flex-1 min-w-0", !isLast && "pb-6")}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h4 className="font-bold text-sm text-[#10233F] group-hover:text-[#061B3A] transition-colors duration-150 line-clamp-1">
              {appointment.title}
            </h4>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
              <span className="text-xs text-[#65758B] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span>{appointment.time}</span>
              </span>
              <span className="text-xs text-[#65758B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C89B3C] shrink-0" />
                <span className="truncate">{appointment.location}</span>
              </span>
            </div>
          </div>

          <div className="sm:self-start shrink-0">
            <span
              className={cn(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider border",
                statusBadgeStyles[appointment.status] || statusBadgeStyles.pending
              )}
            >
              {statusLabelMap[appointment.status]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
