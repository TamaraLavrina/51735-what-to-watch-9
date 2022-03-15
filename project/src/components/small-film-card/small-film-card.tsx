import { DELAY, CardType } from '../../mocks/mocks';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: CardType;
};

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const [isActive, setActive] = useState(false);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
      setActive(false);
    }
  }, [timerId]);

  return (
    <article
      onMouseEnter={() => {
        timerId.current = setTimeout(() => {
          setActive(true);
        }, DELAY);
      }}
      onMouseLeave={() => {
        if (timerId.current) {
          clearTimeout(timerId.current);
          setActive(false);
        }
      }}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} isPlaying={isActive} />
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
