import { ExternalLink, Mail, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { ProductEmptyState } from "@/components/ProductEmptyState";
import { Roadmap } from "@/components/Roadmap";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-zinc-950 text-white">
      <Header />

      <section className="relative px-6 pb-20 pt-32 md:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(167,139,250,0.18),transparent_30%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Sparkles className="h-4 w-4" /> Новая платформа цифровых продуктов
            </div>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight md:text-7xl">
              AysProduct
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              Будущий официальный сайт для игр, приложений, программ и полезных цифровых проектов.
              Сейчас платформа готовится к первому запуску.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#products"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200"
              >
                Смотреть платформу
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Связаться
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="rounded-3xl bg-zinc-950/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-400">Статус проекта</p>
                  <h2 className="mt-1 text-2xl font-bold">AysProduct v0.1</h2>
                </div>
                <Rocket className="h-10 w-10 text-zinc-300" />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  "Главная страница готова",
                  "Каталог подготовлен",
                  "Продукты будут добавлены позже",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <ShieldCheck className="h-5 w-5 text-zinc-300" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold md:text-4xl">Продукты</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Пока продуктов нет — раздел уже готов для будущих релизов.
          </p>
        </div>

        {products.length === 0 ? (
          <ProductEmptyState />
        ) : (
          <div className="grid gap-5 md:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <p className="text-sm text-zinc-400">{product.type}</p>
                <h3 className="mt-2 text-xl font-semibold">{product.title}</h3>
                <p className="mt-3 text-zinc-400">{product.description}</p>
                <a
                  href={product.link ?? "#"}
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950"
                >
                  Открыть <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <Roadmap />

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
          <Mail className="mb-4 h-8 w-8 text-zinc-300" />
          <h2 className="text-3xl font-bold md:text-4xl">Связь</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Позже сюда можно подключить настоящую форму. Пока кнопка открывает email-клиент.
          </p>
          <a
            href="mailto:hello@aysproduct.com?subject=AysProduct"
            className="mt-6 inline-flex rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Написать на почту
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © 2026 AysProduct. Все права защищены.
      </footer>
    </main>
  );
}
