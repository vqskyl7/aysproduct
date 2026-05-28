import { Header } from "@/components/Header";
import { CheckCircle2, CircleDashed, Rocket } from "lucide-react";

const roadmap = [
  {
    title: "v0.1 — запуск сайта",
    status: "Готово",
    description: "Создать первую версию сайта AysProduct и опубликовать её через Vercel.",
  },
  {
    title: "v0.5 — страницы продуктов",
    status: "Готово",
    description: "Добавить каталог продуктов и отдельные страницы для будущих релизов.",
  },
  {
    title: "v1.0 — базовая платформа",
    status: "Готово",
    description: "Добавить страницы, SEO, favicon, 404-страницу и структуру для роста.",
  },
  {
    title: "v1.1 — первый настоящий продукт",
    status: "В будущем",
    description: "Добавить первую реальную игру, приложение или программу.",
  },
  {
    title: "v1.2 — скриншоты и медиа",
    status: "В будущем",
    description: "Добавить изображения, видео, версии, changelog и ссылки на скачивание.",
  },
  {
    title: "v2.0 — админка",
    status: "В будущем",
    description: "Сделать панель управления, чтобы добавлять продукты без редактирования кода.",
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
          <Rocket className="h-4 w-4" />
          План развития
        </div>

        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Roadmap AysProduct
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Здесь собран план развития сайта: от первой публикации до будущей
          платформы с продуктами, медиа и админкой.
        </p>

        <div className="mt-12 grid gap-5">
          {roadmap.map((item) => {
            const done = item.status === "Готово";

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                      {done ? (
                        <CheckCircle2 className="h-6 w-6 text-zinc-200" />
                      ) : (
                        <CircleDashed className="h-6 w-6 text-zinc-500" />
                      )}
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                    </div>

                    <p className="text-zinc-400">{item.description}</p>
                  </div>

                  <span className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-zinc-300">
                    {item.status}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}