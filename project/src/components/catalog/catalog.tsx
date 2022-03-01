import GenresList from '../genre-list/genre-list';
import SmallFilmCard from '../small-film-card/small-film-card';
// import {filmsList} from '../../mocks/mocks';
import ShowMoreButton from '../show-more-button/show-more-button';
import { PromoCardType } from '../../mocks/mocks';

type CatalogProps = {
  filmsList: PromoCardType[],
};

function Catalog({filmsList}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <div className="catalog__films-list">
        {filmsList.map((film) => (
          <SmallFilmCard
            key={film.id}
            film={film}
          />
        ))}
      </div>

      <ShowMoreButton />
    </section>);
}

export default Catalog;
