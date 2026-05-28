import { Header } from "@/components/Header";
import { ProductEmptyState } from "@/components/ProductEmptyState";
import { products } from "@/data/products";
import { ExternalLink } from "lucide-react";
import { AddProductGuide } from "@/components/AddProductGuide";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        <h1 className="text-5xl font-black tracking-tight md:text-7xl">
          Продукты
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Здесь будут опубликованы будущие игры, приложения, программы и цифровые инструменты AysProduct.
        </p>

        <div className="mt-12">
          {products.length === 0 ? (
            <ProductEmptyState />
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <p className="text-sm text-zinc-400">{product.type}</p>
                  <h2 className="mt-2 text-xl font-semibold">{product.title}</h2>
                  <p className="mt-3 text-zinc-400">{product.description}</p>
                  <a
                    href={`/products/${product.slug}`}
                    className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-zinc-950"
                  >
                    Подробнее <ExternalLink className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
     <AddProductGuide />
    </main>
  );
}