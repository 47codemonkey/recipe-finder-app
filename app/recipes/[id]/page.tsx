import Image from 'next/image';
import { Suspense } from 'react';
import { Ingredient } from '@/types/index';
import getRecipe from '@/lib/getRecipe';

async function RecipeDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  const recipe = await getRecipe(id);

  if (recipe.error) return <div className="text-red-500">{recipe.error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        className="object-cover rounded-lg mb-6 w-auto h-auto"
        width={312}
        height={231}
        priority
      />
      <h2 className="text-2xl font-semibold mt-4">Ingredients:</h2>
      <ul className="list-disc pl-5">
        {recipe.extendedIngredients.map((ingredient: Ingredient) => (
          <li key={`${ingredient.id}-${ingredient.original}`} className="text-lg">
            {ingredient.original}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeDetailPageWithSuspense({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={<div className="text-center font-bold text-xl">Loading recipe details...</div>}
    >
      <RecipeDetailPage params={params} />
    </Suspense>
  );
}
