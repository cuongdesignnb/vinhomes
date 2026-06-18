import { Feather, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const footerGroups = [
  {
    title: "Dự án",
    links: ["Vinhomes Ocean Park", "Vinhomes Smart City", "Vinhomes Grand Park", "Vinhomes Royal Island", "Vinhomes Green City", "Tất cả dự án"],
  },
  {
    title: "Về chúng tôi",
    links: ["Giới thiệu", "Tầm nhìn - Sứ mệnh", "Giá trị cốt lõi", "Tin tức", "Tuyển dụng"],
  },
  {
    title: "Hỗ trợ khách hàng",
    links: ["Hướng dẫn mua nhà", "Thanh toán & vay vốn", "Chính sách bán hàng", "Chính sách bảo mật", "Điều khoản sử dụng"],
  },
];

export function Footer() {
  return (
    <footer id="lien-he" className="bg-[#061B3A] text-white">
      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_2fr_1.15fr] lg:py-14">
        <div>
          <Link href="#" className="flex items-center gap-2" aria-label="Vinhomes trang chủ">
            <span className="grid size-11 place-items-center rounded-full bg-white/10 text-[#D8B15A]">
              <Feather aria-hidden className="size-6" />
            </span>
            <span className="text-2xl font-black uppercase tracking-wide">
              <span className="text-[#D8B15A]">Vin</span>homes
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/72">
            Chúng tôi cam kết mang đến những không gian sống đẳng cấp, tiện ích toàn diện và giá trị bền vững cho cộng đồng.
          </p>
          <div className="mt-6 flex gap-3" aria-label="Mạng xã hội">
            {["f", "▶", "in", "♪"].map((item) => (
              <span
                key={item}
                className="grid size-9 place-items-center rounded-full border border-white/20 bg-white/5 text-xs font-bold text-[#D8B15A]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-black uppercase tracking-wide text-[#D8B15A]">{group.title}</h3>
              <ul className="mt-4 grid gap-3 text-sm text-white/72">
                {group.links.map((link) => (
                  <li key={link}>
                    <Link className="transition hover:text-[#D8B15A]" href="#">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-sm font-black uppercase tracking-wide text-[#D8B15A]">Liên hệ</h3>
          <ul className="mt-4 grid gap-4 text-sm text-white/78">
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-[#D8B15A]" />
              <a href="tel:1900123456">1900 1234 56</a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-[#D8B15A]" />
              <a href="mailto:info@vinhomes.vn">info@vinhomes.vn</a>
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-[#D8B15A]" />
              <span>Tòa văn phòng Vinhomes, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">
        © 2026 Vinhomes. All rights reserved.
      </div>
    </footer>
  );
}
