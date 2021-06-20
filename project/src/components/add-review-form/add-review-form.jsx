import React, {useState} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';

const RATING_STAR_COUNT = 10;

function AddReviewForm (props) {
  const {onReview, film} = props;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  let ratingStarId = 0;

  return (
    <form
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        onReview(rating, review);
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from({length: RATING_STAR_COUNT}).map(() => {
              const keyValue = `${film.id}-${ratingStarId}`;
              ratingStarId++;
              return (
                <React.Fragment key={keyValue}>
                  <input
                    className="rating__input"
                    id={`star-${ratingStarId}`}
                    type="radio"
                    name="rating"
                    value={`${ratingStarId}`}
                    checked={rating >= ratingStarId}
                    onChange={({target}) => {
                      setRating(ratingStarId);
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${ratingStarId}`}>Rating ${ratingStarId}</label>
                </React.Fragment>
              );
            })
          }

        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(target) => {
            setReview(target.value);}}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

AddReviewForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  onReview: PropTypes.func.isRequired,
  film: filmProp,
};

export default AddReviewForm;
