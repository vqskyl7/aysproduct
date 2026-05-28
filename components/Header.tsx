import Link from "next/link";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl bg-white text-sm font-black text-zinc-950 shadow-lg">
            AP
          </span>

          <div className="leading-tight">
            <p className="text-lg font-black tracking-tight text-white">
              AysProduct
            </p>
            <p className="hidden text-xs text-zinc-500 sm:block">
              Apps · Games · Software
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <Link className="transition hover:text-white" href="/products">
            Продукты
          </Link>
          <Link className="transition hover:text-white" href="/about">
            О проекте
          </Link>
	<Link className="transition hover:text-white" href="/roadmap">
  	План
	</Link>
          <Link className="transition hover:text-white" href="/#contact">
            Контакты
          </Link>
        </nav>

        <Link
          href="/products"
          className="rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
        >
          Каталог
        </Link>
      </div>
    </header>
  );
}