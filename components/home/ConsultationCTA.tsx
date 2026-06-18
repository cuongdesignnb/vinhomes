"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, ListChecks, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const consultationSchema = z.object({
  fullName: z.string().min(2, "Vui lòng nhập họ và tên"),
  phone: z
    .string()
    .min(9, "Vui lòng nhập số điện thoại")
    .regex(/^(0|\+84)(3|5|7|8|9)\d{8}$/, "Số điện thoại Việt Nam chưa hợp lệ"),
  area: z.string().min(1, "Vui lòng chọn khu vực"),
  propertyType: z.string().min(1, "Vui lòng chọn loại hình"),
  need: z.string().optional(),
});

type ConsultationForm = z.infer<typeof consultationSchema>;

const fields = "h-11 rounded-lg border border-[#E8DDC8] bg-white px-3 text-sm text-[#10233F] outline-none transition placeholder:text-[#9AA6B5] focus:border-[#C89B3C] focus:ring-2 focus:ring-[#C89B3C]/25";

export function ConsultationCTA() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultationForm>({
    resolver: zodResolver(consultationSchema),
    defaultValues: { fullName: "", phone: "", area: "", propertyType: "", need: "" },
  });

  const onSubmit = (data: ConsultationForm) => {
    console.log("Consultation request", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-[#061B3A]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,177,90,0.22),transparent_36%),linear-gradient(135deg,#061B3A_0%,#08254D_55%,#061B3A_100%)]" />
      <div className="relative mx-auto grid max-w-[1240px] gap-8 px-4 py-12 text-white sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D8B15A]">Tư vấn dự án</p>
          <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
            Nhận tư vấn dự án phù hợp ngay hôm nay
          </h2>
          <ul className="mt-6 grid gap-3 text-sm text-white/82">
            {[
              "Tư vấn lựa chọn dự án phù hợp",
              "Báo giá chi tiết & cập nhật mới nhất",
              "Hỗ trợ tham quan thực tế dự án",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <ListChecks aria-hidden className="size-5 text-[#D8B15A]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-4 rounded-2xl border border-white/12 bg-white/95 p-5 text-[#10233F] shadow-[0_24px_70px_rgba(0,0,0,0.22)] sm:grid-cols-2"
        >
          <div>
            <label className="sr-only" htmlFor="fullName">Họ và tên</label>
            <input id="fullName" className={fields} placeholder="Họ và tên" {...register("fullName")} />
            {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName.message}</p> : null}
          </div>
          <div>
            <label className="sr-only" htmlFor="phone">Số điện thoại</label>
            <input id="phone" className={fields} placeholder="Số điện thoại" {...register("phone")} />
            {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p> : null}
          </div>
          <div>
            <label className="sr-only" htmlFor="area">Chọn khu vực</label>
            <select id="area" className={fields} {...register("area")}>
              <option value="">Chọn khu vực</option>
              <option value="ha-noi">Hà Nội</option>
              <option value="tp-hcm">TP.HCM</option>
              <option value="hai-phong">Hải Phòng</option>
              <option value="quang-ninh">Quảng Ninh</option>
            </select>
            {errors.area ? <p className="mt-1 text-xs text-red-600">{errors.area.message}</p> : null}
          </div>
          <div>
            <label className="sr-only" htmlFor="propertyType">Chọn loại hình</label>
            <select id="propertyType" className={fields} {...register("propertyType")}>
              <option value="">Chọn loại hình</option>
              <option value="can-ho">Căn hộ</option>
              <option value="biet-thu">Biệt thự</option>
              <option value="shophouse">Shophouse</option>
              <option value="nha-pho">Nhà phố</option>
            </select>
            {errors.propertyType ? <p className="mt-1 text-xs text-red-600">{errors.propertyType.message}</p> : null}
          </div>
          <div className="sm:col-span-2">
            <label className="sr-only" htmlFor="need">Nhu cầu của bạn</label>
            <textarea
              id="need"
              className={`${fields} min-h-24 w-full py-3`}
              placeholder="Nhu cầu của bạn"
              {...register("need")}
            />
          </div>
          {submitted ? (
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700 sm:col-span-2">
              <CheckCircle2 aria-hidden className="size-5" />
              Cảm ơn bạn. Chuyên viên sẽ liên hệ trong thời gian sớm nhất.
            </div>
          ) : null}
          <button type="submit" className="btn-gold h-12 sm:col-span-2">
            Đăng ký nhận tư vấn
            <Send aria-hidden className="size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
