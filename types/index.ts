export type Ingredient = {
  id: number;
  original: string;
};

export type Recipe = {
  id: number;
  title: string;
  image: string;
  extendedIngredients: Ingredient[];
};

export type SearchParams = {
  query?: string;
  cuisine?: string;
  maxReadyTime?: string;
};
