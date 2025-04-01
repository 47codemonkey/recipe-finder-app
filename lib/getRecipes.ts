import { BASE_URL_SEARCH, API_KEY } from '@/lib/apiConfig';
import { Recipe, SearchParams } from '@/types/index';

export default async function getRecipes(
  searchParams: SearchParams
): Promise<{ recipes: Recipe[]; error?: string }> {
  const { query, cuisine, maxReadyTime } = await searchParams;
  const url = `${BASE_URL_SEARCH}?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}&apiKey=${API_KEY}`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return { recipes: [], error: 'Failed to fetch recipes' };

  const data = await res.json();
  return { recipes: data.results || [] };
}
