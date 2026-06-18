"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, CheckCircle2 } from "lucide-react";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

const schema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
});

type FormData = z.infer<typeof schema>;

export function ProjectQuickLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Quick lead:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-xl bg-white/10 p-4 text-center">
        <CheckCircle2 className="mx-auto size-8 text-[#0F9F6E]" />
        <p className="mt-2 text-sm font-bold text-[#D8B15A]">Cảm ơn quý khách</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2.5">
      <div>
        <input
          {...register("fullName")}
          placeholder="Họ và tên"
          aria-label="Họ và tên"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]"
        />
        {errors.fullName && <p className="mt-0.5 text-xs text-red-400">{errors.fullName.message}</p>}
      </div>
      <div>
        <input
          {...register("phone")}
          placeholder="Số điện thoại"
          aria-label="Số điện thoại"
          className="w-full rounded-lg border border-white/20 bg-white/10 px-3.5 py-2.5 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]"
        />
        {errors.phone && <p className="mt-0.5 text-xs text-red-400">{errors.phone.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-gold w-full gap-2 py-2.5 text-sm">
        <Phone className="size-3.5" aria-hidden />
        Tư vấn nhanh
      </button>
    </form>
  );
}
