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