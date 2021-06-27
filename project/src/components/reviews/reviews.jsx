import React from 'react';
import PropTypes from 'prop-types';
import Review from '../review/review';
import reviewProp from '../review/reviewProp';

function Reviews(props) {
  const {filmReviews} = props;
  const filmReviewsLeft = filmReviews.slice(0,filmReviews.length/2+1);
  const filmReviewsRigth = filmReviews.slice(filmReviews.length/2+1, filmReviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {filmReviewsLeft.map((review, id) => {
          const keyIndex = id + review.date;
          return (
            <Review key={keyIndex} review={review}/>
          );})}
      </div>
      <div className="film-card__reviews-col">
        {filmReviewsRigth.map((review, id) => {
          const keyIndex = id + review.date;
          return (
            <Review key={keyIndex} review={review}/>
          );})}
      </div>
    </div>
  );
}


Reviews.propTypes = {
  filmReviews: PropTypes.arrayOf(reviewProp),
};

export default Reviews;
