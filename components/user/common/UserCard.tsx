"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface UserCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function UserCard({ children, className, onClick }: UserCardProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ y: 0 }}
      whileHover={{
        y: -4,
        borderColor: "#E8DDC8",
        boxShadow: "0 20px 40px rgba(15, 23, 42, 0.08)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "bg-white border border-[#E5EAF2] rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 transition-all duration-250",
        onClick && "cursor-pointer select-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
