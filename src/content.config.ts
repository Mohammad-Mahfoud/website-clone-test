import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pagesCollection = defineCollection({
  // 1. Tell Astro v7 to load JSON files from this directory
  loader: glob({ pattern: "**/*.json", base: "./src/content/pages" }),
  
  // 2. Define the schema exactly as before
  schema: z.object({
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      menuBtnText: z.string(),
      menuBtnLink: z.string(),
      whatsappBtnText: z.string(),
      whatsappNumber: z.string(),
    }),
    bestSellers: z.object({
      title: z.string(),
      items: z.array(
        z.object({
          name: z.string(),
          image: z.string(),
        })
      ),
    }),
    locations: z.object({
      title: z.string(),
      subtitle: z.string(),
      branches: z.array(
        z.object({
          name: z.string(),
          address: z.string(),
          phone: z.string(),
          mapsLink: z.string(),
        })
      ),
    }),
    orderBanner: z.object({
      title: z.string(),
      btnText: z.string(),
      whatsappNumber: z.string(),
    }),
  }),
});

export const collections = {
  pages: pagesCollection,
};