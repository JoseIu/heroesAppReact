import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';
import './HeroPage.scss';

export const HeroPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const hero = getHeroById(id!);
  const onBack = () => {
    navigate(-1);
  };
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  return (
    <section className="wrapper">
      <button className="btn" onClick={onBack}>
        Back
      </button>
      <div className="hero-details">
        <img className="hero-details__image" src={`/heroes/${id}.jpg`} alt={hero.superhero} />

        <div className="hero-details__content">
          <h2 className="hero-details__title">{hero.superhero} description</h2>
          <span>Publisher:{hero.publisher}</span>
          <span>Aler ego: {hero.alter_ego}</span>
          <span>First appearance: {hero.first_appearance}</span>
          <span>Characters: {hero.characters}</span>
        </div>
      </div>
    </section>
  );
};
