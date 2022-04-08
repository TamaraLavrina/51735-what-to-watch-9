import { CardType } from '../../types/types';

type DetailsTabProps = {
  movie: CardType;
};

const getRunTimeFormatted = (runTime: number) => {
  const hours = Math.trunc(runTime / 60);
  const minutes = runTime - hours * 60;
  if (hours === 0) {
    return `${minutes}m`;
  }
  else if (minutes === 0) {
    return `${hours}h`;
  }
  return `${hours}h ${minutes}m`;
};

function DetailsTab({ movie }: DetailsTabProps): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{movie.director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">
            {movie.starring.join( '\n')}
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{getRunTimeFormatted(movie.runTime)}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{movie.genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{movie.released}</span>
        </p>
      </div>
    </div>
  );
}

export default DetailsTab;
