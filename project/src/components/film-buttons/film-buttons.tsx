import { Link } from 'react-router-dom';
import { CardType } from '../../types/types';
import { useAppSelector } from '../../hooks';

type FilmButtonsProps ={
  currentFilm: CardType,
}

function FilmButtons({currentFilm}: FilmButtonsProps): JSX.Element {
  const {authorizationStatus} = useAppSelector((state) => state);

  return (
    <div className="film-card__buttons">
      <Link  className="btn btn--play film-card__button" to={`/player/${currentFilm.id}`}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      {authorizationStatus === 'AUTH' && (
        <>
          <button className="btn btn--list film-card__button" type="button">
            <svg viewBox="0 0 18 14" width="18" height="14">
              <use xlinkHref="#in-list"></use>
            </svg>
            <span>My list</span>
          </button>
          <Link className="btn film-card__button" to={`/films/${currentFilm.id}/review`}>Add review</Link>
        </>
      )}
    </div>
  );
}

export default FilmButtons;
