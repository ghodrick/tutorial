// Import utilities from `astro:content`
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: z.string(),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		tags: z.array(z.string()),
	}),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
