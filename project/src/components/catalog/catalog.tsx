import GenresList from '../genre-list/genre-list';
import { useAppSelector } from '../../hooks/';
import SmallFilmCard from '../small-film-card/small-film-card';
import ShowMoreButton from '../show-more-button/show-more-button';


function Catalog(): JSX.Element {
  const filmsState = useAppSelector((state) => state.films);
  const activeGenreState = useAppSelector((state) => state.activeGenre);
  const shownFilmsState = useAppSelector((state) => state.quantityFilms);

  const sortedFilms =
    activeGenreState === 'All genres'
      ? filmsState
      : filmsState.filter((film) => film.genre === activeGenreState);

  const sortedShownFilms =
    shownFilmsState > sortedFilms.length
      ? sortedFilms
      : sortedFilms.slice(0, shownFilmsState);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <div className="catalog__films-list">
        {sortedShownFilms.map((film) => (
          <SmallFilmCard  key={film.id}  film={film} />
        ))}
      </div>

      {!(shownFilmsState >= sortedFilms.length) && <ShowMoreButton/>}
    </section>);
}

export default Catalog;
