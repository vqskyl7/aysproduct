export type Product = {
  id: string;
  title: string;
  type: "Игра" | "Приложение" | "Программа";
  status: "Идея" | "В разработке" | "Beta" | "Готово" | "Скоро";
  description: string;
  link?: string;
};

// Сейчас продуктов нет. Когда появится первый проект, добавь его сюда.
export const products: Product[] = [];

export const futureCategories = [
  {
    title: "Игры",
    description: "Будущие игровые проекты, демо-версии, релизы и обновления.",
  },
  {
    title: "Приложения",
    description: "Мобильные и веб-приложения для задач, идей и повседневного использования.",
  },
  {
    title: "Программы",
    description: "Утилиты, инструменты и программы для компьютера.",
  },
];
