import React from 'react';
import reviewProp from './reviewProp';
import dayjs from 'dayjs';

function Review(props) {
  const {review} = props;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.text}</p>
        <footer className="review__details">
          <cite className="review__author">{review.author}</cite>
          <time className="review__date" dateTime={dayjs(review.date).format('YYYY-MM-DD')}>{dayjs(review.date).format('MMMM DD, YYYY')}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{review.ratingScore}</div>
    </div>
  );
}

Review.propTypes = {
  review: reviewProp,
};

export default Review;
