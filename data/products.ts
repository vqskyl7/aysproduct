export type Product = {
  id: string;
  slug: string;
  title: string;
  type: "Игра" | "Приложение" | "Программа";
  status: "Идея" | "В разработке" | "Beta" | "Готово";
  description: string;
  longDescription: string;
  version?: string;
  link?: string;
};

export type FutureCategory = {
  title: string;
  description: string;
};

export const futureCategories: FutureCategory[] = [
  {
    title: "Игры",
    description: "Будущие игровые проекты, демо и релизы.",
  },
  {
    title: "Приложения",
    description: "Мобильные и веб-приложения для повседневных задач.",
  },
  {
    title: "Программы",
    description: "Утилиты, инструменты и программы для ПК.",
  },
];

export const products: Product[] = [
  {
    id: "ays-demo",
    slug: "ays-demo",
    title: "Ays Demo",
    type: "Приложение",
    status: "Идея",
    description:
      "Тестовый продукт для проверки страниц AysProduct. Позже его можно удалить.",
    longDescription:
      "Ays Demo — временный пример продукта. Он нужен, чтобы проверить, как будет выглядеть страница будущей игры, приложения или программы на сайте AysProduct.",
    version: "0.1.0",
    link: "#",
  },
];