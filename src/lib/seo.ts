import { FORBIDDEN_WORDS, SITE } from './constants';

/**
 * Формирует <title> страницы.
 * @param pageTitle — основной заголовок страницы
 * @param includeBrand — добавлять ли «| Влад Вулкан» (по умолчанию true)
 */
export function generateTitle(pageTitle: string, includeBrand = true): string {
  if (!pageTitle) return SITE.brandName;
  if (!includeBrand) return pageTitle;
  return `${pageTitle} | ${SITE.brandName}`;
}

/**
 * Обрезает description до max символов без обрыва слова.
 */
export function truncateDescription(text: string, max = 160): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (cleaned.length <= max) return cleaned;
  const slice = cleaned.slice(0, max - 1);
  const lastSpace = slice.lastIndexOf(' ');
  return (lastSpace > 0 ? slice.slice(0, lastSpace) : slice) + '…';
}

/**
 * Возвращает полный canonical URL по pathname.
 */
export function canonicalUrl(pathname: string): string {
  const base = SITE.url.replace(/\/$/, '');
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return base + (path === '/' ? '' : path.replace(/\/$/, ''));
}

/**
 * Проверяет текст на запрещённые слова.
 * Возвращает массив найденных нарушений (без учёта регистра).
 */
export function validateContent(text: string): string[] {
  if (!text) return [];
  const lower = text.toLowerCase();
  return FORBIDDEN_WORDS.filter((word) => lower.includes(word.toLowerCase()));
}
