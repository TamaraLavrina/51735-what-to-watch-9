import { PromoCardType } from  '../../mocks/mocks';

type SmallFilmCardProps = {
  film: PromoCardType,
};

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element{
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={film.previewImg}
          alt={film.title}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
