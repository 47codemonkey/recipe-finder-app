import Link from 'next/link';
import Image from 'next/image';
import { Suspense } from 'react';
import { Recipe, SearchParams } from '@/types/index';
import getRecipes from '@/lib/getRecipes';

async function RecipesPage({ searchParams }: { searchParams: SearchParams }) {
  const { recipes, error } = await getRecipes(searchParams);

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">Recipes</h1>
      {recipes.length === 0 ? (
        <div className="text-center text-xl text-gray-500">Recipes not found</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe: Recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
              <div className="border p-4 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-48 w-full object-cover rounded-lg mb-4"
                  width={312}
                  height={231}
                  priority
                />
                <p className="mt-2 text-xl font-semibold">{recipe.title}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function RecipesPageWithSuspense(props: { searchParams: SearchParams }) {
  return (
    <Suspense fallback={<div className="text-center font-bold text-xl">Loading...</div>}>
      <RecipesPage {...props} />
    </Suspense>
  );
}
