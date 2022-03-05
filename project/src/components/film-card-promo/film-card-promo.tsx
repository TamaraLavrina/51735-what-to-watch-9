import { PromoCardType } from '../../mocks/mocks';
import FilmButtons from '../film-buttons/film-buttons';

type FilmCardPromoProps = {
  className?: string;
  promofilm: PromoCardType,
}

function FilmCardPromo({promofilm: Promofilm, className=''}: FilmCardPromoProps): JSX.Element {
  const {poster, title, genre, releaseDate} = Promofilm;
  return (
    <div className={`film-card__wrap ${className}`}>
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={poster} alt={title} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{title}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{releaseDate}</span>
          </p>

          <FilmButtons currentFilm={Promofilm} />

        </div>
      </div>
    </div>);
}

export default FilmCardPromo;
