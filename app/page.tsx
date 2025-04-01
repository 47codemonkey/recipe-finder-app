'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { cuisines } from '@/data/cuisines';

export default function SearchPage() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const [cuisine, setCuisine] = useState<string>('');
  const [maxTime, setMaxTime] = useState<string>('');

  const isButtonDisabled = !query || !cuisine || !maxTime;

  const handleSearch = () => {
    if (query && cuisine && maxTime) {
      router.push(`/recipes?query=${query}&cuisine=${cuisine}&maxReadyTime=${maxTime}`);
    }
  };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleMaxTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxTime(e.target.value);
  };

  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCuisine(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-semibold mb-6">Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search for a recipe..."
        className="border p-4 mb-4 w-80 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500"
        value={query}
        onChange={handleQueryChange}
      />

      <select
        className="border p-4 mb-4 w-80 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500"
        value={cuisine}
        onChange={handleCuisineChange}
      >
        <option value="">Select Cuisine</option>
        {cuisines.map((cuisineOption) => (
          <option key={cuisineOption} value={cuisineOption}>
            {cuisineOption}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Max preparation time (minutes)"
        className="border p-4 mb-6 w-80 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500"
        value={maxTime}
        onChange={handleMaxTimeChange}
      />

      <button
        className={`p-4 bg-blue-500 text-white rounded-lg ${
          isButtonDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
        disabled={isButtonDisabled}
        onClick={handleSearch}
      >
        Next
      </button>
    </div>
  );
}
