import { CardType }  from '../../types/types';

type OverviewTabProps = {
  movie: CardType;
};

function getTextRating(raiting: number) {
  if (0 <= raiting && raiting < 3) {
    return 'Bad';
  }
  if (3 <= raiting && raiting < 5) {
    return 'Normal';
  }
  if (5 <= raiting && raiting < 8) {
    return 'Good';
  }
  if (8 <= raiting && raiting < 10) {
    return 'Very good';
  }
  if (raiting === 10) {
    return 'Awesome';
  }
}

function OverviewTab({ movie }: OverviewTabProps): JSX.Element {
  const { rating, scoresCount, director, description, starring } = movie;
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        {description}
        <p className="film-card__director">
          <strong>Director: {director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
}

export default OverviewTab;
