import {  ReviewType } from '../../types/types';
import dayjs from 'dayjs';

type ReviewTabTabProps = {
  reviews: ReviewType[];
}

function ReviewTab({reviews}: ReviewTabTabProps):JSX.Element {
  const reviewsFirstColumn = reviews.slice(0, (reviews.length/2+1));
  const reviewsSecondColumn = reviews.slice((reviews.length/2+1), reviews.length );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviewsFirstColumn.map((review) =>(
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">
                {review.comment}
              </p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2015-11-18">{dayjs(review.date).format('MMMM DD, YYYY')}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
      <div className="film-card__reviews-col">
        {reviewsSecondColumn.map((review) =>(
          <div className="review" key={review.id}>
            <blockquote className="review__quote">
              <p className="review__text">
                {review.comment}
              </p>
              <footer className="review__details">
                <cite className="review__author">{review.user.name}</cite>
                <time className="review__date" dateTime="2015-11-18">{dayjs(review.date).format('MMMM DD, YYYY')}</time>
              </footer>
            </blockquote>
            <div className="review__rating">{review.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewTab;
