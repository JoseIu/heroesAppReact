import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  return (
    <section className="wrapper">
      <h2>DC Heroes</h2>

      <HeroList publisher="DC Comics" />
    </section>
  );
};
