"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Home, Tag, Phone, FileText } from "lucide-react";
import { fadeUp, staggerContainer, revealTransition } from "@/lib/motion";
import type { ProjectDetail } from "@/features/projects/project-detail.types";

type Props = { project: ProjectDetail };

export function ProjectHero({ project }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#061B3A]">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={project.heroImage}
          alt={project.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,27,58,0.92)_0%,rgba(6,27,58,0.55)_100%)]" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[480px] max-w-[1240px] flex-col justify-center px-4 py-16 sm:px-6 lg:min-h-[560px] lg:py-20"
      >
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0 }}
        >
          <ol className="flex items-center gap-2 text-sm">
            <li><Link href="/" className="text-white/70 hover:text-[#D8B15A] transition">Trang chủ</Link></li>
            <li className="text-white/40">/</li>
            <li><Link href="/du-an" className="text-white/70 hover:text-[#D8B15A] transition">Dự án</Link></li>
            <li className="text-white/40">/</li>
            <li className="font-bold text-[#D8B15A]">Chi tiết dự án</li>
          </ol>
        </motion.nav>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.1 }}
          className="mt-5 max-w-[700px] text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.15]"
        >
          Vinhomes{" "}
          <span className="text-[#D8B15A]">Ocean Park</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.2 }}
          className="mt-4 max-w-[580px] text-base leading-relaxed text-white/80 sm:text-lg"
        >
          {project.subtitle}
        </motion.p>

        {/* Meta Badges */}
        <motion.div
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.3 }}
          className="mt-6 flex flex-wrap gap-2.5"
        >
          <span className="flex items-center gap-1.5 rounded-lg bg-[#0F9F6E]/90 px-3 py-1.5 text-xs font-black text-white">
            <FileText className="size-3.5" aria-hidden />
            {project.statusLabel}
          </span>
          <span className="flex items-center gap-1.5 rounded-lg bg-white/12 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            <MapPin className="size-3.5" aria-hidden />
            {project.location}
          </span>
          <span className="flex items-center gap-1.5 rounded-lg bg-white/12 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
            <Home className="size-3.5" aria-hidden />
            {project.typeText}
          </span>
          <span className="flex items-center gap-1.5 rounded-lg bg-[#C89B3C]/20 border border-[#C89B3C]/30 px-3 py-1.5 text-xs font-black text-[#D8B15A]">
            <Tag className="size-3.5" aria-hidden />
            {project.priceText}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          transition={{ ...revealTransition, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href="#lien-he" className="btn-gold px-7 py-3.5 text-sm">
            <Phone className="size-4" aria-hidden />
            Nhận bảng giá
          </a>
          <a href="#lien-he" className="btn-outline-light px-7 py-3.5 text-sm">
            Đăng ký tư vấn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
