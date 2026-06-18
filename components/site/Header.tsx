"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Feather, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Dự án", href: "/du-an" },
  { label: "Phân khu", href: "/#danh-muc" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Chính sách", href: "/#chinh-sach" },
  { label: "Liên hệ", href: "/lien-he" },
];

function Logo() {
  return (
    <Link href="#" className="flex items-center gap-2" aria-label="Vinhomes trang chủ">
      <span className="grid size-10 place-items-center rounded-full bg-[#F8F5EF] text-[#C89B3C]">
        <Feather aria-hidden className="size-5" />
      </span>
      <span className="text-xl font-black uppercase tracking-wide text-[#061B3A]">
        <span className="text-[#C89B3C]">Vin</span>homes
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_12px_30px_rgba(6,27,58,0.12)]" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-4 sm:px-6 lg:h-[74px]">
        <Logo />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Điều hướng chính">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href.startsWith("/") && !item.href.startsWith("/#")
                  ? pathname.startsWith(item.href)
                  : pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-bold uppercase transition hover:text-[#C89B3C] ${
                  isActive ? "text-[#C89B3C]" : "text-[#10233F]"
                }`}
              >
                {item.label}
                {isActive ? (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[#C89B3C]" />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Link href="#consultation" className="btn-gold h-11 px-6">
            Nhận tư vấn
          </Link>
        </div>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-full border border-[#E8DDC8] text-[#061B3A] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[80] overflow-hidden lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#061B3A]/55 backdrop-blur-[2px]"
              aria-label="Đóng menu"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="absolute right-0 top-0 flex h-[100dvh] w-[min(84vw,350px)] flex-col overflow-y-auto border-l border-[#E8DDC8] bg-white px-5 pb-6 pt-5 shadow-[-24px_0_60px_rgba(6,27,58,0.22)]"
              aria-label="Điều hướng mobile"
            >
              <div className="flex items-center justify-between gap-4">
                <Logo />
                <button
                  type="button"
                  className="grid size-10 shrink-0 place-items-center rounded-full border border-[#E8DDC8] text-[#061B3A]"
                  onClick={() => setOpen(false)}
                  aria-label="Đóng menu"
                >
                  <X aria-hidden className="size-5" />
                </button>
              </div>
              <div className="mt-8 grid gap-2">
                {navItems.map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : item.href.startsWith("/") && !item.href.startsWith("/#")
                        ? pathname.startsWith(item.href)
                        : pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`rounded-xl border px-4 py-3 text-sm font-black uppercase transition hover:border-[#E8DDC8] hover:bg-[#FAF8F3] hover:text-[#C89B3C] ${
                        isActive
                          ? "border-[#E8DDC8] bg-[#FAF8F3] text-[#C89B3C]"
                          : "border-transparent text-[#10233F]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link
                  href="#consultation"
                  onClick={() => setOpen(false)}
                  className="btn-gold mt-4 h-12 w-full"
                >
                  Nhận tư vấn
                </Link>
              </div>
              <a
                href="tel:1900123456"
                className="mt-auto flex items-center justify-center gap-2 rounded-xl border border-[#E8DDC8] bg-[#FAF8F3] px-4 py-3 text-sm font-black text-[#061B3A]"
              >
                <Phone aria-hidden className="size-4 text-[#C89B3C]" />
                Hotline: 1900 1234 56
              </a>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
