"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";

const schema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z
    .string()
    .regex(
      /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/,
      "Số điện thoại không hợp lệ"
    ),
});

type FormData = z.infer<typeof schema>;

export function ArticleQuickConsultForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("ArticleQuickConsult:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-white/10 p-4 text-center">
        <p className="text-sm font-bold text-[#D8B15A]">
          Cảm ơn quý khách
        </p>
        <p className="mt-1 text-xs text-white/70">
          Chuyên viên tư vấn sẽ liên hệ trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div>
        <input
          {...register("fullName")}
          placeholder="Họ và tên"
          aria-label="Họ và tên"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]"
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>
        )}
      </div>
      <div>
        <input
          {...register("phone")}
          placeholder="Số điện thoại"
          aria-label="Số điện thoại"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]"
        />
        {errors.phone && (
          <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold w-full gap-2 py-3 text-sm"
      >
        <Send className="size-4" aria-hidden />
        GỬI YÊU CẦU
      </button>
    </form>
  );
}
