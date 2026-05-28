import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AysProduct — игры, приложения и программы",
  description:
    "AysProduct — будущая платформа цифровых продуктов: игры, приложения, программы и полезные инструменты.",
  keywords: ["AysProduct", "apps", "games", "software", "приложения", "игры", "программы"],
  authors: [{ name: "AysProduct" }],
  openGraph: {
    title: "AysProduct",
    description: "Будущая платформа цифровых продуктов.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
