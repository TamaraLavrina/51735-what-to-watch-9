import GenresList from '../genre-list/genre-list';
import { useAppSelector } from '../../hooks/';
import SmallFilmCard from '../small-film-card/small-film-card';
import ShowMoreButton from '../show-more-button/show-more-button';
import { DEFAULT_ACTIVE_GENRE } from '../../const/const';
import { getActiveGenres, getShownFilmsCount } from '../../store/user/selectors';
import { getFilms } from '../../store/films/selectors';

function Catalog(): JSX.Element {
  const films = useAppSelector(getFilms);
  const activeGenre = useAppSelector(getActiveGenres);
  const shownFilms = useAppSelector(getShownFilmsCount);

  const filteredFilms =
    activeGenre === DEFAULT_ACTIVE_GENRE
      ? films
      : films.filter((film) => film.genre === activeGenre);

  const filteredShownFilms =
    shownFilms > filteredFilms.length
      ? filteredFilms
      : filteredFilms.slice(0, shownFilms);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <GenresList />
      <div className="catalog__films-list">
        {filteredShownFilms.map((film) => (
          <SmallFilmCard key={film.id} film={film} />
        ))}
      </div>

      {(shownFilms < filteredFilms.length) && <ShowMoreButton />}
    </section>
  );
}

export default Catalog;
