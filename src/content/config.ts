import { z, defineCollection } from "astro:content";

const journalCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
  }),
});

export const collections = {
  journals: journalCollection,
};
