import { HeroList } from '../components/HeroList';

export const MarvelPage = () => {
  return (
    <section className="wrapper">
      <h1>Marverl Heroes</h1>

      <HeroList publisher="Marvel Comics" />
    </section>
  );
};
