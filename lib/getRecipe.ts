import { API_KEY, BASE_URL_RECIPE_DETAILS } from '@/lib/apiConfig';

export default async function getRecipe(id: string) {
  const url = `${BASE_URL_RECIPE_DETAILS}/${id}/information?apiKey=${API_KEY}`;

  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) return { error: 'Failed to fetch recipe details' };

  return await res.json();
}
