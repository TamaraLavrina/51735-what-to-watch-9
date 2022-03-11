import GenresList from '../genre-list/genre-list';
import SmallFilmCard from '../small-film-card/small-film-card';
import ShowMoreButton from '../show-more-button/show-more-button';
import { CardType } from '../../mocks/mocks';

type CatalogProps = {
  filmsList: CardType[],
};

function Catalog({filmsList}: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <div className="catalog__films-list">
        {filmsList.map((film) => (
          <SmallFilmCard  key={film.id}  film={film} />
        ))}
      </div>

      <ShowMoreButton />
    </section>);
}

export default Catalog;
