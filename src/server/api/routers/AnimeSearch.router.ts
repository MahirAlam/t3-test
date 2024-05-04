import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { type AnimeSearchRes } from '@/types/anime.types';

export const animeSearchRouter = createTRPCRouter({
  search: publicProcedure
    .input(z.object({ animeName: z.string() }))
    .query(async ({ input }) => {
      async function getData(animeName: string) {
        const encodedName = encodeURIComponent(animeName);

        const res = await fetch(
          `https://api.anify.tv/search/anime/${encodedName}/1/4`,
        );

        if (!res.ok) {
          // This will activate the closest `error.js` Error Boundary
          throw new Error('Failed to fetch data');
        }

        return res.json();
      }

      const data = (await getData(input.animeName)) as AnimeSearchRes;
      return data;
    }),

  // create: protectedProcedure
  //   .input(z.object({ name: z.string().min(1) }))
  //   .mutation(async ({ ctx, input }) => {
  //     await ctx.db.insert(posts).values({
  //       name: input.name,
  //       createdById: ctx.session.user.id,
  //     });
  //   }),
});
