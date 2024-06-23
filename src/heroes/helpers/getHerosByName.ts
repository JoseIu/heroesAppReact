import { heroes } from '../data/heroes';

export const getHerosByName = (name: string) => {
  if (!name) return [];
  const searchNormalized = name.toLowerCase();

  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(searchNormalized));
};
