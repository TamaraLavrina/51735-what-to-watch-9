import { Link /*useLocation*/ } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function CardNav():JSX.Element {
  const { id } = useParams();
  // const { pathname } = useLocation();
  return(
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item film-nav__item--active">
          <Link
            to={`${AppRoute.Movie}/${id}/overview`}
            className="film-nav__link"
          >
            Overview
          </Link>
        </li>
        <li className="film-nav__item ">
          <Link
            to={`${AppRoute.Movie}/${id}/overview`}
            className={'film-nav__link'}
          >
            Details
          </Link>
        </li>
        <li className="film-nav__item">
          <Link
            to={`${AppRoute.Movie}/${id}/reviews`}
            className="film-nav__link"
          >Reviews
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default CardNav;
