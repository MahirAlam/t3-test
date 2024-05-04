'use server';
import { api } from '@/server';

export async function getSearchData(val: string) {
  return await api.aniSearch.search({ animeName: val });
}
