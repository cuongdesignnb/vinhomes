"use client";

import { Reveal } from "@/components/site/Reveal";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Mail } from "lucide-react";
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
  "h-12 w-full rounded-xl border border-white/15 bg-white/8 px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25";

/* ------------------------------------------------------------------ */
/*  Benefits                                                           */
/* ------------------------------------------------------------------ */

const benefits = [
  "Thông tin chính xác",
  "Cập nhật nhanh chóng",
  "Hoàn toàn miễn phí",
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function NewsletterStrip() {
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
    <section className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="rounded-[20px] border border-[#C89B3C]/15 bg-[#061B3A] p-6 sm:p-10">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              {/* ---- Left ---- */}
              <div>
                <Mail
                  aria-hidden
                  className="mb-3 size-8 text-[#C89B3C]"
                />
                <h2 className="text-xl font-black text-white sm:text-2xl">
                  Nhận bản tin thị trường và ưu đãi mới nhất
                </h2>
                <p className="mt-2 max-w-lg text-sm text-white/70">
                  Đăng ký để nhận thông tin dự án, chính sách bán hàng và xu hướng đầu tư từ Vinhomes.
                </p>
              </div>

              {/* ---- Right ---- */}
              <div className="w-full lg:w-auto">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-3 sm:flex-row sm:items-start"
                >
                  <div className="flex-1">
                    <label className="sr-only" htmlFor="nl-name">
                      Họ và tên
                    </label>
                    <input
                      id="nl-name"
                      className={fieldClass}
                      placeholder="Họ và tên"
                      {...register("fullName")}
                    />
                    {errors.fullName ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.fullName.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex-1">
                    <label className="sr-only" htmlFor="nl-contact">
                      Email hoặc Số điện thoại
                    </label>
                    <input
                      id="nl-contact"
                      className={fieldClass}
                      placeholder="Email hoặc Số điện thoại"
                      {...register("contact")}
                    />
                    {errors.contact ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.contact.message}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold h-12 whitespace-nowrap px-6 font-black"
                  >
                    ĐĂNG KÝ NHẬN TIN
                  </button>
                </form>

                {/* Success */}
                {success ? (
                  <div className="mt-3 flex items-center gap-2 text-sm font-bold text-emerald-400">
                    <CheckCircle2 aria-hidden className="size-4" />
                    Đăng ký thành công! Cảm ơn bạn đã quan tâm.
                  </div>
                ) : null}

                {/* Benefits */}
                <div className="mt-4 flex flex-wrap gap-4">
                  {benefits.map((label) => (
                    <span
                      key={label}
                      className="flex items-center gap-1.5 text-xs text-white/60"
                    >
                      <CheckCircle2
                        aria-hidden
                        className="size-3.5 text-[#0F9F6E]"
                      />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
