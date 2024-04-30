import { pgEnum } from 'drizzle-orm/pg-core';

export const animeStatusEnum = pgEnum('AnimeStatus', [
  'FINISHED',
  'RELEASING',
  'NOT_YET_RELEASED',
  'CANCELLED',
  'HIATUS',
]);

export const animeFormatEnum = pgEnum('AnimeFormat', [
  'TV',
  'TV_SHORT',
  'MOVIE',
  'SPECIAL',
  'OVA',
  'ONA',
  'MUSIC',
  'UNKNOWN',
]);

export const animeSeasonEnum = pgEnum('AnimeSeason', [
  'SUMMER',
  'FALL',
  'WINTER',
  'SPRING',
]);
