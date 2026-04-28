import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string().min(1).max(80),
    description: z.string().min(60).max(180),
    category: z.enum([
      'dengi',
      'nedvizhimost',
      'bezopasnost',
      'relokatsiya',
      'zhizn',
      'sravnenie',
      'biznes',
    ]),
    mainKeyword: z.string(),
    supportingKeywords: z.array(z.string()).default([]),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    ogImage: z.string().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .optional(),
    draft: z.boolean().default(false),
    priority: z.number().int().min(1).max(3).optional(),
    shortAnswer: z.string().optional(),
    keyNumbers: z.array(z.string()).optional(),
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
