import { Link } from 'react-router-dom';
import { Hero } from '../interfaces/Hero.interface';

type HeroCardProps = { hero: Hero };

export const HeroCard = ({ hero }: HeroCardProps) => {
  return (
    <article className="hero">
      <Link className="hero__images" to={`/hero/${hero.id}`}>
        <img className="hero__image" src={`/heroes/${hero.id}.jpg`} alt={hero.superhero} />
        <img className="hero__hero" src={`/heroes/${hero.id}-hero.png`} alt={hero.superhero} />
      </Link>

      <div>
        <h2 className="hero__title">{hero.superhero}</h2>
        <span className="hero__subtitle">{hero.first_appearance}</span>
      </div>
    </article>
  );
};
