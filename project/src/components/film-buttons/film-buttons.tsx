import { Link } from 'react-router-dom';
import { PromoCardType } from '../../mocks/mocks';

type FilmButtonsProps ={
  currentFilm: PromoCardType,
}

function FilmButtons({currentFilm}: FilmButtonsProps): JSX.Element {
  return (
    <div className="film-card__buttons">
      {/* <button className="btn btn--play film-card__button" type="button"
        onClick={() => navigate(AppRoute.Player)}
      > */}
      <Link  className="btn btn--play film-card__button" to={`/player/${currentFilm.id}`}>
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </Link>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
      <Link  className="btn film-card__button" to={`/films/${currentFilm.id}/review`}>Add review</Link>
    </div>
  );
}

export default FilmButtons;
