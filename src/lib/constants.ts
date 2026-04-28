export const SITE = {
  url: 'https://vladvulkan.com', // ПЛЕЙСХОЛДЕР — заменить на реальный домен
  brandName: 'Влад Вулкан',
  brandNameEn: 'Vlad Vulkan',
  brandTagline: 'Consultor Inmobiliario',
  description:
    'Независимая консультация по недвижимости в Эквадоре для русскоязычной аудитории',
  email: 'PLACEHOLDER@vladvulkan.com', // ПЛЕЙСХОЛДЕР
  telegramUrl: 'https://t.me/PLACEHOLDER', // ПЛЕЙСХОЛДЕР
  telegramHandle: '@PLACEHOLDER', // ПЛЕЙСХОЛДЕР
  youtubeUrl: 'https://youtube.com/@PLACEHOLDER', // ПЛЕЙСХОЛДЕР
  phone: '+593999999999', // ПЛЕЙСХОЛДЕР — заменить на реальный номер
  phoneDisplay: '+593 99 999 9999', // отображаемый формат
  defaultLocale: 'ru',
  cities: ['Cuenca', 'Quito', 'Guayaquil', 'Manta', 'Salinas'],
  founder: {
    name: 'Vlad Vulkan',
    nameRu: 'Влад Вулкан',
    jobTitle: 'Consultor Inmobiliario',
    description:
      'Независимый консультант по недвижимости в Эквадоре. 13 лет в Латинской Америке, 8+ лет опыта в недвижимости. Билингв: испанский + русский.',
    languages: ['ru', 'es'],
    knowsAbout: [
      'Real Estate Ecuador',
      'Property Due Diligence',
      'Investment Consulting Latin America',
      'Cuenca Real Estate Market',
      'Ecuador Residency',
    ],
    photo: '/assets/vlad-photo.jpg', // ПЛЕЙСХОЛДЕР
  },
} as const;

export const DISCLAIMER = {
  ru: 'Consultor inmobiliario. Не являюсь лицензированным риэлтором. Сделки проводятся через лицензированных партнёров в Эквадоре.',
  es: 'Consultor inmobiliario independiente. Las transacciones inmobiliarias se realizan a través de corredores de bienes raíces licenciados en Ecuador.',
} as const;

export type CategorySlug =
  | 'dengi'
  | 'nedvizhimost'
  | 'bezopasnost'
  | 'relokatsiya'
  | 'zhizn'
  | 'sravnenie'
  | 'biznes'
  | 'zdorovye';

export const CATEGORIES: Record<
  CategorySlug,
  { name: string; slug: CategorySlug; description: string; short: string }
> = {
  dengi: {
    name: 'Деньги и банки',
    slug: 'dengi',
    short: 'Деньги',
    description: 'Банки, переводы, ипотека, налоги в Эквадоре',
  },
  nedvizhimost: {
    name: 'Недвижимость и инвестиции',
    slug: 'nedvizhimost',
    short: 'Недвижимость',
    description: 'Цены, рынок, инвестиционная доходность',
  },
  bezopasnost: {
    name: 'Безопасность',
    slug: 'bezopasnost',
    short: 'Безопасность',
    description: 'Реальная картина по провинциям и городам',
  },
  relokatsiya: {
    name: 'Релокация и ВНЖ',
    slug: 'relokatsiya',
    short: 'Релокация',
    description: 'Визы, ВНЖ, путь к гражданству',
  },
  zhizn: {
    name: 'Жизнь в Эквадоре',
    slug: 'zhizn',
    short: 'Жизнь',
    description: 'Стоимость, медицина, школы, климат',
  },
  zdorovye: {
    name: 'Здоровье и экология',
    slug: 'zdorovye',
    short: 'Здоровье',
    description: 'Чистый воздух, биоразнообразие, медицина и экологические зоны',
  },
  sravnenie: {
    name: 'Сравнения стран',
    slug: 'sravnenie',
    short: 'Сравнения',
    description: 'Эквадор vs Мексика, Панама, Уругвай и др.',
  },
  biznes: {
    name: 'Бизнес и работа',
    slug: 'biznes',
    short: 'Бизнес',
    description: 'Регистрация компании, удалёнка, фриланс',
  },
};

// Список запрещённых слов для проверки контента
export const FORBIDDEN_WORDS = [
  'риэлтор',
  'риелтор',
  'агент по недвижимости',
  'моя база объектов',
  'моя база',
  'эксклюзивные объекты',
  'надёжный партнёр',
  'мечта сбудется',
  'откроем двери',
  'эксперты мирового уровня',
  'успешный успех',
  'заключаю сделки', // допускается только в контексте отрицания
  'заключаем сделки',
] as const;

export const NAV = {
  primary: [
    { href: '/uslugi', label: 'Услуги' },
    { href: '/znaniya', label: 'Знания' },
    { href: '/instrumenty', label: 'Инструменты' },
    { href: '/kak-rabotaem', label: 'Как работаем' },
    { href: '/tseny', label: 'Цены' },
    { href: '/kto-ya', label: 'О Владе' },
  ],
} as const;
