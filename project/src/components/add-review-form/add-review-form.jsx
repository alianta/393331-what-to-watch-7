import React, {useState} from 'react';
import PropTypes from 'prop-types';
import filmProp from '../film/filmProp';
import {COMMENT_MIN_LENGTH, COMMENT_MAX_LENGTH} from '../../const';

const RATING_STAR_COUNT = 10;
function getSubmitButtonStatus (ratingCount, reviewLength){
  if(ratingCount>0 && reviewLength>=COMMENT_MIN_LENGTH && reviewLength <= COMMENT_MAX_LENGTH) {
    return false;
  } else {
    return true;
  }
}

function AddReviewForm (props) {
  const {onReview, film} = props;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitButtonDisabled, setSubmitButtonDisabled] = useState(true);

  return (
    <form
      className="add-review__form"
      onSubmit={(evt) => {
        evt.preventDefault();
        if(!isSubmitButtonDisabled){
          onReview(rating, review);
        }
      }}
    >
      <div className="rating">
        <div className="rating__stars">
          {
            Array.from({length: RATING_STAR_COUNT}).map((value, id) => {
              const keyValue = `${film.id}-${id}`;
              const currentId = RATING_STAR_COUNT-id;
              return (
                <React.Fragment key={keyValue}>
                  <input
                    className="rating__input"
                    id={`star-${currentId}`}
                    type="radio"
                    name="rating"
                    value={`${currentId}`}
                    onChange={({target}) => {
                      setRating(target.value);
                      setSubmitButtonDisabled(getSubmitButtonStatus(target.value, review.length));
                    }}
                  />
                  <label className="rating__label" htmlFor={`star-${currentId}`}>Rating ${currentId}</label>
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
          onChange={(element) => {
            setReview(element.target.value);
            setSubmitButtonDisabled(getSubmitButtonStatus(rating, element.target.value.length));
          }}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={isSubmitButtonDisabled}>Post</button>
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
