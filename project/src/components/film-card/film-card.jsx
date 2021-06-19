import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FilmCard(props) {
  window.scrollTo(0, 0);
  const {filmId, filmName, previewImage} = props;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={previewImage} alt={filmName} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={''.concat('/film/',filmId)}>{filmName}</Link>
      </h3>
    </article>
  );
}

FilmCard.propTypes = {
  filmId: PropTypes.number.isRequired,
  filmName: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
};

export default FilmCard;
