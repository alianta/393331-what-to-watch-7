import React from 'react';
import PropTypes from 'prop-types';

function ShowMoreButton(props) {
  const {allFilmLCount, showFilmCount, addShowFilms} = props;

  if (allFilmLCount>showFilmCount) {
    return (
      <div className="catalog__more" onClick={
        () => addShowFilms()
      }
      >
        <button className="catalog__button" type="button">Show more</button>
      </div>
    );
  }else {
    return '';
  }
}

ShowMoreButton.propTypes = {
  addShowFilms: PropTypes.func.isRequired,
  allFilmLCount: PropTypes.number.isRequired,
  showFilmCount: PropTypes.number.isRequired,
};

export default ShowMoreButton;
