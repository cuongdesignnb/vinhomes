"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Heart,
  CalendarDays,
  Headphones,
  FileText,
  CreditCard,
  Bell,
  Headset,
  UserRound,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/cn";

interface UserSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface MenuItem {
  label: string;
  icon: React.ElementType;
  href: string;
  badge?: number;
}

const menuItems: MenuItem[] = [
  { label: "Tổng quan", icon: Home, href: "/user/dashboard" },
  { label: "Dự án quan tâm", icon: Heart, href: "/user/du-an-quan-tam" },
  { label: "Lịch hẹn tham quan", icon: CalendarDays, href: "/user/lich-hen-tham-quan" },
  { label: "Yêu cầu tư vấn", icon: Headphones, href: "/user/yeu-cau-tu-van" },
  { label: "Hợp đồng & tài liệu", icon: FileText, href: "/user/hop-dong-tai-lieu" },
  { label: "Thanh toán", icon: CreditCard, href: "/user/thanh-toan" },
  { label: "Thông báo", icon: Bell, href: "/user/thong-bao", badge: 3 },
  { label: "Hỗ trợ", icon: Headset, href: "/user/ho-tro" },
  { label: "Hồ sơ cá nhân", icon: UserRound, href: "/user/ho-so-ca-nhan" },
];

export default function UserSidebar({ collapsed, onToggle }: UserSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "transition-all duration-300 bg-gradient-to-b from-[#061B3A] to-[#03152F] flex flex-col h-screen sticky top-0 shrink-0 overflow-hidden border-r border-[#E5EAF2]/10 z-20",
        collapsed ? "w-[72px]" : "w-[260px]"
      )}
    >
      {/* Brand Logo */}
      <div className="flex items-center justify-between h-20 px-5 shrink-0 border-b border-white/5">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-black text-xl tracking-wider text-[#D8B15A] select-none whitespace-nowrap">
            {collapsed ? "V" : "VINHOMES"}
          </span>
        </Link>
        {!collapsed && (
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title="Thu gọn"
            type="button"
          >
            <ChevronLeft className="size-4" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 scrollbar-none">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative group",
                    isActive
                      ? "bg-white/10 text-[#D8B15A]"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  {/* Left Active border indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r bg-[#C89B3C]" />
                  )}

                  <Icon
                    className={cn(
                      "size-5 shrink-0 transition-colors",
                      isActive ? "text-[#D8B15A]" : "text-white/60 group-hover:text-white"
                    )}
                  />

                  {!collapsed && (
                    <span className="whitespace-nowrap flex-1">{item.label}</span>
                  )}

                  {/* Badge */}
                  {item.badge && !collapsed && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}

                  {/* Red dot if collapsed and has badge */}
                  {item.badge && collapsed && (
                    <span className="absolute top-2.5 right-2.5 bg-red-500 size-2 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Expand Button for Collapsed Sidebar */}
      {collapsed && (
        <div className="p-3 shrink-0 flex justify-center border-t border-white/5">
          <button
            onClick={onToggle}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#D8B15A] transition-colors"
            title="Mở rộng"
            type="button"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      )}

      {/* Skyline decoration at the bottom */}
      {!collapsed && (
        <div className="px-5 py-4 shrink-0 opacity-15 pointer-events-none mt-auto">
          <svg
            className="w-full h-12 text-[#D8B15A]"
            viewBox="0 0 120 40"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 40h120V30H110v-5h-5v5h-10v-8h-5v8H80v-12h-4v12H65V18h-5v18H50V10h-6v26H35v-8h-5v8H20V2h-5v34H10v-6H5v6H0v4z" />
          </svg>
        </div>
      )}
    </aside>
  );
}
