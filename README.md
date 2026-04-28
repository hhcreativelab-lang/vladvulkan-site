# Влад Вулкан — сайт

Контент-сайт независимого консультанта по&nbsp;недвижимости в&nbsp;Эквадоре для&nbsp;русскоязычной аудитории.
Позиционирование: **consultor inmobiliario**, не лицензированный риэлтор.

**Стек:** Astro 6 + Tailwind CSS v4 + MDX + TypeScript
**Хостинг:** Cloudflare Pages
**Аналитика:** Cloudflare Web Analytics + Google Search Console

---

## Локальный запуск

```bash
npm install              # установить зависимости
npm run dev              # dev-сервер на http://localhost:4321
npm run build            # production-билд в ./dist/
npm run preview          # локальный просмотр собранного сайта
```

Требования: Node.js 22.12+, npm 10+.

---

## Что лежит в проекте

```
vladvulkan-site/
├── public/                       # Статика (favicon, og, robots, калькулятор)
│   ├── favicon.svg
│   ├── robots.txt
│   ├── humans.txt
│   ├── pricing-calculator.html   # Готовый калькулятор сделки
│   └── og/default.svg
├── src/
│   ├── content.config.ts         # Schema контентной коллекции (Astro 6 glob loader)
│   ├── content/articles/         # Статьи каталога знаний (MDX) по 7 категориям
│   ├── components/               # 12 переиспользуемых компонентов
│   ├── layouts/                  # BaseLayout + ArticleLayout
│   ├── pages/                    # Все маршруты сайта
│   ├── lib/                      # constants, seo, schema утилиты
│   └── styles/global.css         # Глобальные стили + дизайн-токены
└── astro.config.mjs              # MDX, sitemap, Tailwind v4 (через Vite)
```

---

## Что нужно заменить перед боевым деплоем

В `src/lib/constants.ts`:

```typescript
export const SITE = {
  url: 'https://vladvulkan.com',           // ← реальный домен
  email: 'info@vladvulkan.com',            // ← реальный email
  telegramUrl: 'https://t.me/...',         // ← реальный Telegram
  telegramHandle: '@...',                  // ← реальный @
  youtubeUrl: 'https://youtube.com/@...',  // ← реальный YouTube
  founder: {
    photo: '/assets/vlad-photo.jpg',       // ← положить фото в public/assets/
    ...
  },
};
```

В `astro.config.mjs`:

```javascript
site: 'https://vladvulkan.com',  // ← реальный домен
```

**OG-картинка:** заменить `public/og/default.svg` на `public/og/default.jpg` (1200×630). Многие соцсети не рендерят SVG в og:image.

---

## Деплой на Cloudflare Pages

1. Залить репозиторий на GitHub:
   ```bash
   git remote add origin https://github.com/USERNAME/vladvulkan-site.git
   git branch -M main
   git push -u origin main
   ```

2. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
3. Выбрать репозиторий
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable: `NODE_VERSION=22`
5. Save and Deploy
6. Через ~2 минуты сайт доступен на `*.pages.dev`
7. Custom domain: Pages → ваш проект → Custom domains → Add → ввести домен. Если домен на Cloudflare — подключится автоматически. Если нет — Cloudflare покажет NS-записи для регистратора.

См. также `06-domain-recommendations.md` в корне репозитория проекта (рядом с этой папкой).

---

## Как добавить новую статью каталога

1. Создать файл `src/content/articles/{категория}/{slug}.mdx`
2. Заполнить frontmatter:

```mdx
---
title: "Как перевести деньги из России в Эквадор в 2026 году"
description: "Описание 60–180 символов с главным ключом и CTA в конце."
category: "dengi"
mainKeyword: "как перевести деньги из россии в эквадор"
supportingKeywords:
  - "перевод денег эквадор 2026"
  - "usdt эквадор"
pubDate: 2026-04-28
updatedDate: 2026-04-28
priority: 1
shortAnswer: "Прямой ответ 1–2 предложения для AEO."
keyNumbers:
  - "USDT через биржи: <strong>1–2%</strong> комиссия"
  - "Wise/Revolut: до <strong>$50 000</strong>, 3–5 дней"
faq:
  - question: "Можно ли SWIFT?"
    answer: "Прямой SWIFT из российских банков невозможен с 2022. Альтернативы — USDT, Wise через посредников."
related:
  - "dengi/banki-ekvadora-dlya-inostrancev"
  - "dengi/biess-ipoteka-2026"
---

import ComparisonTable from '@components/ComparisonTable.astro';

## Раздел 1

Контент в Markdown. Можно встраивать компоненты:

<ComparisonTable
  headers={["Способ", "Комиссия", "Сроки"]}
  rows={[
    { label: "USDT", cells: ["1–2%", "10 минут"] },
    { label: "Wise", cells: ["3–5%", "3–5 дней"] },
  ]}
/>
```

3. После сохранения статья автоматически появится в соответствующей категории, в RSS, в sitemap, и получит JSON-LD `Article` + `FAQPage` + `BreadcrumbList`.

Приоритеты статей — см. `02-seo-strategy.md` в корне проекта, раздел 7.

---

## SEO-чек-лист каждой страницы

- [x] H1 содержит главный ключ
- [x] Title 50–60 символов с ключом в начале
- [x] Meta description 140–160 символов
- [x] URL латиницей с дефисами
- [x] Canonical URL
- [x] Open Graph + Twitter Card
- [x] JSON-LD (Article / Service / Person / FAQPage / BreadcrumbList)
- [x] Хлебные крошки с разметкой
- [x] FAQ-блок с автогенерацией FAQPage
- [x] Дисклеймер consultor inmobiliario в футере
- [x] Geo-таги для локального SEO

См. полный чек-лист в `02-seo-strategy.md`, раздел 11.

---

## Брендовые правила

**Запрещённые слова** (никогда в позитивном контексте):
риэлтор, агент по недвижимости, моя база объектов, эксклюзивные объекты, надёжный партнёр, мечта сбудется, откроем двери, эксперты мирового уровня, успешный успех, заключаю сделки.

**Обязательный дисклеймер** на каждой значимой странице:
> Consultor inmobiliario. Не являюсь лицензированным риэлтором. Сделки проводятся через лицензированных партнёров в Эквадоре.

**JSON-LD:** только `ProfessionalService` + `Person`, **никогда** `RealEstateAgent`.

Полный контекст — в файлах `00-README.md`, `01-brand-context.md`, `02-seo-strategy.md` в корне репозитория.

---

## Производительность (целевые показатели)

- Lighthouse Performance 95+
- Accessibility 95+
- Best Practices 95+
- SEO 100
- LCP < 2s, CLS < 0.05

System fonts, минимум JS на клиенте, inline critical CSS, Cloudflare CDN + Brotli.
