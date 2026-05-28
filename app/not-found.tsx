import { Header } from "@/components/Header";
import { ArrowLeft, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04]">
          <SearchX className="h-10 w-10 text-zinc-300" />
        </div>

        <p className="mb-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-400">
          Ошибка 404
        </p>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Страница не найдена
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Возможно, ссылка изменилась или такой страницы пока нет. Вернись на
          главную или открой каталог будущих продуктов AysProduct.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            <ArrowLeft className="h-5 w-5" />
            На главную
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
          >
            Открыть продукты
          </Link>
        </div>
      </section>
    </main>
  );
}