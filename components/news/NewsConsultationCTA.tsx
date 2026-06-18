"use client";

import { Reveal } from "@/components/site/Reveal";
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
  "h-12 w-full rounded-xl border border-white/15 bg-white/8 px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const bulletPoints = [
  "Tư vấn dự án phù hợp nhu cầu và ngân sách",
  "Cập nhật chính sách và tiến độ mới nhất",
  "Hỗ trợ tận tâm, hoàn toàn miễn phí",
];

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

export function NewsConsultationCTA() {
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
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <Reveal>
          <div className="overflow-hidden rounded-[24px] border border-[#C89B3C]/10 bg-gradient-to-br from-[#061B3A] via-[#08254D] to-[#03152F]">
            <div className="grid lg:grid-cols-2">
              {/* ---- Left: Content ---- */}
              <div className="p-8 sm:p-12">
                <div className="mb-6 h-1 w-12 rounded-full bg-[#C89B3C]" />
                <h2 className="text-2xl font-black text-white sm:text-3xl">
                  Nhận tư vấn dự án phù hợp ngay hôm nay
                </h2>

                <ul className="mt-6 space-y-4">
                  {bulletPoints.map((text) => (
                    <li
                      key={text}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <CheckCircle2
                        aria-hidden
                        className="mt-0.5 size-5 shrink-0 text-[#C89B3C]"
                      />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ---- Right: Form ---- */}
              <div className="bg-white/5 p-8 backdrop-blur-sm sm:p-12">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid gap-4"
                >
                  {/* Full Name */}
                  <div>
                    <label className="sr-only" htmlFor="consult-name">
                      Họ và tên
                    </label>
                    <input
                      id="consult-name"
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

                  {/* Phone */}
                  <div>
                    <label className="sr-only" htmlFor="consult-phone">
                      Số điện thoại
                    </label>
                    <input
                      id="consult-phone"
                      className={fieldClass}
                      placeholder="Số điện thoại"
                      {...register("phone")}
                    />
                    {errors.phone ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.phone.message}
                      </p>
                    ) : null}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="sr-only" htmlFor="consult-email">
                      Email
                    </label>
                    <input
                      id="consult-email"
                      type="email"
                      className={fieldClass}
                      placeholder="Email (không bắt buộc)"
                      {...register("email")}
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-red-400">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>

                  {/* Project select */}
                  <div>
                    <label className="sr-only" htmlFor="consult-project">
                      Quan tâm dự án
                    </label>
                    <select
                      id="consult-project"
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
                    <label className="sr-only" htmlFor="consult-message">
                      Nhu cầu của bạn là gì?
                    </label>
                    <textarea
                      id="consult-message"
                      className={`${fieldClass} min-h-[80px] py-3`}
                      placeholder="Nhu cầu của bạn là gì?"
                      {...register("message")}
                    />
                  </div>

                  {/* Success */}
                  {success ? (
                    <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 px-4 py-3 text-sm font-bold text-emerald-400">
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
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
