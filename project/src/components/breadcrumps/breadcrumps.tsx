import { Link } from 'react-router-dom';
import { PromoCardType } from '../../types/types';


type BreadcrumbsProps ={
  currentFilm: PromoCardType,
}

function Breadcrumbs({currentFilm}:BreadcrumbsProps): JSX.Element {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/films/${currentFilm.id}/`} className="breadcrumbs__link">{currentFilm.title}</Link>
        </li>

        <li className="breadcrumbs__item">
          <Link className="breadcrumbs__link" to={`/films/${currentFilm.id}/review`}>Add review</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
