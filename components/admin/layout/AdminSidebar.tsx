"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  Package,
  Users,
  PhoneCall,
  Newspaper,
  Images,
  Grid3X3,
  FileText,
  Search,
  ClipboardList,
  CalendarDays,
  BarChart3,
  UserRound,
  ShieldCheck,
  Settings,
} from "lucide-react";

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface MenuItem {
  label: string;
  icon: React.ElementType;
  href: string;
}

interface MenuGroup {
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    items: [
      { label: "Dashboard", icon: LayoutDashboard, href: "/admin/dashboard" },
      { label: "Dự án", icon: Building2, href: "/admin/du-an" },
      { label: "Sản phẩm", icon: Package, href: "/admin/san-pham" },
      { label: "Khách hàng tiềm năng", icon: Users, href: "/admin/khach-hang-tiem-nang" },
      { label: "Liên hệ", icon: PhoneCall, href: "/admin/lien-he" },
      { label: "Tin tức", icon: Newspaper, href: "/admin/tin-tuc" },
    ],
  },
  {
    items: [
      { label: "Banner & Media", icon: Images, href: "/admin/banner-media" },
      { label: "Tiện ích", icon: Grid3X3, href: "/admin/tien-ich" },
      { label: "Chính sách bán hàng", icon: FileText, href: "/admin/chinh-sach" },
      { label: "SEO", icon: Search, href: "/admin/seo" },
      { label: "Form đăng ký", icon: ClipboardList, href: "/admin/form-dang-ky" },
    ],
  },
  {
    items: [
      { label: "Lịch hẹn tham quan", icon: CalendarDays, href: "/admin/lich-hen" },
      { label: "Báo cáo", icon: BarChart3, href: "/admin/bao-cao" },
      { label: "Người dùng", icon: UserRound, href: "/admin/nguoi-dung" },
      { label: "Phân quyền", icon: ShieldCheck, href: "/admin/phan-quyen" },
      { label: "Cài đặt hệ thống", icon: Settings, href: "/admin/cai-dat" },
    ],
  },
];

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`${
        collapsed ? "w-[72px]" : "w-[260px]"
      } transition-all duration-300 bg-gradient-to-b from-[#061B3A] to-[#03152F] flex flex-col h-screen sticky top-0 shrink-0 overflow-hidden`}
    >
      {/* Logo */}
      <div
        className="flex items-center h-16 px-5 shrink-0 cursor-pointer"
        onClick={onToggle}
      >
        <span className="font-black text-xl tracking-wide text-[#D8B15A] select-none whitespace-nowrap">
          {collapsed ? "V" : "VINHOMES"}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden py-2 scrollbar-thin">
        {menuGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            {groupIndex > 0 && (
              <div className="mx-4 my-2 border-t border-white/10" />
            )}
            <ul className="space-y-0.5 px-2">
              {group.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-white/10 border-l-3 border-[#C89B3C] text-[#D8B15A]"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                      title={collapsed ? item.label : undefined}
                    >
                      <Icon className="size-5 shrink-0" />
                      {!collapsed && (
                        <span className="whitespace-nowrap">{item.label}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Version */}
      <div className="px-5 py-4 shrink-0">
        {!collapsed && (
          <p className="text-white/30 text-xs">Phiên bản 2.1.0</p>
        )}
      </div>
    </aside>
  );
}
