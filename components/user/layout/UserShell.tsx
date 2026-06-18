"use client";

import { useState } from "react";
import UserSidebar from "./UserSidebar";
import UserTopbar from "./UserTopbar";
import UserMobileSidebar from "./UserMobileSidebar";

interface UserShellProps {
  children: React.ReactNode;
}

export default function UserShell({ children }: UserShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    if (window.innerWidth < 1024) {
      setMobileSidebarOpen(true);
    } else {
      setSidebarCollapsed((prev) => !prev);
    }
  };

  return (
    <div className="flex h-screen bg-[#F6F8FB] text-[#10233F] overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <UserSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed((prev) => !prev)}
        />
      </div>

      {/* Mobile Drawer */}
      <div className="lg:hidden">
        <UserMobileSidebar
          open={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <UserTopbar onToggleSidebar={handleToggleSidebar} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
