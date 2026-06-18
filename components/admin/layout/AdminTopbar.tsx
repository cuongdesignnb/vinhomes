"use client";

import { Menu, Plus, Bell, MessageSquare } from "lucide-react";

interface AdminTopbarProps {
  onToggleSidebar: () => void;
}

export default function AdminTopbar({ onToggleSidebar }: AdminTopbarProps) {
  return (
    <header className="h-16 bg-white border-b border-[#E5EAF2] sticky top-0 z-30 flex items-center justify-between px-4 gap-4">
      {/* Left: Hamburger */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-lg hover:bg-[#F6F8FB] transition-colors text-[#061B3A]"
        aria-label="Toggle sidebar"
      >
        <Menu className="size-5" />
      </button>

      {/* Center: Search */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Tìm kiếm nhanh dự án, khách hàng, tin tức..."
          className="bg-[#F6F8FB] rounded-lg border border-[#E5EAF2] px-4 py-2.5 w-full max-w-[480px] text-sm text-[#061B3A] placeholder:text-[#65758B] outline-none focus:border-[#C89B3C] transition-colors"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Quick Add */}
        <button className="flex items-center gap-1.5 bg-[#061B3A] text-white rounded-lg px-4 py-2 text-sm font-bold hover:bg-[#0A2A5C] transition-colors">
          <Plus className="size-4" />
          <span className="hidden sm:inline">Thêm nhanh</span>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-[#F6F8FB] transition-colors text-[#061B3A]">
          <Bell className="size-5" />
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full px-1">
            5
          </span>
        </button>

        {/* Messages */}
        <button className="relative p-2 rounded-lg hover:bg-[#F6F8FB] transition-colors text-[#061B3A]">
          <MessageSquare className="size-5" />
          <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full px-1">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="w-px h-8 bg-[#E5EAF2] hidden md:block" />

        {/* Admin Profile */}
        <div className="hidden md:flex items-center gap-2.5">
          <div className="size-9 rounded-full bg-[#061B3A] flex items-center justify-center shrink-0">
            <span className="text-[#D8B15A] font-bold text-sm">A</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-bold text-[#061B3A]">Admin</p>
            <p className="text-xs text-[#65758B]">Quản trị viên</p>
          </div>
        </div>
      </div>
    </header>
  );
}
