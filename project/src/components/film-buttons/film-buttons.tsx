import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ErrorLoader from '../loader/error-loader';
import { CardType } from '../../types/types';
import { changeIsFavoriteStatusAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user/selectors';

type FilmButtonsProps = {
  currentFilm: CardType;
};

function FilmButtons({ currentFilm }: FilmButtonsProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const isAuth = authorizationStatus === 'AUTH';

  if (!currentFilm) {
    return <ErrorLoader />;
  }

  const isFavorite = currentFilm.isFavorite;

  const changeIsFavoriteStatus = (status: number) => {
    if (currentFilm.id) {
      const data = {
        filmId: currentFilm.id,
        status: status,
      };
      dispatch(changeIsFavoriteStatusAction(data));
    }
  };

  return (
    <div className="film-card__buttons">
      <Link
        className="btn btn--play film-card__button"
        to={`/player/${currentFilm.id}`}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {isAuth && (
        <>
          <button
            className="btn btn--list film-card__button"
            type="button"
            onClick={() => changeIsFavoriteStatus(Number(!isFavorite))}
          >
            {isFavorite ?(
              <svg viewBox="0 0 18 14" width="18" height="14">
                <use xlinkHref="#in-list"></use>
              </svg>):
              (
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
              )}
            <span>My list</span>
          </button>

          <Link
            className="btn film-card__button"
            to={`/films/${currentFilm.id}/review`}
          >
            Add review
          </Link>
        </>
      )}
    </div>
  );
}

export default FilmButtons;
