import { ArrowRight, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <Sparkles className="h-4 w-4" />
            Будущая платформа цифровых продуктов
          </div>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl">
            Игры, приложения и программы в одном месте
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            AysProduct — это сайт для будущих проектов: игр, мобильных
            приложений, программ, утилит и цифровых инструментов.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Смотреть каталог
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              О проекте
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl backdrop-blur">
          <div className="rounded-[1.5rem] bg-zinc-950/80 p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">Статус</p>
                <h2 className="text-2xl font-black text-white">
                  AysProduct v0.6
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Rocket className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold text-white">Сайт опубликован</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Работает через Vercel
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold text-white">Каталог готов</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Можно добавлять будущие продукты
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="font-semibold text-white">Следующий этап</p>
                <p className="mt-1 text-sm text-zinc-400">
                  Домен, логотип и первые релизы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}