import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components/HeroCard';
import { getHerosByName } from '../helpers/getHerosByName';
import './SearchPage.scss';
type SearchForm = {
  search: string;
};

export const SearchPage = () => {
  const navigate = useNavigate();
  const locations = useLocation();
  const { q = '' } = queryString.parse(locations.search);

  const result = useMemo(() => getHerosByName(q as string), [q]);
  const showResult = q!.length === 0;
  const showError = q!.length > 0 && result.length === 0;

  const { formState, onInputChange } = useForm<SearchForm>({ search: q as string });

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    if (formState.search.trim() === '') return;
    navigate(`?q=${formState.search}`);
  };

  return (
    <section className="search wrapper">
      <h2 className="search__title">Search a Hero</h2>

      <form className="search__form" onSubmit={onSearch}>
        <input
          className="search__input"
          type="text"
          placeholder="hero name..."
          name="search"
          value={formState.search}
          onChange={onInputChange}
        />

        <button className="search__btn" type="submit">
          Search
        </button>
      </form>

      <div className="search__result">
        <h3>Results to {q}</h3>

        <p className={`search__message ${showResult ? '' : 'search__message--none'}`}>Search a hero</p>
        <p className={`search__message ${showError ? '' : 'search__message--none'}`}>Hero not found</p>

        <div className="heroes">
          {result.map((hero) => (
            <HeroCard key={hero.id} hero={hero} />
          ))}
        </div>
      </div>
    </section>
  );
};
