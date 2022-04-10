import { ChangeEvent, Fragment, useState, FormEvent } from 'react';
import { useParams} from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MAX_SCORE, MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH } from '../../const/const';
import { postNewComment } from '../../store/api-actions';
import { getIsReviewPosted } from '../../store/reviews/selectors';


function ReviewForm() :JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [commentState, setCommentState] = useState('');
  const [ratingState, setRatingState] = useState<number>(0);
  const isReviewPosted = useAppSelector(getIsReviewPosted);

  const handleCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentState(evt.target.value);
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRatingState(Number(evt.target.value));
  };

  const ratingStars = new Array(MAX_SCORE)
    .fill(null)
    .map((value, index) => (index + 1))
    .reverse();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const filmId = Number(id);
    const comment = {
      comment: commentState,
      rating: ratingState,
    };
    dispatch(postNewComment({filmId, comment}));
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">

          {ratingStars.map((value) => (
            <Fragment key={value}>
              <input className="rating__input"
                id={`star-${value}`}
                type="radio"
                name="rating"
                value={value}
                checked ={ratingState === value}
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
          placeholder="be sure to put a rating. The text of the review must be at least 50 and no more than 400 letters"
          value={commentState}
          onChange={handleCommentChange}
          minLength={MIN_REVIEW_LENGTH}
          maxLength={MAX_REVIEW_LENGTH}
        >
        </textarea>
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            disabled={
              ratingState === 0 ||
              commentState.length < MIN_REVIEW_LENGTH ||
              commentState.length > MAX_REVIEW_LENGTH ||
              isReviewPosted
            }
          >Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
