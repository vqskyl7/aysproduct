import { Header } from "@/components/Header";
import { Rocket, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          <Sparkles className="h-4 w-4" />
          О проекте
        </div>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Что такое AysProduct?
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          AysProduct — это будущая платформа для цифровых продуктов: игр,
          приложений, программ, утилит и других проектов. Сейчас сайт находится
          на старте, но уже готов принимать первые релизы.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Rocket className="mb-4 h-8 w-8 text-zinc-300" />
            <h2 className="text-xl font-bold">Запуск</h2>
            <p className="mt-3 text-zinc-400">
              Сайт уже опубликован и будет развиваться вместе с будущими продуктами.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <ShieldCheck className="mb-4 h-8 w-8 text-zinc-300" />
            <h2 className="text-xl font-bold">Качество</h2>
            <p className="mt-3 text-zinc-400">
              Каждый продукт будет получать описание, статус, версию и ссылку на открытие или скачивание.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <Sparkles className="mb-4 h-8 w-8 text-zinc-300" />
            <h2 className="text-xl font-bold">Будущее</h2>
            <p className="mt-3 text-zinc-400">
              Позже появятся страницы продуктов, скриншоты, обновления и полноценная админка.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}