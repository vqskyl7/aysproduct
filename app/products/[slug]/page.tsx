import { Header } from "@/components/Header";
import { products } from "@/data/products";
import { ArrowLeft, ExternalLink, Package } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    return {
      title: "Продукт не найден | AysProduct",
    };
  }

  return {
    title: `${product.title} | AysProduct`,
    description: product.description,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-32">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад к продуктам
        </Link>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-12">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
            <Package className="h-8 w-8 text-white" />
          </div>

          <div className="mb-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
              {product.type}
            </span>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
              {product.status}
            </span>
            {product.version && (
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-zinc-300">
                v{product.version}
              </span>
            )}
          </div>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            {product.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            {product.longDescription}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={product.link ?? "#"}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-zinc-950 transition hover:bg-zinc-200"
            >
              Открыть продукт
              <ExternalLink className="h-5 w-5" />
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/15"
            >
              На главную
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}