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

const newsletterSchema = z
  .object({
    fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
    contact: z.string().min(1, "Vui lòng nhập email hoặc số điện thoại"),
  })
  .refine(
    (data) => {
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
      const isPhone = phoneRegex.test(data.contact);
      return isEmail || isPhone;
    },
    {
      message: "Email hoặc số điện thoại không hợp lệ",
      path: ["contact"],
    },
  );

type NewsletterValues = z.infer<typeof newsletterSchema>;

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */

const fieldClass =
  "h-11 w-full rounded-xl border border-[#E8DDC8] bg-white px-4 text-sm text-[#10233F] outline-none transition placeholder:text-[#9AA6B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25";

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function NewsletterForm() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { fullName: "", contact: "" },
  });

  const onSubmit = async (data: NewsletterValues) => {
    console.log("Newsletter subscription:", data);
    setSuccess(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
      <div>
        <label className="sr-only" htmlFor="nf-name">
          Họ và tên
        </label>
        <input
          id="nf-name"
          className={fieldClass}
          placeholder="Họ và tên"
          {...register("fullName")}
        />
        {errors.fullName ? (
          <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p>
        ) : null}
      </div>

      <div>
        <label className="sr-only" htmlFor="nf-contact">
          Email hoặc Số điện thoại
        </label>
        <input
          id="nf-contact"
          className={fieldClass}
          placeholder="Email hoặc Số điện thoại"
          {...register("contact")}
        />
        {errors.contact ? (
          <p className="mt-1 text-xs text-red-600">{errors.contact.message}</p>
        ) : null}
      </div>

      {success ? (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-bold text-emerald-700 sm:col-span-2">
          <CheckCircle2 aria-hidden className="size-5 shrink-0" />
          Đăng ký thành công! Cảm ơn bạn đã quan tâm.
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-gold h-11 font-black sm:col-span-2"
      >
        ĐĂNG KÝ NHẬN TIN
      </button>
    </form>
  );
}

export default NewsletterForm;
