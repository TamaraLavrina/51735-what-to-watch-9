import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeGenre } from '../../store/user/user';
import { DEFAULT_ACTIVE_GENRE, GENRES_MAX_COUNT } from '../../const/const';
import cn from 'classnames';
import { CardType } from '../../types/types';
import { getActiveGenres } from '../../store/user/selectors';
import { getFilms } from '../../store/films/selectors';

const getGenresList = (movies:CardType[]) => {
  const moviesGenres = Array.from(new Set(movies.map((movie) => movie.genre)));
  const genresList =  [DEFAULT_ACTIVE_GENRE, ...moviesGenres].slice(0, GENRES_MAX_COUNT);
  return genresList;
};

function GenresList(): JSX.Element {
  const films = useAppSelector(getFilms);
  const genres: string[] = getGenresList(films);
  const activeGenre = useAppSelector(getActiveGenres);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">

      {genres.map((genre) => (
        <li
          className={cn('catalog__genres-item', {
            'catalog__genres-item--active': activeGenre === genre,
          })}
          key={genre}
        >
          <a href="/#" className="catalog__genres-link"
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(changeGenre(genre));
            }}
          >
            {genre}
          </a>
        </li>
      ))}

    </ul>
  );
}

export default GenresList;
