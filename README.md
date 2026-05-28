# AysProduct

AysProduct — стартовая версия сайта для будущих цифровых продуктов: игр, приложений, программ и инструментов.

## Что внутри

- Next.js 14
- TypeScript
- Tailwind CSS
- Адаптивная главная страница
- Пустой каталог будущих продуктов
- Roadmap развития
- Контактный блок
- Подготовка к деплою на Vercel

## Запуск локально

```bash
npm install
npm run dev
```

Открой:

```text
http://localhost:3000
```

## Как добавить первый продукт

Открой файл:

```text
data/products.ts
```

И замени:

```ts
export const products: Product[] = [];
```

на пример:

```ts
export const products: Product[] = [
  {
    id: "ays-runner",
    title: "Ays Runner",
    type: "Игра",
    status: "В разработке",
    description: "Аркадная игра от AysProduct.",
    link: "#",
  },
];
```

## Деплой на Vercel

1. Создай репозиторий на GitHub.
2. Загрузи этот проект.
3. Открой Vercel.
4. Нажми Add New Project.
5. Выбери репозиторий.
6. Нажми Deploy.

Сначала сайт будет доступен по адресу вроде:

```text
aysproduct.vercel.app
```

Потом можно подключить домен:

```text
aysproduct.com
```
