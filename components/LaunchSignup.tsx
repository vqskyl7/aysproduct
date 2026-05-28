import { Mail, Rocket } from "lucide-react";

export function LaunchSignup() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.18),transparent_30%)]" />

        <div className="relative">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
            <Rocket className="h-4 w-4" />
            Следи за запуском
          </div>

          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Первые продукты AysProduct появятся здесь
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
            Когда выйдет первая игра, приложение или программа, сайт будет обновлён.
            Можно написать напрямую и предложить идею для будущего продукта.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:namitashaoo@outlook.com?subject=AysProduct"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              <Mail className="h-5 w-5" />
              Написать
            </a>

            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              Смотреть продукты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}