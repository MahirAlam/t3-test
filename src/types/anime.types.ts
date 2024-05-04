import { type AnimeDetails } from '@/server/db/schema/anime';

export type SortBy =
  | 'averageRating'
  | 'averagePopularity'
  | 'title'
  | 'year'
  | 'totalEpisodes';

interface SearchedAnime extends AnimeDetails {
  mappings: [
    {
      id: 'string';
      providerId: 'string';
      similarity: 'number';
      providerType: 'ANIME | MANGA | META | INFORMATION';
    },
  ];
}

export interface AnimeSearchRes {
  results: SearchedAnime[];
  total: 'number';
  lastPage: 'number';
}
