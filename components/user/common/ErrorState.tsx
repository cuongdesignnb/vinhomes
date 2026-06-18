"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center justify-center text-center p-8 border border-[#E5EAF2] rounded-[18px] bg-white max-w-md mx-auto my-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
    >
      <div className="w-16 h-16 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] flex items-center justify-center mb-5 shrink-0 text-red-500">
        <AlertTriangle className="w-8 h-8 text-[#C89B3C]" />
      </div>
      <h3 className="text-lg font-bold text-[#10233F] mb-2">Không thể tải dữ liệu</h3>
      <p className="text-sm text-[#65758B] mb-6 max-w-xs leading-relaxed">
        {message || "Vui lòng kiểm tra lại kết nối mạng và thử lại."}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2.5 rounded-full bg-[#C89B3C] text-white font-medium text-sm transition-all duration-200 hover:bg-[#B0852E] hover:shadow-[0_4px_12px_rgba(200,155,60,0.2)] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50 cursor-pointer active:scale-95"
        >
          Thử lại
        </button>
      )}
    </motion.div>
  );
}
