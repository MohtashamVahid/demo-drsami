import "./globals.css";
import { Lalezar, Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-sans",
  display: "swap"
});

const lalezar = Lalezar({
  subsets: ["arabic"],
  weight: "400",
  variable: "--font-display",
  display: "swap"
});

export const metadata = {
  title: "دمو | مجید سمیعی",
  description:
    "صفحه دمو درباره مجید سمیعی بر اساس ویکی‌پدیا؛ مرور زندگی‌نامه و دستاوردهای علمی."
};

export const viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${lalezar.variable}`}
    >
      <body className="min-h-screen bg-fog text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
