import { integer, jsonb, varchar } from 'drizzle-orm/pg-core';

import {
  type AnimeCharacters,
  type AnimeRelations,
  type AnimeSourceMapping,
  type AnimeTitle,
  type MediaRating,
} from '@/types/db.types';

import { animeFormatEnum, animeSeasonEnum, animeStatusEnum } from './enums';

import createTable from './index';

export const animeDetails = createTable('anime-details', {
  id: varchar('id', { length: 355 }).primaryKey(),
  title: jsonb('title').$type<AnimeTitle>(),
  synonyms: varchar('synonyms', { length: 256 }).array(),
  status: animeStatusEnum('status'),
  format: animeFormatEnum('format'),
  season: animeSeasonEnum('season'),
  currentEpisode: integer('currentEpisodes'),
  countryOfOrigin: varchar('countryOfOrigin', { length: 32 }),
  coverImage: varchar('coverImg', { length: 256 }),
  bannerImage: varchar('bannerImg', { length: 256 }),
  genres: varchar('genres', { length: 100 }).array(),
  tags: varchar('genres', { length: 100 }).array(),
  description: varchar('description', { length: 1024 }).array(),
  color: varchar('color', { length: 10 }),
  rating: jsonb('rating').$type<MediaRating>(),
  popularity: integer('ratedBy').default(0),
  averageRating: integer('averageRating').default(-1),
  averagePopularity: integer('averagePopularity').default(-1),
  duration: integer('duration').default(-1),
  year: integer('year').default(-1),
  characters: jsonb('characters').$type<AnimeCharacters>().array(),
  relations: jsonb('relations').$type<AnimeRelations>().array(),
  sourceMapping: jsonb('sourceMapping').$type<AnimeSourceMapping>().array(),
});

export type AnimeDetails = typeof animeDetails.$inferSelect;
