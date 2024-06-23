import { heroes } from '../data/heroes';
import { Publisher } from '../interfaces/Hero.interface';

export const getHeroresByPublisher = (publisher: Publisher) => {
  return heroes.filter((hero) => hero.publisher === publisher);
};
