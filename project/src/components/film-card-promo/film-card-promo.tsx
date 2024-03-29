import { useNavigate } from 'react-router-dom';
import { CardType } from '../../types/types';
import FilmButtons from '../film-buttons/film-buttons';


type FilmCardPromoProps = {
  className?: string;
  promoFilm: CardType,
}

function FilmCardPromo({promoFilm, className=''}: FilmCardPromoProps): JSX.Element {
  const navigate = useNavigate();

  const {posterImage, name, genre, released, id} = promoFilm;
  return (
    <div className={`film-card__wrap ${className}`}>
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title" onClick={() => navigate(`/films/${id}`)}>
            {name}
          </h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <FilmButtons currentFilm={promoFilm} />

        </div>
      </div>
    </div>);
}

export default FilmCardPromo;
