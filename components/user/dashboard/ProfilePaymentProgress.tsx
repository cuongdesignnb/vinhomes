"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { UserProgressStep } from "@/features/user/dashboard/user-dashboard.types";
import { UserCard } from "@/components/user/common/UserCard";
import { cn } from "@/lib/cn";

interface ProfilePaymentProgressProps {
  projectName: string;
  steps: UserProgressStep[];
}

export function ProfilePaymentProgress({ projectName, steps }: ProfilePaymentProgressProps) {
  return (
    <UserCard className="w-full border border-[#E5EAF2]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#F0F4FA] pb-4 mb-6">
        <h3 className="text-sm lg:text-base font-bold text-[#10233F] truncate max-w-[70%]">
          Tiến độ hồ sơ / thanh toán - {projectName}
        </h3>
        <Link 
          href="/user/progress" 
          className="text-xs text-[#C89B3C] font-semibold hover:underline shrink-0"
        >
          Xem chi tiết
        </Link>
      </div>

      {/* Stepper Container */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-4 relative mt-2 px-1">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          
          // Determine Connector Line Color
          let connectorColor = "bg-[#E5EAF2]";
          if (step.status === "completed") {
            const nextStep = steps[index + 1];
            if (nextStep && (nextStep.status === "completed" || nextStep.status === "active")) {
              connectorColor = "bg-[#061B3A]";
            }
          }

          // Determine Badge Styles based on Status
          let circleStyle = "";
          let statusLabelColor = "";
          let circleContent: React.ReactNode = null;

          switch (step.status) {
            case "completed":
              circleStyle = "bg-[#061B3A] text-white";
              statusLabelColor = "text-[#061B3A]/80";
              circleContent = <Check className="w-4.5 h-4.5 stroke-[3px]" />;
              break;
            case "active":
              circleStyle = "bg-[#C89B3C] text-white ring-4 ring-[#C89B3C]/20 border border-[#C89B3C]";
              statusLabelColor = "text-[#C89B3C] font-bold";
              circleContent = index + 1;
              break;
            case "pending":
            default:
              circleStyle = "bg-[#F6F8FB] border border-[#E5EAF2] text-[#65758B]";
              statusLabelColor = "text-[#65758B]/60";
              circleContent = index + 1;
              break;
          }

          return (
            <div 
              key={step.id} 
              className="relative flex flex-col flex-1 w-full"
            >
              {/* Connector lines (Desktop) */}
              {!isLast && (
                <div 
                  className={cn(
                    "hidden lg:block absolute top-[18px] left-[calc(50%+18px)] right-[calc(-50%+18px)] h-[2px] -translate-y-1/2 z-0 transition-colors duration-300",
                    connectorColor
                  )} 
                />
              )}

              {/* Connector lines (Mobile) */}
              {!isLast && (
                <div 
                  className={cn(
                    "lg:hidden absolute left-[18px] top-9 bottom-[-24px] w-[2px] -translate-x-1/2 z-0 transition-colors duration-300",
                    connectorColor
                  )} 
                />
              )}

              {/* Step Info Row/Col */}
              <div className="flex flex-row lg:flex-col items-start lg:items-center gap-4 lg:gap-3 relative z-10 w-full">
                {/* Circle Badge */}
                <div 
                  className={cn(
                    "size-9 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-all duration-300 select-none",
                    circleStyle
                  )}
                >
                  {circleContent}
                </div>

                {/* Text Labels */}
                <div className="flex flex-col text-left lg:text-center min-w-0 pt-0.5 lg:pt-0">
                  <span className="text-xs font-bold text-[#10233F] line-clamp-1">
                    {step.title}
                  </span>
                  <span className={cn("text-[10px] font-bold uppercase tracking-wider mt-1", statusLabelColor)}>
                    {step.statusLabel}
                  </span>
                  <span className="text-[11px] text-[#65758B] mt-0.5">
                    {step.dateText}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </UserCard>
  );
}
