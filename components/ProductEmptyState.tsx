import { Gamepad2, MonitorDown, Smartphone, UploadCloud } from "lucide-react";
import { futureCategories } from "@/data/products";

const icons = [Gamepad2, Smartphone, MonitorDown];

export function ProductEmptyState() {
  return (
    <div className="rounded-[2rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center md:p-10">
      <UploadCloud className="mx-auto mb-4 h-10 w-10 text-zinc-400" />
      <h3 className="text-2xl font-semibold text-white">Продукты скоро появятся</h3>
      <p className="mx-auto mt-3 max-w-xl text-zinc-400">
        AysProduct готовится к запуску. Здесь будут игры, приложения, программы,
        версии, описания, скриншоты и ссылки на скачивание.
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        {futureCategories.map((category, index) => {
          const Icon = icons[index] ?? UploadCloud;
          return (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-zinc-950/60 p-5 text-left"
            >
              <Icon className="mb-3 h-6 w-6 text-zinc-300" />
              <h4 className="font-semibold text-white">{category.title}</h4>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{category.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
