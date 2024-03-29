import { DELAY } from '../../const/const';
import { CardType } from '../../types/types';
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type SmallFilmCardProps = {
  film: CardType;
};

function SmallFilmCard({ film }: SmallFilmCardProps): JSX.Element {
  const [isActive, setActive] = useState(false);
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  useEffect(() => () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
      setActive(false);
    }
  },
  [timerId],
  );

  const handlePlay = () => {
    timerId.current = setTimeout(() => {
      setActive(true);
    }, DELAY);
  };

  const handleStop = () => {
    if (timerId.current) {
      clearTimeout(timerId.current);
      setActive(false);
    }
  };

  return (
    <article
      onMouseEnter={handlePlay}
      onMouseLeave={handleStop}
      onClick={() => navigate(`/films/${film.id}`)}
      className="small-film-card catalog__films-card"
    >
      <div className="small-film-card__image">
        <VideoPlayer film={film} isPlaying={isActive} />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
export default SmallFilmCard;
