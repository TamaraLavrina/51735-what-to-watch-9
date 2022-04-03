import { ChangeEvent, Fragment, useState } from 'react';
import { FormEvent } from 'react';
import { store } from '../../store';
import { MAX_SCORE } from '../../const/const';
import { CardType } from '../../types/types';
import { postNewComment } from '../../store/api-actions';


type ReviewFormProps = {
  film: CardType,
}

function ReviewForm({film} :ReviewFormProps) :JSX.Element {

  const [commentState, setCommentState] = useState('');
  const [ratingState, setRatingState] = useState<number>(0);

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
    const id = film.id;
    const comment = {
      comment: commentState,
      rating: ratingState,
    };
    store.dispatch(postNewComment({id, comment}));
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

      <div className="add-review__text"
        style={{backgroundColor: film.backgroundColor}}
      >
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={commentState}
          onChange={handleCommentChange}
          minLength={50}
          maxLength={400}
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
