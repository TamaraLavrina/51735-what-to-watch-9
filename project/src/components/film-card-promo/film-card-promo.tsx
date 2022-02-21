import { PromoCardType } from '../../mocks/mocks';
import FilmButtons from '../film-buttons/film-buttons';

type FilmCardPromoProps = {
  className?: string;
  Promofilm: PromoCardType,
}

function FilmCardPromo({Promofilm, className=''}: FilmCardPromoProps): JSX.Element {
  const {image, name, genre, year} = Promofilm;
  return (
    <div className={`film-card__wrap ${className}`}>
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={`img/${image}`} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{year}</span>
          </p>

          <FilmButtons />

        </div>
      </div>
    </div>);
}

export default FilmCardPromo;
