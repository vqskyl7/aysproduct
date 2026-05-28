import { Code2, FilePlus2, Rocket } from "lucide-react";

export function AddProductGuide() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          <FilePlus2 className="h-4 w-4" />
          Для будущих релизов
        </div>

        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Как добавить новый продукт?
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
          Когда появится первая игра, приложение или программа, нужно будет
          добавить новый объект в файл <span className="text-white">data/products.ts</span>.
          После этого сайт сам создаст карточку и отдельную страницу продукта.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <Code2 className="mb-4 h-8 w-8 text-zinc-300" />
            <h3 className="text-xl font-bold">1. Добавить данные</h3>
            <p className="mt-3 text-zinc-400">
              Название, тип, статус, описание, версию и ссылку.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <FilePlus2 className="mb-4 h-8 w-8 text-zinc-300" />
            <h3 className="text-xl font-bold">2. Проверить страницу</h3>
            <p className="mt-3 text-zinc-400">
              Открыть /products и страницу нового продукта.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
            <Rocket className="mb-4 h-8 w-8 text-zinc-300" />
            <h3 className="text-xl font-bold">3. Опубликовать</h3>
            <p className="mt-3 text-zinc-400">
              Сделать git push, и Vercel автоматически обновит сайт.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}