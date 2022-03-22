import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { changeGenre } from '../../store/action';
import { DEFAULT_ACTIVE_GENRE } from '../../const/const';
import cn from 'classnames';


function GenresList(): JSX.Element {
  const filmsState = useAppSelector((state) => state.films);
  const filmsGenres = Array.from(new Set(filmsState.map((film) => film.genre)));
  filmsGenres.push(DEFAULT_ACTIVE_GENRE);
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">

      {filmsGenres
        .reverse()
        .map((genre) => (
          <li
            className={cn('catalog__genres-item', {
              'catalog__genres-item--active': activeGenre === genre,
            })}
            key={genre}
          >
            <a href="/#" className="catalog__genres-link"
              onClick={() => {
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
