import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import { Link } from 'react-router-dom';

function FilmButtons():JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="film-card__buttons">
      <button className="btn btn--play film-card__button" type="button"
        onClick={() => navigate(AppRoute.Player)}
      >
        <svg viewBox="0 0 19 19" width="19" height="19">
          <use xlinkHref="#play-s"></use>
        </svg>
        <span>Play</span>
      </button>
      <button className="btn btn--list film-card__button" type="button">
        <svg viewBox="0 0 18 14" width="18" height="14">
          <use xlinkHref="#in-list"></use>
        </svg>
        <span>My list</span>
      </button>
      <Link to={AppRoute.AddReview} className="btn film-card__button">Add review</Link>
    </div>
  );
}

export default FilmButtons;
