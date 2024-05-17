import { z, defineAction } from "astro:actions";
import { db, Drawing } from "astro:db";

export const server = {
  submitDrawing: defineAction({
    input: z.object({
      variant: z.string(),
      data: z.string()
    }),
    handler: async ({ variant, data }) => {
      await db.insert(Drawing).values({
        variant, 
        data
      });
    }
  })
}
