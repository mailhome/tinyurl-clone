import { z } from "zod";

export const shortenLinkSchema = z.object({
    longUrl: z  
        .string()
        .min(1, "URL is required")
        .url("Plenter enter a valid URL🚀"),

    domain: z.string(),

    alias: z   
        .string()
        .max(50)
        .optional()
});

export type ShortenLink = z.infer<typeof shortenLinkSchema>