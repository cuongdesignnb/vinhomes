"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

/* ------------------------------------------------------------------ */
/*  Validation                                                         */
/* ------------------------------------------------------------------ */

const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;

const consultSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z.string().regex(phoneRegex, "Số điện thoại không hợp lệ"),
  email: z.string().email("Email không hợp lệ").or(z.literal("")),
  project: z.string().optional(),
  message: z.string().optional(),
});

type ConsultValues = z.infer<typeof consultSchema>;

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const fieldClass =
  "h-11 w-full rounded-xl border border-[#E8DDC8] bg-white px-4 text-sm text-[#10233F] outline-none transition placeholder:text-[#9AA6B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const projectOptions = [
  "Vinhomes Ocean Park",
  "Vinhomes Smart City",
  "Vinhomes Grand Park",
  "Vinhomes Royal Island",
  "Vinhomes Cổ Loa",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function NewsConsultForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultValues>({
    resolver: zodResolver(consultSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      project: "",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultValues) => {
    console.log("Consultation request:", data);
    setSuccess(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {/* Full Name */}
      <div>
        <label className="sr-only" htmlFor="ncf-name">
          Họ và tên
        </label>
        <input
          id="ncf-name"
          className={fieldClass}
          placeholder="Họ và tên"
          {...register("fullName")}
        />
        {errors.fullName ? (
          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
        ) : null}
      </div>

      {/* Phone */}
      <div>
        <label className="sr-only" htmlFor="ncf-phone">
          Số điện thoại
        </label>
        <input
          id="ncf-phone"
          className={fieldClass}
          placeholder="Số điện thoại"
          {...register("phone")}
        />
        {errors.phone ? (
          <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
        ) : null}
      </div>

      {/* Email */}
      <div>
        <label className="sr-only" htmlFor="ncf-email">
          Email
        </label>
        <input
          id="ncf-email"
          type="email"
          className={fieldClass}
          placeholder="Email (không bắt buộc)"
          {...register("email")}
        />
        {errors.email ? (
          <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
        ) : null}
      </div>

      {/* Project select */}
      <div>
        <label className="sr-only" htmlFor="ncf-project">
          Quan tâm dự án
        </label>
        <select
          id="ncf-project"
          className={`${fieldClass} appearance-none`}
          {...register("project")}
        >
          <option value="">Quan tâm dự án</option>
          {projectOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="sr-only" htmlFor="ncf-message">
          Nhu cầu của bạn là gì?
        </label>
        <textarea
          id="ncf-message"
          className={`${fieldClass} min-h-[80px] py-3`}
          placeholder="Nhu cầu của bạn là gì?"
          {...register("message")}
        />
      </div>

      {/* Success */}
      {success ? (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-bold text-emerald-700">
          <CheckCircle2 aria-hidden className="size-5 shrink-0" />
          Cảm ơn quý khách. Chuyên viên tư vấn sẽ liên hệ trong thời gian sớm nhất.
        </div>
      ) : null}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold h-12 w-full font-black"
      >
        ĐĂNG KÝ NHẬN TƯ VẤN
      </button>
    </form>
  );
}

export default NewsConsultForm;
