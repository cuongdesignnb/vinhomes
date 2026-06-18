"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Home, Heart, CalendarDays, Headphones, FileText, CreditCard, Bell, Headset, UserRound } from "lucide-react";
import { cn } from "@/lib/cn";
import { AnimatePresence, motion } from "framer-motion";

interface UserMobileSidebarProps {
  open: boolean;
  onClose: () => void;
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

export default function UserMobileSidebar({ open, onClose }: UserMobileSidebarProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />

          {/* Drawer Sidebar */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-[280px] bg-gradient-to-b from-[#061B3A] to-[#03152F] z-50 flex flex-col h-full border-r border-[#E5EAF2]/10 lg:hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-20 px-5 border-b border-white/5">
              <Link href="/" className="flex items-center gap-2" onClick={onClose}>
                <span className="font-black text-xl tracking-wider text-[#D8B15A]">
                  VINHOMES
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 transition-colors"
                type="button"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Nav Menu */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              <ul className="space-y-1">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all relative",
                          isActive
                            ? "bg-white/10 text-[#D8B15A]"
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {isActive && (
                          <span className="absolute left-0 top-1/4 bottom-1/4 w-[3px] rounded-r bg-[#C89B3C]" />
                        )}
                        <Icon
                          className={cn(
                            "size-5 shrink-0",
                            isActive ? "text-[#D8B15A]" : "text-white/60"
                          )}
                        />
                        <span className="flex-1">{item.label}</span>
                        {item.badge && (
                          <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer version */}
            <div className="px-5 py-6 border-t border-white/5 text-center">
              <p className="text-white/30 text-xs">Cổng thông tin Vinhomes v2.1.0</p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
