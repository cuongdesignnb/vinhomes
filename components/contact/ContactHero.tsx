"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, FileText, Clock, Zap, CheckCircle2 } from "lucide-react";
import { fadeUp, staggerContainer, revealTransition } from "@/lib/motion";

type Props = { heroImage: string; heroImageAlt: string };

const badges = [
  { label: "Tư vấn 24/7", icon: Clock },
  { label: "Phản hồi nhanh", icon: Zap },
  { label: "Thông tin chính xác", icon: CheckCircle2 },
];

export function ContactHero({ heroImage, heroImageAlt }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#061B3A]">
      <motion.div initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: "easeOut" }} className="absolute inset-0">
        <Image src={heroImage} alt={heroImageAlt} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,58,0.92)_0%,rgba(6,27,58,0.5)_100%)]" />
      </motion.div>

      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="relative mx-auto flex min-h-[440px] max-w-[1240px] flex-col justify-center px-4 py-16 sm:px-6 lg:min-h-[520px] lg:py-20">
        <motion.nav aria-label="Breadcrumb" variants={fadeUp} transition={{ ...revealTransition, delay: 0 }}>
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-white/70 hover:text-[#D8B15A] transition">Trang chủ</Link></li>
            <li className="text-white/40">/</li>
            <li className="font-bold text-[#D8B15A]">Liên hệ</li>
          </ol>
        </motion.nav>

        <motion.h1 variants={fadeUp} transition={{ ...revealTransition, delay: 0.1 }} className="mt-5 max-w-[600px] text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.15]">
          Liên hệ <span className="text-[#D8B15A]">Vinhomes</span>
        </motion.h1>

        <motion.p variants={fadeUp} transition={{ ...revealTransition, delay: 0.2 }} className="mt-4 max-w-[560px] text-base leading-relaxed text-white/80 sm:text-lg">
          Kết nối với đội ngũ chuyên viên để nhận tư vấn dự án, bảng giá, chính sách bán hàng và hỗ trợ tham quan thực tế.
        </motion.p>

        <motion.div variants={fadeUp} transition={{ ...revealTransition, delay: 0.3 }} className="mt-7 flex flex-wrap gap-3">
          <a href="tel:19001234656" className="btn-gold px-7 py-3.5 text-sm"><Phone className="size-4" aria-hidden />Gọi ngay</a>
          <a href="#gui-yeu-cau" className="btn-outline-light px-7 py-3.5 text-sm"><FileText className="size-4" aria-hidden />Đăng ký tư vấn</a>
        </motion.div>

        <motion.div variants={fadeUp} transition={{ ...revealTransition, delay: 0.4 }} className="mt-7 flex flex-wrap gap-2.5">
          {badges.map((b) => {
            const Icon = b.icon;
            return (
              <span key={b.label} className="flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                <Icon className="size-3.5 text-[#D8B15A]" aria-hidden />{b.label}
              </span>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
