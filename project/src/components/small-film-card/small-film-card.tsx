import { PromoCardType } from  '../../mocks/mocks';
import { Link } from 'react-router-dom';

type SmallFilmCardProps = {
  film: PromoCardType,
  isActive: boolean,
  onCardHover: (id: number | null) => void,
};

function SmallFilmCard({ film, isActive, onCardHover: onHover }: SmallFilmCardProps): JSX.Element{
  return (
    <article className="small-film-card catalog__films-card"
      onMouseEnter={() => onHover(film.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="small-film-card__image">
        <img
          src={film.previewImg}
          alt={film.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.title}
        </Link>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
