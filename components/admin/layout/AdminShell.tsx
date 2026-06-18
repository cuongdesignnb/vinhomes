"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAdminAuthStore } from "@/features/admin/auth/admin-auth.store";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import AdminMobileSidebar from "./AdminMobileSidebar";

interface AdminShellProps {
  children: React.ReactNode;
}

export default function AdminShell({ children }: AdminShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();
  const { token, initialize } = useAdminAuthStore();

  useEffect(() => {
    initialize();
    setAuthChecked(true);
  }, [initialize]);

  useEffect(() => {
    if (!authChecked) return;
    
    if (pathname !== "/admin/login" && !token) {
      router.push("/admin/login");
    }
  }, [token, pathname, router, authChecked]);

  if (!authChecked) {
    return (
      <div className="h-screen w-screen bg-[#FAF8F3] flex items-center justify-center">
        <div className="size-8 border-2 border-[#061B3A] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!token) {
    return null;
  }

  const handleToggleSidebar = () => {
    // On mobile, open the drawer; on desktop, collapse
    if (window.innerWidth < 1024) {
      setMobileSidebarOpen(true);
    } else {
      setSidebarCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="flex h-screen bg-[#F6F8FB]">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <AdminSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />
      </div>

      {/* Mobile Sidebar Drawer */}
      <div className="lg:hidden">
        <AdminMobileSidebar
          open={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <AdminTopbar onToggleSidebar={handleToggleSidebar} />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
