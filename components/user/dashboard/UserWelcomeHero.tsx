"use client";

import React from "react";
import { Diamond } from "lucide-react";
import { UserProfile } from "@/features/user/dashboard/user-dashboard.types";

interface UserWelcomeHeroProps {
  profile: UserProfile;
}

export function UserWelcomeHero({ profile }: UserWelcomeHeroProps) {
  return (
    <div className="relative min-h-[200px] lg:min-h-[220px] rounded-[22px] overflow-hidden p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-center gap-6 shadow-lg bg-gradient-to-r from-[#061B3A] via-[#08254D] to-[#03152F]">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(200,155,60,0.15),rgba(255,255,255,0))]" />
      
      {/* Left Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
        <span className="text-white/60 text-sm font-medium">Xin chào,</span>
        <h1 className="text-[#D8B15A] font-black text-2xl lg:text-3xl mt-1 tracking-tight">
          {profile.fullName}
        </h1>
        <p className="text-white/70 text-xs mt-1 max-w-md">
          Chào mừng bạn quay lại cổng thông tin khách hàng Vinhomes.
        </p>
        
        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-5">
          <button className="bg-gradient-to-r from-[#C89B3C] to-[#D8B15A] text-white rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 hover:opacity-90 active:scale-95 shadow-md shadow-[#C89B3C]/10">
            Xem dự án
          </button>
          <button className="border border-white/20 text-white hover:bg-white/5 rounded-xl px-5 py-2.5 text-xs font-bold transition-all duration-200 active:scale-95">
            Đặt lịch tư vấn
          </button>
        </div>
      </div>

      {/* Right Content - VIP Card */}
      <div className="relative z-10 w-full lg:w-[280px] shrink-0">
        <div className="bg-[#03152F]/60 border border-[#E8DDC8]/30 backdrop-blur-sm rounded-2xl p-4 flex flex-col gap-3.5 shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-white/50 text-[10px] uppercase font-bold tracking-wider">
              Hạng thành viên
            </span>
            <span className="text-[#D8B15A] text-sm font-bold">
              {profile.memberLevel || "Kim cương"}
            </span>
          </div>

          {/* Points */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D8B15A]/10 flex items-center justify-center border border-[#D8B15A]/20 shrink-0">
              <Diamond className="w-4 h-4 text-[#D8B15A]" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-base tracking-tight">
                {profile.memberPoints?.toLocaleString("vi-VN") || "8.250"} điểm
              </span>
              <span className="text-white/40 text-[9px] uppercase font-bold tracking-wider">
                Điểm tích lũy
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-1 text-white/60 text-xs">
            <span>Ưu đãi hiện có: {profile.memberBenefitsCount || 3} chương trình</span>
            <span className="text-[#D8B15A] hover:underline font-semibold cursor-pointer transition-colors duration-150">
              Đặc quyền
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
