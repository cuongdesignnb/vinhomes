import { MessageCircle, Phone, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#061B3A] text-white">
      <div className="mx-auto flex h-9 max-w-[1240px] items-center justify-between gap-3 px-4 text-xs sm:px-6">
        <div className="flex min-w-0 items-center gap-2 text-[#F3DEAA]">
          <Sparkles aria-hidden className="size-4 shrink-0 text-[#D8B15A]" />
          <span className="truncate">
            Vinhomes - Nơi an cư lý tưởng, kiến tạo cộng đồng hạnh phúc bền vững
          </span>
        </div>
        <div className="hidden items-center gap-4 text-white/90 sm:flex">
          <a className="flex items-center gap-1.5 transition hover:text-[#D8B15A]" href="tel:1900123456">
            <Phone aria-hidden className="size-3.5" />
            Hotline: 1900 1234 56
          </a>
          <div className="flex items-center gap-2" aria-label="Mạng xã hội">
            {["f", "▶", "in"].map((item) => (
              <span
                key={item}
                className="grid size-5 place-items-center rounded-full border border-white/25 text-[10px] font-bold text-white/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <a className="grid size-8 shrink-0 place-items-center sm:hidden" href="tel:1900123456" aria-label="Gọi hotline">
          <MessageCircle aria-hidden className="size-4 text-[#D8B15A]" />
        </a>
      </div>
    </div>
  );
}
