"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { fadeUp, staggerContainer, revealTransition } from "@/lib/motion";
import type { ArticleStat } from "@/features/articles/article.types";

type Props = { stats: ArticleStat[] };

export function ArticleStatCards({ stats }: Props) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-4 md:grid-cols-3"
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          variants={fadeUp}
          transition={revealTransition}
          className="rounded-[18px] border border-[#E8DDC8] bg-white p-5 text-center shadow-[0_4px_16px_rgba(6,27,58,0.05)]"
        >
          <TrendingUp
            className="mx-auto size-6 text-[#C89B3C]"
            aria-hidden
          />
          <p className="mt-3 text-3xl font-black text-[#C89B3C]">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-bold text-[#061B3A]">
            {stat.label}
          </p>
          <p className="mt-1 text-xs text-[#65758B]">{stat.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
