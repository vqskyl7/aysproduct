import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AysProduct — игры, приложения и программы",
    template: "%s | AysProduct",
  },
  description:
    "AysProduct — будущая платформа для игр, приложений, программ и цифровых продуктов.",
  keywords: [
    "AysProduct",
    "игры",
    "приложения",
    "программы",
    "цифровые продукты",
    "software",
    "apps",
    "games",
  ],
  authors: [{ name: "AysProduct" }],
  creator: "AysProduct",
  openGraph: {
    title: "AysProduct",
    description:
      "Будущая платформа для игр, приложений, программ и цифровых продуктов.",
    url: "https://aysproduct.vercel.app",
    siteName: "AysProduct",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AysProduct",
    description:
      "Будущая платформа для игр, приложений, программ и цифровых продуктов.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}