import {  CardType } from  '../../mocks/mocks';
import { Navigate } from 'react-router-dom';


type OverviewTabProps = {
  movie: CardType;
}

function OverviewTab({movie}: OverviewTabProps):JSX.Element {

  if (!movie) {
    return <Navigate to="/" />;
  }

  return(
    <>
      <div className="film-rating">
        <div className="film-rating__score">8,9</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          <span className="film-rating__count">{movie.scores} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {movie.description}
        <p className="film-card__director"><strong>Director: {movie.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {movie.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default OverviewTab;
