"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const phoneRegex = /^(0|\+84)(3|5|7|8|9)[0-9]{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  contact: z
    .string()
    .min(1, "Vui lòng nhập email hoặc số điện thoại")
    .refine(
      (val) => emailRegex.test(val) || phoneRegex.test(val),
      "Email hoặc số điện thoại không hợp lệ"
    ),
});

type FormData = z.infer<typeof schema>;

export function ArticleNewsletterStrip() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("ArticleNewsletter:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-12 sm:py-14">
      <Reveal>
        <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
          <div className="rounded-[20px] bg-[#061B3A] px-6 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto max-w-[800px] text-center">
              <Mail className="mx-auto size-8 text-[#D8B15A]" aria-hidden />
              <h2 className="mt-4 text-xl font-black text-white sm:text-2xl">
                Nhận bản tin thị trường và ưu đãi mới nhất
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Đăng ký để nhận thông tin về xu hướng thị trường,
                báo cáo chuyên sâu và các ưu đãi đặc biệt từ Vinhomes.
              </p>

              {submitted ? (
                <div className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-white/10 px-4 py-3">
                  <CheckCircle2 className="size-5 text-[#0F9F6E]" />
                  <span className="text-sm font-bold text-white">
                    Đăng ký thành công. Cảm ơn quý khách!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-6 flex flex-col gap-3 sm:flex-row"
                >
                  <div className="flex-1">
                    <input
                      {...register("fullName")}
                      placeholder="Họ và tên"
                      aria-label="Họ và tên"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-left text-xs text-red-400">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      {...register("contact")}
                      placeholder="Email hoặc SĐT"
                      aria-label="Email hoặc số điện thoại"
                      className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#D8B15A]"
                    />
                    {errors.contact && (
                      <p className="mt-1 text-left text-xs text-red-400">
                        {errors.contact.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gold shrink-0 gap-2 px-6 py-3 text-sm"
                  >
                    <Send className="size-4" aria-hidden />
                    ĐĂNG KÝ NHẬN TIN
                  </button>
                </form>
              )}

              <p className="mt-4 text-xs text-white/50">
                Chúng tôi cam kết bảo mật thông tin của bạn.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
