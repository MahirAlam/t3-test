export interface AnimeTitle {
  native: string;
  romaji: string;
  english: string;
}

export interface AnimeSourceMapping {
  id: 'string';
  providerId: 'string';
  similarity: 'number';
}

export interface MediaRating {
  mal: number | null;
  tvdb: number | null;
  kitsu: number | null;
  anilist: number | null;
  anidb: number | null;
  tmdb: number | null;
  comick: number | null;
  mangadex: number | null;
  novelupdates: number | null;
}

export enum AnimeStatusEnum {
  'FINISHED',
  'RELEASING',
  'NOT_YET_RELEASED',
  'CANCELLED',
  'HIATUS',
}

export enum AnimeRelationTypeEnum {
  'ADAPTATION',
  'PREQUEL',
  'SEQUEL',
  'PARENT',
  'SIDE_STORY',
  'CHARACTER',
  'SUMMARY',
  'ALTERNATIVE',
  'SPIN_OFF',
  'OTHER',
  'SOURCE',
  'COMPILATION',
  'CONTAINS',
}

export enum AnimeFormatEnum {
  'TV',
  'TV_SHORT',
  'MOVIE',
  'SPECIAL',
  'OVA',
  'ONA',
  'MUSIC',
  'UNKNOWN',
}

export interface AnimeRelations {
  id: 'number';
  data: {
    id: 'number';
    type: 'ANIME' | 'MANGA';
    title: {
      userPreferred: AnimeTitle;
    };
    format: AnimeFormatEnum;
    status: AnimeStatusEnum;
    coverImage: {
      large: 'string';
    };
    bannerImage: string | null;
  };
  type: AnimeRelationTypeEnum;
}

export interface AnimeCharacters {
  name: 'string';
  image: 'string';
  voiceActor: {
    name: 'string';
    image: 'string';
  };
}
