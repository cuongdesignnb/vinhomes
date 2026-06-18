"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { useAdminAuthStore } from "@/features/admin/auth/admin-auth.store";
import { Lock, Mail, Feather, Eye, EyeOff, AlertCircle } from "lucide-react";

const loginSchema = z.object({
  email: z.string().email("Email không đúng định dạng"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

type LoginFields = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const login = useAdminAuthStore((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFields) => {
    setApiError(null);
    setSubmitting(true);
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!API_BASE_URL) {
      // Offline mock login fallback
      setTimeout(() => {
        if (data.email === "admin@vinhomes.local" && data.password === "password") {
          login("mock_token", {
            id: "1",
            name: "Vinhomes Admin (Mock)",
            email: data.email,
            roles: ["SUPER_ADMIN"],
          });
          router.push("/admin/dashboard");
        } else {
          setApiError("Tài khoản hoặc mật khẩu không đúng (Chế độ offline)");
          setSubmitting(false);
        }
      }, 800);
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      const payload = await res.json();

      if (!res.ok) {
        setApiError(payload.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản.");
        setSubmitting(false);
        return;
      }

      if (payload.success && payload.data) {
        login(payload.data.token, {
          id: String(payload.data.user.id),
          name: payload.data.user.name,
          email: payload.data.user.email,
          roles: payload.data.user.roles,
          avatar: payload.data.user.avatar,
        });
        router.push("/admin/dashboard");
      } else {
        setApiError("Có lỗi xảy ra, vui lòng thử lại sau.");
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Login request error:", error);
      setApiError("Không thể kết nối đến máy chủ API.");
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF8F3] flex items-center justify-center p-4">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,155,60,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,27,58,0.04),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-[420px] bg-white rounded-2xl border border-[#E5EAF2] shadow-[0_20px_50px_rgba(6,27,58,0.06)] p-6 md:p-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="size-12 rounded-full bg-[#061B3A] flex items-center justify-center text-[#C89B3C] shadow-lg mb-4">
            <Feather className="size-6" />
          </div>
          <h1 className="text-2xl font-black text-[#061B3A] tracking-tight">
            QUẢN TRỊ <span className="text-[#C89B3C]">VINHOMES</span>
          </h1>
          <p className="text-sm text-[#65758B] mt-1">
            Chào mừng trở lại. Vui lòng đăng nhập hệ thống.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* API Error Alert */}
          {apiError && (
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-xl p-3.5 text-red-800 text-xs font-medium">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <span>{apiError}</span>
            </div>
          )}

          {/* Email input */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase text-[#10233F] tracking-wider block">
              Tài khoản Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#65758B] pointer-events-none">
                <Mail className="size-4" />
              </span>
              <input
                {...register("email")}
                type="email"
                placeholder="name@vinhomes.local"
                className={`w-full bg-[#F6F8FB] border rounded-xl py-3 pl-10 pr-4 text-sm text-[#061B3A] outline-none placeholder:text-[#65758B]/60 transition-all ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#E5EAF2] focus:border-[#C89B3C] focus:bg-white"
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[11px] font-bold text-red-600 pl-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password input */}
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-black uppercase text-[#10233F] tracking-wider block">
                Mật khẩu
              </label>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-[#65758B] pointer-events-none">
                <Lock className="size-4" />
              </span>
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className={`w-full bg-[#F6F8FB] border rounded-xl py-3 pl-10 pr-10 text-sm text-[#061B3A] outline-none placeholder:text-[#65758B]/60 transition-all ${
                  errors.password
                    ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                    : "border-[#E5EAF2] focus:border-[#C89B3C] focus:bg-white"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#65758B] hover:text-[#061B3A] transition-colors"
              >
                {showPassword ? <EyeOff className="size-4.5" /> : <Eye className="size-4.5" />}
              </button>
            </div>
            {errors.password && (
              <p className="text-[11px] font-bold text-red-600 pl-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full btn-gold h-12 rounded-xl text-sm font-black text-[#061B3A] flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all"
          >
            {submitting ? (
              <div className="size-5 border-2 border-[#061B3A] border-t-transparent rounded-full animate-spin" />
            ) : (
              "Đăng nhập hệ thống"
            )}
          </button>
        </form>

        {/* Demo credentials tip */}
        <div className="mt-8 pt-6 border-t border-[#E5EAF2] text-center">
          <p className="text-[11px] text-[#65758B]">
            Tài khoản demo: <span className="font-bold text-[#061B3A]">admin@vinhomes.local</span>
          </p>
          <p className="text-[11px] text-[#65758B] mt-0.5">
            Mật khẩu: <span className="font-bold text-[#061B3A]">password</span>
          </p>
        </div>
      </div>
    </div>
  );
}
