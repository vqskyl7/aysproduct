export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-lg font-bold tracking-tight">
          AysProduct
        </a>
        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          <a className="transition hover:text-white" href="#products">Продукты</a>
          <a className="transition hover:text-white" href="#roadmap">План</a>
          <a className="transition hover:text-white" href="#contact">Контакты</a>
        </nav>
        <a
          href="#products"
          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm transition hover:bg-white/15"
        >
          Смотреть
        </a>
      </div>
    </header>
  );
}
