import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { siteSeo } from "@/data/seo";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["vietnamese", "latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.url),
  title: siteSeo.title,
  description: siteSeo.description,
  keywords: siteSeo.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteSeo.title,
    description: siteSeo.description,
    url: "/",
    siteName: "Vinhomes",
    images: [
      {
        url: siteSeo.image,
        width: 1200,
        height: 630,
        alt: "Tổng hợp dự án Vinhomes cao cấp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSeo.title,
    description: siteSeo.description,
    images: [siteSeo.image],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={roboto.variable}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
