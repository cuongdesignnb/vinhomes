"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const aboutConsultSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z
    .string()
    .regex(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, "Số điện thoại không hợp lệ"),
  area: z.string().optional(),
  propertyType: z.string().optional(),
  message: z.string().optional(),
});

export type AboutConsultFormValues = z.infer<typeof aboutConsultSchema>;

export async function submitConsultation(data: AboutConsultFormValues) {
  console.log("About consultation:", data);
}

const fieldClass =
  "h-11 rounded-lg border border-[#E8DDC8] bg-white px-3 text-sm text-[#10233F] outline-none transition placeholder:text-[#9AA6B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25";

export function AboutConsultForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AboutConsultFormValues>({
    resolver: zodResolver(aboutConsultSchema),
    defaultValues: { fullName: "", phone: "", area: "", propertyType: "", message: "" },
  });

  const onSubmit = async (data: AboutConsultFormValues) => {
    await submitConsultation(data);
    setSuccess(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="sr-only" htmlFor="about-full-name">Họ và tên</label>
        <input id="about-full-name" className={fieldClass} placeholder="Họ và tên" {...register("fullName")} />
        {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
      </div>
      <div>
        <label className="sr-only" htmlFor="about-phone">Số điện thoại</label>
        <input id="about-phone" className={fieldClass} placeholder="Số điện thoại" {...register("phone")} />
        {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
      </div>
      <label className="sr-only" htmlFor="about-area">Khu vực quan tâm</label>
      <select id="about-area" className={fieldClass} {...register("area")}>
        <option value="">Khu vực quan tâm</option>
        <option>Hà Nội</option>
        <option>TP.HCM</option>
        <option>Hải Phòng</option>
        <option>Quảng Ninh</option>
      </select>
      <label className="sr-only" htmlFor="about-type">Loại hình quan tâm</label>
      <select id="about-type" className={fieldClass} {...register("propertyType")}>
        <option value="">Loại hình quan tâm</option>
        <option>Căn hộ</option>
        <option>Biệt thự</option>
        <option>Shophouse</option>
        <option>Nhà phố</option>
      </select>
      <div className="sm:col-span-2">
        <label className="sr-only" htmlFor="about-message">Nhu cầu của bạn</label>
        <textarea
          id="about-message"
          className={`${fieldClass} min-h-20 w-full py-3`}
          placeholder="Nhu cầu của bạn"
          {...register("message")}
        />
      </div>
      {success ? (
        <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700 sm:col-span-2">
          <CheckCircle2 aria-hidden className="size-5" />
          Cảm ơn quý khách! Chuyên viên tư vấn sẽ liên hệ trong thời gian sớm nhất.
        </div>
      ) : null}
      <button type="submit" disabled={isSubmitting} className="btn-gold h-12 sm:col-span-2">
        Đăng ký nhận tư vấn
        <Send aria-hidden className="size-4" />
      </button>
    </form>
  );
}
