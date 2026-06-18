"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Bell, MessageSquare, Menu, LogOut, User, CalendarDays } from "lucide-react";
import { useUserAuthStore } from "@/features/user/auth/user-auth.store";

interface UserTopbarProps {
  onToggleSidebar: () => void;
}

export default function UserTopbar({ onToggleSidebar }: UserTopbarProps) {
  const { fullName, avatar, role, logout } = useUserAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getRoleLabel = (userRole?: string) => {
    switch (userRole) {
      case "VIP_CUSTOMER":
        return "Khách hàng Kim Cương";
      case "CUSTOMER":
        return "Khách hàng thân thiết";
      case "INVESTOR":
        return "Nhà đầu tư";
      default:
        return "Khách hàng";
    }
  };

  return (
    <header className="h-20 bg-white border-b border-[#E5EAF2] sticky top-0 z-30 flex items-center justify-between px-6 gap-4">
      {/* Left: Mobile Toggle Menu & Search */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl hover:bg-[#F6F8FB] transition-colors text-[#061B3A] lg:hidden"
          aria-label="Toggle sidebar"
          type="button"
        >
          <Menu className="size-5" />
        </button>

        {/* Search */}
        <div className="relative w-full max-w-[420px] hidden sm:block">
          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#65758B]">
            <Search className="size-4" />
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm dự án, tiện ích, chính sách..."
            className="bg-[#F6F8FB] w-full rounded-xl border border-[#E5EAF2] pl-10 pr-4 py-2.5 text-sm text-[#061B3A] placeholder:text-[#65758B]/80 outline-none focus:border-[#C89B3C] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Quick Action Button */}
        <button
          type="button"
          className="hidden md:flex items-center gap-2 bg-[#061B3A] text-white rounded-xl px-5 py-2.5 text-sm font-semibold hover:bg-[#08254D] active:scale-98 transition-all shadow-md shadow-[#061B3A]/5 border border-transparent hover:border-[#D8B15A]/30 text-nowrap"
        >
          <CalendarDays className="size-4 text-[#D8B15A]" />
          <span>Đặt lịch tư vấn</span>
        </button>

        {/* Search Icon for Mobile */}
        <button
          type="button"
          className="p-2.5 rounded-xl hover:bg-[#F6F8FB] transition-colors text-[#061B3A] sm:hidden"
          aria-label="Tìm kiếm"
        >
          <Search className="size-5" />
        </button>

        {/* Notifications */}
        <button
          type="button"
          className="relative p-2.5 rounded-xl hover:bg-[#F6F8FB] transition-colors text-[#061B3A]"
          aria-label="Thông báo"
        >
          <Bell className="size-5" />
          <span className="absolute top-1.5 right-1.5 size-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Messages */}
        <button
          type="button"
          className="relative p-2.5 rounded-xl hover:bg-[#F6F8FB] transition-colors text-[#061B3A]"
          aria-label="Tin nhắn"
        >
          <MessageSquare className="size-5" />
          <span className="absolute top-1.5 right-1.5 size-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center">
            2
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-[#E5EAF2] hidden sm:block" />

        {/* User Account Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2.5 p-1 rounded-xl hover:bg-[#F6F8FB] transition-all"
            type="button"
          >
            <div className="size-9 rounded-full bg-[#061B3A] border border-[#E5EAF2] overflow-hidden shrink-0 flex items-center justify-center text-white font-bold text-sm">
              {avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={avatar} alt={fullName} className="w-full h-full object-cover" />
              ) : (
                fullName?.charAt(0) ?? "U"
              )}
            </div>
            <div className="hidden sm:block text-left leading-tight pr-1">
              <p className="text-sm font-bold text-[#061B3A]">{fullName}</p>
              <p className="text-[11px] text-[#65758B]">{getRoleLabel(role)}</p>
            </div>
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setDropdownOpen(false)}
              />
              <div className="absolute right-0 mt-2.5 w-56 rounded-2xl bg-white border border-[#E5EAF2] shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-3 duration-200">
                <div className="px-4 py-2.5 border-b border-[#E5EAF2] sm:hidden">
                  <p className="text-sm font-bold text-[#061B3A]">{fullName}</p>
                  <p className="text-[11px] text-[#65758B]">{getRoleLabel(role)}</p>
                </div>
                <Link
                  href="/user/ho-so-ca-nhan"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#10233F] hover:bg-[#F6F8FB] transition-colors"
                >
                  <User className="size-4 text-[#65758B]" />
                  <span>Hồ sơ của tôi</span>
                </Link>
                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    logout();
                  }}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50/50 transition-colors text-left"
                  type="button"
                >
                  <LogOut className="size-4" />
                  <span>Đăng xuất</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
