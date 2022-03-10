import { PromoCardType } from  '../../mocks/mocks';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: PromoCardType,
  isActive: boolean,
  onCardHover: (id: number | null) => void,
};

function SmallFilmCard({ film, isActive, onCardHover: onHover }: SmallFilmCardProps): JSX.Element{
  let playTimer: NodeJS.Timeout;

  return (
    <article
      onMouseEnter={
        () => {
          playTimer = setTimeout(() => {
            onHover(film.id);
          }, 1000);
        }
      }
      onMouseLeave={
        () => {
          clearTimeout(playTimer);
          onHover(0);
        }
      }
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer
          film={film}
          isPlaying={isActive}
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
