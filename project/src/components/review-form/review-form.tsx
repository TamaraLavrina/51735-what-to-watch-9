import { ChangeEvent, Fragment, useState } from 'react';
import { MAX_SCORE } from '../../const/const';

function ReviewForm() :JSX.Element {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState<number>(0);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const ratingStars = new Array(MAX_SCORE)
    .fill(null)
    .map((value, index) => (index + 1))
    .reverse();

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">

          {ratingStars.map((value) => (
            <Fragment key={value}>
              <input className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked ={rating === value}
                onChange ={handleRatingChange}
              />
              <label
                className="rating__label"
                htmlFor={`star-${value}`}
              > Rating {`star-${value}`}
              </label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={comment}
          onChange={handleCommentChange}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
