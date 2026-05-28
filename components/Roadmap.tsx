const steps = [
  {
    title: "v0.1 — Старт сайта",
    text: "Главная страница, будущий каталог, контакты и подготовка к публикации.",
  },
  {
    title: "v0.2 — Первый продукт",
    text: "Добавление первой игры, приложения или программы с отдельной страницей.",
  },
  {
    title: "v0.3 — Скриншоты и загрузки",
    text: "Страницы продуктов, изображения, версии и кнопки скачивания.",
  },
  {
    title: "v1.0 — Полный запуск",
    text: "Домен, SEO, аналитика, форма обратной связи и стабильная публикация.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold md:text-4xl">План развития</h2>
      <p className="mt-3 max-w-2xl text-zinc-400">
        Сайт можно запустить уже сейчас, а продукты добавлять по мере появления.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold">
              {index + 1}
            </div>
            <h3 className="font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
