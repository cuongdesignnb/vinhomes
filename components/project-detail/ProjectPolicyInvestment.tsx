"use client";

import { Gift, Percent, Clock, TrendingUp, BarChart3, Home, ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, revealTransition } from "@/lib/motion";
import type { ProjectPolicy, ProjectInvestmentReason } from "@/features/projects/project-detail.types";

type Props = {
  policies: ProjectPolicy[];
  investmentReasons: ProjectInvestmentReason[];
};

export function ProjectPolicyInvestment({ policies, investmentReasons }: Props) {
  return (
    <section id="chinh-sach" className="scroll-mt-28 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6">
        <h2 className="section-title mb-10 text-2xl font-black text-[#061B3A] sm:text-3xl">
          Chính sách và tiềm năng đầu tư
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Policies column */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#061B3A]">
              Chính sách bán hàng hấp dẫn
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3"
            >
              {policies.map((pol, idx) => {
                const icons = [Percent, Gift, Clock];
                const Icon = icons[idx] || Gift;
                return (
                  <motion.div
                    key={pol.id}
                    variants={fadeUp}
                    transition={revealTransition}
                    className="flex items-center gap-4 rounded-[16px] border border-[#E8DDC8] bg-[#FAF8F3] p-4"
                  >
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-[#C89B3C] shadow-sm">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#061B3A]">{pol.title}</p>
                      <p className="text-xs text-[#65758B]">{pol.description}</p>
                    </div>
                    <p className="text-xl font-black text-[#C89B3C]">{pol.value}</p>
                  </motion.div>
                );
              })}
            </motion.div>
            <a
              href="#lien-he"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition hover:text-[#061B3A]"
            >
              Xem chi tiết chính sách
              <ArrowRight className="size-4" />
            </a>
          </div>

          {/* Investment column */}
          <div>
            <h3 className="mb-5 text-lg font-bold text-[#061B3A]">
              Tiềm năng đầu tư vượt trội
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {investmentReasons.map((inv, idx) => {
                const icons = [TrendingUp, BarChart3, Home, Zap];
                const Icon = icons[idx] || TrendingUp;
                return (
                  <motion.div
                    key={inv.id}
                    variants={fadeUp}
                    transition={revealTransition}
                    className="rounded-[16px] border border-[#E8DDC8] bg-[#FAF8F3] p-4 text-center"
                  >
                    <Icon className="mx-auto size-6 text-[#C89B3C]" aria-hidden />
                    <p className="mt-2 text-xs font-bold text-[#061B3A]">{inv.title}</p>
                    <p className="mt-1 text-2xl font-black text-[#C89B3C]">{inv.value}</p>
                    <p className="mt-0.5 text-xs text-[#65758B]">{inv.description}</p>
                  </motion.div>
                );
              })}
            </motion.div>
            <a
              href="#lien-he"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#C89B3C] transition hover:text-[#061B3A]"
            >
              Tư vấn đầu tư ngay
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
