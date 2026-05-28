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
/*
Шаблон для будущего продукта:

{
  id: "unique-product-id",
  slug: "product-url-name",
  title: "Название продукта",
  type: "Игра",
  status: "В разработке",
  description: "Короткое описание продукта для карточки.",
  longDescription:
    "Полное описание продукта для отдельной страницы. Здесь можно рассказать, что это за продукт, для кого он и что он умеет.",
  version: "0.1.0",
  link: "https://example.com",
},

Типы:
"Игра" | "Приложение" | "Программа"

Статусы:
"Идея" | "В разработке" | "Beta" | "Готово"
*/