"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar, Phone, User, FileText, CheckCircle2 } from "lucide-react";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

export const bookingConsultSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên (tối thiểu 2 ký tự)"),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ (ví dụ: 0912345678)"),
  project: z.string().min(1, "Vui lòng chọn dự án bạn quan tâm"),
  preferredTime: z.string().min(1, "Vui lòng chọn thời gian mong muốn"),
  note: z.string().optional(),
});

type BookingConsultFormValues = z.infer<typeof bookingConsultSchema>;

interface BookingConsultFormProps {
  onSuccess?: () => void;
  defaultProject?: string;
}

export default function BookingConsultForm({ onSuccess, defaultProject = "" }: BookingConsultFormProps) {
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingConsultFormValues>({
    resolver: zodResolver(bookingConsultSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      project: defaultProject,
      preferredTime: "",
      note: "",
    },
  });

  const onSubmit = async (data: BookingConsultFormValues) => {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("User booking consult:", data);
    setIsSubmitSuccess(true);
    reset();
    if (onSuccess) {
      onSuccess();
    }
  };

  if (isSubmitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-6 animate-in fade-in zoom-in-95 duration-300">
        <div className="size-12 rounded-full bg-[#0F9F6E]/10 flex items-center justify-center text-[#0F9F6E] mb-4">
          <CheckCircle2 className="size-8" />
        </div>
        <h3 className="text-base font-bold text-[#10233F]">Đặt lịch thành công!</h3>
        <p className="mt-2 text-xs text-[#65758B] max-w-xs leading-relaxed">
          Yêu cầu đặt lịch đã được ghi nhận. Chuyên viên tư vấn của Vinhomes sẽ liên hệ xác nhận trong thời gian sớm nhất.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitSuccess(false)}
          className="mt-5 text-xs font-bold text-[#C89B3C] hover:text-[#061B3A] transition-colors"
        >
          Đặt lịch hẹn khác
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Họ tên */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-bold text-[#10233F] mb-1.5 uppercase tracking-wider">
          Họ và tên *
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#65758B]">
            <User className="size-4" />
          </span>
          <input
            id="fullName"
            type="text"
            placeholder="Nguyễn Văn A"
            {...register("fullName")}
            className={`w-full bg-[#F6F8FB] border rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#10233F] placeholder:text-[#65758B]/50 outline-none transition-colors ${
              errors.fullName ? "border-red-500 focus:border-red-500" : "border-[#E5EAF2] focus:border-[#C89B3C]"
            }`}
          />
        </div>
        {errors.fullName && (
          <p className="mt-1 text-[11px] text-red-500">{errors.fullName.message}</p>
        )}
      </div>

      {/* Số điện thoại */}
      <div>
        <label htmlFor="phone" className="block text-xs font-bold text-[#10233F] mb-1.5 uppercase tracking-wider">
          Số điện thoại *
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#65758B]">
            <Phone className="size-4" />
          </span>
          <input
            id="phone"
            type="tel"
            placeholder="0912345678"
            {...register("phone")}
            className={`w-full bg-[#F6F8FB] border rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#10233F] placeholder:text-[#65758B]/50 outline-none transition-colors ${
              errors.phone ? "border-red-500 focus:border-red-500" : "border-[#E5EAF2] focus:border-[#C89B3C]"
            }`}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-[11px] text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Dự án quan tâm */}
      <div>
        <label htmlFor="project" className="block text-xs font-bold text-[#10233F] mb-1.5 uppercase tracking-wider">
          Dự án quan tâm *
        </label>
        <select
          id="project"
          {...register("project")}
          className={`w-full bg-[#F6F8FB] border rounded-xl px-3 py-2.5 text-xs text-[#10233F] outline-none transition-colors ${
            errors.project ? "border-red-500 focus:border-red-500" : "border-[#E5EAF2] focus:border-[#C89B3C]"
          }`}
        >
          <option value="">-- Chọn dự án --</option>
          <option value="Vinhomes Ocean Park">Vinhomes Ocean Park</option>
          <option value="Vinhomes Smart City">Vinhomes Smart City</option>
          <option value="Vinhomes Grand Park">Vinhomes Grand Park</option>
          <option value="Vinhomes Royal Island">Vinhomes Royal Island</option>
          <option value="Dự án khác">Dự án khác</option>
        </select>
        {errors.project && (
          <p className="mt-1 text-[11px] text-red-500">{errors.project.message}</p>
        )}
      </div>

      {/* Thời gian mong muốn */}
      <div>
        <label htmlFor="preferredTime" className="block text-xs font-bold text-[#10233F] mb-1.5 uppercase tracking-wider">
          Thời gian mong muốn *
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#65758B]">
            <Calendar className="size-4" />
          </span>
          <select
            id="preferredTime"
            {...register("preferredTime")}
            className={`w-full bg-[#F6F8FB] border rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#10233F] outline-none transition-colors ${
              errors.preferredTime ? "border-red-500 focus:border-red-500" : "border-[#E5EAF2] focus:border-[#C89B3C]"
            }`}
          >
            <option value="">-- Chọn khung thời gian --</option>
            <option value="Trong tuần này">Trong tuần này</option>
            <option value="Trong tuần tới">Trong tuần tới</option>
            <option value="Cuối tuần">Cuối tuần này/tới</option>
            <option value="Trong tháng này">Trong tháng này</option>
          </select>
        </div>
        {errors.preferredTime && (
          <p className="mt-1 text-[11px] text-red-500">{errors.preferredTime.message}</p>
        )}
      </div>

      {/* Ghi chú */}
      <div>
        <label htmlFor="note" className="block text-xs font-bold text-[#10233F] mb-1.5 uppercase tracking-wider">
          Ghi chú
        </label>
        <div className="relative">
          <span className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none text-[#65758B]">
            <FileText className="size-4" />
          </span>
          <textarea
            id="note"
            rows={2}
            placeholder="Nhu cầu chi tiết (ví dụ: căn 2PN, hướng Đông Nam...)"
            {...register("note")}
            className="w-full bg-[#F6F8FB] border border-[#E5EAF2] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#10233F] placeholder:text-[#65758B]/50 outline-none focus:border-[#C89B3C] transition-colors resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#C89B3C] to-[#D8B15A] text-white py-3 rounded-xl text-xs font-bold tracking-wider hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none uppercase shadow-md shadow-[#C89B3C]/10"
      >
        {isSubmitting ? "Đang gửi yêu cầu..." : "Gửi yêu cầu đăng ký"}
      </button>
    </form>
  );
}
