"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, revealTransition } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "500+", label: "Bài viết" },
  { value: "20+", label: "Chuyên mục" },
  { value: "100.000+", label: "Lượt đọc" },
];

export function NewsHero() {
  return (
    <section className="relative overflow-hidden bg-[#061B3A]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/news/news-hero.jpg"
          alt="Tin tức Vinhomes - tổng hợp tin tức bất động sản cao cấp"
          fill
          priority
          sizes="100vw"
          className="hero-image object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,27,58,0.92)_0%,rgba(6,27,58,0.60)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-[380px] max-w-[1240px] flex-col items-center justify-center px-4 text-center sm:px-6 lg:h-[460px]">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...revealTransition, delay: 0 }}
        >
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-white/70 transition hover:text-[#D8B15A]"
              >
                Trang chủ
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li className="font-bold text-[#D8B15A]">Tin tức</li>
          </ol>
        </motion.nav>

        {/* Heading */}
        <motion.h1
          className="mt-6 text-4xl font-black sm:text-5xl lg:text-6xl"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...revealTransition, delay: 0.1 }}
        >
          <span className="text-white">Tin tức </span>
          <span className="text-[#D8B15A]">Vinhomes</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ ...revealTransition, delay: 0.2 }}
        >
          Cập nhật thị trường, dự án, chính sách bán hàng, xu hướng đầu tư và phong cách sống từ Vinhomes.
        </motion.p>

        {/* Stats chips */}
        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeUp}
              transition={revealTransition}
              className="flex items-center gap-3 rounded-2xl border border-[#C89B3C]/20 bg-[#08254D] px-6 py-3"
            >
              <span className="text-xl font-black text-[#D8B15A]">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-wide text-white/80">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
