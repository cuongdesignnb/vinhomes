"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Cuộn lên đầu trang"
          className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full bg-[#C89B3C] text-[#061B3A] shadow-[0_14px_30px_rgba(6,27,58,0.25)] transition hover:bg-[#D8B15A]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ChevronUp aria-hidden className="size-5" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
