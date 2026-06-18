"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

const schema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").optional().or(z.literal("")),
  demand: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const demandOptions = [
  "Mua để ở",
  "Đầu tư sinh lời",
  "Tìm hiểu thị trường",
  "Khác",
];

export function ProjectLeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Project lead:", data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-[18px] bg-white/10 p-6 text-center">
        <CheckCircle2 className="mx-auto size-10 text-[#0F9F6E]" />
        <p className="mt-3 text-lg font-bold text-[#D8B15A]">Cảm ơn quý khách</p>
        <p className="mt-1 text-sm text-white/70">
          Chuyên viên tư vấn sẽ liên hệ trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <input {...register("fullName")} placeholder="Họ và tên" aria-label="Họ và tên" className={fieldClass} />
          {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>}
        </div>
        <div>
          <input {...register("phone")} placeholder="Số điện thoại" aria-label="Số điện thoại" className={fieldClass} />
          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <input {...register("email")} placeholder="Email" aria-label="Email" className={fieldClass} />
        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
      </div>
      <div>
        <select {...register("demand")} aria-label="Nhu cầu quan tâm" className={`${fieldClass} appearance-none`} defaultValue="">
          <option value="" disabled className="text-[#061B3A]">Nhu cầu quan tâm</option>
          {demandOptions.map((opt) => (
            <option key={opt} value={opt} className="text-[#061B3A]">{opt}</option>
          ))}
        </select>
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-gold w-full gap-2 py-3.5 text-sm">
        <Send className="size-4" aria-hidden />
        ĐĂNG KÝ NHẬN TƯ VẤN
      </button>
      <p className="text-center text-xs text-white/50">
        Thông tin của bạn được bảo mật tuyệt đối
      </p>
    </form>
  );
}
