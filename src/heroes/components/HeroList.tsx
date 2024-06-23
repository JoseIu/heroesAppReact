import { useMemo } from 'react';
import { getHeroresByPublisher } from '../helpers/getHeroresByPublisher';
import { Publisher } from '../interfaces/Hero.interface';
import { HeroCard } from './HeroCard';

type HeroListProps = {
  publisher: Publisher;
};
export const HeroList = ({ publisher }: HeroListProps) => {
  const heroes = useMemo(() => getHeroresByPublisher(publisher), [publisher]);
  return (
    <div className="heroes">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};
