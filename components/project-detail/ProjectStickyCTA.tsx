"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, FileText } from "lucide-react";

export function ProjectStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Desktop floating buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 lg:flex"
          >
            <a
              href="#lien-he"
              className="flex items-center gap-2 rounded-xl bg-[#C89B3C] px-4 py-3 text-xs font-black text-[#061B3A] shadow-lg transition hover:bg-[#D8B15A]"
            >
              <FileText className="size-4" aria-hidden />
              Nhận bảng giá
            </a>
            <a
              href="tel:19001234656"
              className="flex items-center gap-2 rounded-xl bg-[#061B3A] px-4 py-3 text-xs font-black text-[#D8B15A] shadow-lg transition hover:bg-[#08254D]"
            >
              <Phone className="size-4" aria-hidden />
              Gọi tư vấn
            </a>
          </motion.div>

          {/* Mobile bottom bar */}
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            exit={{ y: 80 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E8DDC8] bg-white/95 px-4 py-3 backdrop-blur lg:hidden"
          >
            <div className="flex gap-3">
              <a
                href="#lien-he"
                className="btn-gold flex-1 justify-center py-3 text-sm"
              >
                Nhận bảng giá
              </a>
              <a
                href="tel:19001234656"
                className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-[#061B3A] bg-[#061B3A] py-3 text-sm font-black text-white"
              >
                <Phone className="size-4" aria-hidden />
                Tư vấn ngay
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
